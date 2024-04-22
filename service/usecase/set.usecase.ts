import { LinePush } from "../api/app.api";
import { SetGame, SetTeam, SetUser } from "../repository/set.repository";
import { Status, User } from "../types/app.type";
import { GetGameFindOneByTeam, GetGameFindOneByTreasureId, GetGameFindOneByUserId, GetTeamFindOneByTeamId, GetUserFindOneByUserId, GetUsersFindByTeamId } from "../repository/get.repository";
import { hint, chat, play } from "./play.usecase";
import { TeamBuilding, TeamJoining } from "../types/api.type";
import { randomUUID } from "crypto";
import { gameAction } from "../helper/util";

export const WebhookService = async (userId: string, message: string) => {
  const game = await GetGameFindOneByUserId(userId);
  const user = await GetUserFindOneByUserId(userId);
  console.log(user);

  if (message == "プレイする" && user.teamId) {
    const teamId = user.teamId;
    await play(teamId);
  }
  if (!game) return;
  switch (game.status) {
    case Status.PREPARE:
      hint(userId, message, game);
      break;
    case Status.CHAT:
      chat(message, game, user);
      break;
  }

};

export const SchedulerService = async (delays: number[]) => {
  console.log("スタート");
  await Promise.all(
    delays.map(
      (delay) =>
        new Promise((resolve) =>
          setTimeout(async () => {
            console.log("時間だよ");
            resolve("done");
          }, delay * 1000)
        )
    )
  );
  console.log("終わり");
};


export const CreateUserService = async (user: User) => {
  await SetUser(user);
};
export const TeamBuildingService = async (data: TeamBuilding) => {
  const teamId = randomUUID();
  await SetUser({
    userId: data.userId,
    name: data.userName,
    teamId,
  });
  await SetTeam({
    teamId,
    hostId: data.userId,
    name: data.teamName,
    playerCount: data.playerCount,
    ownerCount: data.ownerCount,
    treasureCount: data.treasureCount,
    keyword: data.keyword,
  });

  LinePush(data.userId, [
    {
      type: "text",
      text: "チームが作成されました",
    },
    {
      type: "text",
      text: "チーム名: " + data.teamName,
    },
  ]);
};

export const TeamJoiningService = async (data: TeamJoining) => {
  const teamLength = await (await GetUsersFindByTeamId(data.teamId)).length + 1;
  const team = await GetTeamFindOneByTeamId(data.teamId);
  if (teamLength > team.playerCount) {
    throw new Error("チームが満員です");
  }
  const user: any = await SetUser({
    userId: data.userId,
    name: data.userName,
    teamId: data.teamId,
  });
  if (user.upsertedCount == 0) {
    await LinePush(data.userId, [
      {
        type: "text",
        text: "すでにチームに参加しています",
      },
    ]);
    return;
  }

  await LinePush(team.hostId, [
    {
      type: "text",
      text: `${data.userName}さんがチームに参加しました`,
    },
  ]);

  if (teamLength == team.playerCount) {
    await LinePush(team.hostId, [
      {
        "type": "flex",
        "altText": "this is a flex message",
        "contents": {
          "type": "bubble",
          "hero": {
            "type": "image",
            "url": "https://courrier.jp/media/2020/10/10194009/GettyImages-182710825-e1602294056127-1600x900.jpg",
            "size": "full",
            "aspectRatio": "20:13",
            "aspectMode": "cover",
            "action": {
              "type": "uri",
              "label": "Action",
              "uri": "https://linecorp.com"
            }
          },
          "body": {
            "type": "box",
            "layout": "vertical",
            "spacing": "md",
            "action": {
              "type": "uri",
              "label": "Action",
              "uri": "https://linecorp.com"
            },
            "contents": [
              {
                "type": "text",
                "text": "BoTreasure",
                "weight": "bold",
                "size": "xxl",
                "contents": []
              },
              {
                "type": "box",
                "layout": "vertical",
                "contents": [
                  {
                    "type": "text",
                    "text": "チーム",
                    "weight": "bold",
                    "size": "lg",
                    "align": "start",
                    "contents": []
                  },
                  {
                    "type": "text",
                    "text": `${team.name}`,
                    "offsetStart": "15px",
                    "contents": []
                  }
                ]
              },
              {
                "type": "separator"
              },
              {
                "type": "box",
                "layout": "vertical",
                "contents": [
                  {
                    "type": "text",
                    "text": "メンバー",
                    "weight": "bold",
                    "size": "lg",
                    "align": "start",
                    "contents": []
                  },
                  {
                    "type": "text",
                    "text": "たかし",
                    "offsetStart": "15px",
                    "contents": []
                  },
                  {
                    "type": "text",
                    "text": "太郎",
                    "offsetStart": "15px",
                    "contents": []
                  },
                  {
                    "type": "text",
                    "text": "みちたか",
                    "offsetStart": "15px",
                    "contents": []
                  },
                  {
                    "type": "text",
                    "text": "じゅんぺい",
                    "offsetStart": "15px",
                    "contents": []
                  },
                  {
                    "type": "text",
                    "text": "かよこ",
                    "offsetStart": "15px",
                    "contents": []
                  },
                  {
                    "type": "text",
                    "text": "りか",
                    "offsetStart": "15px",
                    "contents": []
                  }
                ]
              },
              {
                "type": "separator"
              },
              {
                "type": "box",
                "layout": "vertical",
                "contents": [
                  {
                    "type": "text",
                    "text": "宝の数",
                    "weight": "bold",
                    "size": "lg",
                    "align": "start",
                    "contents": []
                  },
                  {
                    "type": "text",
                    "text": `${team.treasureCount}`,
                    "offsetStart": "15px",
                    "contents": []
                  }
                ]
              },
              {
                "type": "text",
                "text": "さあはじめましょう！",
                "weight": "bold",
                "size": "sm",
                "color": "#AAAAAA",
                "align": "center",
                "wrap": true,
                "contents": []
              }
            ]
          },
          "footer": {
            "type": "box",
            "layout": "vertical",
            "contents": [
              {
                "type": "button",
                "action": {
                  "type": "message",
                  "label": "プレイする！",
                  "text": `プレイする`
                },
                "color": "#905C44",
                "style": "primary"
              }
            ]
          }
        }
      }

    ]);
    return;
  }

};



export const ScanService = async (userName: string, treasureId: string) => {
  const game = await GetGameFindOneByTreasureId(treasureId);
  game.treasures.filter((treasure) => treasure.id === treasureId)[0].isScanned = true;
  const result: any = await SetGame(game);
  if (result.modifiedCount == 0) {
    console.log("既にスキャン済み");
    return;
  }
  await gameAction(game.allUsers, async (user) => {
    await LinePush(user.userId, [
      {
        type: "text",
        text: `${userName}さんが宝を見つけました`,
      },
    ]);
  });
}
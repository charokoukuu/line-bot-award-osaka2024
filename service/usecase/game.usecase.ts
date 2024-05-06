import { gameAction } from "../helper/util";
import {
  GetOneGameByTeam,
  GetOneTeamByTeamId,
  GetUsersByTeamId,
} from "../repository/get.repository";
import { SetGame } from "../repository/set.repository";
import { LinePush, publishLoadingMessage } from "../api/app.api";
import { randomUUID } from "crypto";
import { chatMessage } from "../messages/chatMessage";
import { Game, Status, User } from "../api/generate";
import { PrintQRService } from "./print.usecase";
import { ownerMessage } from "../messages/ownerMessage";
import { seekerMessage } from "../messages/seekerMessage";
import { ScheduleService } from "./set.usecase";
import { ownerVictoryMessage } from "../messages/ownerVictoryMessage";
import { playedGameMessage } from "../messages/playedGameMessage";
import { linkRichMenuToUser } from "../helper/richmenu";
import { menuListIds } from "../config/secret.config";

export const play = async (teamId: string) => {
  console.log("game");
  const users = await GetUsersByTeamId(teamId);
  const team = await GetOneTeamByTeamId(teamId);
  const game = await GetOneGameByTeam(team);
  if (!team) throw new Error("該当するチームが存在しません");
  if (game) throw new Error("既にゲームが開始されています");

  const shuffledArray = users.sort(() => Math.random() - 0.5);
  const owners = shuffledArray.slice(0, team.ownerCount);
  const seekers = shuffledArray.slice(team.ownerCount);
  console.log(owners, seekers);
  const newGame: Game = {
    team: team,
    allUsers: users,
    owners: owners.map((owner) => ({
      userInfo: owner,
      isDisabledScan: false,
    })),
    seekers: seekers.map((seekers) => ({
      userInfo: seekers,
      myCode: randomUUID() + ":seeker",
      isArrested: false,
    })),
    hints: [],
    treasures: [...new Array(team.treasureCount)].map((_, i) => ({
      id: randomUUID() + ":treasure",
      isScanned: false,
    })),
    rescueCode: randomUUID() + ":rescue",
    status: Status.Prepare,
  }

  await gameAction(newGame.allUsers, async (user) => {
    await LinePush(user.userId, [
      playedGameMessage(),
    ]);
  })
  await gameAction(seekers, async (user) => {
    await linkRichMenuToUser(user.userId, menuListIds.seeker);
    await LinePush(user.userId, [
      seekerMessage(),
      {
        type: "text",
        text: "指示があるまで、指定された場所で待機してください",
      },
    ]);
  })
  await gameAction(owners, async (user) => {
    await linkRichMenuToUser(user.userId, menuListIds.owner);
    await LinePush(user.userId, [
      ownerMessage(),
    ]);
    await publishLoadingMessage(user.userId, 60);
  })
  await PrintQRService(team.name, newGame.treasures.map(treasure => treasure.id));
  await PrintQRService("解放用QR", [newGame.rescueCode ?? ""]);
  await SetGame(newGame);

  gameAction(owners, async (user) => {
    await LinePush(user.userId, [
      {
        "type": "text",
        "text": "宝を隠し，隠した場所のヒントとなる写真を撮影してください",
        "quickReply": {
          "items": [
            {
              "type": "action",
              "action": {
                "type": "camera",
                "label": "Camera"
              }
            }
          ]
        }
      }
    ]);
  })

};

export const hint = async (userId: string, hint: string, game: Game) => {
  game.hints.push({
    id: randomUUID(),
    content: `data:image/png;base64,${hint}`,
    isPrinted: false,
  });
  await gameAction(game.allUsers, async (user) => {
    await LinePush(user.userId, [
      {
        type: "text",
        text: `宝が隠されました${game.hints.length}/${game.team.treasureCount}`,
      },
    ]);
  })
  if (game.hints.length === game.team.treasureCount) {
    const timeLimit = game.team.timeLimit;
    await game.hints.forEach(async (hint, index) => {
      await ScheduleService(
        {
          teamId: game.team.teamId ?? "",
          users: game.allUsers,
          messages: [],
          timeAfterMinutes: (timeLimit / (game.hints.length + 1)) * (index + 1),
          hintId: hint.id,
        });
    })
    await ScheduleService(
      {
        teamId: game.team.teamId ?? "",
        users: game.allUsers,
        messages: [
          {
            type: "text",
            text: "タイムアップ！",
          },
          ownerVictoryMessage(game.owners.map((owner) => owner.userInfo.name)),
        ],
        timeAfterMinutes: timeLimit,
      });
    await gameAction(game.allUsers, async (user) => {
      await LinePush(user.userId, [
        {
          type: "text",
          text: "全ての宝が隠されました",
        }
      ]);
    })

    game.status = Status.Chat;
    await gameAction(game.seekers.map(seeker => seeker.userInfo), async (user) => {
      await LinePush(user.userId, [{
        type: "text",
        text: "時間内に全ての宝を見つけだそう！",
      }]);
    });
    await gameAction(game.owners.map(owner => owner.userInfo), async (user) => {
      await LinePush(user.userId, [{
        type: "text",
        text: "シーカーを全員捕まえよう！",
      }]);
    });


    await gameAction(game.owners.map((users) => users.userInfo), async (user) => {
      await LinePush(user.userId, [chatMessage(), {
        type: "text",
        text: "フリーワードを送るか以下からアクションを選択してください",
        "quickReply": {
          "items": [
            {
              "type": "action",
              "action": {
                "type": "camera",
                "label": "写真を撮る"
              }
            },
            {
              "type": "action",
              "action": {
                "type": "location",
                "label": "現在地を送る"
              }
            }
          ]
        }

      }]);
    });
    await gameAction(game.seekers.map((users) => users.userInfo), async (user) => {
      await LinePush(user.userId, [chatMessage(), {
        type: "text",
        text: "フリーワードを送るか以下からアクションを選択してください",
        "quickReply": {
          "items": [
            {
              "type": "action",
              "action": {
                "type": "message",
                "label": "救助",
                "text": "救助してください"
              }
            },
            {
              "type": "action",
              "action": {
                "type": "message",
                "label": "ヒントGET！",
                "text": "ヒントを手に入れました！"
              }
            },
            {
              "type": "action",
              "action": {
                "type": "camera",
                "label": "写真を撮る"
              }
            },
            {
              "type": "action",
              "action": {
                "type": "location",
                "label": "現在地を送る"
              }
            }
          ]
        }

      }]);
    });
  }
  await SetGame(game);
}

export const chat = async (message: string, game: Game, user: User) => {
  const isSeeker = game.seekers.find((seeker) => seeker.userInfo.userId === user.userId);
  const publishUsers = isSeeker ? game.seekers : game
    .owners;
  const otherUsers = publishUsers.filter((publishUser) => publishUser.userInfo.userId !== user.userId).map((publishUser) => publishUser.userInfo);


  const items = isSeeker ? [
    {
      "type": "action",
      "action": {
        "type": "message",
        "label": "救助",
        "text": "救助してください"
      }
    },
    {
      "type": "action",
      "action": {
        "type": "message",
        "label": "ヒントGET！",
        "text": "ヒントを手に入れました！"
      }
    },
    {
      "type": "action",
      "action": {
        "type": "camera",
        "label": "写真を撮る"
      }
    },
    {
      "type": "action",
      "action": {
        "type": "location",
        "label": "現在地を送る"
      }
    }
  ] : [
    {
      "type": "action",
      "action": {
        "type": "camera",
        "label": "写真を撮る"
      }
    },
    {
      "type": "action",
      "action": {
        "type": "location",
        "label": "現在地を送る"
      }
    }
  ]
  gameAction(otherUsers, async (otherUser) => {
    await LinePush(otherUser.userId, [
      {
        type: "text",
        text: `(${user.name})${message}`,
        "quickReply": {
          "items": items
        }

      },
    ]);

  })
}

import { LinePush } from "../api/app.api";
import { SetTeam, SetUser } from "../repository/set.repository";
import { Status, Team, User } from "../types/app.type";
import { GetTeamFindOneId, GetUserFindOneId, GetUsersFindTeamId } from "../repository/get.repository";
import { play } from "./play.usecase";
import { TestService } from "../test/app.test";
import { resolve } from "path";
import { TeamBuilding, TeamJoining } from "../types/api.type";
import { randomUUID } from "crypto";

export const WebhookService = async (userId: string, message: string) => {
  if (message.includes("プレイする")) {
    const teamId = message.split("\n")[1];
    await play(teamId);
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
  const teamLength = await (await GetUsersFindTeamId(data.teamId)).length + 1;
  if (teamLength > data.playerCount) {
    throw new Error("チームが満員です");
  }
  await SetUser({
    userId: data.userId,
    name: data.userName,
    teamId: data.teamId,
  });
  if (teamLength == data.playerCount) {
    await LinePush(data.hostId, [
      {
        type: "text",
        text: "ゲームを開始しますか？",
      },
    ]);
    return;
  }

};

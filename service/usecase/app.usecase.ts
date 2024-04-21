import { LinePush } from "../api/app.api";
import { SetTeam } from "../repository/set.repository";
import { Status, Team } from "../types/app.type";
import { GetTeamFindOneId } from "../repository/get.repository";
import { play } from "./play.usecase";
import { TestService } from "../test/app.test";
import { resolve } from "path";

export const WebhookService = async (userId: string, message: string) => {
  console.log("event", userId);
  switch (message) {
    case "プレイする":
      play(userId);
      break;
    case "テスト":
      TestService();
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


export const TeamBuildingService = async (team: Team) => {
  // await SetTeamInfo(teamInfo);
  // player.user.status = Status.HOST;
  // await SetTeam({
  //   teamId: teamInfo.id,
  //   info: teamInfo,
  //   players: [player],
  // });
};

export const TeamJoiningService = async (id: string) => {
  const currentTeam = await GetTeamFindOneId(id);
  const teamLength = 10;
  if (teamLength < currentTeam.playerCount) {
    const players = teamLength;
    // players.push(player);
    const newTeam = { ...currentTeam, players };
    await SetTeam(newTeam);
    return;
  }
  if (teamLength === currentTeam.playerCount) {
    await LinePush(currentTeam.teamId, [
      {
        type: "text",
        text: "ゲームを開始しますか？",
      },
    ]);
    return;
  }
  if (teamLength > currentTeam.playerCount) {
    throw new Error("チームが満員です");
  }
};

import { LinePush, LineReply } from "../api/app.api";
import { Request, Response } from "express";
import { SetTeam, SetTeamInfo } from "../repository/set.repository";
import { Player, Status, Team, TeamInfo } from "../types/app.type";
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


export const TeamBuildingService = async (teamInfo: TeamInfo, player: Player) => {
  await SetTeamInfo(teamInfo);
  player.user.status = Status.HOST;
  await SetTeam({
    id: teamInfo.id,
    info: teamInfo,
    players: [player],
  });
};

export const TeamJoiningService = async (id: string, player: Player) => {
  const currentTeam = await GetTeamFindOneId(id);
  if (currentTeam.players.length < currentTeam.info.playerCount) {
    const players = currentTeam.players;
    player.user.status = Status.GUEST;
    players.push(player);
    const newTeam = { ...currentTeam, players };
    await SetTeam(newTeam);
    return;
  }
  if (currentTeam.players.length === currentTeam.info.playerCount) {
    await LinePush(currentTeam.id, [
      {
        type: "text",
        text: "ゲームを開始しますか？",
      },
    ]);
    return;
  }
  if (currentTeam.players.length > currentTeam.info.playerCount) {
    throw new Error("チームが満員です");
  }
};

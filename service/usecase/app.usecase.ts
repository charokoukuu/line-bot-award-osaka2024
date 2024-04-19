import { LineReply } from "../api/app.api";
import { Request, Response } from "express";
import { SetTeam, SetTeamInfo } from "../repository/set.repository";
import { Player, Status, Team, TeamInfo } from "../types/app.type";
import { GetTeamFindOneId } from "../repository/get.repository";
import { play } from "./play.usecase";
import { TestService } from "../test/app.test";

export const WebhookService = async (req: Request, res: Response) => {
  const event = req.body.events[0];
  console.log("event", event.source.userId);
  if (event.type === "message") {
    switch (event.message.text) {
      case "プレイする":
        play(event.source.userId);
        break;
      case "テスト":
        TestService();
        break;
    }
  }
  res.sendStatus(200);
};

export const SchedulerService = async (req: any, res: any) => {
  const delays = [5, 10, 15];
  console.log("スタート");
  res.sendStatus(200);

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
};

export const TeamBuildingService = async (req: Request, res: Response) => {
  const teamInfo = req.body.data.teamInfo as TeamInfo;
  const player = req.body.data.team as Player;
  try {
    await SetTeamInfo(teamInfo);
    player.user.status = Status.HOST;
    await SetTeam({
      id: teamInfo.id,
      info: teamInfo,
      players: [player],
    });
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
  res.sendStatus(200);
};

export const TeamJoiningService = async (req: Request, res: Response) => {
  const id = req.query.id as string;
  const player = req.body.data as Player;
  const replyToken = req.body.events[0].replyToken;
  const userId = req.body.events[0].source.userId;
  try {
    const currentTeam = await GetTeamFindOneId(id);

    if (currentTeam.players.length < currentTeam.info.playerCount) {
      const players = currentTeam.players;
      player.user.status = Status.GUEST;
      players.push(player);
      const newTeam = { ...currentTeam, players };
      await SetTeam(newTeam);
      res.sendStatus(200);
      return;
    }
    if (currentTeam.players.length === currentTeam.info.playerCount) {
      console.log("チームが満員です");
      await LineReply(replyToken, [
        {
          type: "text",
          text: "ゲームを開始しますか？",
        },
      ]);
      res.sendStatus(200);
      return;
    }
    if (currentTeam.players.length > currentTeam.info.playerCount) {
      res.sendStatus(400);
      return;
    }
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
  res.sendStatus(200);
};

import { LinePush } from "../api/app.api";
import { Request, Response } from "express";
import { SetTeam, SetTeamInfo } from "../repository/set.repository";
import { Player, TeamInfo } from "../types/user.type";
import { createTeam } from "../domain/create.model";
import { GetTeamFindOne } from "../repository/get.repository";

export const webhook = async (req: Request, res: Response) => {
  const event = req.body.events[0];
  console.log("event");
  if (event.type === "message") {
    switch (event.message.text) {
      case "あ":
        //user取得
        const team = await GetTeamFindOne(event.source.userId);
        const shuffledArray = team.players.sort(() => Math.random() - 0.5);
        const selectedItems = shuffledArray.slice(0, team.info.ownerCount);
        selectedItems.forEach((item) => {
          item.gameType = "owner";
        });
        const remainingItems = shuffledArray.slice(team.info.ownerCount);
        remainingItems.forEach((item) => {
          item.gameType = "seeker";
        });
        const newTeam = createTeam({
          id: team.id,
          info: team.info,
          players: [...selectedItems, ...remainingItems],
        });

        console.log(newTeam.players);
        // await LinePush(reply(event.replyToken, host));
        break;
    }
  }
  res.sendStatus(200);
};

export const scheduler = async (req: any, res: any) => {
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

export const TeamBuilding = async (req: Request, res: Response) => {
  const data = req.body.data as TeamInfo;
  try {
    await SetTeamInfo(data);
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
  res.sendStatus(200);
};

export const TeamJoining = async (req: Request, res: Response) => {
  const id = req.query.id as string;
  const player = req.body.data as Player;
  try {
    const currentTeam = await GetTeamFindOne(id);
    if (currentTeam.players.length > currentTeam.info.playerCount) {
      res.sendStatus(400);
      return;
    }

    if (currentTeam.players.length === currentTeam.info.playerCount) {
      console.log("チームが満員です");
      const dataString = JSON.stringify({
        replyToken: req.body.events[0].replyToken,
        messages: [
          {
            type: "text",
            text: "ゲームを開始しますか？",
          },
        ],
      });
      await LinePush(dataString);
      return;
    }

    if (currentTeam.players.length < currentTeam.info.playerCount) {
      const players = currentTeam.players;
      players.push(player);
      const newTeam = { ...currentTeam, players };
      await SetTeam(newTeam);

      return;
    }
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
  res.sendStatus(200);
};

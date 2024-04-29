import { gameAction } from "../helper/util";
import {
  GetOneGameByTeam,
  GetOneGameByUserId,
  GetOneTeamByTeamId,
  GetOneUserByUserId,
  GetUsersByTeamId,
} from "../repository/get.repository";
import { SetGame, SetUser } from "../repository/set.repository";
import { LinePush, publishLoadingMessage } from "../api/app.api";
import { randomUUID } from "crypto";
import { chatMessage } from "../messages/chatMessage";
import { seekerVictoryMessage } from "../messages/seekerVictoryMessage";
import { findTreasureMessage } from "../messages/findTreasureMessage";
import { Game, Status, User } from "../api/generate";
import { PrintQRService } from "./print.usecase";

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

  await gameAction(owners, async (user) => {
    await LinePush(user.userId, [
      {
        type: "text",
        text: "あなたの役割はオーナーです",
      },
      {
        type: "text",
        text: "宝が出ます！少々お待ちください",
      },
    ]);
    await publishLoadingMessage(user.userId, 60);
  })
  await PrintQRService(team.name, newGame.treasures.map(treasure => treasure.id));
  await SetGame(newGame);

  gameAction(owners, async (user) => {
    await LinePush(user.userId, [
      {
        type: "text",
        text: "宝を隠し，隠した場所のヒントを入力してください",
      },
    ]);
  })

  await gameAction(seekers, async (user) => {
    await LinePush(user.userId, [
      {
        type: "text",
        text: "役割が決定しました！",
      },
      {
        type: "text",
        text: "あなたの役割はシーカーです",
      },
      {
        type: "text",
        text: "オーナーが宝を隠している間、指定された場所で待機してください",
      },
    ]);
  })
};

export const hint = async (userId: string, hint: string, game: Game) => {
  if (game.seekers.find((seeker) => seeker.userInfo.userId === userId)) {
    await LinePush(userId, [
      {
        type: "text",
        text: "オーナーがヒントを入力中です。しばらくお待ちください",
      },
    ]);
    await publishLoadingMessage(userId, 20);
    return;
  }
  game.hints.push({
    id: randomUUID(),
    content: hint,
    isPrinted: false,
  });
  await gameAction(game.allUsers, async (user) => {
    await LinePush(user.userId, [
      {
        type: "text",
        text: `ヒントが入力されました${game.hints.length}/${game.team.treasureCount}`,
      },
    ]);
  })
  if (game.hints.length === game.team.treasureCount) {
    await gameAction(game.allUsers, async (user) => {
      await LinePush(user.userId, [
        {
          type: "text",
          text: "全てのヒントが入力されました。ゲームを開始します",
        },
      ]);
    })

    game.status = Status.Chat;
    await gameAction(game.allUsers, async (user) => {
      await LinePush(user.userId, [chatMessage()]);
    });
  }
  await SetGame(game);
}

export const chat = async (message: string, game: Game, user: User) => {
  const isSeeker = game.seekers.find((seeker) => seeker.userInfo.userId === user.userId);
  const publishUsers = isSeeker ? game.seekers : game
    .owners;
  const otherUsers = publishUsers.filter((publishUser) => publishUser.userInfo.userId !== user.userId).map((publishUser) => publishUser.userInfo);
  gameAction(otherUsers, async (otherUser) => {
    await LinePush(otherUser.userId, [
      {
        type: "text",
        text: `(${user.name})${message}`,
      },
    ]);

  })
}

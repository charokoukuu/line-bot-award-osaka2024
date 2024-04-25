import { gameAction } from "../helper/util";
import {
  GetGameFindOneByTeam,
  GetGameFindOneByTreasureId,
  GetTeamFindOneByTeamId,
  GetUsersFindByTeamId,
} from "../repository/get.repository";
import { SetGame, SetUser } from "../repository/set.repository";
import { LinePush, publishLoadingMessage } from "../api/app.api";
import { randomUUID } from "crypto";
import { chatMessage } from "../messages/chatMessage";
import { seekerVictoryMessage } from "../messages/seekerVictoryMessage";
import { findTreasureMessage } from "../messages/findTreasureMessage";
import { Game, Status, User } from "../api/generate";

export const play = async (teamId: string) => {
  const users = await GetUsersFindByTeamId(teamId);
  const team = await GetTeamFindOneByTeamId(teamId);
  const game = await GetGameFindOneByTeam(team);
  if (!team) throw new Error("該当するチームが存在しません");
  if (game) throw new Error("既にゲームが開始されています");

  const shuffledArray = users.sort(() => Math.random() - 0.5);
  const owners = shuffledArray.slice(0, team.ownerCount);
  const seekers = shuffledArray.slice(team.ownerCount);
  const newGame: Game = {
    team: team,
    allUsers: users,
    owners: owners,
    seekers: seekers,
    hints: [],
    arrestedMembers: [],
    disabledScanMembers: [],
    treasures: [...new Array(team.treasureCount)].map((_, i) => ({
      id: randomUUID(),
      isScanned: false,
    })),
    status: Status.Prepare,
  }
  await SetGame(newGame);
  await gameAction([...owners, ...seekers], async (user) => {
    await LinePush(user.userId, [
      {
        type: "text",
        text: "ゲームが開始されました！",
      },
    ]);
  })
  await gameAction(owners, async (user) => {
    await LinePush(user.userId, [
      {
        type: "text",
        text: "あなたの役割はオーナーです",
      },
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
  if (game.seekers.find((seeker) => seeker.userId === userId)) {
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
  const isSeeker = game.seekers.find((seeker) => seeker.userId === user.userId);
  const publishUsers = isSeeker ? game.seekers : game
    .owners;
  const otherUsers = publishUsers.filter((publishUser) => publishUser.userId !== user.userId);
  gameAction(otherUsers, async (otherUser) => {
    await LinePush(otherUser.userId, [
      {
        type: "text",
        text: `(${user.name})${message}`,
      },
    ]);

  })
}


export const ScanService = async (userName: string, treasureId: string) => {
  const game = await GetGameFindOneByTreasureId(treasureId);
  game.treasures.filter((treasure) => treasure.id === treasureId)[0].isScanned = true;
  const result: any = await SetGame(game);
  if (result.modifiedCount == 0) {
    console.log("既にスキャン済み");
    return;
  }

  const notScanTreasures = game.treasures.filter((treasure) => !treasure.isScanned).length;
  await gameAction(game.allUsers, async (user) => {
    await LinePush(user.userId, [findTreasureMessage(userName, notScanTreasures)]);
  });
  if (notScanTreasures == 0) {
    await gameAction(game.allUsers, async (user) => {
      await LinePush(user.userId, [
        seekerVictoryMessage(game.seekers.map((seeker) => seeker.name)),
      ]);
      game.status = Status.End;
      await SetGame(game);
      await gameAction(game.allUsers, async (user) => {
        user.teamId = "";
        await SetUser(user);
      });
    });
  }
}



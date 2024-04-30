import { LinePush, getUserProfile } from "../api/app.api";
import { SetSchedule, SetTeam, SetUser } from "../repository/set.repository";
import { ApiScheduleBody, ApiTeambuildingBody, ApiTeamjoiningBody, Schedule, Status, User } from "../api/generate";
import { GetOneGameByUserId, GetOneUserByUserId, GetUsersByTeamId, GetOneGameByTeamId, GetOneTeamByTeamId } from "../repository/get.repository";
import { hint, chat, play } from "./game.usecase";
import { randomUUID } from "crypto";
import { CronMethods } from "../method";
import { playGameMessage } from "../messages/playGameMessage";

export const WebhookService = async (userId: string, message: string) => {

  const game = await GetOneGameByUserId(userId);
  const user = await GetOneUserByUserId(userId);

  if (!user || !user.teamId) {
    throw new Error("チームに所属していません。チームを作成するか、チームに参加してください");
  }
  if (!game && user.teamId) {
    const users = await GetUsersByTeamId(user.teamId);
    const team = await GetOneTeamByTeamId(user.teamId);
    if (users.length < team.playerCount) {
      throw new Error("チーム人数が足りません。チームメンバーが全員揃うまでお待ちください。");
    } else {
      if (message == "プレイする") {
        await play(user.teamId);
        return;
      }
    }
    throw new Error("ゲームが開始されていません。プレイする！を押すとゲームを開始できます。");
  }
  if (!game) throw new Error("ゲームが開始されていません");
  switch (game.status) {
    case Status.Prepare:
      console.log("prepare");
      hint(userId, message, game);
      break;
    case Status.Chat:
      console.log("chat");
      chat(message, game, user);
      break;
    default:
      console.log("default");
      await LinePush(userId, [
        {
          type: "text",
          text: "ゲームが開始されていません",
        },
      ]);
      break;
  }

};

export const ScheduleService = async (scheduleItem: ApiScheduleBody) => {
  const currentDate = new Date();
  const futureDate = new Date(currentDate.getTime() + scheduleItem.timeAfterMinutes * 60000);
  const newSchedule: Schedule = {
    id: randomUUID(),
    teamId: scheduleItem.teamId,
    users: scheduleItem.users,
    messages: scheduleItem.messages,
    date: futureDate,
    hintId: scheduleItem.hintId,
    enableOwner: scheduleItem.enableOwner,
  };
  await SetSchedule(newSchedule);
  await CronMethods(newSchedule);
};


export const CreateUserService = async (user: User) => {
  await SetUser(user);
};
export const TeamBuildingService = async (data: ApiTeambuildingBody) => {
  const teamId = randomUUID();
  const name = (await getUserProfile(data.userId)).displayName;
  await SetUser({
    userId: data.userId,
    name: name ?? "名無しさん" + Math.floor(Math.random() * 1000),
    teamId,
  });
  const id = await SetTeam({
    teamId,
    hostId: data.userId,
    name: data.teamName,
    playerCount: data.playerCount,
    ownerCount: data.ownerCount,
    treasureCount: data.treasureCount,
    keyword: data.keyword,
  });

  await LinePush(data.userId, [
    {
      type: "text",
      text: "チームが作成されました",
    },
    {
      type: "text",
      text: "チーム名: " + data.teamName,
    },
  ]);

  return id;
};

export const TeamJoiningService = async (data: ApiTeamjoiningBody) => {
  const teamLength = await (await GetUsersByTeamId(data.teamId)).length + 1;
  const team = await GetOneTeamByTeamId(data.teamId);
  if (teamLength > team.playerCount) {
    throw new Error("チームが満員です");
  }
  const name = (await getUserProfile(data.userId)).displayName ?? "名無しさん" + Math.floor(Math.random() * 1000);
  const beforeUserTeamId = (await GetOneUserByUserId(data.userId))?.teamId;
  const userSetInfo: any = await SetUser({
    userId: data.userId,
    name: name,
    teamId: data.teamId,
  });
  console.log(beforeUserTeamId);
  if (beforeUserTeamId != "" && userSetInfo.upsertedCount == 0) {
    console.log("すでにチームに参加しています");
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
      text: `${name}さんがチームに参加しました`,
    },
  ]);

  if (teamLength == team.playerCount) {
    const users = await GetUsersByTeamId(data.teamId);
    await LinePush(team.hostId, [
      playGameMessage(users.map(user => user.name), team.name, team.treasureCount)
    ]);
    return;
  }

};

export const SaveHintService = async (teamId: string, content: string) => {
  const game = await GetOneGameByTeamId(teamId);
  console.log(game);
  hint(game.owners[0].userInfo.userId, content, game);
};
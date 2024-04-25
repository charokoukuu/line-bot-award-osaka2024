import { LinePush } from "../api/app.api";
import { SetSchedule, SetTeam, SetUser } from "../repository/set.repository";
import { ApiScheduleBody, ApiTeambuildingBody, ApiTeamjoiningBody, Schedule, Status, User } from "../api/generate";
import { GetGameFindOneByUserId, GetTeamFindOneByTeamId, GetUserFindOneByUserId, GetUsersFindByTeamId } from "../repository/get.repository";
import { hint, chat, play } from "./game.usecase";
import { randomUUID } from "crypto";
import { CronMethods } from "../method";
import { playGameMessage } from "../messages/playGameMessage";

export const WebhookService = async (userId: string, message: string) => {
  const game = await GetGameFindOneByUserId(userId);
  const user = await GetUserFindOneByUserId(userId);

  if (message == "プレイする") {
    if (user.teamId) {
      const teamId = user.teamId;
      await play(teamId);
    } else {
      throw new Error("チームに所属していません。チームを作成するか、チームに参加してください");
    }
  }
  if (!game && user.teamId) {
    const users = await GetUsersFindByTeamId(user.teamId);
    const team = await GetTeamFindOneByTeamId(user.teamId);
    if (!team) throw new Error("チームが存在しません");
    return;
  }
  console.log(game);
  switch (game.status) {
    case Status.Prepare:
      hint(userId, message, game);
      break;
    case Status.Chat:
      chat(message, game, user);
      break;
    default:
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
  await CronMethods();
};


export const CreateUserService = async (user: User) => {
  await SetUser(user);
};
export const TeamBuildingService = async (data: ApiTeambuildingBody) => {
  const teamId = randomUUID();
  await SetUser({
    userId: data.userId,
    name: data.userName,
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
    const users = await GetUsersFindByTeamId(data.teamId);
    await LinePush(team.hostId, [
      playGameMessage(users.map(user => user.name), team.name, team.treasureCount)
    ]);
    return;
  }

};

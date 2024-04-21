import { gameAction } from "../helper/util";
import {
  GetTeamFindOneId,
  GetUsersFindTeamId,
} from "../repository/get.repository";
import { Status } from "../types/app.type";
import { createTeam } from "../domain/create.model";
import { SetTeam, SetUser } from "../repository/set.repository";
import { LinePush } from "../api/app.api";

export const play = async (id: string) => {
  const users = await GetUsersFindTeamId(id);
  const team = await GetTeamFindOneId(id);
  const shuffledArray = users.sort(() => Math.random() - 0.5);
  const owners = shuffledArray.slice(0, team.ownerCount);

  owners.forEach((item) => {
    item.gameType = "owner";
    item.status = Status.OWNER;
  });
  const seekers = shuffledArray.slice(team.ownerCount);
  seekers.forEach((item) => {
    item.gameType = "seeker";
    item.status = Status.SEEKER;
  });

  const newTeam = [...owners, ...seekers]
  await Promise.all(
    newTeam.map(async (user) => {
      await SetUser(user);
    })
  );

  newTeam.forEach((user) => {
    LinePush(user.userId, [
      {
        type: "text",
        text: `ゲームが始まりました`,
      },
      {
        type: "text",
        text: `あなたは${user.gameType}です`,
      },
    ]);
  });
};

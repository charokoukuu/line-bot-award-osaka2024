import { displayJob, gameAction } from "../helper/util";
import {
  GetTeamFindOneId,
  GetUsersFindTeamId,
} from "../repository/get.repository";
import { Status } from "../types/app.type";
import { SetUser } from "../repository/set.repository";
import { LinePush } from "../api/app.api";

export const play = async (id: string) => {
  const users = await GetUsersFindTeamId(id);
  const team = await GetTeamFindOneId(id);
  if (!team) throw new Error("該当するチームが存在しません");
  if (users[0].status) throw new Error("ゲームはすでに始まっています");
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

  newTeam.forEach(async (user) => {
    await LinePush(user.userId, [
      {
        type: "text",
        text: `ゲームが始まりました`,
      },
      {
        type: "text",
        text: `あなたは${displayJob(user.gameType ?? "")}です`,
      },
    ]);
    gameAction(user, {
      owner: () => {
        LinePush(user.userId, [
          {
            type: "text",
            text: "宝を隠し，隠した場所のヒントを入力してください",
          },
        ]);
      },
      seeker: () => {
        LinePush(user.userId, [
          {
            type: "text",
            text: "オーナーが宝を隠している間、指定された場所で待機してください",
          },
        ]);
      },
    });
  });
};

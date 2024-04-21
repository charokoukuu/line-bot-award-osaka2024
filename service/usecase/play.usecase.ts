import { displayJob, gameAction } from "../helper/util";
import {
  GetGameFindOneByTeam,
  GetTeamFindOneByTeamId,
  GetUsersFindByTeamId,
} from "../repository/get.repository";
import { Game, Status } from "../types/app.type";
import { SetGame, SetUser } from "../repository/set.repository";
import { LinePush } from "../api/app.api";

export const play = async (id: string) => {
  const users = await GetUsersFindByTeamId(id);
  const team = await GetTeamFindOneByTeamId(id);
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
    treasures: [],
    status: Status.PREPARE,
  }
  console.log(newGame);
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

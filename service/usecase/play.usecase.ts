import { displayJob, gameAction } from "../helper/util";
import {
  GetTeamFindOneId,
  GetUsersFindTeamId,
} from "../repository/get.repository";
import { Game, Status } from "../types/app.type";
import { SetGame, SetUser } from "../repository/set.repository";
import { LinePush } from "../api/app.api";

export const play = async (id: string) => {
  const users = await GetUsersFindTeamId(id);
  const team = await GetTeamFindOneId(id);
  if (!team) throw new Error("該当するチームが存在しません");

  const shuffledArray = users.sort(() => Math.random() - 0.5);
  const owners = shuffledArray.slice(0, team.ownerCount);
  const seekers = shuffledArray.slice(team.ownerCount);
  const game: Game = {
    team: team,
    allUsers: users,
    owners: owners,
    seekers: seekers,
    hints: ["jkj", "kjndkfsj"],
    treasures: [],
    status: Status.PLAY,
  }
  console.log(game);
  await SetGame(game);
  await gameAction([...owners, ...seekers], async (user) => {
    LinePush(user.userId, [
      {
        type: "text",
        text: "ゲームが開始されました！",
      },
    ]);
  })
  await gameAction(owners, async (user) => {
    LinePush(user.userId, [
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
    LinePush(user.userId, [
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

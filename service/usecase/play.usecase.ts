import { gameAction } from "../helper/util";
import {
  GetPlayerFindOneId,
  GetTeamFindOneId,
} from "../repository/get.repository";
import { Status } from "../types/app.type";
import { createTeam } from "../domain/create.model";
import { SetTeam } from "../repository/set.repository";

export const play = async (id: string) => {
  const team = await GetTeamFindOneId(id);
  const shuffledArray = team.players.sort(() => Math.random() - 0.5);
  const selectedItems = shuffledArray.slice(0, team.info.ownerCount);
  selectedItems.forEach((item) => {
    item.gameType = "owner";
  });
  const remainingItems = shuffledArray.slice(team.info.ownerCount);
  remainingItems.forEach((item) => {
    item.gameType = "seeker";
  });
  const newTeam = await createTeam({
    id: team.id,
    info: team.info,
    players: [...selectedItems, ...remainingItems],
  });

  newTeam.players.forEach((player) => {
    console.log("ゲームを開始します");
    gameAction(player, {
      owner: () => {
        player.user.status = Status.OWNER;
        console.log("オーナーの処理");
      },
      seeker: () => {
        player.user.status = Status.SEEKER;
        console.log("シーカーの処理");
      },
    });
  });
  await SetTeam(newTeam);
};

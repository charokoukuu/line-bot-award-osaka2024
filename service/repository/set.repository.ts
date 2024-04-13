import { PlayerModel, TeamInfoModel, TeamModel } from "../domain/create.model";
import { mockPlayer, mockTeam, mockTeamInfo } from "../mock/data.mock";
import { Player, Status, Team, TeamInfo } from "../types/app.type";

export const SetTeamInfo = async (teamInfo: TeamInfo) => {
  try {
    await TeamInfoModel.updateOne({ id: teamInfo.id }, teamInfo, {
      upsert: true,
    });
    return "success";
  } catch (err) {
    console.error(err);
    return err;
  }
};
export const SetTeam = async (team: Team) => {
  try {
    await TeamModel.updateOne({ id: team.id }, team, {
      upsert: true,
    });
    return "success";
  } catch (err) {
    console.error(err);
    return err;
  }
};
export const SetPlayer = async (player: Player) => {
  try {
    await PlayerModel.updateOne({ user: player.user }, player, {
      upsert: true,
    });
    return "success";
  } catch (err) {
    console.error(err);
    return err;
  }
};

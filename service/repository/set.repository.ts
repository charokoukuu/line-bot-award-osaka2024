import { TeamInfoModel, TeamModel } from "../domain/create.model";
import { Team, TeamInfo } from "../types/user.type";

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

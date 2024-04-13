import { PlayerModel, TeamInfoModel, TeamModel } from "../domain/create.model";
import { Player, Team, TeamInfo } from "../types/user.type";

export const GetTeamInfoFindOne = async (id: string): Promise<TeamInfo> => {
  const newTeamInfo = await TeamInfoModel.findOne({ id: id });
  console.log(newTeamInfo);
  return newTeamInfo as TeamInfo;
};
export const GetTeamFindOne = async (id: string): Promise<Team> => {
  const newTeam = await TeamModel.findOne({ id: id });
  console.log(newTeam);
  return newTeam as Team;
};
export const GetPlayerFindOne = async (id: string): Promise<Player> => {
  const newPlayer = await PlayerModel.findOne({ id: id });
  console.log(newPlayer);
  return newPlayer as Player;
};

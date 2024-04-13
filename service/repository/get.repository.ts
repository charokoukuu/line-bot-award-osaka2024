import { PlayerModel, TeamInfoModel, TeamModel } from "../domain/create.model";
import { Player, Team, TeamInfo } from "../types/app.type";

export const GetTeamInfoFindOneId = async (id: string): Promise<TeamInfo> => {
  const newTeamInfo = await TeamInfoModel.findOne({ id: id });
  console.log(newTeamInfo);
  return newTeamInfo as TeamInfo;
};

export const GetTeamFindOneId = async (teamId: string): Promise<Team> => {
  const newTeam = await TeamModel.findOne({ id: teamId });
  console.log(newTeam);
  return newTeam as Team;
};

export const GetPlayerFindOneId = async (id: string): Promise<Player> => {
  const newPlayer = await PlayerModel.findOne({ id: id });
  console.log(newPlayer);
  return newPlayer as Player;
};

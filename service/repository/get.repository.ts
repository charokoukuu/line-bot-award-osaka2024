import { TeamModel } from "../domain/create.model";
import { Team } from "../types/app.type";


export const GetTeamFindOneId = async (teamId: string): Promise<Team> => {
  const newTeam = await TeamModel.findOne({ id: teamId });
  console.log(newTeam);
  return newTeam as Team;
};

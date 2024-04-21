import { GetAllTeams } from "../repository/get.repository";
import { SetUser } from "../repository/set.repository";

export const GetAllTeamsService = async () => {
  return await GetAllTeams();
};

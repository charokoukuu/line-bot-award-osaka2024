import { GetAllTeams } from "../repository/get.repository";

export const GetAllTeamsService = async () => {
  return await GetAllTeams();
};

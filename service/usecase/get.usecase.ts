import { GetAllGames, GetAllTeams, GetOneGameByTeamId } from "../repository/get.repository";

export const GetAllTeamsService = async () => {
  return await GetAllTeams();
};

export const GetAllGamesService = async () => {
  return await GetAllGames();
};

export const GetOneGameService = async (teamId: string) => {
  return await GetOneGameByTeamId(teamId);
};

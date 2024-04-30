import { GetAllGames, GetAllTeams, GetOneGameByTeamId, GetOneUserByUserId } from "../repository/get.repository";

export const GetAllTeamsService = async () => {
  return await GetAllTeams();
};

export const GetAllGamesService = async () => {
  return await GetAllGames();
};

export const GetOneGameService = async (teamId: string) => {
  return await GetOneGameByTeamId(teamId);
};
export const GetOneScannerStatusService = async (userId: string) => {
  const user = await GetOneUserByUserId(userId);
  const game = await GetOneGameByTeamId(user.teamId ?? "");
  console.log(game);
  const scannerStatus = game.owners.find((owner) => owner.userInfo.userId === userId)?.isDisabledScan;

  return {
    userId: userId,
    isDisabledScan: scannerStatus,
  };
};

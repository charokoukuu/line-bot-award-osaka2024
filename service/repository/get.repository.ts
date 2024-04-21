import { GameModel, TeamModel, UserModel } from "../domain/create.model";
import { Game, Team, User } from "../types/app.type";


export const GetUserFindOneById = async (userId: string): Promise<User> => {
  const getUser = await UserModel.findOne({ id: userId });
  console.log(getUser);
  return getUser as User;
};

export const GetUsersFindByTeamId = async (teamId: string): Promise<User[]> => {
  const getUsers = await UserModel.find({
    teamId
  });
  console.log(getUsers);
  return getUsers as User[];
}


export const GetTeamFindOneByTeamId = async (teamId: string): Promise<Team> => {
  const getTeam = await TeamModel.findOne({ teamId: teamId });
  console.log(getTeam);
  return getTeam as Team;
};

export const GetAllTeams = async (): Promise<Team[]> => {
  const getTeams = await TeamModel.find();
  return getTeams as Team[];
}
export const GetGameFindOneByTeam = async (team: Team): Promise<Game> => {
  const getGame = await GameModel.findOne({ team: team });
  console.log(getGame);
  return getGame as Game;
};
export const GetGameFindOneByUserId = async (userId: string): Promise<Game> => {
  const getGame = await GameModel.findOne({ "allUsers.userId": userId });
  console.log(getGame);
  return getGame as Game;
};
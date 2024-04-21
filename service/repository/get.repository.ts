import { TeamModel, UserModel } from "../domain/create.model";
import { Team, User } from "../types/app.type";


export const GetUserFindOneId = async (userId: string): Promise<User> => {
  const getUser = await UserModel.findOne({ id: userId });
  console.log(getUser);
  return getUser as User;
};

export const GetUsersFindTeamId = async (teamId: string): Promise<User[]> => {
  const getUsers = await UserModel.find({
    teamId
  });
  console.log(getUsers);
  return getUsers as User[];
}


export const GetTeamFindOneId = async (teamId: string): Promise<Team> => {
  const getTeam = await TeamModel.findOne({ teamId: teamId });
  console.log(getTeam);
  return getTeam as Team;
};

export const GetAllTeams = async (): Promise<Team[]> => {
  const getTeams = await TeamModel.find();
  return getTeams as Team[];
}
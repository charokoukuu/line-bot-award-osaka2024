import { GameModel, ScheduleModel, TeamModel, UserModel } from "../domain/create.model";
import { Game, Schedule, Team, User } from "../types/app.type";


export const GetUserFindOneByUserId = async (userId: string): Promise<User> => {
  const getUser = await UserModel.findOne({ userId: userId });
  return getUser as User;
};

export const GetUsersFindByTeamId = async (teamId: string): Promise<User[]> => {
  const getUsers = await UserModel.find({
    teamId
  });
  return getUsers as User[];
}


export const GetTeamFindOneByTeamId = async (teamId: string): Promise<Team> => {
  const getTeam = await TeamModel.findOne({ teamId: teamId });
  return getTeam as Team;
};

export const GetAllTeams = async (): Promise<Team[]> => {
  const getTeams = await TeamModel.find();
  return getTeams as Team[];
}
export const GetGameFindOneByTeam = async (team: Team): Promise<Game> => {
  const getGame = await GameModel.findOne({ team: team, status: { $ne: "end" } });
  return getGame as Game;
};
export const GetGameFindOneByUserId = async (userId: string): Promise<Game> => {
  const getGame = await GameModel.findOne({ "allUsers.userId": userId });
  return getGame as Game;
};
export const GetGameFindOneByTreasureId = async (id: string): Promise<Game> => {
  const getGame = await GameModel.findOne({ "treasures.id": id });
  return getGame as Game;
};


export const GetScheduleFindOneByDate = async (date: string): Promise<Schedule> => {
  const getSchedule = await ScheduleModel.findOne({ date: date });
  return getSchedule as Schedule;
};
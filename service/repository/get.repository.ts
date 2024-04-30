import { GameModel, ScheduleModel, TeamModel, UserModel } from "../domain/create.model";
import { Game, Schedule, Team, User } from "../api/generate";


export const GetOneUserByUserId = async (userId: string): Promise<User> => {
  const getUser = await UserModel.findOne({ userId: userId });
  return getUser as User;
};

export const GetUsersByTeamId = async (teamId: string): Promise<User[]> => {
  const getUsers = await UserModel.find({
    teamId
  });
  return getUsers as User[];
}


export const GetOneTeamByTeamId = async (teamId: string): Promise<Team> => {
  const getTeam = await TeamModel.findOne({ teamId: teamId });
  return getTeam as Team;
};

export const GetAllTeams = async (): Promise<Team[]> => {
  const getTeams = await TeamModel.find();
  return getTeams as Team[];
}

export const GetAllGames = async (): Promise<Game[]> => {
  const getGames = await GameModel.find({ status: { $ne: "end" } });
  return getGames as Game[];
}

export const GetOneGameByTeamId = async (teamId: string): Promise<Game> => {
  const getGames = await GameModel.findOne({
    "team.teamId": teamId,
    status: { $ne: "end" }
  });
  return getGames as Game;

}

export const GetOneGameByTeam = async (team: Team): Promise<Game> => {
  const getGame = await GameModel.findOne({ team: team, status: { $ne: "end" } });
  return getGame as Game;
};

export const GetOneGameByUserId = async (userId: string): Promise<Game> => {
  const getGame = await GameModel.findOne({ "allUsers.userId": userId, status: { $ne: "end" } });
  return getGame as Game;
};

export const GetOneGameByTreasureId = async (id: string): Promise<Game> => {
  const getGame = await GameModel.findOne({ "treasures.id": id, status: { $ne: "end" } });
  return getGame as Game;
};

export const GetOneScheduleByDate = async (date: string): Promise<Schedule> => {
  const getSchedule = await ScheduleModel.findOne({ date: date });
  return getSchedule as Schedule;
};

export const GetAllSchedule = async (): Promise<Schedule[]> => {
  const getSchedule = await ScheduleModel.find();
  return getSchedule as Schedule[];
};
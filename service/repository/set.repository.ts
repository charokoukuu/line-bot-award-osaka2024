import { Game, Schedule, Team, User } from "../api/generate";
import { GameModel, ScheduleModel, TeamModel, UserModel } from "../domain/create.model";



export const SetTeam = async (team: Team) => {
  try {
    await TeamModel.updateOne({ teamId: team.teamId }, team, {
      upsert: true,
    });
    return team.teamId;
  } catch (err) {
    console.error(err);
    return err;
  }
};
export const SetUser = async (user: User) => {
  try {
    const result = await UserModel.updateOne({ userId: user.userId }, user, {
      upsert: true,
    });
    return result;
  } catch (err) {
    console.error(err);
    return err;
  }
};
export const SetGame = async (game: Game) => {
  try {
    const result = await GameModel.updateOne({ team: game.team }, game, {
      upsert: true,
    });
    return result;
  } catch (err) {
    console.error(err);
    return err;
  }
};

export const SetSchedule = async (schedule: Schedule) => {
  try {
    const result = await ScheduleModel.updateOne({ id: schedule.id }, schedule, {
      upsert: true,
    });
    return result;
  } catch (err) {
    console.error(err);
    return err;
  }
};

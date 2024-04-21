import { TeamModel, UserModel } from "../domain/create.model";
import { Team, User } from "../types/app.type";


export const SetTeam = async (team: Team) => {
  try {
    await TeamModel.updateOne({ teamId: team.teamId }, team, {
      upsert: true,
    });
    return "success";
  } catch (err) {
    console.error(err);
    return err;
  }
};
export const SetUser = async (user: User) => {
  try {
    await UserModel.updateOne({ userId: user.userId }, user, {
      upsert: true,
    });
    return "success";
  } catch (err) {
    console.error(err);
    return err;
  }
};

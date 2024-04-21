import { TeamModel } from "../domain/create.model";
import { Team } from "../types/app.type";


export const SetTeam = async (team: Team) => {
  try {
    await TeamModel.updateOne({ id: team.teamId }, team, {
      upsert: true,
    });
    return "success";
  } catch (err) {
    console.error(err);
    return err;
  }
};

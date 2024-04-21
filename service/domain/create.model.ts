import { TeamSchema } from "../schema/db.schema";
import {
  Team,
} from "../types/app.type";
import mongoose from "mongoose";

export const createTeam = (team: Team) => {
  return {
    id: team.teamId,
  };
};


export const TeamModel = mongoose.model<Team>("team", TeamSchema);

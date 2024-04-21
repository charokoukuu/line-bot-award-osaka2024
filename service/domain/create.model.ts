import { TeamSchema, UserSchema } from "../schema/db.schema";
import {
  Team,
  User,
} from "../types/app.type";
import mongoose from "mongoose";

export const createTeam = (team: Team) => {
  return {
    id: team.teamId,
  };
};


export const UserModel = mongoose.model<User>("user", UserSchema);
export const TeamModel = mongoose.model<Team>("team", TeamSchema);

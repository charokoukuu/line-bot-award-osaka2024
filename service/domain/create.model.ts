import { GameSchema, ScheduleSchema, TeamSchema, UserSchema } from "../schema/db.schema";
import {
  Game,
  Schedule,
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
export const GameModel = mongoose.model<Game>("game", GameSchema);
export const ScheduleModel = mongoose.model<Schedule>("schedule", ScheduleSchema);

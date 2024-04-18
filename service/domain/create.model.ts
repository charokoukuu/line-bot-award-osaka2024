import { PlayerSchema, TeamInfoSchema, TeamSchema } from "../schema/db.schema";
import {
  Player,
  Team,
  TeamInfo,
} from "../types/app.type";
import mongoose from "mongoose";

export const createTeam = (team: Team) => {
  return {
    id: team.id,
    info: team.info,
    players: team.players,
  };
};

export const TeamInfoModel = mongoose.model<TeamInfo>(
  "team_info",
  TeamInfoSchema
);
export const TeamModel = mongoose.model<Team>("team", TeamSchema);
export const PlayerModel = mongoose.model<Player>("player", PlayerSchema);

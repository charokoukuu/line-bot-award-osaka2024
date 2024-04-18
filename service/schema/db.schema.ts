import mongoose from "mongoose";
import { Player, Team, TeamInfo, User } from "../types/app.type";

/**
 * DB Schema /user/{userId}
 */


export const UserSchema = new mongoose.Schema<User>({
    userId: { type: String, required: true },
    name: { type: String, required: true },
    status: { type: String, required: true },
});

/**
 * DB Schema /player/{teamId}
 */
export const PlayerSchema = new mongoose.Schema<Player>({
    teamId: { type: String, required: true },
    role: { type: String, required: true },
    gameType: { type: String, required: true },
    user: { type: UserSchema, required: true },
});

/**
 * DB Schema /team_info/{id}
 */

export const TeamInfoSchema = new mongoose.Schema<TeamInfo>({
    id: { type: String, required: true },
    name: { type: String, required: true },
    playerCount: { type: Number, required: true },
    ownerCount: { type: Number, required: true },
    keyword: { type: String, required: true },
});

/**
 * DB Schema /team/{id}
 */
export const TeamSchema = new mongoose.Schema<Team>({
    id: { type: String, required: true },
    info: { type: TeamInfoSchema, required: true },
    players: { type: [PlayerSchema], required: true },
});

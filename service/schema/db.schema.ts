import { Schema } from "mongoose";
import { Game, Status, Team, User } from "../types/app.type";

/**
 * DB Schema /api/user/{userId}
 */
export const UserSchema = new Schema<User>({
    userId: { type: String, required: true },
    name: { type: String, required: true },
    teamId: { type: String },
});

/**
 * DB Schema /api/team/{id}
 */
export const TeamSchema = new Schema<Team>({
    teamId: { type: String, required: true },
    hostId: { type: String, required: true },
    name: { type: String, required: true },
    playerCount: { type: Number, required: true },
    ownerCount: { type: Number, required: true },
    keyword: { type: String, required: true }
});

/**
 * DB Schema /api/game/{id}
 */
export const GameSchema = new Schema<Game>({
    team: { type: TeamSchema, required: true },
    owners: { type: [UserSchema], required: true },
    seekers: { type: [UserSchema], required: true },
    hints: { type: [String], required: true },
    treasures: { type: [String], required: true },
    status: { type: String, enum: Object.values(Status) }
});


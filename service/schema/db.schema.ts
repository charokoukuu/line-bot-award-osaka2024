import { Schema } from "mongoose";
import { Status, Team, User } from "../types/app.type";

/**
 * DB Schema /api/user/{userId}
 */
export const UserSchema = new Schema<User>({
    userId: { type: String, required: true },
    name: { type: String, required: true },
    status: { type: String, enum: Object.values(Status) },
    teamId: { type: String },
    role: { type: String, enum: ['host', 'guest'] },
    gameType: { type: String, enum: ['owner', 'seeker'] }
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


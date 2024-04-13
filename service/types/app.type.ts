import mongoose from "mongoose";

/**
 * DB Schema /user/{userId}
 */
export interface User {
  userId: string;
  name: string;
  status: Status;
}

export const UserSchema = new mongoose.Schema<User>({
  userId: { type: String, required: true },
  name: { type: String, required: true },
  status: { type: String, required: true },
});

/**
 * DB Schema /player/{sessionId}
 */
export interface Player {
  sessionId: string;
  role: Role;
  gameType: GameType;
  user: User;
}

export const PlayerSchema = new mongoose.Schema<Player>({
  sessionId: { type: String, required: true },
  role: { type: String, required: true },
  gameType: { type: String, required: true },
  user: { type: UserSchema, required: true },
});

/**
 * DB Schema /team_info/{id}
 */
export interface TeamInfo {
  id: string;
  name: string;
  playerCount: number;
  ownerCount: number;
  keyword: string;
}
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
export interface Team {
  id: string;
  info: TeamInfo;
  players: Player[];
}

export const TeamSchema = new mongoose.Schema<Team>({
  id: { type: String, required: true },
  info: { type: TeamInfoSchema, required: true },
  players: { type: [PlayerSchema], required: true },
});

export enum Status {
  NULL = "null",
  HOST = "host",
  GUEST = "guest",
  OWNER = "owner",
  SEEKER = "seeker",
}

export type Role = "host" | "guest";

export type GameType = "null" | "owner" | "seeker";

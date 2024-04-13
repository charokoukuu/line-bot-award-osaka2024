import mongoose from "mongoose";

/**
 * DB Schema /user/{uuid}
 */
export interface User {
  uuid: string;
  name: string;
  replayToken: string;
  gameType: GameType;
  status: Status;
}

export interface Player {
  role: Role;
  user: User;
}
export const PlayerSchema = new mongoose.Schema<Player>({
  role: { type: String, required: true },
  user: { type: Object, required: true },
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
  NULL,
  HOST1,
  HOST2,
  HOST3,
  HOST4,
  HOST5,
  HOST6,
  GUEST1,
  GUEST2,
  GUEST3,
  PLA,
}

export type Role = "host" | "guest";

export type GameType = "null" | "owner" | "seeker";

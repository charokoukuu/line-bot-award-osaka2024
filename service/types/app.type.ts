
export interface User {
  userId: string;
  name: string;
  status: Status;
}

export interface Player {
  teamId: string;
  role: Role;
  gameType: Game;
  user: User;
}

export interface TeamInfo {
  id: string;
  name: string;
  playerCount: number;
  ownerCount: number;
  keyword: string;
}

export interface Team {
  id: string;
  info: TeamInfo;
  players: Player[];
}

export interface Schedule {
  id: string
  date: Date;
}
export enum Status {
  NONE = "none",
  HOST = "host",
  GUEST = "guest",
  OWNER = "owner",
  SEEKER = "seeker",
}

export type Role = "host" | "guest";

export type Game = "none" | "owner" | "seeker";

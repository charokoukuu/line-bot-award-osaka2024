
export interface User {
  userId: string;
  name: string;
  status?: Status;
  teamId?: string;
  role?: Role;
  gameType?: Game;
}

export interface Team {
  teamId: string;
  hostId: string;
  name: string;
  playerCount: number;
  ownerCount: number;
  keyword: string;
}

export interface Schedule {
  id: string
  date: Date;
}
export enum Status {
  HOST = "host",
  GUEST = "guest",
  OWNER = "owner",
  SEEKER = "seeker",
}

export type Role = "host" | "guest";

export type Game = "owner" | "seeker";

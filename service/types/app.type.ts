
export interface User {
  userId: string;
  name: string;
  status: Status;
}

export interface Player {
  teamId: string;
  role: Role;
  gameType: GameType;
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

export enum Status {
  NULL = "null",
  HOST = "host",
  GUEST = "guest",
  OWNER = "owner",
  SEEKER = "seeker",
}

export type Role = "host" | "guest";

export type GameType = "null" | "owner" | "seeker";

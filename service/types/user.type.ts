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

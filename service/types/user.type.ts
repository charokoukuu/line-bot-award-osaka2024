export interface User {
  uuid: string;
  name: string;
  replayToken: string;
  status: Status;
}

export interface Player {
  role: Role;
  user: User;
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

export type Role = "hunter" | "treasure";

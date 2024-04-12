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

export type Status =
  | "null"
  | "host1"
  | "host2"
  | "host3"
  | "host4"
  | "host5"
  | "host6"
  | "guest1"
  | "guest2"
  | "guest3"
  | "play";

export type Role = "hunter" | "treasure";

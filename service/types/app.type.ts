
export interface User {
  userId: string;
  name: string;
  teamId?: string;
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


export interface Game {
  team: Team;
  allUsers: User[];
  owners: User[];
  seekers: User[];
  hints: string[];
  treasures: string[];
  status: Status;
}
export enum Status {
  CREATE = "create",
  PLAY = "play",
  PREPARE = "prepare",
  INTERACTIVE = "interactive",
  END = "end",
}
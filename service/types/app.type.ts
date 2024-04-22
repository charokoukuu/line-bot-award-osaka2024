
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
  treasureCount: number;
  keyword: string;
}

export interface Schedule {
  id: string
  teamId: string
  users: User[];
  messages: object[];
  date: Date;
  hintId?: string;
  enableOwner?: User;
}


export interface Game {
  team: Team;
  allUsers: User[];
  owners: User[];
  seekers: User[];
  hints: {
    hint: string;
    isPrinted: boolean;
  }[];
  treasures: {
    id: string;
    isScanned: boolean;
  }[];
  status: Status;
}

export enum Status {
  CREATE = "create",
  PREPARE = "prepare",
  CHAT = "chat",
  PLAY = "play",
  END = "end",
}
export type CreateTeam = {
  userId: string;
  teamName: string,
  playerCount: number,
  ownerCount: number,
  treasureCount: number,
  keyword: string,
};

export type JoinTeam = {
  teamId: string,
  hostId: string,
  name: string,
  playerCount: number,
  ownerCount: number,
  treasureCount: number,
  keyword: string,
};
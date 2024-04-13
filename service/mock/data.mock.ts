import { User, Status, Player, TeamInfo, Team } from "../types/app.type";

// ユーザーモックデータ
export const mockUser: User = {
  userId: "123",
  name: "John Doe",
  status: Status.HOST,
};

// プレイヤーモックデータ
export const mockPlayer: Player = {
  sessionId: "456",
  role: "guest",
  gameType: "null",
  user: mockUser,
};

// チーム情報モックデータ
export const mockTeamInfo: TeamInfo = {
  id: "789",
  name: "Team A",
  playerCount: 5,
  ownerCount: 2,
  keyword: "awesome",
};

// チームモックデータ
export const mockTeam: Team = {
  id: "101112",
  info: mockTeamInfo,
  players: [mockPlayer],
};

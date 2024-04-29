export type Host = {
  player: {
    teamId: string, // userId
    role: "host",
    gameType: "null", // | "owner" | "seeker"; //初回はnull
    user: MockUser,
  },
  teamInfo: {
    id: string,
    name: string,
    playerCount: number,
    ownerCount: number,
    keyword: string,
  };
};

type MockUser = {
  userId: string,
  name: "",
  status: "null",
};

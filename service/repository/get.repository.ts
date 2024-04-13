import { Team } from "../types/user.type";

export const GetTeam = async (teamId: string): Promise<Team> => {
  return {
    id: "hogehoge",
    info: {
      id: "hogehoge",
      name: "hogehoge",
      playerCount: 3,
      ownerCount: 2,
      keyword: "hogehoge",
    },
    players: [
      {
        role: "host",
        user: {
          uuid: "hogehoge1",
          name: "hogehoge",
          replayToken: "hogehoge",
          status: 0,
          gameType: "owner",
        },
      },
      {
        role: "host",
        user: {
          uuid: "hogehoge2",
          name: "hogehoge",
          replayToken: "hogehoge",
          status: 0,
          gameType: "owner",
        },
      },
      {
        role: "host",
        user: {
          uuid: "hogehoge3",
          name: "hogehoge",
          replayToken: "hogehoge",
          status: 0,
          gameType: "owner",
        },
      },
      {
        role: "host",
        user: {
          uuid: "hogehoge4",
          name: "hogehoge",
          replayToken: "hogehoge",
          status: 0,
          gameType: "owner",
        },
      },
      {
        role: "host",
        user: {
          uuid: "hogehoge5",
          name: "hogehoge",
          replayToken: "hogehoge",
          status: 0,
          gameType: "owner",
        },
      },
      {
        role: "host",
        user: {
          uuid: "hogehoge6",
          name: "hogehoge",
          replayToken: "hogehoge",
          status: 0,
          gameType: "owner",
        },
      },
    ],
  };
};

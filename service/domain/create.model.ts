import { Team } from "../types/user.type";

export const createTeam = (team: Team) => {
  return {
    id: team.id,
    info: team.info,
    players: team.players,
  };
};

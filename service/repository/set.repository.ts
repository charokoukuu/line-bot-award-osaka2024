import { PlayerModel, TeamInfoModel, TeamModel } from "../domain/create.model";
import { Player, Status, Team, TeamInfo } from "../types/user.type";

export const SetTeamInfo = async (teamInfo: TeamInfo) => {
  try {
    await TeamInfoModel.updateOne({ id: teamInfo.id }, teamInfo, {
      upsert: true,
    });
    return "success";
  } catch (err) {
    console.error(err);
    return err;
  }
};
export const SetTeam = async (team: Team) => {
  try {
    await TeamModel.updateOne({ id: team.id }, team, {
      upsert: true,
    });
    return "success";
  } catch (err) {
    console.error(err);
    return err;
  }
};
export const SetPlayer = async (player: Player) => {
  try {
    await PlayerModel.updateOne({ user: player.user }, player, {
      upsert: true,
    });
    return "success";
  } catch (err) {
    console.error(err);
    return err;
  }
};

const mockUser = {
  userId: "123456",
  name: "John Doe",
  status: Status.HOST,
};

const mockPlayer: Player = {
  sessionId: "abcdef",
  role: "host",
  gameType: "owner",
  user: mockUser,
};

SetPlayer(mockPlayer);

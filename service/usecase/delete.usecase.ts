import { TeamModel } from "../domain/create.model";

export const DeleteOneTeamService = async (teamId: string) => {
    const res = await TeamModel.deleteOne({ teamId });
    if (res.deletedCount === 0) {
        throw new Error("Team not found");
    }
}
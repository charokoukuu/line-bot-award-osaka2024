import { ScheduleModel, UserModel } from "../domain/create.model";

export const DeleteSchedule = async (scheduleId: string) => {
    try {
        const result = await ScheduleModel.deleteOne({ id: scheduleId });
        return result;
    } catch (err) {
        console.error(err);
        return err;
    }
};

export const DeleteOneUser = async (userId: string) => {
    try {
        const result = await UserModel.deleteOne({ userId: userId });
        return result;
    } catch (err) {
        console.error(err);
        return err;
    }
}
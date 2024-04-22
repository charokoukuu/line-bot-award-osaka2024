import { ScheduleModel } from "../domain/create.model";

export const DeleteSchedule = async (scheduleId: string) => {
    try {
        const result = await ScheduleModel.deleteOne({ id: scheduleId });
        return result;
    } catch (err) {
        console.error(err);
        return err;
    }
};

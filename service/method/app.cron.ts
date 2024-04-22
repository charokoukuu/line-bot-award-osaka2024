import { LinePush } from "../api/app.api";
import { gameAction } from "../helper/util";
import { DeleteSchedule } from "../repository/delete.repository";
import { GetScheduleFind } from "../repository/get.repository";
import schedule from 'node-schedule';

const cron = require('node-cron');
export const CronMethods = async () => {

    const schedules = await GetScheduleFind()
    schedules.forEach(scheduleItem => {
        const scheduledDate = new Date(scheduleItem.date);
        schedule.scheduleJob(scheduledDate, async () => {
            await gameAction(scheduleItem.users, async (user) => {
                LinePush(user.userId, scheduleItem.messages)
            })
            await DeleteSchedule(scheduleItem.id)
        });
    });
}
import { LinePush } from "../api/app.api";
import { EXAMPLE_USER_ID } from "../config/app.config";
import { convertTimestamp, gameAction } from "../helper/util";
import { DeleteSchedule } from "../repository/delete.repository";
import { GetScheduleFindOneByDate } from "../repository/get.repository";

const cron = require('node-cron');
export const CronMethods = () => {
    cron.schedule('* * * * * ', async () => {
        const currentTime = convertTimestamp(new Date())
        const schedule = await GetScheduleFindOneByDate(currentTime)
        if (currentTime === schedule.date) {
            await gameAction(schedule.users, async (user) => {
                console.log(user.userId, schedule.messages)
                LinePush(user.userId, schedule.messages)
            })
            DeleteSchedule(schedule.id)
        }
    });
}
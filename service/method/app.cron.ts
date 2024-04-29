import { LinePush } from "../api/app.api";
import { gameAction } from "../helper/util";
import { DeleteSchedule } from "../repository/delete.repository";
import { GetAllSchedule, GetOneGameByTeamId, GetOneUserByUserId } from "../repository/get.repository";
import schedule from 'node-schedule';
import { SetGame } from "../repository/set.repository";

const cron = require('node-cron');
export const CronMethods = async () => {

    const schedules = await GetAllSchedule()
    schedules.forEach(scheduleItem => {
        const scheduledDate = new Date(scheduleItem.date);
        schedule.scheduleJob(scheduledDate, async () => {
            await gameAction(scheduleItem.users, async (user) => {
                LinePush(user.userId, scheduleItem.messages)
            })
            if (scheduleItem.enableOwner) {
                const user = await GetOneUserByUserId(scheduleItem.enableOwner.userId)
                const game = await GetOneGameByTeamId(user.teamId ?? "");
                game.owners.forEach(async owner => {
                    if (owner.userInfo.userId === user.userId) {
                        owner.isDisabledScan = false;
                    }
                });
                await SetGame(game);
            }
            await DeleteSchedule(scheduleItem.id)
        });
    });
}
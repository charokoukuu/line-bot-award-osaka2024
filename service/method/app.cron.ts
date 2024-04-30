import { LinePush } from "../api/app.api";
import { gameAction } from "../helper/util";
import { DeleteSchedule } from "../repository/delete.repository";
import { GetAllSchedule, GetOneGameByTeamId, GetOneUserByUserId } from "../repository/get.repository";
import schedule from 'node-schedule';
import { SetGame } from "../repository/set.repository";
import { ChangeOwnerScannerValid, PrintHintJob, TimeLimitService } from "../usecase/cron.usecase";
import { PrintHintService } from "../usecase/print.usecase";
import { Schedule } from "../api/generate";

const cron = require('node-cron');
export const CronMethods = async (scheduleProps?: Schedule) => {

    if (!scheduleProps) {
        const schedules = await GetAllSchedule()
        schedules.forEach(scheduleItem => {
            const scheduledDate = new Date(scheduleItem.date);
            schedule.scheduleJob(scheduledDate, async () => {
                console.log("schedule");
                await gameAction(scheduleItem.users, async (user) => {
                    LinePush(user.userId, scheduleItem.messages)
                })
                if (scheduleItem.enableOwner) ChangeOwnerScannerValid(scheduleItem)
                if (scheduleItem.hintId) PrintHintJob(scheduleItem)
                if (scheduleItem.messages[0].text == "制限時間です！") TimeLimitService(scheduleItem)
                await DeleteSchedule(scheduleItem.id)
            });
        });
    } else {
        const scheduledDate = new Date(scheduleProps.date);
        schedule.scheduleJob(scheduledDate, async () => {
            console.log("schedule");
            await gameAction(scheduleProps.users, async (user) => {
                LinePush(user.userId, scheduleProps.messages)
            })
            if (scheduleProps.enableOwner) ChangeOwnerScannerValid(scheduleProps)
            if (scheduleProps.hintId) PrintHintJob(scheduleProps)
            if (scheduleProps.messages[0].text == "制限時間です！") TimeLimitService(scheduleProps)
            await DeleteSchedule(scheduleProps.id)
        });
    }

}
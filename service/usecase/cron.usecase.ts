import { Schedule } from "../api/generate";
import { GetOneGameByTeamId } from "../repository/get.repository";
import { SetGame } from "../repository/set.repository";
import { PrintHintService } from "./print.usecase";

export const ChangeOwnerScannerValid = async (scheduleItem: Schedule) => {
    if (!scheduleItem.enableOwner) return;
    const game = await GetOneGameByTeamId(scheduleItem.teamId ?? "");
    game.owners.forEach(async owner => {
        if (owner.userInfo.userId === scheduleItem.enableOwner?.userId) {
            owner.isDisabledScan = false;
        }
    });
    await SetGame(game);
}


export const PrintHintJob = async (scheduleItem: Schedule) => {
    if (!scheduleItem.hintId) return;
    const game = await GetOneGameByTeamId(scheduleItem.teamId ?? "");
    const hint = game.hints.find(hint => hint.id === scheduleItem.hintId);
    if (!hint || !hint.id || !hint.content) return;
    await PrintHintService(hint.id, hint.content);
    hint.isPrinted = true;
    await SetGame(game);
}
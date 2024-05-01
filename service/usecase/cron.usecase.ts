import { LinePush } from "../api/app.api";
import { Schedule, Status } from "../api/generate";
import { menuListIds } from "../config/secret.config";
import { linkRichMenuToUser } from "../helper/richmenu";
import { gameAction } from "../helper/util";
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
    await PrintHintService(hint.id, hint.content, game.allUsers, game);
    hint.isPrinted = true;
    await SetGame(game);
}

export const TimeLimitService = async (scheduleItem: Schedule) => {
    const game = await GetOneGameByTeamId(scheduleItem.teamId ?? "");
    game.status = Status.End;
    await SetGame(game);
    await gameAction(game.allUsers, async (user) => {
        await linkRichMenuToUser(user.userId, menuListIds.home);
    });
}

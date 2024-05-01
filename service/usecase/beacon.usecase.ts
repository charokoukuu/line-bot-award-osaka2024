import { LinePush } from "../api/app.api";
import { gameAction } from "../helper/util";
import { disableScannerMessage } from "../messages/disableScannerMessage";
import { GetOneGameByTeamId, GetOneUserByUserId } from "../repository/get.repository";
import { SetGame } from "../repository/set.repository";
import { ScheduleService } from "./set.usecase";

export const BeaconService = async (userId: string) => {
    console.log("ビーコン検知");
    const user = (await GetOneUserByUserId(userId));
    if (!user) return;
    const game = await GetOneGameByTeamId(user.teamId ?? "");
    if (!game) return;
    game.owners.forEach(async owner => {
        if (owner.userInfo.userId === userId) {
            owner.isDisabledScan = true;
        }
    });
    await SetGame(game);
    await gameAction(game.allUsers, async (user_) => {
        await LinePush(user_.userId, [disableScannerMessage(user.name)]);
    })
    await ScheduleService(
        {
            teamId: user.teamId ?? "",
            users: game.allUsers,
            messages: [
                {
                    type: "text",
                    text: `オーナー${user.name}のスキャナーが有効化されました。`
                }
            ],
            timeAfterMinutes: 0.5,
            enableOwner: user
        });

}
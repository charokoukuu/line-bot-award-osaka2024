import { LinePush } from "../api/app.api";
import { gameAction } from "../helper/util";
import { GetOneGameByTeamId, GetOneUserByUserId, GetUsersByTeamId } from "../repository/get.repository";
import { SetGame } from "../repository/set.repository";
import { ScheduleService } from "./set.usecase";

export const BeaconService = async (userId: string) => {
    const user = (await GetOneUserByUserId(userId));
    const game = await GetOneGameByTeamId(user.teamId ?? "");
    game.owners.forEach(async owner => {
        if (owner.userInfo.userId === userId) {
            owner.isDisabledScan = true;
        }
    });
    await SetGame(game);
    await gameAction(game.allUsers, async (user) => {
        await LinePush(user.userId, [{
            type: "text",
            text: `発券エリアでオーナーを検知しました。オーナー${user.name}は一定時間スキャナーを使用できません。`
        }]);
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
            hintId: "string",
            enableOwner: user
        });

}
import { LinePush } from "../api/app.api";
import { Status } from "../api/generate";
import { gameAction } from "../helper/util";
import { findTreasureMessage } from "../messages/findTreasureMessage";
import { seekerVictoryMessage } from "../messages/seekerVictoryMessage";
import { GetOneGameByTeamId, GetOneGameByUserId, GetOneUserByUserId } from "../repository/get.repository";
import { SetGame, SetUser } from "../repository/set.repository";

export const ScanTreasureService = async (userId: string, treasureId: string) => {
    const user = await GetOneUserByUserId(userId);
    const game = await GetOneGameByUserId(userId);
    const userName = user.name;
    game.treasures.filter((treasure) => treasure.id === treasureId)[0].isScanned = true;
    const result: any = await SetGame(game);
    if (result.modifiedCount == 0) {
        console.log("既にスキャン済み");
        return;
    }

    const notScanTreasures = game.treasures.filter((treasure) => !treasure.isScanned).length;
    await gameAction(game.allUsers, async (user) => {
        await LinePush(user.userId, [findTreasureMessage(userName, notScanTreasures)]);
    });
    if (notScanTreasures == 0) {
        await gameAction(game.allUsers, async (user) => {
            await LinePush(user.userId, [
                seekerVictoryMessage(game.seekers.map((seeker) => seeker.userInfo.name)),
            ]);
            game.status = Status.End;
            await SetGame(game);
            await gameAction(game.allUsers, async (user) => {
                user.teamId = "";
                await SetUser(user);
            });
        });
    }
}

export const ScanSeekerService = async (userId: string, seekerId: string) => {
    const scanUser = await GetOneUserByUserId(userId);
    if (!scanUser.teamId) return
    const game = await GetOneGameByTeamId(scanUser.teamId);
    const arrestedSeeker = game.seekers.filter((seeker) => seeker.userInfo.userId === seekerId)[0];
    gameAction(game.allUsers, async (userItem) => {
        LinePush(userItem.userId, [{
            type: "text",
            text: `${arrestedSeeker.userInfo.name}が${scanUser.name}に逮捕されました！`,
        }])
    })
    arrestedSeeker.isArrested = true;
    await SetGame(game);
}

export const ScanRescueService = async (userId: string, rescueCode: string) => {
    const user = await GetOneUserByUserId(userId);
    if (!user.teamId) return
    const game = await GetOneGameByTeamId(user.teamId);
    const userName = user.name;
    if (game.rescueCode === rescueCode) {
        game.seekers.forEach((seeker) => {
            seeker.isArrested = false;
        })
        await SetGame(game);
        await gameAction(game.allUsers, async (user) => {
            await LinePush(user.userId, [
                {
                    type: "text",
                    text: `${userName}により全てのシーカーが解放されました！`,
                }
            ]);
        });
    }
}

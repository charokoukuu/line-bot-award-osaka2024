import { LinePush } from "../api/app.api";
import { Status } from "../api/generate";
import { menuListIds } from "../config/secret.config";
import { linkRichMenuToUser } from "../helper/richmenu";
import { gameAction } from "../helper/util";
import { arrestedMessage } from "../messages/arrestedMessage";
import { findTreasureMessage } from "../messages/findTreasureMessage";
import { ownerVictoryMessage } from "../messages/ownerVictoryMessage";
import { rescueMessage } from "../messages/rescueMessage";
import { seekerVictoryMessage } from "../messages/seekerVictoryMessage";
import { GetOneGameByTeamId, GetOneUserByUserId } from "../repository/get.repository";
import { SetGame } from "../repository/set.repository";

export const ScanTreasureService = async (userId: string, treasureId: string) => {
    const user = await GetOneUserByUserId(userId);
    const game = await GetOneGameByTeamId(user.teamId ?? "");
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
            await linkRichMenuToUser(user.userId, menuListIds.home);
        });
    }
}

export const ScanSeekerService = async (userId: string, seekerId: string) => {
    const scanUser = await GetOneUserByUserId(userId);
    if (!scanUser.teamId) return
    const game = await GetOneGameByTeamId(scanUser.teamId);
    const arrestedSeeker = game.seekers.filter((seeker) => seeker.myCode === seekerId)[0];
    arrestedSeeker.isArrested = true;
    await gameAction(game.allUsers, async (userItem) => {
        await LinePush(userItem.userId, [arrestedMessage(arrestedSeeker.userInfo.name, game.seekers.filter((seeker) => seeker.isArrested).length == game.seekers.length)])
    })
    await SetGame(game);
    if (game.seekers.filter((seeker) => seeker.isArrested).length == game.seekers.length) {
        await gameAction(game.allUsers, async (user) => {
            await LinePush(user.userId, [
                ownerVictoryMessage(game.owners.map((owner) => owner.userInfo.name)),
            ]);
            game.status = Status.End;
            await SetGame(game);
            await linkRichMenuToUser(user.userId, menuListIds.home);

        });
    }

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
                rescueMessage(userName)
            ]);
        });
    }
}

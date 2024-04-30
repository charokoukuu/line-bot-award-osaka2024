import { Request, Response } from "express";
import { CreateUserService, SaveHintService, ScheduleService, TeamBuildingService, TeamJoiningService, WebhookService } from "../usecase/set.usecase";
import { PrintQRService, PrintHintService } from "../usecase/print.usecase";
import { LineReply, getUserProfile } from "../api/app.api";
import { ApiQrscanBody, ApiScheduleBody, ApiTeambuildingBody, ApiTeamjoiningBody, User } from "../api/generate";
import { ScanRescueService, ScanSeekerService, ScanTreasureService } from "../usecase/scan.usecase";
import { BeaconService } from "../usecase/beacon.usecase";

export const WebhookController = async (req: Request, res: Response) => {
    const event = req.body.events[0];
    const userId = event.source.userId;
    const replyToken = event.replyToken;
    const user = await getUserProfile(userId);


    try {
        if (event.type === "message") {
            const message = event.message.text;
            console.log(user.displayName, userId, message);
            await WebhookService(userId, message);
        }
        if (event.type === "beacon") {
            await BeaconService(userId);
        }
        res.sendStatus(200);
    } catch (err: any) {
        console.error(err);
        await LineReply(replyToken, [
            {
                type: "text",
                text: err.message,
            },
        ]);
        res.sendStatus(500);
    }
}
export const CreateUserController = async (req: Request, res: Response) => {
    const user = req.body as User;
    try {
        await CreateUserService(user);
        res.sendStatus(200);
    } catch (err) {
        console.error(err);
        res.sendStatus(500);
    }
}

export const SchedulerController = async (req: Request, res: Response) => {
    const schedule = req.body as ApiScheduleBody;
    try {
        await ScheduleService(schedule);
        res.sendStatus(200);
    } catch (err) {
        console.error(err);
        res.sendStatus(500);
    }
}

export const TeamBuildingController = async (req: Request, res: Response) => {
    const teamBuildingData = req.body as ApiTeambuildingBody;
    try {
        const id = await TeamBuildingService(teamBuildingData)
        res.send(id);
    } catch (err) {
        console.error(err);
        res.sendStatus(500);
    }
}

export const TeamJoiningController = async (req: Request, res: Response) => {
    const teamJoiningData = req.body as ApiTeamjoiningBody;
    try {
        await TeamJoiningService(teamJoiningData)
        res.sendStatus(200);
    } catch (err) {
        console.error(err);
        res.sendStatus(500);
    }
}
export const ScanController = async (req: Request, res: Response) => {
    const scanData = req.body as ApiQrscanBody;
    const userId = req.body.userId as string;
    try {
        if (scanData.qrCode.includes(":seeker")) await ScanSeekerService(userId, scanData.qrCode);
        else if (scanData.qrCode.includes(":treasure")) await ScanTreasureService(userId, scanData.qrCode);
        else if (scanData.qrCode.includes(":rescue")) await ScanRescueService(userId, scanData.qrCode);
        else {
            res.sendStatus(500);
            return;
        }
        res.sendStatus(200);
    } catch (err) {
        console.error(err);
        res.sendStatus(500);
    }
}

export const PrintQRController = async (req: Request, res: Response) => {
    const ids = req.body.ids as string[];
    const teamName = req.body.teamName as string;
    try {
        await PrintQRService(teamName, ids)
        res.sendStatus(200);
    } catch (err) {
        console.error(err);
        res.sendStatus(500);
    }
}

export const PrintHintController = async (req: Request, res: Response) => {
    const id = req.body.id as string;
    const text = req.body.text as string;
    try {
        await PrintHintService(id, text)
        res.sendStatus(200);
    } catch (err) {
        console.error(err);
        res.sendStatus(500);
    }
}

export const SaveHintController = async (req: Request, res: Response) => {
    const teamId = req.body.teamId as string;
    const content = req.body.content as string;
    try {
        await SaveHintService(teamId, content)
        res.sendStatus(200);
    } catch (err) {
        console.error(err);
        res.sendStatus(500);
    }
}


import { Request, Response } from "express";
import { CreateUserService, ScheduleService, TeamBuildingService, TeamJoiningService, WebhookService } from "../usecase/set.usecase";
import { PrintQRService, PrintHintService } from "../usecase/print.usecase";
import { User } from "../types/app.type";
import { CreateSchedule, Scan, TeamBuilding, TeamJoining } from "../types/api.type";
import { LineReply, getUserProfile } from "../api/app.api";
import { ScanService } from "../usecase/game.usecase";

export const WebhookController = async (req: Request, res: Response) => {
    const event = req.body.events[0];
    const userId = event.source.userId;
    const message = event.message.text;
    const replyToken = event.replyToken;
    const user = await getUserProfile(userId);

    console.log(user.displayName, userId, message);

    try {
        if (event.type === "message") {
            await WebhookService(userId, message);
        }
        res.sendStatus(200);
    } catch (err: any) {
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
    const schedule = req.body as CreateSchedule;
    try {
        await ScheduleService(schedule);
        res.sendStatus(200);
    } catch (err) {
        console.error(err);
        res.sendStatus(500);
    }
}

export const TeamBuildingController = async (req: Request, res: Response) => {
    const teamBuildingData = req.body as TeamBuilding;
    try {
        const id = await TeamBuildingService(teamBuildingData)
        res.send(id);
    } catch (err) {
        console.error(err);
        res.sendStatus(500);
    }
}

export const TeamJoiningController = async (req: Request, res: Response) => {
    const teamJoiningData = req.body as TeamJoining;
    try {
        await TeamJoiningService(teamJoiningData)
        res.sendStatus(200);
    } catch (err) {
        console.error(err);
        res.sendStatus(500);
    }
}
export const ScanController = async (req: Request, res: Response) => {
    const scanData = req.body as Scan;
    try {
        await ScanService(scanData.userName, scanData.treasureId);
        res.sendStatus(200);
    } catch (err) {
        console.error(err);
        res.sendStatus(500);
    }
}

export const PrintQRController = async (req: Request, res: Response) => {
    const id = req.body.id as string;
    const qrList = req.body.qrList as string[];
    try {
        await PrintQRService(id, qrList)
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


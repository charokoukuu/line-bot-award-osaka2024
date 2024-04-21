import { Request, Response } from "express";
import { CreateUserService, SchedulerService, TeamBuildingService, TeamJoiningService, WebhookService } from "../usecase/set.usecase";
import { PrintQRService, PrintHintService } from "../usecase/print.usecase";
import { Team, User } from "../types/app.type";
import { TeamBuilding, TeamJoining } from "../types/api.type";
import { LinePush, LineReply } from "../api/app.api";

export const WebhookController = async (req: Request, res: Response) => {
    const event = req.body.events[0];
    const userId = event.source.userId;
    const message = event.message.text;
    const replyToken = event.replyToken;
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
    console.log(user);
    try {
        await CreateUserService(user);
        res.sendStatus(200);
    } catch (err) {
        console.error(err);
        res.sendStatus(500);
    }
}

export const SchedulerController = async (req: Request, res: Response) => {
    const delays = JSON.parse(req.body.delays);
    try {
        SchedulerService(delays);
        res.sendStatus(200);
    } catch (err) {
        console.error(err);
        res.sendStatus(500);
    }
}

export const TeamBuildingController = async (req: Request, res: Response) => {
    const teamBuildingData = req.body as TeamBuilding;
    try {
        await TeamBuildingService(teamBuildingData)
        res.sendStatus(200);
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


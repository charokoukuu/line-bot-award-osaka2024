import { Request, Response } from "express";
import { SchedulerService, TeamBuildingService, TeamJoiningService, WebhookService } from "../usecase/app.usecase";
import { Player, TeamInfo } from "../types/app.type";
import { PrintQRService, PrintHintService } from "../usecase/print.usecase";

export const WebhookController = async (req: Request, res: Response) => {
    const event = req.body.events[0];
    const userId = event.source.userId;
    const message = event.message.text;
    try {
        if (message.type === 'text') {
            await WebhookService(userId, message);
        }
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
    const teamInfo = req.body.data.teamInfo as TeamInfo;
    const player = req.body.data.team as Player;
    try {
        await TeamBuildingService(teamInfo, player)
        res.sendStatus(200);
    } catch (err) {
        console.error(err);
        res.sendStatus(500);
    }
}

export const TeamJoiningController = async (req: Request, res: Response) => {
    const id = req.query.id as string;
    const player = req.body.data as Player;
    try {
        await TeamJoiningService(id, player)
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


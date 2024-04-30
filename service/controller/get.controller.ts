import { Request, Response } from 'express';
import { GetAllGamesService, GetAllTeamsService, GetOneGameService, GetOneScannerStatusService, GetOneSeekerService } from '../usecase/get.usecase';
const path = require('path');
export const GetAllTeamsController = async (req: Request, res: Response) => {
    try {
        const teams = await GetAllTeamsService();
        res.send(teams);
    } catch (err) {
        console.error(err);
        res.sendStatus(500);
    }
}
export const GetOneGameController = async (req: Request, res: Response) => {
    const teamId = req.params.teamId;
    try {
        const teams = await GetOneGameService(teamId);
        if (teams === null) {
            res.sendStatus(404);
            return;
        }
        res.send(teams);
    } catch (err) {
        console.error(err);
        res.sendStatus(500);
    }
}
export const GetOneSeekerController = async (req: Request, res: Response) => {
    const userId = req.params.userId;
    try {
        const seeker = await GetOneSeekerService(userId);
        if (seeker === null) {
            res.sendStatus(404);
            return;
        }
        res.send(seeker);
    } catch (err) {
        console.error(err);
        res.sendStatus(500);
    }
}
export const GetOneScannerStatusController = async (req: Request, res: Response) => {
    const userId = req.params.userId as string;
    try {
        const scannerStatus = await GetOneScannerStatusService(userId);
        if (scannerStatus === null) {
            res.sendStatus(404);
            return;
        }
        res.send(scannerStatus);
    } catch (err) {
        console.error(err);
        res.sendStatus(500);
    }
}

import { Request, Response } from 'express';
import { BeaconService } from '../usecase/beacon.usecase';

export const BeaconController = async (req: Request, res: Response) => {
    const userId = req.body.userId as string;
    try {
        await BeaconService(userId);
        res.sendStatus(200);
    } catch (err) {
        console.error(err);
        res.sendStatus(500);
    }
}
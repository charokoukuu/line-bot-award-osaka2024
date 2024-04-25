import { Request, Response } from 'express';
import { GetAllTeamsService } from '../usecase/get.usecase';
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

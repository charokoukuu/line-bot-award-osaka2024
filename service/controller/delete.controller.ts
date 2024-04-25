import { Request, Response } from 'express';
import { DeleteOneTeamService } from '../usecase/delete.usecase';

export const DeleteOneTeamController = async (req: Request, res: Response) => {
    const teamId = req.params.teamId as string;
    try {
        await DeleteOneTeamService(teamId)
        res.sendStatus(200);
    } catch (err) {
        console.error(err);
        res.sendStatus(500);
    }
}
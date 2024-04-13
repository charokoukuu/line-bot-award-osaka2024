import { SetTeamInfo } from "../repository/set.repository";
import { Request, Response } from "express";
export const test = async (req: Request, res: Response) => {
  await setTeamInfo();
  res.sendStatus(200);
  console.log("test");
};

const setTeamInfo = async () => {
  // await SetTeamInfo();
};

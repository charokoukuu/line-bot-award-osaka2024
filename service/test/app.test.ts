import { Request, Response } from "express";
import { LinePush } from "../api/app.api";
import { EXAMPLE_USER_ID } from "../config/app.config";
export const test = async (req: Request, res: Response) => {
  await setTeamInfo();
  LinePush(EXAMPLE_USER_ID, [{
    type: "text",
    text: "test",
  }])
  res.sendStatus(200);
  console.log("test");
};
export const TestService = async () => {
  LinePush(EXAMPLE_USER_ID, [{
    type: "text",
    text: "test",
  }])
};

const setTeamInfo = async () => {
  // await SetTeamInfo();
};

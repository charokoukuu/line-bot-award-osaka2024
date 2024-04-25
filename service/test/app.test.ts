import { Request, Response } from "express";
import { LinePush } from "../api/app.api";
import { EXAMPLE_USER2_ID, EXAMPLE_USER_ID } from "../config/app.config";
import { chatMessage } from "../messages/chatMessage";
import { findTreasureMessage } from "../messages/findTreasureMessage";
import { hintPublishMessage } from "../messages/hintPublishMessage";
import { gameAction } from "../helper/util";
import { User } from "../types/app.type";
import { ownerVictoryMessage } from "../messages/ownerVictoryMessage";
import { playGameMessage } from "../messages/playGameMessage";
import { seekerVictoryMessage } from "../messages/seekerVictoryMessage";
export const test = async (req: Request, res: Response) => {
  const users = [EXAMPLE_USER_ID]
  users.forEach(async (userId) => {
    await LinePush(userId, [playGameMessage(["太郎", "一郎", "二郎", "三郎"], "はやぶさ", 3)])
    // await LinePush(userId, [chatMessage()])
    // await LinePush(userId, [hintPublishMessage()])
    // await LinePush(userId, [findTreasureMessage("なるき", 3)])
    // await LinePush(userId, [ownerVictoryMessage(["二郎"])])
    // await LinePush(userId, [seekerVictoryMessage(["太郎", "一郎", "三郎"])])
  })
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

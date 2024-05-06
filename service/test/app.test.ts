import { Request, Response } from "express";
import { LinePush } from "../api/app.api";
import { chatMessage } from "../messages/chatMessage";
import { findTreasureMessage } from "../messages/findTreasureMessage";
import { hintPublishMessage } from "../messages/hintPublishMessage";
import { gameAction } from "../helper/util";
import { ownerVictoryMessage } from "../messages/ownerVictoryMessage";
import { playGameMessage } from "../messages/playGameMessage";
import { seekerVictoryMessage } from "../messages/seekerVictoryMessage";
import { EXAMPLE_USER_ID } from "../config/secret.config";
import { text } from "stream/consumers";
export const test = async (req: Request, res: Response) => {
  const users = [EXAMPLE_USER_ID]
  users.forEach(async (userId) => {
    await LinePush(userId, [
      chatMessage(),
    ])
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

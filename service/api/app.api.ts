import fetch from "node-fetch";
import {
  LINE_PUSH_ENDPOINT,
  LINE_REPLY_ENDPOINT,
  headers,
} from "../config/app.config";

export const LineReply = async (replyToken: string, content: object[]) => {
  const payload = {
    replyToken: replyToken,
    messages: content,
  }
  await fetch(LINE_REPLY_ENDPOINT, {
    method: "POST",
    headers: headers,
    body: JSON.stringify(payload),
  }).catch((err: any) => {
    console.error(err);
  });
};

export const LinePush = async (replyToken: string, content: object) => {
  const payload = {
    to: replyToken,
    messages: content,
  }
  await fetch(LINE_PUSH_ENDPOINT, {
    method: "POST",
    headers: headers,
    body: JSON.stringify(payload),
  }).catch((err: any) => {
    console.error(err);
  });
};
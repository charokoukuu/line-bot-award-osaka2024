import fetch from "node-fetch";
import {
  LINE_PUSH_ENDPOINT,
  LINE_REPLY_ENDPOINT,
  headers,
} from "../config/app.config";

export const LineReply = async (body: string) => {
  await fetch(LINE_REPLY_ENDPOINT, {
    method: "POST",
    headers: headers,
    body: body,
  }).catch((err: any) => {
    console.error(err);
  });
};

export const LinePush = async (body: string) => {
  await fetch(LINE_PUSH_ENDPOINT, {
    method: "get",
    headers: headers,
    body: body,
  }).catch((err: any) => {
    console.error(err);
  });
};

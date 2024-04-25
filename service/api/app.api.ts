import fetch from "node-fetch";
import {
  LINE_LOADING_ENDPOINT,
  LINE_PROFILE_ENDPOINT,
  LINE_PUSH_ENDPOINT,
  LINE_REPLY_ENDPOINT,
} from "../config/app.config";
import { headers } from "../config/secret.config";

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

export const LinePush = async (userId: string, content: object) => {
  const payload = {
    to: userId,
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


export const publishLoadingMessage = async (userId: string, interval: number) => {

  await fetch(LINE_LOADING_ENDPOINT, {
    method: "POST",
    headers: headers,
    body: JSON.stringify({
      chatId: userId,
      loadingSeconds: interval
    }),
  }).catch((err: any) => {
    console.error(err);
  });
};


interface UserProfile {
  userId: string,
  displayName: string,
  pictureUrl: string,
  statusMessage: string,
  language: string,
}
export const getUserProfile = async (userId: string): Promise<UserProfile> => {
  const response = await fetch(LINE_PROFILE_ENDPOINT + userId, {
    method: "GET",
    headers: headers,
  });
  return response.json() as Promise<UserProfile>;
}

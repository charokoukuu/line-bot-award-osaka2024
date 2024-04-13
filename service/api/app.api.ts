import fetch from "node-fetch";
import { LINE_ENDPOINT, headers } from "../config/app.config";

export const LinePush = async (body: string) => {
  await fetch(LINE_ENDPOINT, {
    method: "POST",
    headers: headers,
    body: body,
  }).catch((err: any) => {
    console.error(err);
  });
};

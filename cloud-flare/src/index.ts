import { Hono } from "hono";
import { env } from 'hono/adapter';
import { db } from "./firebase/config";
import { getStorage, ref, uploadString } from "firebase/storage";

import * as Firestore from 'fireworkers';
const app = new Hono();

app.get("/", (c) => {
  return c.text("Hello Hono2");
});

app.get("/firebase", async (c) => {
  const testData = await Firestore.get(db, 'test', 'UaopzTz1eNy0aCxLwqws');
  return c.json(testData);
});

app.post("/firestorage", async (c) => {
  const storage = getStorage();
  const storageRef = ref(storage, 'actions/hint');
  const data = await c.req.json();
  const { imageData } = data;
  const file = await uploadString(storageRef, imageData, 'base64');
  return c.json(file);
});

app.post("/webhook", async (c) => {
  const data = await c.req.json();
  const events = data.events;
  const { LINE_TOKEN } = env<{ LINE_TOKEN: string; }>(c);
  const TOKEN = LINE_TOKEN;

  if (events[0].type === "message") {
    const dataString = JSON.stringify({
      replyToken: events[0].replyToken,
      messages: [
        {
          type: "text",
          text: "神神神神神神神神神神神神神神神神",
        },
        {
          type: "text",
          text: "えーと、神はここにいたと。",
        },
      ],
    });

    const headers = {
      "Content-Type": "application/json",
      Authorization: "Bearer " + TOKEN,
    };

    await fetch("https://api.line.me/v2/bot/message/reply", {
      method: "POST",
      headers: headers,
      body: dataString,
    }).catch((err) => {
      console.error(err);
    });
  }
  return c.text("Hello Hono2");
});

export default app;

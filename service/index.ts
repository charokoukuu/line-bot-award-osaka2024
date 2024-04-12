const express = require("express");
import { host } from "./messages/message";
import { Status } from "./types/user.type";
const app = express();
const port = 8080;

const message = [];

let status: Status = "null";
let i = 0;
app.use(express.json()); // JSON データをパースするための middleware を追加
app.post("/webhook", async (req: any, res: any) => {
  console.log("webhook");
  const TOKEN =
    "Q3hlVC6gp5nUVTrImu2DtL3OUYNfqnERD7gQaM8PNg+vE974TO+zcBC7jeV0iUsN2Kg4S6dqjYWy6trfb1V8tym2zjWMhXeQw7YpT4LHtU4AR2JpNU5sjwdFPVTt0ht/llK/OCC2h3nofQoNSwTHzQdB04t89/1O/w1cDnyilFU=";
  if (req.body.events[0].type === "message") {
    const dataString = JSON.stringify({
      replyToken: req.body.events[0].replyToken,
      messages: [host[i]],
    });
    i++;
    const headers = {
      "Content-Type": "application/json",
      Authorization: "Bearer " + TOKEN,
    };

    await fetch("https://api.line.me/v2/bot/message/reply", {
      method: "POST",
      headers: headers,
      body: dataString,
    }).catch((err: any) => {
      console.error(err);
    });
  }
  res.sendStatus(200); // レスポンスを送信
});

app.post("/neko", (req: any, res: any) => {
  console.log("neko");
  res.sendStatus(200); // レスポンスを送信
});
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});

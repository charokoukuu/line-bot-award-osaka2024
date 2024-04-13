import { LineReply } from "../api/app.api";
import { headers } from "../config/app.config";
import { Data } from "../domain/app.model";
import { host } from "../messages/message";

export const webhook = async (req: any, res: any) => {
  if (req.body.events[0].type === "message") {
    const dataString = JSON.stringify({
      replyToken: req.body.events[0].replyToken,
      messages: [host[Data.status]],
    });
    await LineReply(dataString);
    Data.status++;
  }
  res.sendStatus(200);
};

export const scheduler = async (req: any, res: any) => {
  const delays = [5, 10, 15];
  console.log("スタート");
  res.sendStatus(200);

  await Promise.all(
    delays.map(
      (delay) =>
        new Promise((resolve) =>
          setTimeout(async () => {
            console.log("時間だよ");
            resolve("done");
          }, delay * 1000)
        )
    )
  );
};

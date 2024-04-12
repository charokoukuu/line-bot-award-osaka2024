import { Hono } from "hono";

const app = new Hono();

app.get("/", (c) => {
  return c.text("Hello Hono2");
});

app.post("/webhook", async (c) => {
  const data = await c.req.json();
  const events = data.events;
  const TOKEN =
    "Q3hlVC6gp5nUVTrImu2DtL3OUYNfqnERD7gQaM8PNg+vE974TO+zcBC7jeV0iUsN2Kg4S6dqjYWy6trfb1V8tym2zjWMhXeQw7YpT4LHtU4AR2JpNU5sjwdFPVTt0ht/llK/OCC2h3nofQoNSwTHzQdB04t89/1O/w1cDnyilFU=";
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

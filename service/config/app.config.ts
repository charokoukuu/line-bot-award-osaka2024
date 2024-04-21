export const MONGODB_URI = "mongodb://username:password@localhost:27017/";

export const TOKEN =
  "Q3hlVC6gp5nUVTrImu2DtL3OUYNfqnERD7gQaM8PNg+vE974TO+zcBC7jeV0iUsN2Kg4S6dqjYWy6trfb1V8tym2zjWMhXeQw7YpT4LHtU4AR2JpNU5sjwdFPVTt0ht/llK/OCC2h3nofQoNSwTHzQdB04t89/1O/w1cDnyilFU=";
export const headers = {
  "Content-Type": "application/json",
  Authorization: "Bearer " + TOKEN,
};

// LINE Messaging API
export const LINE_REPLY_ENDPOINT = "https://api.line.me/v2/bot/message/reply";
export const LINE_PUSH_ENDPOINT = "https://api.line.me/v2/bot/message/push";
export const EXAMPLE_USER_ID = "U70cf21cbf9a12773b140cf16d05d181e";

// Printer API
export const POS_QR_ENDPOINT = "https://pos.run-ticket.com/qr";
export const POS_HINT_ENDPOINT = "https://pos.run-ticket.com/hint";
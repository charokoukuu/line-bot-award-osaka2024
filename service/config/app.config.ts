export const MONGODB_URI = "mongodb://username:password@localhost:27017/";

export const TOKEN = "j9xeuDbnPHVE2LBwWHekqQm0fAc1MdK6W4wCStLd7qBQ7pMWUUbB+hbV5AIkxzucs6QsD+0f8O/bvysKaylASnSb51MhZekiTHI2FJd5V3tbnZWZIn1BK4mmY7FB02EE9CgTZWc2gHEmONBqHafs0gdB04t89/1O/w1cDnyilFU=";

export const headers = {
  "Content-Type": "application/json",
  Authorization: "Bearer " + TOKEN,
};

// LINE Messaging API
export const LINE_REPLY_ENDPOINT = "https://api.line.me/v2/bot/message/reply";
export const LINE_PUSH_ENDPOINT = "https://api.line.me/v2/bot/message/push/";
export const LINE_LOADING_ENDPOINT = "https://api.line.me/v2/bot/chat/loading/start";
export const LINE_PROFILE_ENDPOINT = "https://api.line.me/v2/bot/profile/";
export const EXAMPLE_USER_ID = "Ua937d31d25c6cc3f75c52404504742ad";
export const EXAMPLE_USER2_ID = "Uba0b0e088c1a2c006a60ecad5a05f79c";

// Printer API
export const POS_QR_ENDPOINT = "https://pos.run-ticket.com/qr";
export const POS_HINT_ENDPOINT = "https://pos.run-ticket.com/hint";
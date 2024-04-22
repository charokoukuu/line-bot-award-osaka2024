export const MONGODB_URI = "mongodb://username:password@localhost:27017/";

export const TOKEN = "OPnAr0dKA7et6/9zpIEhqdF6WDmR5kzlNnOUkDadQGP30szmXFLDJZivMWahNv8d7/FSOgOQJ4ffjHuMH99YHvPHZeHyeTPdwbnVlQiU+rreQH0IhZwaJlzrwBS1PjehLZiSWqcoI54IUyc8NlV8TgdB04t89/1O/w1cDnyilFU=";

export const headers = {
  "Content-Type": "application/json",
  Authorization: "Bearer " + TOKEN,
};

// LINE Messaging API
export const LINE_REPLY_ENDPOINT = "https://api.line.me/v2/bot/message/reply";
export const LINE_PUSH_ENDPOINT = "https://api.line.me/v2/bot/message/push";
export const LINE_PROFILE_ENDPOINT = "https://api.line.me/v2/bot/profile/";
export const EXAMPLE_USER_ID = "U13c50130aec615fa42b514f8676589b9";

// Printer API
export const POS_QR_ENDPOINT = "https://pos.run-ticket.com/qr";
export const POS_HINT_ENDPOINT = "https://pos.run-ticket.com/hint";
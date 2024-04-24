export const MONGODB_URI = "mongodb://username:password@localhost:27017/";

export const TOKEN = "Fx9d05C3L1VFbsvUTpnFoz9vukipI+Y3pCCG07QlOGt+hBJCYD7ZKR29+01B/BXRxqRwYj7DoTrXi/A45dpZrplgrJy9xcccG/Uie1kUXZPkSuuLhHhRN3Up6gHjm1iIOgAONiAa7x7pNYcUzHNMIwdB04t89/1O/w1cDnyilFU=";

export const headers = {
  "Content-Type": "application/json",
  Authorization: "Bearer " + TOKEN,
};

// LINE Messaging API
export const LINE_REPLY_ENDPOINT = "https://api.line.me/v2/bot/message/reply";
export const LINE_PUSH_ENDPOINT = "https://api.line.me/v2/bot/message/push/";
export const LINE_PROFILE_ENDPOINT = "https://api.line.me/v2/bot/profile/";
export const EXAMPLE_USER_ID = "Ube037b651e73ad77df65430d33464755";
export const EXAMPLE_USER2_ID = "Uba0b0e088c1a2c006a60ecad5a05f79c";

// Printer API
export const POS_QR_ENDPOINT = "https://pos.run-ticket.com/qr";
export const POS_HINT_ENDPOINT = "https://pos.run-ticket.com/hint";
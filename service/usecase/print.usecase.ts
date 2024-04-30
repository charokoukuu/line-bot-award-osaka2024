import { LinePush } from "../api/app.api";
import { User } from "../api/generate";
import { POS_HINT_ENDPOINT, POS_QR_ENDPOINT } from "../config/app.config";
import { encodePNGToBase64, hintImageGenerator, qrImageGenerator } from "../helper/print";
import { gameAction } from "../helper/util";
import { hintPublishMessage } from "../messages/hintPublishMessage";


export const PrintQRService = async (teamName: string, ids: string[]) => {
  await Promise.all(
    ids.map(async (id) => {
      qrImageGenerator(teamName, id);
      const base64 = encodePNGToBase64("1", "qr") as string;
      console.log(id);
      await fetch(POS_QR_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: id,
          base64: base64,
        }),
      }).catch((err) => {
        console.error(err);
      });
    }));
};

export const PrintHintService = async (id: string, text: string, users: User[]) => {
  await hintImageGenerator(id, text);
  const base64 = encodePNGToBase64(id, "hint") as string
  console.log("request");
  const res = await fetch(POS_HINT_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      id: id,
      base64: base64,
    }),
  });

  await gameAction(users, async (user) => {
    await LinePush(user.userId, [hintPublishMessage()]);
  });
  console.log(res);
};

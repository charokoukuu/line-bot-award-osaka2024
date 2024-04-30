import { POS_HINT_ENDPOINT, POS_QR_ENDPOINT } from "../config/app.config";
import { encodePNGToBase64, hintImageGenerator, qrImageGenerator } from "../helper/print";


export const PrintQRService = async (groupName: string, ids: string[]) => {
  await Promise.all(
    ids.map(async (id) => {
      await qrImageGenerator(groupName, id);
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
      });
    }));
};

export const PrintHintService = async (id: string, text: string) => {
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
  console.log(res);
};

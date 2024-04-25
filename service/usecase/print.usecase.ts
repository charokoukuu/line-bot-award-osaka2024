import { POS_HINT_ENDPOINT, POS_QR_ENDPOINT } from "../config/app.config";
import { encodePNGToBase64, hintPrint } from "../helper/print";


export const PrintQRService = async (id: string, qrList: string[]) => {
  const base64 = encodePNGToBase64("1", "qr") as string;
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
};

export const PrintHintService = async (id: string, text: string) => {
  await hintPrint(id, text);
  const base64 = encodePNGToBase64(id, "hint") as string;
  await fetch(POS_HINT_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      id: id,
      base64: base64,
    }),
  });
};

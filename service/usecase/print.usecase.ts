import { Request, Response } from "express";
import { encodePNGToBase64, hintPrint } from "../helper/print";

export const HintPrintService = async (req: Request, res: Response) => {
  const id = req.query.id as string;
  await hintPrint(id, req.query.text as string);
  const base64 = encodePNGToBase64(id) as string;
  await fetch("https://pos.run-ticket.com/hint?name=2", {
    method: "POST",
    headers: {
      "Content-Type": "application/json", // Content-Typeを設定
    },
    body: JSON.stringify({
      id: id,
      base64: base64,
    }),
  });
  // アップロードする処理
  res.status(200).send("HintPrintService");
};

export const QrcodeService = async (req: Request, res: Response) => {
  const id = req.query.id as string;
  await hintPrint(id, req.query.text as string);
  const base64 = encodePNGToBase64(id) as string;
  console.log(base64);
  // アップロードする処理
  res.status(200).send("HintPrintService");
};

import { Request, Response } from "express";
import {
  decodeBase64ToPNG,
  encodePNGToBase64,
  hintPrint,
} from "../helper/print";

export const HintPrintService = async (req: Request, res: Response) => {
  const id = req.query.id as string;
  await hintPrint(id, req.query.text as string);
  const base64 = encodePNGToBase64(id) as string;
  console.log(base64);
  // アップロードする処理
  res.status(200).send("HintPrintService");
};

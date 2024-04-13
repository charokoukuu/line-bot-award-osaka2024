import { Request, Response } from "express";
import { hintPrint } from "../helper/print";

export const HintPrintService = async (req: Request, res: Response) => {
  await hintPrint(req.query.id as string, req.query.text as string);
  // アップロードする処理
  res.status(200).send("HintPrintService");
};

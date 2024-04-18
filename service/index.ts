const express = require("express");
import { Status } from "./types/app.type";
import {
  TeamBuildingService as TeamBuildingService,
  SchedulerService as SchedulerService,
  WebhookService as WebhookService,
  TeamJoiningService,
} from "./usecase/app.usecase";
const app = express();
const port = 8080;
import mongoose from "mongoose";
import { test } from "./test/app.test";
import { hintPrint } from "./helper/print";
import {
  HintPrintService,
  QRCodeService as QRGenerateService,
} from "./usecase/print.usecase";
const status: Status = Status.NULL;

mongoose.connect("mongodb://username:password@localhost:27017/");

app.use(express.json());

//Messaging API
app.post("/webhook", WebhookService);

//スケジューラ
app.get("/scheduler", SchedulerService);

//チーム登録
app.post("/team-building", TeamBuildingService);
app.post("/team-joining", TeamJoiningService);

//プリントサービス
app.get("/qr-generate", QRGenerateService);
app.get("/hint-print", HintPrintService);

// テスト用
app.get("/test", test);

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});

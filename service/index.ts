const express = require("express");
import { Status } from "./types/app.type";
const app = express();
const port = 8080;
import mongoose from "mongoose";
import { test } from "./test/app.test";
import { hintPrint } from "./helper/print";
import {
  PrintHintService,
} from "./usecase/print.usecase";
import { PrintQRController, SchedulerController, TeamBuildingController, TeamJoiningController, WebhookController } from "./controller/app.controller";
const status: Status = Status.NONE;

mongoose.connect("mongodb://username:password@localhost:27017/");

app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

//Messaging API
app.post("/webhook", WebhookController);

//スケジューラ
app.post("/scheduler", SchedulerController);

//チーム登録
app.post("/team-building", TeamBuildingController);
app.post("/team-joining", TeamJoiningController);

//プリントサービス
app.get("/create-qr", PrintQRController);
app.get("/hint-print", PrintHintService);

// テスト用
app.get("/test", test);

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});

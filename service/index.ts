const express = require("express");
import { Status, TeamInfo, TeamInfoSchema } from "./types/app.type";
import {
  TeamBuilding as TeamBuildingService,
  scheduler as schedulerService,
  webhook as webhookService,
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

app.post("/webhook", webhookService);

app.get("/scheduler", schedulerService);
app.get("/team-building", TeamBuildingService);

app.get("/qr-generate", QRGenerateService);
app.get("/hint-print", HintPrintService);

app.get("/test", test);
console.log("status", status);
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});

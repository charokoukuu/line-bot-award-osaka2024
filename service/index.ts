const express = require("express");
import { Status, TeamInfo, TeamInfoSchema } from "./types/app.type";
import { TeamBuilding, scheduler, webhook } from "./usecase/app.usecase";
const app = express();
const port = 8080;
import mongoose from "mongoose";
import { test } from "./test/app.test";
const status: Status = Status.NULL;

mongoose.connect("mongodb://username:password@localhost:27017/");

app.use(express.json());

app.post("/webhook", webhook);
app.get("/scheduler", scheduler);
app.get("/team-building", TeamBuilding);

app.get("/test", test);

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});

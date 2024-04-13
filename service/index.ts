const express = require("express");
import { Status } from "./types/user.type";
import { TeamBuilding, scheduler, webhook } from "./usecase/app.usecase";
const app = express();
const port = 8080;
const message = [];
import mongoose from "mongoose";

const status: Status = Status.NULL;

mongoose.connect("mongodb://localhost:27017/mydatabase");

app.use(express.json());

app.post("/webhook", webhook);
app.get("/scheduler", scheduler);
app.get("/team-building", TeamBuilding);

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});

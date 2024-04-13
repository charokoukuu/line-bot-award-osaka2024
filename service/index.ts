const express = require("express");
import { Status } from "./types/user.type";
import { scheduler, webhook } from "./usecase/app.usecase";
const app = express();
const port = 8080;
const message = [];

let status: Status = Status.NULL;

app.use(express.json());

app.post("/webhook", webhook);
app.get("/scheduler", scheduler);

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});

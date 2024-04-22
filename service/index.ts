const express = require("express");
import mongoose from "mongoose";
import { MONGODB_URI } from "./config/app.config";
import { CronMethods, GetMethods, PostMethods } from "./method";
export const app = express();
mongoose.connect(MONGODB_URI);


app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

GetMethods();
PostMethods();
CronMethods()
const port = 8080;
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});

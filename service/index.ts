const express = require("express");
import mongoose from "mongoose";
import { MONGODB_URI } from "./config/app.config";
import { CronMethods, GetMethods, PostMethods } from "./method";
import { DeleteMethods } from "./method/app.delete";
export const app = express();
const cors = require('cors')
app.use(cors());
mongoose.connect(MONGODB_URI);


app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

GetMethods();
PostMethods();
CronMethods()
const port = 4000;
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});

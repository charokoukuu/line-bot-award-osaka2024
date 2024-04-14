import { cut, ticketing } from "./helper";
import { Request, Response } from "express";
const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.post("/ticketing", (req: Request, res: Response) => {
  const data = req.body;
  ticketing(data.id, data.title, data.date, data.time);
});

app.get("/cut", (req: Request, res: Response) => {
  cut();
});

app.listen(8082, () => {
  console.log("Server listening at http://localhost:8082");
});

// export const downloadImg = async (id: string) => {
//   const bucket = admin.storage().bucket();
//   await bucket
//     .file(`${id}.png`)
//     .download({
//       destination: `/home/kiosk/line-bot-award-osaka2024/printer/src/image/${id}.png`,
//     });

//   console.log(
//     `gs://line-bot-award-osaka2024.appspot.com/id/${id}.png downloaded to ./work/${id}.png.`
//   );
// };

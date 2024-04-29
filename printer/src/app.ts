import { cut, ticketing } from "./helper";
import { Request, Response } from "express";
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.json({ limit: '500mb' }));
app.use(bodyParser.urlencoded({ limit: '500mb', extended: true }));


interface hintType {
  id: string;
  base64: string;
}


app.post("/hint", (req: Request, res: Response) => {
  const data = req.body as hintType;
  console.log(data)
  ticketing(data.id, data.base64, "hint");
  res.send(200);
});
app.post("/qr", async (req: Request, res: Response) => {
  const data = req.body as hintType;
  console.log(data)
  await ticketing(data.id, data.base64, "treasure");
  res.send(200);
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

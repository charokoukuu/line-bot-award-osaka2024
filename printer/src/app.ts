import { cut, ticketing } from "./helper";
import { TicketSubscribeTypes } from "./types";
const admin = require("firebase-admin");
const { getFirestore } = require("firebase-admin/firestore");
var serviceAccount = require("../serviceAccountKey.json");
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  storageBucket: "gs://line-bot-award-osaka2024.appspot.com",
});
export const db = getFirestore();
const doc = db.collection("system").doc("subscriber");
let isSecond = false;
console.log("aaa")
doc.onSnapshot(
  async (docSnapshot: any) => {
    const data = docSnapshot.data() as TicketSubscribeTypes;
    if (isSecond && (data.status === "scanned" || data.status === "failed")) {

      await downloadImg(data.id);
      console.log(
        `Received doc snapshot: ${JSON.stringify(docSnapshot.data())}`
      );
      data.id === "cut"
        ? cut()
        :
        ticketing(data.id, data.title, data.date, data.time);

    }
    isSecond = true;
  },
  (err: any) => {
    console.log(`Encountered error: ${err}`);
  }
);

export const downloadImg = async (id: string) => {
  const bucket = admin.storage().bucket();
  await bucket
    .file(`${id}.png`)
    .download({
      destination: `/home/kiosk/line-bot-award-osaka2024/printer/src/image/${id}.png`,
    });

  console.log(
    `gs://line-bot-award-osaka2024.appspot.com/id/${id}.png downloaded to ./work/${id}.png.`
  );
};
import { cut, ticketing } from "./helper";
import { TicketSubscribeTypes } from "./types";
var admin = require("firebase-admin");
const { getFirestore } = require("firebase-admin/firestore");
var serviceAccount = require("../serviceAccountKey.json");
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});
export const db = getFirestore();
const doc = db.collection("system").doc("subscriber");
let isSecond = false;
doc.onSnapshot(
  (docSnapshot: any) => {
    const data = docSnapshot.data() as TicketSubscribeTypes;
    if (isSecond && (data.status === "scanned" || data.status === "failed")) {
      console.log(
        `Received doc snapshot: ${JSON.stringify(docSnapshot.data())}`
      );
      data.id === "cut"
        ? cut()
        : data.status === "scanned" &&
          ticketing(data.id, data.title, data.date, data.time);
    }
    isSecond = true;
  },
  (err: any) => {
    console.log(`Encountered error: ${err}`);
  }
);

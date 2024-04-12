"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.db = void 0;
const helper_1 = require("./helper");
var admin = require("firebase-admin");
const { getFirestore } = require("firebase-admin/firestore");
var serviceAccount = require("../serviceAccountKey.json");
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
});
exports.db = getFirestore();
const doc = exports.db.collection("system").doc("subscriber");
let isSecond = false;
doc.onSnapshot((docSnapshot) => {
    const data = docSnapshot.data();
    if (isSecond && (data.status === "scanned" || data.status === "failed")) {
        console.log(`Received doc snapshot: ${JSON.stringify(docSnapshot.data())}`);
        data.id === "cut"
            ? (0, helper_1.cut)()
            : data.status === "scanned" &&
                (0, helper_1.ticketing)(data.id, data.title, data.date, data.time);
    }
    isSecond = true;
}, (err) => {
    console.log(`Encountered error: ${err}`);
});

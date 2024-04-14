import { db } from "./app";

const { exec } = require("child_process");
const path = "/home/kiosk/line-bot-award-osaka2024/printer/src";
// const path = ".";
export const ticketing = (
  id: string,
  title: string,
  date: string,
  time: string
) => {
  exec(
    `python3 ${path}/pos.py ${id}`,
    async (err: any, _: any, stderr: any) => {
      if (err) {
        const ticketSubscriber = db.collection("system").doc("subscriber");
        await ticketSubscriber.update({ status: "failed" });
        throw new Error(`stderr: ${stderr}`);
      } else {
        const order = db.collection("order").doc(id);
        await order.update({ isStatus: "complete" });
        const ticketSubscriber = db.collection("system").doc("subscriber");
        await ticketSubscriber.update({ status: "success" });
        console.log(`success`);
      }
    }
  );
};
export const cut = () => {
  exec(`python3 ${path}/cut.py`, (err: any, stdout: any, stderr: any) => {
    if (err) {
      console.log(`stderr: ${stderr}`);
      return;
    }
    console.log(`stdout: ${stdout}`);
  });
};

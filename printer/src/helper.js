"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.cut = exports.ticketing = void 0;
const app_1 = require("./app");
const { exec } = require("child_process");
const path = "/home/kiosk/RunTicket/printer/src";
// const path = ".";
const ticketing = (id, title, date, time) => {
    exec(`python3 ${path}/pos.py "${title}" ${date} ${time} ${id}`, (err, _, stderr) => __awaiter(void 0, void 0, void 0, function* () {
        if (err) {
            const ticketSubscriber = app_1.db.collection("system").doc("subscriber");
            yield ticketSubscriber.update({ status: "failed" });
            throw new Error(`stderr: ${stderr}`);
        }
        else {
            const order = app_1.db.collection("order").doc(id);
            yield order.update({ isStatus: "complete" });
            const ticketSubscriber = app_1.db.collection("system").doc("subscriber");
            yield ticketSubscriber.update({ status: "success" });
            console.log(`success`);
        }
    }));
};
exports.ticketing = ticketing;
const cut = () => {
    exec(`python3 ${path}/cut.py`, (err, stdout, stderr) => {
        if (err) {
            console.log(`stderr: ${stderr}`);
            return;
        }
        console.log(`stdout: ${stdout}`);
    });
};
exports.cut = cut;

const fs = require("fs");
const { exec } = require("child_process");
import { writeFile } from "fs/promises";

export const hintPrint = (id: string, hint: string): Promise<void> => {
  return new Promise((resolve, reject) => {
    const json = JSON.stringify({
      text: hint,
    });

    writeFile("typst/hint/hint.json", json, "utf8")
      .then(() => {
        exec(
          `cd typst/hint && pwd && typst compile main.typ ${id}.png`,
          (error: any, stdout: any, stderr: any) => {
            if (error) {
              console.error(`エラーが発生しました: ${error}`);
              reject(error);
              return;
            }
            console.log(`stdout: ${stdout}`);
            console.error(`stderr: ${stderr}`);
            resolve();
          }
        );
      })
      .catch((error) => {
        console.error(`ファイルの書き込み中にエラーが発生しました: ${error}`);
        reject(error);
      });
  });
};

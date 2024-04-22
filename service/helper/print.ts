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

export const qrPrint = (id: string, qr: string[]): Promise<void> => {
  return new Promise((resolve, reject) => {
    const json = JSON.stringify({
      groupName: id,
      qr: ["BoTreasure"],
    });

    writeFile("typst/qr/qr.json", json, "utf8")
      .then(() => {
        exec(
          `cd typst/qr && pwd && typst compile main.typ {n}.png`,
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

export const encodePNGToBase64 = (
  fileName: string,
  key: string
): string | null => {
  try {
    const fileData = fs.readFileSync(`typst/${key}/${fileName}.png`);
    const base64Data = fileData.toString("base64");
    const dataURL = `data:image/png;base64,${base64Data}`;
    return dataURL;
  } catch (error) {
    console.error("Error encoding PNG to Base64:", error);
    return null;
  }
};

export const decodeBase64ToPNG = (
  base64String: string,
  outputPath: string
): boolean => {
  try {
    const base64Data = base64String.replace(/^data:image\/png;base64,/, "");
    const buffer = Buffer.from(base64Data, "base64");
    fs.writeFileSync(outputPath, buffer);
    console.log("PNG image decoded successfully.");
    return true;
  } catch (error) {
    console.error("Error decoding Base64 to PNG:", error);
    return false;
  }
};

const fs = require("fs");
const { execSync } = require("child_process");
import { writeFileSync } from "fs";

export const hintImageGenerator = (id: string, base64String: string) => {
  decodeBase64ToImage(base64String, `typst/hint/img/hint.jpg`)
  execSync(
    `cd typst/hint && pwd && typst compile main.typ ${id}.png`)
};

export const qrImageGenerator = (teamName: string, id: string) => {
  const json = JSON.stringify({
    groupName: teamName,
    qr: [id],
  });

  writeFileSync("typst/qr/qr.json", json, "utf8")
  execSync(`cd typst/qr && typst compile main.typ 1.png`);
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

export const decodeBase64ToImage = (
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

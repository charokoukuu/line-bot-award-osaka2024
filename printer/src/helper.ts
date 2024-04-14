const { exec } = require("child_process");
const path = "/home/kiosk/line-bot-award-osaka2024/printer/src";

const fs = require("fs");
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
        throw new Error(`stderr: ${stderr}`);
      } else {
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

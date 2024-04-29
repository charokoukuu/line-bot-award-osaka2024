const { exec, execSync } = require("child_process");
const path = "/home/kiosk/line-bot-award-osaka2024/printer/src";

const fs = require("fs");
// const path = ".";
export const ticketing = async (
  id: string,
  base64: string,
  key: "hint" | "treasure"
) => {
  decodeBase64ToPNG(base64, `image/${id}_${key}.png`);
  const stdout = execSync(`python3 ${path}/pos.py ${id}_${key}`);
  console.log(stdout);

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

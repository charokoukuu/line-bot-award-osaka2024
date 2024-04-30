import { User } from "../api/generate";

export const reply = (token: string, content: any) => {
  return JSON.stringify({
    replyToken: token,
    messages: [content],
  });
};

export const gameAction = async (
  user: User[],
  callback: (user: User) => Promise<void>
) => {
  return Promise.all(user.map((user) => {
    return new Promise(async (resolve) => {
      await callback(user);
      resolve("done");
    });
  }));
};

export const createRandomString = () => {
  return Math.random().toString(32).substring(2);
};


export const displayJob = (job: string) => {
  switch (job) {
    case "owner":
      return "オーナー";
    case "seeker":
      return "シーカー";
  }
}


export const blobToBase64 = async (blob: Blob): Promise<string> => {
  const arrayBuffer = await blob.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);
  return buffer.toString("base64");
}
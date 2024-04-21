import { User } from "../types/app.type";

export const reply = (token: string, content: any) => {
  return JSON.stringify({
    replyToken: token,
    messages: [content],
  });
};

export const gameAction = async (
  user: User,
  callback: { owner: () => void; seeker: () => void }
) => {
  if (user.gameType === "owner") {
    await callback.owner();
  } else if (user.gameType === "seeker") {
    callback.seeker();
  }
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
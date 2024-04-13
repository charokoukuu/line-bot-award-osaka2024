import { Player } from "../types/app.type";

export const reply = (token: string, content: any) => {
  return JSON.stringify({
    replyToken: token,
    messages: [content],
  });
};

export const gameAction = (
  player: Player,
  callback: { owner: () => void; seeker: () => void }
) => {
  if (player.gameType === "owner") {
    callback.owner();
  } else if (player.gameType === "seeker") {
    callback.seeker();
  }
};

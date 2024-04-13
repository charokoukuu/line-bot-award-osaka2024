export const reply = (token: string, content: any) => {
  return JSON.stringify({
    replyToken: token,
    messages: [content],
  });
};

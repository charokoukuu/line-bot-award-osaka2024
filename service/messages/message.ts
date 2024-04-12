export const start = {
  type: "buttons",
  thumbnailImageUrl:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMhaPVqYvOqeaaJiW5a78fLqTpRKyI236xvdxnOUHFSw&s",
  title: "Treasure Hunter",
  text: "さぁ、ゲームを始めましょう！",
  actions: [
    {
      type: "message",
      label: "部屋を作成する",
      text: "アクション 1",
    },
    {
      type: "message",
      label: "部屋に参加する",
      text: "アクション 2",
    },
  ],
};

export const host = [
  {
    type: "text",
    text: "何人でプレイしますか？",
  },
  {
    type: "text",
    text: "ハンターの人数を入力してください(ex:3)",
  },
  {
    type: "text",
    text: "合言葉を入力してください",
  },
  {
    type: "text",
    text: "部屋作成が完了しました",
  },
  {
    type: "text",
    text: "全員が集まりました！ゲームを開始しますか？",
  },
  {
    type: "text",
    text: "あなたの職業はハンターです",
  },
];

export const guest = [
  {
    type: "text",
    text: "合言葉を入力してください",
  },
  {
    type: "text",
    text: "参加しました！",
  },
  {
    type: "text",
    text: "あなたの職業はトレジャーです",
  },
];

export const play = [
  {
    type: "text",
    text: "それではゲームの始まりです！Let’s Start！！",
  },
];

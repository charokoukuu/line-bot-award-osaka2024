interface navigationItemProps {
  name: string;
  path: string;
}

export const navigationItem: navigationItemProps[] = [
  {
    name: "ホーム",
    path: "/",
  },
  {
    name: "利用規約",
    path: "/terms",
  },
  {
    name: "プライバシーポリシー",
    path: "/privacy",
  },
  {
    name: "お問い合わせ",
    // path: "/contact",
    path: "https://docs.google.com/forms/d/e/1FAIpQLSfRRIK0WBAoMt_WN3RAKbP598LZOQAhsOrIQu8O7eAZE81x1Q/viewform",
  },
];

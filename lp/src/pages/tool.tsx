import ReactMarkdown from "react-markdown";

const markdown = `
# 技術スタック
- [TypeScript](https://www.typescriptlang.org/)
- [Next.js](https://nextjs.org/)
- [Vercel](https://vercel.com/)
- [Typst](https://typst.app/)
- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/)
- [Cloudflare Zero Trust](https://www.cloudflare.com/ja-jp/products/zero-trust/zero-trust-network-access/)
- Raspberry Pi 4
- Thermal Printer

# システム構成

![system](https://firebasestorage.googleapis.com/v0/b/line-bot-award-osaka2024.appspot.com/o/assets%2Fsystem.drawio.svg?alt=media&token=b7b7b681-4ed7-4916-a189-f739a478fa38)

# シーケンス図

![test](https://firebasestorage.googleapis.com/v0/b/line-bot-award-osaka2024.appspot.com/o/assets%2Fflow.svg?alt=media&token=9cd0d5d5-6808-42c1-a45c-5f69d9b1afc1)
`;
export default function Tool() {
  return (
    <main className="prose mx-auto max-w-5xl bg-white p-4 prose-headings:my-6 prose-headings:font-semibold prose-headings:text-black prose-h1:text-5xl prose-h2:text-4xl prose-h3:text-3xl prose-h4:text-2xl prose-h5:text-xl prose-h6:text-lg">
      <ReactMarkdown>{markdown}</ReactMarkdown>
    </main>
  );
}

import ReactMarkdown from "react-markdown";

const markdown = `
# 技術スタック
- TypeScript/Next.js
- Vercel
- Raspberry Pi
- Thermal Printer
- Typst

# システム構成

![test](https://source.unsplash.com/random)

# シーケンス図

![test](https://source.unsplash.com/random)


`;
export default function Tool() {
  return (
    <main className="prose mx-auto max-w-5xl bg-white p-4 prose-headings:my-6 prose-headings:font-semibold prose-headings:text-black prose-h1:text-5xl prose-h2:text-4xl prose-h3:text-3xl prose-h4:text-2xl prose-h5:text-xl prose-h6:text-lg">
      <ReactMarkdown>{markdown}</ReactMarkdown>
    </main>
  );
}

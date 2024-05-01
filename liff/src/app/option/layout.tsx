import { LiffProvider } from "@/components/LiffProvider";

export default function OptionLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="prose prose-headings:mt-8 prose-headings:font-semibold prose-headings:text-black prose-h1:text-5xl prose-h2:text-4xl prose-h3:text-3xl prose-h4:text-2xl prose-h5:text-xl prose-h6:text-lg dark:prose-headings:text-white">
      <LiffProvider liffId={process.env.NEXT_PUBLIC_LIFF_ID_OPTION || ""}>
        {children}
      </LiffProvider>
    </section>
  );
}

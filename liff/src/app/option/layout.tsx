import { LiffProvider } from "@/components/LiffProvider";

export default function OptionLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="p-4 prose prose-headings:my-6 prose-headings:font-semibold prose-headings:text-black prose-h1:text-5xl prose-h2:text-4xl prose-h3:text-3xl prose-h4:text-2xl prose-h5:text-xl prose-h6:text-lg">
      <LiffProvider liffId={process.env.NEXT_PUBLIC_LIFF_ID_OPTION || ""}>
        {children}
      </LiffProvider>
    </section>
  );
}

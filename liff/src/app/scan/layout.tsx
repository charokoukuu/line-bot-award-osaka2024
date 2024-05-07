import { LiffProvider } from "@/components/LiffProvider";

export default function ScanLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <LiffProvider liffId={process.env.NEXT_PUBLIC_LIFF_ID_SCAN || ""}>
        {children}
      </LiffProvider>
    </section>
  );
}

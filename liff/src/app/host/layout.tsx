import { LiffProvider } from "@/components/LiffProvider";

export default function HostLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <LiffProvider liffId={process.env.NEXT_PUBLIC_LIFF_ID_HOST || ""}>
        {children}
      </LiffProvider>
    </section>
  );
}

import { LiffProvider } from "@/components/LiffProvider";

export default function myqrLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <LiffProvider liffId={process.env.NEXT_PUBLIC_LIFF_ID_MYQR || ""}>
        {children}
      </LiffProvider>
    </section>
  );
}

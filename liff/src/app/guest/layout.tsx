import { LiffProvider } from "@/components/LiffProvider";

export default function GuestLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <LiffProvider liffId={process.env.NEXT_PUBLIC_LIFF_ID_GUEST || ""}>
        {children}
      </LiffProvider>
    </section>
  );
}

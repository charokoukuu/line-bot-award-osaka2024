"use client";
import { useLiff } from "@/components/LiffProvider";
export default function Scan() {
  const { liff } = useLiff();
  liff?.scanCodeV2().then(async (result) => {
    console.log(result.value);
    fetch(
      `https://local-line.run-ticket.com/qr-scan?id=${liff.id}&content=${result.value}`,
      {
        method: "GET",
      }
    );
  });
  return <></>;
}

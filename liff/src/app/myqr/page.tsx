"use client";
import { useLiff } from "@/components/LiffProvider";
import { useEffect, useState } from "react";
import { getQrStatus } from "./actions";

export default function Myqr() {
  const { liff, profile } = useLiff();
  const [qrStatus, setQrStatus] = useState<string | null>(null);
  const [isDisabledScan, setIsDisabledScan] = useState<boolean>(false);

  useEffect(() => {
    if (liff && profile) {
      console.log(profile);
      const qrStatus = getQrStatus(profile.userId) as unknown as {
        userId: string;
        isDisabledScan: boolean;
      };
      setQrStatus(qrStatus.userId);
      setIsDisabledScan(qrStatus.isDisabledScan);
    }
  }, [liff, profile]);

  return (
    <main>
      <p>{qrStatus}</p>
      {isDisabledScan ? (
        <p>スキャンが無効になっています</p>
      ) : (
        <p>スキャンが有効です</p>
      )}
      <></>
    </main>
  );
}

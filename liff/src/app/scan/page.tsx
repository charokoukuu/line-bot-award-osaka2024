"use client";
import { useLiff } from "@/components/LiffProvider";
import { useEffect, useState } from "react";
export default function Scan() {
  const [isSaned, setIsSaned] = useState(false);
  const [scannerStatus, setScannerStatus] = useState<{
    userId: string;
    isDisabledScan: boolean;
  } | null>(null);
  const { liff, profile } = useLiff();

  useEffect(() => {
    if (!profile || !liff) return;
    const userId = profile.userId;
    if (scannerStatus) return;
    fetch(`https://node-learn.run-ticket.com/api/scannerStatus/${userId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setScannerStatus(data);
      });
  }, [liff, profile, scannerStatus]);

  useEffect(() => {
    if (!profile || !liff) return;
    const userId = profile.userId;
    if (isSaned || !scannerStatus || scannerStatus.isDisabledScan) return;
    liff?.scanCodeV2().then(async (result) => {
      console.log(result.value);
      fetch("https://node-learn.run-ticket.com/api/qr-scan", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userId,
          qrCode: result.value,
        }),
      })
        .then((res) => {
          console.log(res);
        })
        .finally(() => {
          setIsSaned(true);
          liff.closeWindow();
        });
    });
  }, [isSaned, liff, profile, scannerStatus]);

  return (
    <main className="m-4">
      <div className="flex flex-col w-full h-full justify-center items-center gap-5">
        {scannerStatus && scannerStatus.isDisabledScan ? (
          <p className="text-center text-xl">スキャンが無効化されています</p>
        ) : (
          <>
            {isSaned ? (
              <>
                <p className="text-center text-2xl">スキャンが完了しました</p>
              </>
            ) : (
              <p className="text-center text-2xl">スキャン中...</p>
            )}
          </>
        )}
      </div>
    </main>
  );
}

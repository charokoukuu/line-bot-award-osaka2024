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
    console.log("scan useEffect");
    if (!profile || !liff) return;
    if (!scannerStatus?.isDisabledScan) {
      fetch(
        `https://node-learn.run-ticket.com/api/scannerStatus/${profile.userId}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setScannerStatus(data);
        });
    }
    if (!isSaned) {
      const userId = profile.userId;
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
    }
  }, [isSaned, liff, profile, scannerStatus?.isDisabledScan]);

  return (
    <main className="m-4">
      {/* <h1 className="text-center text-3xl font-semibold">スキャン</h1> */}
      <div className="flex flex-col w-full h-full justify-center items-center">
        {isSaned ? (
          <>
            <p className="text-center text-2xl">スキャンが完了しました</p>
            {scannerStatus?.isDisabledScan ? (
              <p className="text-center text-2xl">
                スキャンが無効化されています
              </p>
            ) : (
              <p className="text-center text-2xl">
                スキャンが有効化されています
              </p>
            )}
          </>
        ) : (
          <p className="text-center text-2xl">スキャン中...</p>
        )}
      </div>
    </main>
  );
}

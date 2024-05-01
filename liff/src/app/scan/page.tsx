"use client";
import { useLiff } from "@/components/LiffProvider";
import { useEffect, useState } from "react";
export default function Scan() {
  const [isSaned, setIsSaned] = useState(false);
  const [isFetchScannerStatus, setIsFetchScannerStatus] = useState(false);
  const [userId, setUserId] = useState("");
  const [scannerStatus, setScannerStatus] = useState<{
    userId: string;
    isDisabledScan: boolean;
  } | null>(null);
  const { liff, profile } = useLiff();

  useEffect(() => {
    if (!profile || !liff) return;
    const userId = profile.userId;
    setUserId(userId);

    console.log("scan useEffect");
    if (scannerStatus?.isDisabledScan || isFetchScannerStatus) return;
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
      })
      .finally(() => {
        setIsFetchScannerStatus(true);
      });
    console.log("scan useEffect status");
  }, [liff, profile, scannerStatus?.isDisabledScan, isFetchScannerStatus]);

  useEffect(() => {
    if (isSaned || !liff || !userId) return;
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
  }, [isSaned, liff, userId]);

  return (
    <main className="m-4">
      {/* <h1 className="text-center text-3xl font-semibold">スキャン</h1> */}
      <div className="flex flex-col w-full h-full justify-center items-center gap-5">
        {scannerStatus?.isDisabledScan ? (
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

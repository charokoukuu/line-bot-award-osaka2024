"use client";
import { useLiff } from "@/components/LiffProvider";
import { useEffect, useState } from "react";
export default function Scan() {
  const [isSaned, setIsSaned] = useState(false);
  const { liff, profile } = useLiff();
  useEffect(() => {
    if (!isSaned && liff && profile) {
      const userId = profile.userId;
      liff?.scanCodeV2().then(async (result) => {
        console.log(result.value);
        fetch(
          // `https://local-line.run-ticket.com/qr-scan?id=${userId}&content=${result.value}`,
          "https://node-learn.run-ticket.com/api/qr-scan",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              userId,
              qrCode: result.value,
            }),
          }
        )
          .then((res) => {
            console.log(res);
          })
          .finally(() => {
            setIsSaned(true);
            liff.closeWindow();
          });
      });
    }
  }, [isSaned, liff, profile]);

  return (
    <main className="m-4">
      {/* <h1 className="text-center text-3xl font-semibold">スキャン</h1> */}
      <div className="flex flex-col w-full h-full justify-center items-center">
        {isSaned ? (
          <>
            <p className="text-center text-2xl">スキャンが完了しました</p>
          </>
        ) : (
          <p className="text-center text-2xl">スキャン中...</p>
        )}
      </div>
    </main>
  );
}

"use client";
import { useLiff } from "@/components/LiffProvider";
import { useEffect, useState } from "react";
export default function Scan() {
  const [keyword, setKeyword] = useState("");
  const [isSaned, setIsSaned] = useState(false);
  const { liff } = useLiff();
  useEffect(() => {
    if (!isSaned && keyword === "") {
      liff?.scanCodeV2().then(async (result) => {
        console.log(result.value);
        setKeyword(result.value ?? "");
        fetch(
          `https://local-line.run-ticket.com/qr-scan?id=${liff.id}&content=${result.value}`,
          {
            method: "GET",
          }
        ).finally(() => {
          setIsSaned(true);
        });
      });
    }
  }, [isSaned, keyword, liff]);
  return (
    <main className="m-4">
      <h1 className="text-center text-3xl font-semibold">スキャン</h1>
      <div className="flex flex-col w-full h-full justify-center items-center">
        {isSaned ? (
          <>
            <p className="text-center text-2xl">スキャンが完了しました</p>
            <div className="flex flex-col justify-center items-left gap-2">
              <h2 className="text-xl">あいことば</h2>
              <p className="text-center text-2xl">{keyword}</p>
            </div>
          </>
        ) : (
          <p className="text-center text-2xl">スキャン中...</p>
        )}
      </div>
    </main>
  );
}

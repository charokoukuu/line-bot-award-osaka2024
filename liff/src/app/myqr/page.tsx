"use client";
import { useLiff } from "@/components/LiffProvider";
import { useEffect, useState } from "react";
import { QRCodeSVG } from "qrcode.react";

export default function Myqr() {
  const { liff, profile } = useLiff();
  const [data, setData] = useState<{
    userId: string;
    myCode: string;
  } | null>(null);

  useEffect(() => {
    if (!profile) {
      return;
    }
    fetch(`https://node-learn.run-ticket.com/api/seeker/${profile.userId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setData(data);
      });
  }, [profile]);

  return (
    <main>
      <div className="w-full h-dvh flex justify-center items-center flex-col gap-6">
        <QRCodeSVG className="m-6" value={data?.myCode ?? ""} size={150} />
        <button
          className="border border-blue-500 text-blue-500 rounded-md p-2 w-36"
          onClick={() => liff && liff.closeWindow()}
        >
          閉じる
        </button>
      </div>
    </main>
  );
}

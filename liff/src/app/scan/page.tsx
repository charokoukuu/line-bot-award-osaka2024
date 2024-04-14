"use client";
import { useLiff } from "@/components/LiffProvider";
export default function Scan() {
  const { liff } = useLiff();
  liff?.scanCodeV2().then(async (result) => {
    console.log(result.value);
  });
  return <></>;
}

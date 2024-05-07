"use client";
import React, {
  createContext,
  FC,
  PropsWithChildren,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { Liff } from "@line/liff";
import { Profile } from "@liff/get-profile";
import { getUserProfile } from "@/app/actions";

const LiffContext = createContext<{
  liff: Liff | null;
  liffError: string | null;
  profile: Profile | null;
}>({ liff: null, liffError: null, profile: null });

export const useLiff = () => useContext(LiffContext);

export const LiffProvider: FC<PropsWithChildren<{ liffId: string }>> = ({
  children,
  liffId,
}) => {
  const [liff, setLiff] = useState<Liff | null>(null);
  const [liffError, setLiffError] = useState<string | null>(null);
  const [profile, setProfile] = useState<Profile | null>(null);

  const initLiff = useCallback(async () => {
    try {
      const liffModule = await import("@line/liff");
      const liff = liffModule.default;
      console.log("LIFF init...");

      await liff.init({ liffId });
      console.log("LIFF init succeeded.");
      setLiff(liff);
      const userProfile = await getUserProfile(liff);
      setProfile(userProfile);
      console.log("LIFF get profile succeeded.");
    } catch (error) {
      console.log("LIFF init failed.");
      console.error(error);
      setLiffError((error as Error).toString());
    }
  }, [liffId]);

  // init Liff
  useEffect(() => {
    console.log("LIFF init start...");
    initLiff();
  }, [initLiff]);

  return (
    <LiffContext.Provider
      value={{
        liff,
        liffError,
        profile,
      }}
    >
      {children}
    </LiffContext.Provider>
  );
};

import { Liff } from "@line/liff";

export async function getUserProfile(liff: Liff) {
  const userProfile = liff.getProfile();
  return userProfile;
}

import { Liff } from "@line/liff";
import { Profile } from "@liff/get-profile";

export async function getUserProfile(liff: Liff) {
  // production or dev 
  if (process.env.NODE_ENV === "development") {
    return {
      displayName: "test-user",
      userId: "anmerutu-yyokoyoko-ikeruikeru",
      pictureUrl: "https://picsum.photos/200",
      statusMessage: "test-user",
    } as Profile;
  }
  const userProfile = liff.getProfile();
  return userProfile;
}

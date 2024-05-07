import { Liff } from "@line/liff";
import { Profile } from "@liff/get-profile";

export async function getUserProfile(liff: Liff) {
  // production or dev 
  if (process.env.NODE_ENV === "development") {
    return {
      displayName: "test-user",
      userId: "U1e6d108f1d0fd3b6527caf1587780398", // endo
      // userId: "U13c50130aec615fa42b514f8676589b9", // saito
      pictureUrl: "https://picsum.photos/200",
      statusMessage: "test-user",
    } as Profile;
  }
  const userProfile = liff.getProfile();
  return userProfile;
}

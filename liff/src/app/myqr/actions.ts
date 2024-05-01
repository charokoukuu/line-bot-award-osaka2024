"use server";

export async function getQrStatus(userId: string) {
  console.log(userId);
  const res = await fetch(`https://node-learn.run-ticket.com/api/seeker/${userId}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => {
      console.log(res);
      if (res.status === 200) {
        console.log("success");
      } else {
        console.error("error");
      }
    })
    .catch((error) => {
      console.error(error);
    })
    .finally(() => {
      console.log("done");
    });
  console.log("fetch", res);
  return res;
}
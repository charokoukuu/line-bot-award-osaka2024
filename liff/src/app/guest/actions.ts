"use server";

export async function teamJoin(userId: string, teamId: string) {
  const req = {
    userId,
    teamId,
  };
  console.log(req);
  const res = await fetch("https://node-learn.run-ticket.com/api/team-joining", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(req),
  }).then((res) => {
    console.log(res);
    if (res.status === 200) {
      console.log("success");
    } else {
      console.error("error");
    }
  }).catch((error) => {
    console.error(error);
  }).finally(() => {
    console.log("done");
  });
  return res;
}
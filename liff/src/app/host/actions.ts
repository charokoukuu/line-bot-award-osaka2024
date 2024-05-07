"use server";

import { CreateTeam } from "@/type";

export async function teamCreate(data: CreateTeam) {
  console.log(data);
  const res = await fetch("https://node-learn.run-ticket.com/api/team-building", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
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
  return res;
}
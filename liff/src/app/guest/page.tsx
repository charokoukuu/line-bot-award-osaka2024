import "react-material-symbols/rounded";
import { JoinTeam } from "@/type";
import "react-material-symbols/rounded";
import { TeamList } from "./ui/TeamList";

export const fetchCache = "force-no-store";

const teamData = fetch("https://node-learn.run-ticket.com/api/teams", {
  method: "GET",
  cache: "no-store",
  headers: {
    "Content-Type": "application/json",
  },
})
  .then((res) => {
    if (res.ok) {
      console.log("success");
    } else {
      console.error("error");
    }
    return res.json();
  })
  .catch((error) => {
    console.error(error);
  })
  .finally(() => {
    console.log("done");
  });

export default async function Guest() {
  const teams = (await teamData) as JoinTeam[];
  console.log(teams);
  if (!teams) {
    return (
      <div className="w-full h-dvh flex justify-center items-center">
        現在募集しているチームはありません。
      </div>
    );
  }
  return <TeamList teams={teams} />;
}

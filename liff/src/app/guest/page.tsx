"use client";
import "react-material-symbols/rounded";
import { JoinTeam } from "@/type";
import "react-material-symbols/rounded";
import { TeamList } from "./ui/TeamList";
import { useEffect, useState } from "react";

export default function Guest() {
  const [teams, setTeams] = useState<JoinTeam[] | null>(null);
  useEffect(() => {
    fetch("https://node-learn.run-ticket.com/api/teams", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setTeams(data);
        console.log(data);
      });
  }, []);

  if (!teams) {
    return (
      <div className="w-full h-dvh flex justify-center items-center">
        現在募集しているチームはありません。
      </div>
    );
  }
  return <TeamList teams={teams} />;
}

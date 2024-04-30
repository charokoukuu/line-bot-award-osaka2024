"use client";
import { Modal } from "@/components/Modal";
import { TeamCard } from "@/components/TeamCard";
import { JoinTeam } from "@/type";
import clsx from "clsx";
import { useState } from "react";
import { useLiff } from "@/components/LiffProvider";
import { teamJoin } from "../actions";

export const TeamList = (props: { teams: JoinTeam[] }) => {
  const { teams } = props;
  const { liff, profile } = useLiff();
  const [inputKeyword, setInputKeyword] = useState("");
  const [selectedTeam, setSelectedTeam] = useState<JoinTeam | null>(null);
  const [message, setMessage] = useState("");
  if (!useLiff || !liff) {
    return <div>loading...</div>;
  }
  return (
    <main className="m-4">
      <h1 className="text-center text-3xl font-semibold">チーム参加</h1>
      <div className="grid grid-flow-row gap-5 mt-2">
        <div>
          <h2 className="text-xl">チーム一覧</h2>
          <div className="grid grid-cols-2 gap-2">
            {teams.map((team) => (
              <div key={team.teamId}>
                <TeamCard
                  key={team.name}
                  className="text-base"
                  teamName={team.name}
                  onClick={() => {
                    setSelectedTeam(team);
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      {selectedTeam && (
        <Modal
          isModalOpen={selectedTeam !== null}
          onClose={() => {
            setSelectedTeam(null);
          }}
        >
          <p className="text-2xl mb-4">{selectedTeam?.name}</p>
          <div>
            <p>{message}</p>
            <h2 className="text-xl">あいことば</h2>
            <div className="flex justify-center items-end gap-2">
              <div>
                <input
                  className="border-2 text-2xl w-full"
                  placeholder="例）お好み焼き"
                  onChange={(e) => {
                    setInputKeyword(e.target.value);
                  }}
                />
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center gap-4 p-2 border-t border-solid border-blueGray-200 rounded-b">
            <button
              className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
              type="button"
              onClick={() => {
                setSelectedTeam(null);
              }}
            >
              閉じる
            </button>
            <button
              className={clsx(
                "bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150",
                { "bg-gray-500 active:bg-gray-600": inputKeyword === "" }
              )}
              type="submit"
              disabled={inputKeyword === ""}
              onClick={async () => {
                if (selectedTeam.keyword === inputKeyword) {
                  await teamJoin(
                    profile?.userId ? profile.userId : "",
                    selectedTeam.teamId
                  );
                  console.log(profile?.userId);
                  setMessage(profile?.userId ? profile.userId : "");
                  // setSelectedTeam(null);
                  // liff.closeWindow();
                } else {
                  setSelectedTeam(null);
                }
              }}
            >
              送信する
            </button>
          </div>
        </Modal>
      )}
    </main>
  );
};

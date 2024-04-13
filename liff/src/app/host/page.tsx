"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { MaterialSymbol } from "react-material-symbols";
import { clsx } from "clsx";
import "react-material-symbols/rounded";

type FormData = {
  peoples: number;
  owners: number;
  seekers: number;
  teamName: string;
  keyword: string;
};

export default function Host() {
  const {
    register,
    handleSubmit,
    formState: { errors: formatError, isValid, isSubmitting },
  } = useForm<FormData>();
  const onSubmit = handleSubmit((data) => console.log(data));
  const [players, setPlayers] = useState(10);
  const [owners, setOwners] = useState(1);
  const [seekers, setSeekers] = useState(1);

  console.log("render");
  return (
    <main className="m-4">
      <h1 className="text-center text-3xl font-semibold">チーム作成</h1>
      <form className="grid grid-flow-row gap-5 mt-2" onSubmit={onSubmit}>
        <div>
          <h2 className="text-xl">プレイヤー</h2>
          <div className="flex justify-center items-end gap-2">
            <MaterialSymbol icon="groups" size={100} />
            <select
              className="text-3xl mb-3"
              {...register("peoples", { required: true })}
              defaultValue={1}
              onChange={(e) => {
                const selectedValue = parseInt(e.target.value, 10);
                setPlayers(selectedValue);
                setOwners(1);
                setSeekers(selectedValue - 1);
              }}
            >
              {[...Array(10)].map((_, i) => (
                <option key={i} value={i + 1}>
                  {i + 1}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="grid grid-flow-col w-full justify-between">
          <div>
            <h2 className="text-xl">オーナー</h2>
            <div className="flex justify-center items-end gap-2">
              <MaterialSymbol icon="person" size={100} />
              <select
                className="text-3xl mb-3"
                {...register("owners", { required: true })}
                value={owners}
                onChange={(e) => {
                  const selectedValue = parseInt(e.target.value, 10);
                  setOwners(selectedValue);
                  setSeekers(players - selectedValue);
                }}
              >
                {[...Array(players - 1)].map((_, i) => (
                  <option key={i} value={i + 1}>
                    {i + 1}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div>
            <h2 className="text-xl">シーカー</h2>
            <div className="flex justify-center items-end gap-2">
              <MaterialSymbol icon="group" size={100} />
              <select
                className="text-3xl mb-3"
                value={seekers}
                {...register("seekers", { required: true })}
                onChange={(e) => {
                  const selectedValue = parseInt(e.target.value, 10);
                  setSeekers(selectedValue);
                  setOwners(players - selectedValue);
                }}
              >
                {[...Array(players - 1)].map((_, i) => (
                  <option key={i} value={i + 1}>
                    {i + 1}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
        <div>
          <h2 className="text-xl">チーム名</h2>
          <div className="flex justify-center items-end gap-2">
            <MaterialSymbol icon="account_circle" size={100} />
            <div>
              {formatError.teamName && (
                <div className="text-red-500 pl-1 pt-1 text-xs">
                  {formatError.teamName.type === "required" && "必須項目です"}
                  {formatError.teamName.type === "maxLength" &&
                    "10文字以内で入力してください"}
                </div>
              )}
              <input
                className="border-2 text-2xl w-full"
                {...register("teamName", { required: true, maxLength: 10 })}
                placeholder="例）チーム友達"
              />
            </div>
          </div>
        </div>
        <div>
          <h2 className="text-xl">あいことば</h2>
          <div className="flex justify-center items-end gap-2">
            <MaterialSymbol icon="lock" size={100} />
            <div>
              {formatError.keyword && (
                <div className="text-red-500 pl-1 pt-1 text-xs">
                  {formatError.keyword.type === "required" && "必須項目です"}
                </div>
              )}
              <input
                className="border-2 text-2xl w-full"
                {...register("keyword", { required: true })}
                placeholder="例）お好み焼き"
              />
            </div>
          </div>
        </div>
        <div className="text-center">
          <button
            className={clsx("text-white p-2 rounded-lg w-1/3", {
              "bg-blue-500": isValid && !isSubmitting,
              "bg-gray-500": !isValid || isSubmitting,
            })}
            type="submit"
          >
            完了
          </button>
        </div>
      </form>
    </main>
  );
}

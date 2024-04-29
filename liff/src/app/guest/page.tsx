"use client";
import { TeamCard } from "@/components/TeamCard";
import "react-material-symbols/rounded";
import mock from "./mock.json";
import { Modal } from "@/components/Modal";
import { useState } from "react";
import { useForm } from "react-hook-form";
import "react-material-symbols/rounded";

type FormData = {
  keyword: string;
};

export default function Guest() {
  const {
    register,
    handleSubmit,
    formState: { errors: formatError, isValid, isSubmitting },
  } = useForm<FormData>();
  const onSubmit = handleSubmit((data) => {
    console.log(data);
    setIsModalOpen(false);
  });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [group, setGroup] = useState(mock.groups[0]);
  return (
    <main className="m-4">
      <h1 className="text-center text-3xl font-semibold">チーム参加</h1>
      <div className="grid grid-flow-row gap-5 mt-2">
        <div>
          <h2 className="text-xl">チーム一覧</h2>
          <div className="grid grid-cols-2 gap-2">
            {mock.groups.map((group) => (
              <button
                className="border-2 rounded-md h-20"
                key={group.name}
                onClick={() => {
                  setIsModalOpen(true);
                  setGroup(group);
                }}
              >
                <TeamCard className="text-base" groupName={group.name} />
              </button>
            ))}
          </div>
        </div>
      </div>
      <Modal
        isModalOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
        }}
      >
        <form onSubmit={onSubmit}>
          <TeamCard className="text-2xl mb-4" groupName={group.name} />
          <div>
            <h2 className="text-xl">あいことば</h2>
            <div className="flex justify-center items-end gap-2">
              <div>
                {formatError.keyword && (
                  <div className="text-red-500 pl-1 pt-1 text-xs">
                    {formatError.keyword.type === "required" && "必須項目です"}
                    {formatError.keyword.type === "maxLength" &&
                      "10文字以内で入力してください"}
                  </div>
                )}
                <input
                  className="border-2 text-2xl w-full"
                  {...register("keyword", { required: true, maxLength: 10 })}
                  placeholder="例）お好み焼き"
                />
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center gap-4 p-2 border-t border-solid border-blueGray-200 rounded-b">
            <button
              className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
              type="button"
              onClick={() => {
                setIsModalOpen(false);
              }}
            >
              閉じる
            </button>
            <button
              className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
              type="submit"
            >
              送信する
            </button>
          </div>
        </form>
      </Modal>
    </main>
  );
}

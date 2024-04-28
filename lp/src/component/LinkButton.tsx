import { Button } from "@mui/material";
import classNames from "classnames";
import Link from "next/link";
import { ReactNode } from "react";

interface LinkButton {
  className?: string;
  children: ReactNode;
}

export const LinkButton = ({ className, children }: LinkButton) => {
  return (
    <>
      <a href="https://run-ticket.com">
        <button
          className={classNames(
            " rounded-[30px] bg-[#006C9B] px-4 py-2 text-xl font-bold text-white hover:bg-gray-600",
            className
          )}
        >
          {children}
        </button>
      </a>
    </>
  );
};

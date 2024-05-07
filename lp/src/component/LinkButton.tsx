import classNames from "classnames";
import { ReactNode } from "react";

interface LinkButton {
  className?: string;
  children: ReactNode;
  href: string;
}

export const LinkButton = ({ className, children, href }: LinkButton) => {
  return (
    <>
      <a href={href}>
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

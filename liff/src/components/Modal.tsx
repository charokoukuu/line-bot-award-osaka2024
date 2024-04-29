import "react-material-symbols/rounded";
import React from "react";

export const Modal = (props: {
  isModalOpen: boolean;
  onClose: () => void;
  children?: React.ReactNode;
}) => {
  const { isModalOpen, children, onClose: onClick } = props;
  return (
    <>
      {isModalOpen ? (
        <>
          <div
            className="absolute opacity-25 w-screen h-screen inset-0 z-40 bg-black"
            onClick={() => {
              onClick();
            }}
          />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full flex overflow-x-hidden overflow-y-auto z-50">
            {/*content*/}
            <div className="relative border-0 rounded-lg shadow-lg flex flex-col justify-center items-center mx-auto bg-white">
              <div className="relative p-6 flex-auto">{children}</div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
};

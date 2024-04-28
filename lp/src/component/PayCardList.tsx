import { Grid } from "@mui/material";
import classNames from "classnames";
import { ReactNode } from "react";

interface PayCardListProps {
  className?: string;
}

export const PayCardList = ({ className }: PayCardListProps) => {
  return (
    <div
      className={classNames(
        "grid grid-cols-3 grid-rows-3 items-center justify-center",
        className
      )}
    >
      <img src="/cards/PayPay.jpg" alt="PayPay" className="mx-auto h-10" />
      <img src="/cards/ApplePay.svg" alt="ApplePay" className="mx-auto h-10" />
      <img
        src="/cards/GooglePay.svg"
        alt="GooglePay"
        className="mx-auto h-20"
      />
      <img src="/cards/Visa.svg" alt="Visa" className="mx-auto h-20" />
      <img
        src="/cards/MasterCard.svg"
        alt="MasterCard"
        className="mx-auto h-10"
      />
      <img src="/cards/JCB.webp" alt="JCB" className="mx-auto h-10" />
      <img
        src="/cards/AmericanExpress.webp"
        alt="AmericanExpress"
        className="mx-auto h-16"
      />
      <img
        src="/cards/DinersClub.webp"
        alt="DinersClub"
        className="mx-auto h-14"
      />
      <img src="/cards/Discover.webp" alt="Discover" className="mx-auto h-12" />
    </div>
  );
};

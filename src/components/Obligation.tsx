import React from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

interface ObligationProps {
  progressValue: number;
  label: string;
  expiryDate: string;
  profit: string;
  total: string;
}
const Obligation: React.FC<ObligationProps> = ({
  progressValue,
  label,
  expiryDate,
  profit,
  total,
}) => {
  return (
    <div className="flex justify-between mt-3 px-[1.0625rem]">
      <div className=" flex justify-between w-full">
        <div className="rightDiv flex gap-3 items-center justify-center">
          <div className="w-[3.75rem] h-[3.75rem]">
            <CircularProgressbar
              strokeWidth={5}
              value={progressValue}
              text={`${progressValue}%`}
              styles={{
                text: {
                  fontSize: "1.625rem",
                  fill: "#000000",
                  fontWeight: "bold",
                },
                path: {
                  stroke: "#000000",
                },
              }}
            />
          </div>
          <div className="flex flex-col ">
            <span className="font-semibold text-xl text-black">{label}</span>
            <span className="text-gray-400 font-semibold">{expiryDate}</span>
          </div>
        </div>
      </div>
      <div className="leftDiv flex flex-col items-center justify-center">
        <p className="font-bold text-right">{profit}</p>
        <p className="text-gray-400 text-right font-semibold">{total}</p>
      </div>
    </div>
  );
};

export default Obligation;

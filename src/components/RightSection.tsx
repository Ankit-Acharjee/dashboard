import { activityDetails } from "@/constants/activityDetails";
import Obligation from "./Obligation";
import React from "react";

interface DataType {
  progressValue: number;
  label: string;
  expiryDate: string;
  profit: string;
  total: string;
}
const data: DataType[] = [
  {
    progressValue: 82,
    label: "Mentals",
    expiryDate: "End at 23.02.2023",
    profit: "+$923",
    total: "$15,450",
  },
  {
    progressValue: 57,
    label: "Social Analytics",
    expiryDate: "End at 12.08.2023",
    profit: "+$241",
    total: "$21,121",
  },
  {
    progressValue: 37,
    label: "Action TVs",
    expiryDate: "End at 29.02.2023",
    profit: "+$973",
    total: "$15,780",
  },
  {
    progressValue: 13,
    label: "Goalscore",
    expiryDate: "End at 14.02.2033",
    profit: "+$464",
    total: "$47,465",
  },
];
const RightSection:React.FC = () => {
  return (
    <div className="bg-slate-200 bg-opacity-80 w-full h-full  pt-8 px-[3.75rem]">
      <div className="flex mb-1 justify-between">
        <span className="text-3xl font-bold font-sans">Activity</span>
        <span className="font-bold align-text-bottom border-b-[0.1875rem] underline underline-offset-4 decoration-2 pb-1">
          View All
        </span>
      </div>
      {activityDetails.map((details) => (
        <div
          className="flex justify-between ps-1 py-1 pt-5"
          key={details.label}
        >
          <div className="flex gap-4">
            <div className=" flex items-center justify-center w-[3.75rem] h-[3.75rem] p-2 rounded-full bg-white">
              <details.icon />
            </div>
            <div>
              <p className="text-xl font-semibold">{details.label}</p>
              <p className="text-gray-400 font-semibold">
                {details.symbol} - {details.marketCap}
              </p>
            </div>
          </div>
          <div>
            <p className="font-bold text-right">{details.price}</p>
            <p className="text-gray-400 text-right font-semibold">
              {details.change}
            </p>
          </div>
        </div>
      ))}

      <div className="w-full mt-5 bg-white py-4 px-[0.8125rem]">
        <div className="header flex mb-4 justify-between px-[1.0625rem]">
          <span className="text-2xl font-semibold font-sans">Obligation</span>
          <span className="font-bold underline underline-offset-4 decoration-2">
            View All
          </span>
        </div>
        {data.map((data, index) => (
          <Obligation
            key={index}
            progressValue={data.progressValue}
            label={data.label}
            expiryDate={data.expiryDate}
            profit={data.profit}
            total={data.total}
          />
        ))}
      </div>
      <div className="bg-black py-4 text-xl font-semibold text-white flex items-center justify-center">
        Buy Obligations
      </div>
    </div>
  );
};

export default RightSection;

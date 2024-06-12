import { useState } from "react";
import { boxDetails } from "@/constants/boxDetails";
import { cn } from "@/lib/utils";
import Box from "./Box";
import InvestmentBox from "./InvestmentBox";
import SteppedAreaChart from "./Chart";

const LeftSection = () => {
  const [selectedValue, setSelectedValue] = useState<string>("option-one");
  const links = ["Daily", "Weekly", "Monthly", "Yearly"];

  const [activeLink, setActiveLink] = useState(links[0]);
  const [activeBox, setActiveBox] = useState(boxDetails[0]);

  const handleChange = (value: string) => {
    setSelectedValue(value);
  };
  return (
    <div className="bg-white w-full pt-7 pb-12 px-10 ">
      <div className="header flex justify-between">
        <h1 className="text-3xl font-bold">Balance Overview</h1>
        <p className="text-gray-500">
          Latest update for{" "}
          <span className="font-semibold text-black"> Today</span>
        </p>
      </div>
      <div
        className="box flex gap-2 w-full justify-between my-8"
        // onClick={}
      >
        {boxDetails.map((detail, index) => (
          <div
            key={index}
            className={cn("bg-white text-black border-2", {
              " bg-black text-white": detail === activeBox,
            })}
            onClick={() => setActiveBox(detail)}
          >
            <Box key={index} label={detail.label} price={detail.price} />
          </div>
        ))}
      </div>
      <div className="flex justify-between">
        <div className="flex justify-between gap-5">
          {links.map((link, index) => (
            <span
              key={index}
              className={cn("cursor-pointer text-lg", {
                " text-black font-semibold decoration-2 border-b-2 underline underline-offset-8":
                  link === activeLink,
                "text-gray-500": link !== activeLink,
              })}
              onClick={() => setActiveLink(link)}
            >
              {link}
            </span>
          ))}
        </div>
        <div className="flex justify-between gap-3 font-semibold text-lg">
          <div
            className="flex items-center space-x-2 cursor-pointer"
            onClick={() => handleChange("option-one")}
          >
            <input
              type="radio"
              id="option-one"
              name="investment"
              value="option-one"
              checked={selectedValue === "option-one"}
              onChange={() => handleChange("option-one")}
              className="hidden"
            />
            <div
              className={`w-4 h-4 rounded-full border-2 ${
                selectedValue === "option-one"
                  ? "bg-lime-green border-lime-green"
                  : "border-gray-300"
              }`}
            />
            <label htmlFor="option-one" className="cursor-pointer">
              Invested
            </label>
          </div>
          <div
            className="flex items-center space-x-2 cursor-pointer"
            onClick={() => handleChange("option-two")}
          >
            <input
              type="radio"
              id="option-two"
              name="investment"
              value="option-two"
              checked={selectedValue === "option-two"}
              onChange={() => handleChange("option-two")}
              className="hidden"
            />
            <div
              className={`w-4 h-4 rounded-full border-2 ${
                selectedValue === "option-two"
                  ? "bg-lime-green border-lime-green"
                  : "border-gray-300"
              }`}
            />
            <label htmlFor="option-two" className="cursor-pointer">
              Released
            </label>
          </div>
        </div>
      </div>
      <div className="scale-[1.02] mt-6 mb-5">
        <SteppedAreaChart />
      </div>
      <div>
        <InvestmentBox />
      </div>
    </div>
  );
};

export default LeftSection;

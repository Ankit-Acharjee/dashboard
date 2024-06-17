import React from "react";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";

const Investments: React.FC = () => {
  return (
    <div className="flex w-full h-[87vh]">
      {/* h-[calc(100vh-123px)] */}
      <div className="remove-scrollbar flex overflow-y-scroll h-full w-3/4">
        <LeftSection />
      </div>
      <div className="flex h-full w-[35%]">
        <RightSection />
      </div>
    </div>
  );
};

export default Investments;

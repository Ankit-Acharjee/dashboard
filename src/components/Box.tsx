import SmallStepLineChart from "./SteppedLineChart";
import { cn } from "@/lib/utils";
interface Detail {
  label: string;
  price: string;
}

const Box = ({ label, price }: Detail) => {
  return (
    <div
      className={cn(
        "flex justify-between gap-7 items-center  px-8 py-4 w-full"
      )}
    >
      <div className="">
        <p className="font-semibold text-lg">{label}</p>
        <p className="font-bold text-2xl">{price}</p>
      </div>
      <div className="stepline">
        <SmallStepLineChart />
      </div>
    </div>
  );
};

export default Box;

import { Search } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const InvestmentBox = () => {
  interface Investment {
    companyName: string;
    investDate: string;
    investedAmount: string;
    netValue: string;
    multiple: string;
  }
  const data: Investment[] = [
    {
      companyName: "Legacy Apps",
      investDate: "Feb 9, 2023",
      investedAmount: "$22,410",
      netValue: "$22,710",
      multiple: "1.5x",
    },
    {
      companyName: "Nano Books",
      investDate: "Nov 14, 2022",
      investedAmount: "$7,517",
      netValue: "$14,924",
      multiple: "2x",
    },
    {
      companyName: "Atlantics",
      investDate: "Sep 4, 2022",
      investedAmount: "$14,785",
      netValue: "$17,117",
      multiple: "1.5x",
    },
  ];
  return (
    <div className="flex flex-col">
      <div className=" header flex justify-between">
        <h1 className="text-2xl font-bold">Investments</h1>
        <div className="flex justify-between items-center gap-4">
          <Search height={20} width={20} />
          <p className="font-bold underline underline-offset-4 decoration-2">
            Export CSV
          </p>
        </div>
      </div>
      <div className="">
        <Table className="items-start my-6">
          <TableHeader>
            <TableRow>
              <TableHead className="">Company</TableHead>
              <TableHead className="">Invest Date</TableHead>
              <TableHead className="">Invest</TableHead>
              <TableHead className="">Net value</TableHead>
              <TableHead className="">Multiple</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((data, index) => (
              <TableRow key={index}>
                <TableCell className="font-bold text-lg w-2/6">
                  {data.companyName}
                </TableCell>
                <TableCell className="text-lg text-gray-500">
                  {data.investDate}
                </TableCell>
                <TableCell className="text-lg font-bold">
                  {data.investedAmount}
                </TableCell>
                <TableCell className="text-lg font-bold">
                  {data.netValue}
                </TableCell>
                <TableCell className="text-lg text-gray-500">
                  {data.multiple}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default InvestmentBox;

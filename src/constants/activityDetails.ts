import React from "react";
import AppleIcon from "@/icons/AppleIcon";
import BroadcomIcon from "@/icons/BroadcomIcon";
import MicrosoftIcon from "@/icons/MicrosoftIcon";
import NvidiaIcon from "@/icons/NvidiaIcon";

interface ActivityDetail {
  label: string;
  icon: React.FC;
  symbol: string;
  marketCap: string;
  price: string;
  change: string;
}

export const activityDetails: ActivityDetail[] = [
  {
    label: "Apple",
    icon: AppleIcon,
    symbol: "AAPL",
    marketCap: "$2,400,66B",
    price: "$152.48 ",
    change: "+0.49% ",
  },
  {
    label: "Microsoft",
    icon: MicrosoftIcon,
    symbol: "MSFT",
    marketCap: "$1,911,34B",
    price: "$261.53 ",
    change: "-1.39% ",
  },
  {
    label: "Nvidia",
    icon: NvidiaIcon,
    symbol: "NVDA",
    marketCap: "$518,78B",
    price: "$213.75 ",
    change: "+1.36% ",
  },
  {
    label: "Broadcom",
    icon: BroadcomIcon,
    symbol: "AVGO",
    marketCap: "$251.27B",
    price: "$607.54 ",
    change: "+1.03% ",
  },
];

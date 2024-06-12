import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import ActivityIcon from "@/icons/ActivityIcon";
import AnalyticsIcon from "@/icons/AnalyticsIcon";
import DashboardIcon from "@/icons/DashboardIcon";
import DocumentsIcon from "@/icons/DocumentsIcon";
import MessagesIcon from "@/icons/MessagesIcon";
import WalletIcon from "@/icons/WalletIcon";

const Sidebar = () => {
  const { pathname } = useLocation();

  return (
    <aside className="relative top-0 left-0 z-40 w-[27.5rem] h-screen pt-[3rem] bg-black">
      <h1 className="text-white pl-[3.75rem] text-3xl font-extrabold font-serif">
        Fintrade
      </h1>
      <div className="mt-[8.75rem] pl-[3.75rem] text-gray-300 text-xl font-semibold font-sans">
        <ul>
          <Link
            to="/"
            className={cn(
              "",
              pathname === "/" ? "text-white" : "text-slate-400"
            )}
          >
            <li className="flex mb-7">
              <DashboardIcon
                color={pathname === "/" ? "text-lime-green" : "text-slate-400"}
              />
              <span className="ms-3">Dashboard</span>
            </li>
          </Link>
          <Link
            to="/documents"
            className={cn(
              "",
              pathname === "/documents" ? "text-white" : "text-slate-400"
            )}
          >
            <li className="flex mb-7">
              <DocumentsIcon
                color={
                  pathname === "/documents"
                    ? "text-lime-green"
                    : "text-slate-400"
                }
              />
              <span className="ms-3">Documents</span>
            </li>
          </Link>
          <Link
            to="/messages"
            className={cn(
              "",
              pathname === "/messages" ? "text-white" : "text-slate-400"
            )}
          >
            <li className="flex mb-7 items-center">
              <MessagesIcon
                color={
                  pathname === "/messages" ? "text-lime-green" : "text-slate-400"
                }
              />
              <span className="ms-3">Messages</span>
              <span className="flex rounded-full w-[1.5rem] h-[1.5rem] ms-3 bg-lime-green text-gray-800 items-center justify-center">
                5
              </span>
            </li>
          </Link>
          <Link
            to="wallets"
            className={cn(
              "",
              pathname === "/wallets" ? "text-white" : "text-slate-400"
            )}
          >
            <li className="flex mb-7">
              <WalletIcon
                color={
                  pathname === "/wallets" ? "text-lime-green" : "text-slate-400"
                }
              />
              <span className="ms-3">My Wallets</span>
            </li>
          </Link>
          <Link
            to="/activities"
            className={cn(
              "",
              pathname === "/activities" ? "text-white" : "text-slate-400"
            )}
          >
            <li className="flex mb-7">
              <ActivityIcon
                color={
                  pathname === "/activities"
                    ? "text-lime-green"
                    : "text-slate-400"
                }
              />
              <span className="ms-3">Activities</span>
            </li>
          </Link>
          <Link
            to="/analytics"
            className={cn(
              "",
              pathname === "/analytics" ? "text-white" : "text-slate-400"
            )}
          >
            <li className="flex mb-7">
              <AnalyticsIcon
                color={
                  pathname === "/analytics"
                    ? "text-lime-green"
                    : "text-slate-400"
                }
              />
              <span className="ms-3">Analytics</span>
            </li>
          </Link>
        </ul>
      </div>

      <div className="absolute w-4/5 bottom-[3.5rem] flex flex-col bg-[#0E0E0E] gap-7 left-1/2 -translate-x-1/2 gap-y-3 p-5">
        <h1 className="text-gray-300 text-2xl font-semibold">Upgrade to PRO</h1>
        <p className="text-gray-600 text-lg leading-6">
          One year Support, monthly <br /> updates for up to 5 members
        </p>
        <div className="text-lime-green text-2xl font-bold flex items-center justify-center bg-black py-4">
          Upgrade
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;

import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";

const Layout: React.FC = () => {
  return (
    <div className="flex flex-row h-screen w-full">
      <Sidebar />
      <main className="flex flex-col w-full h-full">
        <Navbar />
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;

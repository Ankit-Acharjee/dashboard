import { useState } from "react";
import { Bell, Search } from "lucide-react";
import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

const Navbar = () => {
  const navLinks = ["Investments", "Company", "Candidates"];
  const [activeLink, setActiveLink] = useState(navLinks[0]);
  return (
    <div className="flex justify-between items-center text-2xl font-semibold  px-[3.75rem] border-b-2">
      <div className="flex gap-14 text-gray-500 h-full">
        {navLinks.map((link, index) => (
          <div
            key={index}
            className={cn("cursor-pointer h-full flex items-center", {
              "text-black border-b-2  border-b-black": link === activeLink,
              "text-gray-500": link !== activeLink,
            })}
            onClick={() => setActiveLink(link)}
          >
            {link}
          </div>
        ))}
      </div>
      <div className="flex items-center text-gray-500 gap-11 py-[1.9375rem]">
        <Search width={28} height={28} />
        <span className="relative flex">
          <Bell width={28} height={28} />
          <span className="animate-ping absolute right-3 inline-flex h-3 w-3 rounded-full bg-rose-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-rose-500 right-3 "></span>
        </span>
        <Avatar className="w-12 h-12">
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div className="flex flex-col -ml-4">
          <p className="text-black">Ankit Acharjee</p>
          <p className="text-lg font-sans font-normal">
            ankit.personal@mail.com
          </p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

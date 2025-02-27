import React from "react";
import { NavLink } from "react-router";
import { ModeToggle } from "~/components/mode-toggle";
import { House } from "lucide-react";
import { CircleUserRound } from "lucide-react";
import { FolderOpenDot } from "lucide-react";
import { Contact } from "lucide-react";

const Navbar = () => {
  const links = (
    <div className="flex gap-8 font-bold">
      <NavLink
        className={
          "flex gap-1 items-center hover:text-[#41C6FB] duration-300 transform transition-all"
        }
        to={"/"}
      >
        {" "}
        <House />
        Home
      </NavLink>
      <NavLink
        className={
          "flex gap-1 items-center hover:text-[#41C6FB] duration-300 transform transition-all"
        }
        to={"/about"}
      >
        <CircleUserRound />
        About
      </NavLink>
      <NavLink
        className={
          "flex gap-1 items-center hover:text-[#41C6FB] duration-300 transform transition-all"
        }
        to={"/projects"}
      >
        <FolderOpenDot />
        Projects
      </NavLink>
      <NavLink
        className={
          "flex gap-1 items-center hover:text-[#41C6FB] duration-300 transform transition-all"
        }
        to={"/contact"}
      >
        <Contact />
        Contact
      </NavLink>
    </div>
  );
  return (
    <div className="w-full border-b-2 fixed z-50 shadow-md top-0">
      <div className="flex justify-between h-18 items-center w-10/12 mx-auto">
        <div>
          <h2 className="text-2xl font-bold">MRiDuL-ICE</h2>
        </div>
        <div>{links}</div>
        <div>
          <ModeToggle></ModeToggle>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

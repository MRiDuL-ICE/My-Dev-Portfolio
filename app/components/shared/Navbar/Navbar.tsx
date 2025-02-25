import React from "react";
import { NavLink } from "react-router";
import { ModeToggle } from "~/components/mode-toggle";
import { House } from "lucide-react";

const Navbar = () => {
  const links = (
    <div className="flex gap-8 font-bold">
      <NavLink className={"flex gap-1 items-center"} to={"/"}>
        {" "}
        <House />
        Home
      </NavLink>
      <NavLink to={"/about"}>About</NavLink>
      <NavLink to={"/projects"}>Projects</NavLink>
      <NavLink to={"/contact"}>Contact</NavLink>
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

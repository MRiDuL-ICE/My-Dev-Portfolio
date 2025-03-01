import React from "react";
import { NavLink } from "react-router";
import { ModeToggle } from "~/components/mode-toggle";
import { House } from "lucide-react";
import { CircleUserRound } from "lucide-react";
import { FolderOpenDot } from "lucide-react";
import { Contact } from "lucide-react";
import { RiMenuFold4Fill } from "react-icons/ri";
import { motion } from "framer-motion";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerTrigger,
} from "~/components/ui/drawer";
import { PiSealCheckBold } from "react-icons/pi";

const Navbar = () => {
  // Animation variants for navbar container
  const navbarVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
  };

  // Animation variants for navbar items
  const itemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3 },
    },
  };

  const links = (
    <div className="flex gap-8 font-bold">
      <motion.div variants={itemVariants}>
        <NavLink
          className="flex gap-1 items-center hover:text-[#41C6FB] duration-300 transform transition-all"
          to={"/"}
        >
          <House />
          Home
        </NavLink>
      </motion.div>

      <motion.div variants={itemVariants}>
        <NavLink
          className="flex gap-1 items-center hover:text-[#41C6FB] duration-300 transform transition-all"
          to={"/about"}
        >
          <CircleUserRound />
          About
        </NavLink>
      </motion.div>

      <motion.div variants={itemVariants}>
        <NavLink
          className="flex gap-1 items-center hover:text-[#41C6FB] duration-300 transform transition-all"
          to={"/projects"}
        >
          <FolderOpenDot />
          Projects
        </NavLink>
      </motion.div>

      <motion.div variants={itemVariants}>
        <NavLink
          className="flex gap-1 items-center hover:text-[#41C6FB] duration-300 transform transition-all"
          to={"/contact"}
        >
          <Contact />
          Contact
        </NavLink>
      </motion.div>
    </div>
  );

  const sideLinks = (
    <>
      <div className="flex flex-col gap-8 font-bold text-white">
        <NavLink
          className="flex gap-1 items-center hover:text-[#41C6FB] duration-300 transform transition-all"
          to={"/"}
        >
          <House />
          Home
        </NavLink>
        <NavLink
          className="flex gap-1 items-center hover:text-[#41C6FB] duration-300 transform transition-all"
          to={"/about"}
        >
          <CircleUserRound />
          About
        </NavLink>
        <NavLink
          className="flex gap-1 items-center hover:text-[#41C6FB] duration-300 transform transition-all"
          to={"/projects"}
        >
          <FolderOpenDot />
          Projects
        </NavLink>
        <NavLink
          className="flex gap-1 items-center hover:text-[#41C6FB] duration-300 transform transition-all"
          to={"/contact"}
        >
          <Contact />
          Contact
        </NavLink>
      </div>
    </>
  );

  return (
    <motion.div
      className="w-full fixed z-50 shadow-md top-0 backdrop-blur-sm mx-auto"
      initial="hidden"
      animate="visible"
      variants={navbarVariants}
    >
      <div className="flex justify-between h-18 items-center md:w-10/12 mx-auto w-11/12">
        <motion.div variants={itemVariants} className="">
          <h2 className="md:text-2xl font-bold">MRiDuL-ICE</h2>
        </motion.div>

        <div className="hidden md:flex">{links}</div>

        <div className="flex items-center gap-4">
          <motion.div variants={itemVariants}>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="border border-[#009AE6] px-3 py-2 md:px-5 md:py-2 rounded-sm flex gap-2 items-center cursor-pointer"
            >
              <PiSealCheckBold />
              Hire Me
            </motion.button>
          </motion.div>

          <motion.div variants={itemVariants}>
            <ModeToggle></ModeToggle>
          </motion.div>

          <motion.div variants={itemVariants} className="md:hidden">
            <Drawer direction="left">
              <DrawerTrigger>
                <RiMenuFold4Fill className="text-3xl" />
              </DrawerTrigger>
              <DrawerContent className="bg-[#202863]/45 backdrop-blur-sm px-4 py-6">
                {sideLinks}
                <DrawerClose>
                  <button className="w-full my-4 bg-[#41C6FB] hover:bg-[#4198fb] rounded-sm py-1">
                    close
                  </button>
                </DrawerClose>
              </DrawerContent>
            </Drawer>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Navbar;

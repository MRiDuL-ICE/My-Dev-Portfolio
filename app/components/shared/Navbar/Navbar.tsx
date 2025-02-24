import React from "react";
import { Button } from "~/components/ui/button";

const Navbar = () => {
  return (
    <div className="flex justify-between">
      <h2>Navbar</h2> <Button className="bg-black text-white">HI, There</Button>
    </div>
  );
};

export default Navbar;

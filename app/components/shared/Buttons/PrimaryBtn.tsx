import React from "react";
import { Button } from "~/components/ui/button";
import { motion } from "framer-motion";

const PrimaryBtn = ({ Btnicons, name }: any) => {
  return (
    <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
      <Button className="bg-[#5ed0fd] p-6 rounded-sm hover:bg-[#009AE6] hover:text-white font-bold transform transition-all duration-300">
        {Btnicons}
        {name}
      </Button>
    </motion.div>
  );
};

export default PrimaryBtn;

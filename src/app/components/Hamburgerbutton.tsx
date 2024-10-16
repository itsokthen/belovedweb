"use client";
import React from "react";
import { motion } from "framer-motion";

type HamburgerbuttonProps = {
  onClick: () => void;
};

const Hamburgerbutton: React.FC<HamburgerbuttonProps> = ({ onClick }) => {
  return (
    <div>
      <motion.button
        className="relative h-[8rem] w-[8rem] rounded-full"
        onClick={onClick}
      >
        <motion.span
          className="absolute h-[0.25rem] w-[4rem] bg-black"
          style={{ left: "50%", top: "35%", x: "-50%", y: "-50%" }}
        ></motion.span>
        <motion.span
          className="absolute h-[0.25rem] w-[4rem] bg-black"
          style={{ left: "50%", top: "50%", x: "-50%", y: "-50%" }}
        ></motion.span>
        <motion.span
          className="absolute h-[0.25rem] w-[4rem] bg-black"
          style={{ left: "50%", bottom: "35%", x: "-50%", y: "50%" }}
        ></motion.span>
      </motion.button>
    </div>
  );
};

export default Hamburgerbutton;

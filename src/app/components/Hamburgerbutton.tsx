"use client";
import React, { forwardRef } from "react";
import { motion } from "framer-motion";

type HamburgerbuttonProps = {
  onClick: (event: React.MouseEvent) => void;
  active: boolean;
};

const Hamburgerbutton = forwardRef<HTMLButtonElement, HamburgerbuttonProps>(
  ({ onClick, active }, ref) => {
    return (
      <div>
        <motion.button
          ref={ref}
          className={`relative h-[8rem] w-[8rem] rounded-full ${
            active ? "active-class" : ""
          }`}
          onClick={(event) => {
            onClick(event);
          }}
          animate={active ? "open" : "closed"}
        >
          <motion.span
            className="absolute h-[0.25rem] w-[4rem] bg-black"
            style={{ left: "50%", top: "35%", x: "-50%", y: "-50%" }}
            variants={{
              open: {
                rotate: "45deg",
                top: "50%",
              },
              closed: {
                rotate: "0deg",
              },
            }}
            transition={{
              duration: 0.3,
              ease: "easeInOut",
            }}
          ></motion.span>
          <motion.span
            className="absolute h-[0.25rem] w-[4rem] bg-black"
            style={{ left: "50%", top: "50%", x: "-50%", y: "-50%" }}
            variants={{
              open: {
                x: "350%",
                opacity: "0%",
              },
              closed: {
                x: "-50%",
              },
            }}
          ></motion.span>
          <motion.span
            className="absolute h-[0.25rem] w-[4rem] bg-black"
            style={{ left: "50%", bottom: "35%", x: "-50%", y: "50%" }}
            variants={{
              open: {
                rotate: "-45deg",
                top: "46%",
              },
              closed: {
                rotate: "0deg",
              },
            }}
            transition={{
              duration: 0.3,
              ease: "easeInOut",
            }}
          ></motion.span>
        </motion.button>
      </div>
    );
  }
);

Hamburgerbutton.displayName = "Hamburgerbutton";

export default Hamburgerbutton;

"use client";
import React from "react";
import { useState } from "react";
import Image from "next/image";
import Hamburgerbutton from "./Hamburgerbutton";
import OpenNav from "./OpenNav";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <div className="fixed top-0 left-0 w-full z-50 bg-white shadow-md">
        <div className="flex justify-between items-center p-4">
          <Image
            src={`/Logo1-lg.png`}
            alt="Beloved Logo"
            height="500"
            width="200"
          />
          <Hamburgerbutton onClick={() => setIsOpen(!isOpen)} />
        </div>
      </div>
      {isOpen && <OpenNav />}
    </div>
  );
};

export default Nav;

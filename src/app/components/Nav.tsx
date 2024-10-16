"use client";
import React, { useState, useRef } from "react";
import Image from "next/image";
import Hamburgerbutton from "./Hamburgerbutton";
import OpenNav from "./OpenNav";
import Link from "next/link";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const hamburgerButtonRef = useRef<HTMLButtonElement>(null);

  const toggleNav = (event: React.MouseEvent) => {
    event.stopPropagation();
    setIsOpen((prev) => !prev);
  };

  const closeNav = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <div className="fixed top-0 left-0 w-full z-50 bg-white shadow-md">
        <div className="flex justify-between items-center p-4">
          <Link href="/">
            <Image
              src={`/Logo1-lg.png`}
              alt="Beloved Logo"
              width={200}
              height={200}
              priority
            />
          </Link>
          <Hamburgerbutton onClick={toggleNav} ref={hamburgerButtonRef} />
        </div>
      </div>
      {isOpen && (
        <OpenNav
          closeOpenNav={closeNav}
          hamburgerButtonRef={hamburgerButtonRef}
        />
      )}
    </div>
  );
};

export default Nav;

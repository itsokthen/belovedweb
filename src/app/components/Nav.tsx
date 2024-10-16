"use client";
import React from "react";
import { useState } from "react";
import Image from "next/image";
import Hamburgerbutton from "./Hamburgerbutton";
import OpenNav from "./OpenNav";
import Link from "next/link";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  // navRef.current returning null
  // const navRef = React.useRef<HTMLElement | null>(null);
  // useEffect(() => {
  //   if (navRef.current) {
  //     const navHeight = navRef.current.offsetHeight;
  //     document.documentElement.style.setProperty(
  //       "--nav-height",
  //       `${navHeight}px`
  //     );
  //   }
  // }, []);
  const toggleOpenNav = () => {
    setIsOpen(!isOpen);
  };

  const closeOpenNav = () => {
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
              height="500"
              width="200"
            />
          </Link>
          <Hamburgerbutton onClick={toggleOpenNav} />
        </div>
      </div>
      {/* Pass closeOpenNav to OpenNav */}
      {isOpen && <OpenNav closeOpenNav={closeOpenNav} />}
    </div>
  );
};

export default Nav;

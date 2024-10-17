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
        <div className=" nav-container mx-auto w-full flex items-stretch justify-between p-4 h-[auto] lg:h-[145px]">
          <div className="w-[200px] lg:w-[300px]">
            <Link href="/">
              <Image
                src={`/Logo1-lg.png`}
                alt="Beloved Logo"
                width={300}
                height={200}
                priority
              />
            </Link>
          </div>
          <div className="hidden">
            <Hamburgerbutton onClick={toggleNav} ref={hamburgerButtonRef} />
          </div>
          <div className="flex items-center">
            <ul className="flex">
              <li className="">
                <h1 className="text-[20px]">Our Story</h1>
                <ul className="hidden">
                  <li>
                    <h3>About Us</h3>
                  </li>
                </ul>
              </li>
              <li className="mx-20">
                <h1 className="text-[20px]">Our Pets</h1>
                <ul className="hidden">
                  <li>
                    <h3>Good Grief</h3>
                  </li>
                  <li>
                    <h3>Memorials</h3>
                  </li>
                  <li>
                    <h3>Pet Stories</h3>
                  </li>
                </ul>
              </li>
              <li className="">
                <h1 className="text-[20px] hover:bg-gray-200">Our Vision</h1>
                <ul className="hidden">
                  <li>
                    <h3>Pet Car Program</h3>
                  </li>
                  <li>
                    <h3>The Clubhouse</h3>
                  </li>
                  <li>
                    <h3>The Village</h3>
                  </li>
                  <li>
                    <h3>The TV Show</h3>
                  </li>
                  <li>
                    <h3>Resources</h3>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
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

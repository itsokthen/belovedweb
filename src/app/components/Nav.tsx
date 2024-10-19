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
        <div className="w-full max-w-[700px] xl:max-w-[900px] mx-auto flex items-stretch justify-between pt-4 h-[auto] lg:h-[145px]">
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
          <div className="lg:hidden">
            <Hamburgerbutton onClick={toggleNav} ref={hamburgerButtonRef} />
          </div>
          {/* Nav Bar on Big Screens */}
          <div className="hidden lg:flex lg:visible items-center">
            <ul className="flex space-x-20 h-full items-center">
              {/* Our Story */}
              <li className="group relative h-full flex items-center">
                <h1 className="text-[20px] cursor-pointer group-hover:text-gray-700 transition duration-300">
                  Our Story
                </h1>
                <ul className="absolute left-0 top-full bg-white shadow-lg rounded p-4 space-y-2 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 invisible group-hover:visible z-10">
                  <li className="whitespace-nowrap">
                    <Link
                      href="/our-story/about-us"
                      className="hover:text-gray-500 transition"
                    >
                      <h3 className="whitespace-nowrap">About Us</h3>
                    </Link>
                  </li>
                </ul>
              </li>
              {/* Our Pets */}
              <li className="group relative h-full flex items-center">
                <h1 className="text-[20px] cursor-pointer group-hover:text-gray-700 transition duration-300">
                  Our Pets
                </h1>
                <ul className="absolute left-0 top-full bg-white shadow-lg rounded p-4 space-y-2 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 invisible group-hover:visible z-10">
                  <li className="whitespace-nowrap">
                    <Link
                      href="/our-pets/good-grief"
                      className="hover:text-gray-500 transition"
                    >
                      <h3 className="whitespace-nowrap">Good Grief</h3>
                    </Link>
                  </li>
                  <li className="whitespace-nowrap">
                    <Link
                      href="/our-pets/memorials"
                      className="hover:text-gray-500 transition"
                    >
                      <h3 className="whitespace-nowrap">Memorials</h3>
                    </Link>
                  </li>
                  <li className="whitespace-nowrap">
                    <Link
                      href="/our-pets/pet-stories"
                      className="hover:text-gray-500 transition"
                    >
                      <h3 className="whitespace-nowrap">Pet Stories</h3>
                    </Link>
                  </li>
                </ul>
              </li>
              {/* Our Vision */}
              <li className="group relative h-full flex items-center">
                <h1 className="text-[20px] cursor-pointer group-hover:text-gray-700 transition duration-300">
                  Our Vision
                </h1>
                <ul className="absolute left-0 top-full bg-white shadow-lg rounded p-4 space-y-2 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 invisible group-hover:visible z-10">
                  <li className="whitespace-nowrap">
                    <Link
                      href="/our-vision/pet-care-program"
                      className="hover:text-gray-500 transition"
                    >
                      <h3 className="whitespace-nowrap">Pet Care Program</h3>
                    </Link>
                  </li>
                  <li className="whitespace-nowrap">
                    <Link
                      href="/our-vision/the-clubhouse"
                      className="hover:text-gray-500 transition"
                    >
                      <h3 className="whitespace-nowrap">The Clubhouse</h3>
                    </Link>
                  </li>
                  <li className="whitespace-nowrap">
                    <Link
                      href="/our-vision/the-village"
                      className="hover:text-gray-500 transition"
                    >
                      <h3 className="whitespace-nowrap">The Village</h3>
                    </Link>
                  </li>
                  <li className="whitespace-nowrap">
                    <Link
                      href="/our-vision/the-tv-show"
                      className="hover:text-gray-500 transition"
                    >
                      <h3 className="whitespace-nowrap">The TV Show</h3>
                    </Link>
                  </li>
                  <li className="whitespace-nowrap">
                    <Link
                      href="/our-vision/resources"
                      className="hover:text-gray-500 transition"
                    >
                      <h3 className="whitespace-nowrap">Resources</h3>
                    </Link>
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

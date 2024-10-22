"use client";
import React, { useState, useRef } from "react";
import Image from "next/image";
import Hamburgerbutton from "./Hamburgerbutton";
import OpenNav from "./OpenNav";
import Link from "next/link";
import LargeScreenNav from "./LargeScreenNav";

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

  const menuItems = [
    {
      label: "Our Story",
      subItems: [{ label: "About Us", href: "/our-story/about-us" }],
    },
    {
      label: "Our Pets",
      subItems: [
        { label: "Good Grief", href: "/our-pets/good-grief" },
        { label: "Memorials", href: "/our-pets/memorials" },
        { label: "Pet Stories", href: "/our-pets/pet-stories" },
      ],
    },
    {
      label: "Our Vision",
      subItems: [
        { label: "Pet Care Program", href: "/our-vision/pet-care-program" },
        { label: "The Clubhouse", href: "/our-vision/the-clubhouse" },
        { label: "The Village", href: "/our-vision/the-village" },
        { label: "The TV Show", href: "/our-vision/the-tv-show" },
        { label: "Resources", href: "/our-vision/resources" },
      ],
    },
  ];

  return (
    <div>
      <div className="fixed top-0 left-0 w-full z-50 bg-white shadow-md">
        <div className="w-full max-w-[700px] xl:max-w-[900px] 2xl:max-w-[1200px] mx-auto flex items-stretch justify-between pt-4 h-[auto] lg:h-[145px]">
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
          <LargeScreenNav menuItems={menuItems} />
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

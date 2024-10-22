import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import SocialMediaIcons from "./SocialMediaIcons";

interface OpenNavProps {
  closeOpenNav: () => void;
  hamburgerButtonRef: React.RefObject<HTMLButtonElement>; // Pass ref to Hamburger button
}

const OpenNav: React.FC<OpenNavProps> = ({
  closeOpenNav,
  hamburgerButtonRef,
}) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isNavOpen, setIsNavOpen] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Close the nav if clicked outside except on hamburger button
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;
      if (
        navRef.current &&
        !navRef.current.contains(target) &&
        hamburgerButtonRef.current &&
        !hamburgerButtonRef.current.contains(target)
      ) {
        closeOpenNav();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [navRef, closeOpenNav, hamburgerButtonRef]);

  // Monitor window size to close the nav on lg screens and larger
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        // lg breakpoint
        setIsNavOpen(false);
        closeOpenNav();
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [closeOpenNav]);

  return (
    <div ref={navRef}>
      <div
        className="fixed z-50 bg-secondary  right-0 w-4/5 flex flex-col shadow-lg 
             top-[var(--navHeightSM)] lg:top-[var(--navHeightLG)] 
             h-[calc(100vh-var(--navHeightSM))] lg:h-[calc(100vh-var(--navHeightLG))] ${isNavOpen ? 'block' : 'hidden'}`"
      >
        <ul className="flex-grow space-y-6 border-b border-gray-200">
          <li className="transition-transform duration-300">
            <p
              onClick={() => toggleDropdown(0)}
              className="cursor-pointer font-bold text-[30px] hover:text-altSec transition flex items-center justify-between ml-2 py-4"
            >
              Our Story
              <span
                className={`transform transition-transform duration-300 ${
                  openIndex === 0 ? "rotate-180" : ""
                }`}
              >
                ▼
              </span>
            </p>
            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                openIndex === 0 ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <ul className="mt-2 bg-white rounded shadow">
                <Link href="/our-story/about-us" onClick={closeOpenNav}>
                  <li className="py-6 px-3 text-[20px] hover:bg-gray-200 transition">
                    About Us
                  </li>
                </Link>
              </ul>
            </div>
          </li>
          <li className="transition-transform duration-300">
            <p
              onClick={() => toggleDropdown(1)}
              className="cursor-pointer font-bold text-[30px] hover:text-altSec transition flex items-center justify-between ml-2 py-4"
            >
              Our Pets
              <span
                className={`transform transition-transform duration-300 ${
                  openIndex === 1 ? "rotate-180" : ""
                }`}
              >
                ▼
              </span>
            </p>
            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                openIndex === 1
                  ? "max-h-[700px] opacity-100"
                  : "max-h-0 opacity-0"
              }`}
            >
              <ul className="mt-2 bg-white rounded shadow p-4">
                <Link href="/our-pets/good-grief" onClick={closeOpenNav}>
                  <li className="py-6 px-3 text-[20px] hover:bg-gray-200 transition">
                    Good Grief
                  </li>
                </Link>
                <Link href="/our-pets/memorials" onClick={closeOpenNav}>
                  <li className="py-6 px-3 text-[20px] hover:bg-gray-200 transition">
                    Memorials
                  </li>
                </Link>
                <Link href="/our-pets/pet-stories" onClick={closeOpenNav}>
                  <li className="py-6 px-3 text-[20px] hover:bg-gray-200 transition">
                    Pet Stories
                  </li>
                </Link>
              </ul>
            </div>
          </li>
          <li className="transition-transform duration-300">
            <p
              onClick={() => toggleDropdown(2)}
              className="cursor-pointer font-bold text-[30px] hover:text-altSec transition flex items-center justify-between ml-2 py-4"
            >
              Our Vision
              <span
                className={`transform transition-transform duration-300 ${
                  openIndex === 2 ? "rotate-180" : ""
                }`}
              >
                ▼
              </span>
            </p>
            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                openIndex === 2
                  ? "max-h-[700px] opacity-100"
                  : "max-h-0 opacity-0"
              }`}
            >
              <ul className="mt-2 bg-white rounded shadow p-4">
                <Link
                  href="/our-vision/pet-care-program"
                  onClick={closeOpenNav}
                >
                  <li className="py-6 px-3 text-[20px] hover:bg-gray-200 transition">
                    Pet Care Program
                  </li>
                </Link>
                <Link href="/our-vision/the-clubhouse" onClick={closeOpenNav}>
                  <li className="py-6 px-3 text-[20px] hover:bg-gray-200 transition">
                    The Clubhouse
                  </li>
                </Link>
                <Link href="/our-vision/the-village" onClick={closeOpenNav}>
                  <li className="py-6 px-3 text-[20px] hover:bg-gray-200 transition">
                    The Village
                  </li>
                </Link>
                <Link href="/our-vision/the-tv-show" onClick={closeOpenNav}>
                  <li className="py-6 px-3 text-[20px] hover:bg-gray-200 transition">
                    The TV Show
                  </li>
                </Link>
                <Link href="/our-vision/resources" onClick={closeOpenNav}>
                  <li className="py-6 px-3 text-[20px] hover:bg-gray-200 transition">
                    Resources
                  </li>
                </Link>
              </ul>
            </div>
          </li>
        </ul>
        <div className="h-40 flex items-center justify-center">
          <Link href="/Donate" onClick={closeOpenNav}>
            <button className="bg-blue-600 text-white py-8 px-10 rounded shadow hover:bg-blue-700 transition text-3xl">
              Donate
            </button>
          </Link>
        </div>
        <div className="h-40 flex items-center justify-center">
          <p>
            <SocialMediaIcons />
          </p>
        </div>
      </div>
    </div>
  );
};

export default OpenNav;

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";

interface OpenNavProps {
  closeOpenNav: () => void;
  hamburgerButtonRef: React.RefObject<HTMLButtonElement>; // Pass ref to Hamburger button
}

const OpenNav: React.FC<OpenNavProps> = ({
  closeOpenNav,
  hamburgerButtonRef,
}) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const navRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Close the nav if clicked outside except on hamburgerbutton
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

  return (
    <div ref={navRef}>
      <div
        className="fixed z-50 bg-white h-screen right-0 w-4/5 flex flex-col shadow-lg"
        style={{
          top: "var(--navHeightSM)",
          height: "calc(100vh - var(--navHeightSM))",
        }}
      >
        <ul className="flex-grow p-6 space-y-6 border-b border-gray-200">
          <li className="transition-transform duration-300">
            <p
              onClick={() => toggleDropdown(0)}
              className="cursor-pointer font-bold text-2xl hover:text-blue-500 transition flex items-center justify-between ml-2 py-4"
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
            {openIndex === 0 && (
              <ul className="ml-4 mt-2 bg-gray-100 rounded shadow p-4">
                <Link href="/our-story/about-us" onClick={closeOpenNav}>
                  <li className="py-2 text-lg hover:bg-gray-200 transition">
                    About Us
                  </li>
                </Link>
              </ul>
            )}
          </li>
          <li className="transition-transform duration-300">
            <p
              onClick={() => toggleDropdown(1)}
              className="cursor-pointer font-bold text-2xl hover:text-blue-500 transition flex items-center justify-between ml-2 py-4"
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
            {openIndex === 1 && (
              <ul className="ml-4 mt-2 bg-gray-100 rounded shadow p-4">
                <Link href="/our-pets/good-grief" onClick={closeOpenNav}>
                  <li className="py-2 text-lg hover:bg-gray-200 transition">
                    Good Grief
                  </li>
                </Link>
                <Link href="/our-pets/memorials" onClick={closeOpenNav}>
                  <li className="py-2 text-lg hover:bg-gray-200 transition">
                    Memorials
                  </li>
                </Link>
                <Link href="/our-pets/pet-stories" onClick={closeOpenNav}>
                  <li className="py-2 text-lg hover:bg-gray-200 transition">
                    Pet Stories
                  </li>
                </Link>
              </ul>
            )}
          </li>
          <li className="transition-transform duration-300">
            <p
              onClick={() => toggleDropdown(2)}
              className="cursor-pointer font-bold text-2xl hover:text-blue-500 transition flex items-center justify-between ml-2 py-4"
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
            {openIndex === 2 && (
              <ul className="ml-4 mt-2 bg-gray-100 rounded shadow p-4">
                <Link
                  href="/our-vision/pet-care-program"
                  onClick={closeOpenNav}
                >
                  <li className="py-2 text-lg hover:bg-gray-200 transition">
                    Pet Care Program
                  </li>
                </Link>
                <Link href="/our-vision/the-clubhouse" onClick={closeOpenNav}>
                  <li className="py-2 text-lg hover:bg-gray-200 transition">
                    The Clubhouse
                  </li>
                </Link>
                <Link href="/our-vision/the-village" onClick={closeOpenNav}>
                  <li className="py-2 text-lg hover:bg-gray-200 transition">
                    The Village
                  </li>
                </Link>
                <Link href="/our-vision/the-tv-show" onClick={closeOpenNav}>
                  <li className="py-2 text-lg hover:bg-gray-200 transition">
                    The TV Show
                  </li>
                </Link>
                <Link href="/our-vision/resources" onClick={closeOpenNav}>
                  <li className="py-2 text-lg hover:bg-gray-200 transition">
                    Resources
                  </li>
                </Link>
              </ul>
            )}
          </li>
        </ul>
        <div className="h-40 flex items-center justify-center">
          <button className="bg-blue-600 text-white py-3 px-6 rounded shadow hover:bg-blue-700 transition text-lg">
            Donate
          </button>
        </div>
        <div className="h-40 flex items-center justify-center">
          <p className="text-gray-600 text-lg">Facebook Instagram</p>
        </div>
      </div>
    </div>
  );
};

export default OpenNav;

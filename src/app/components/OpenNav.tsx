import React, { useState } from "react";
import Link from "next/link";

interface OpenNavProps {
  closeOpenNav: () => void; // Define the prop type
}

const OpenNav: React.FC<OpenNavProps> = ({ closeOpenNav }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleDropdown = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div>
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
                <li className="py-2 text-lg hover:bg-gray-200 transition">
                  <Link href="/our-story/about-us" onClick={closeOpenNav}>
                    About Us
                  </Link>
                </li>
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
                <li className="py-2 text-lg hover:bg-gray-200 transition">
                  <Link href="/our-pets/good-grief" onClick={closeOpenNav}>
                    Good Grief
                  </Link>
                </li>
                <li className="py-2 text-lg hover:bg-gray-200 transition">
                  <Link href="/our-pets/memorials" onClick={closeOpenNav}>
                    Memorials
                  </Link>
                </li>
                <li className="py-2 text-lg hover:bg-gray-200 transition">
                  <Link href="/our-pets/pet-stories" onClick={closeOpenNav}>
                    Pet Stories
                  </Link>
                </li>
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
                <li className="py-2 text-lg hover:bg-gray-200 transition">
                  <Link
                    href="/our-vision/pet-care-program"
                    onClick={closeOpenNav}
                  >
                    Pet Care Program
                  </Link>
                </li>
                <li className="py-2 text-lg hover:bg-gray-200 transition">
                  <Link href="/our-vision/the-clubhouse" onClick={closeOpenNav}>
                    The Clubhouse
                  </Link>
                </li>
                <li className="py-2 text-lg hover:bg-gray-200 transition">
                  <Link href="/our-vision/the-village" onClick={closeOpenNav}>
                    The Village
                  </Link>
                </li>
                <li className="py-2 text-lg hover:bg-gray-200 transition">
                  <Link href="/our-vision/the-tv-show" onClick={closeOpenNav}>
                    The TV Show
                  </Link>
                </li>
                <li className="py-2 text-lg hover:bg-gray-200 transition">
                  <Link href="/our-vision/resources" onClick={closeOpenNav}>
                    Resources
                  </Link>
                </li>
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

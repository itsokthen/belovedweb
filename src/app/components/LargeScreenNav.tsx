"use client";
import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";

interface SubItem {
  label: string;
  href: string;
}

interface MenuItem {
  label: string;
  href?: string;
  subItems?: SubItem[];
}

interface LargeScreenNavProps {
  menuItems: MenuItem[];
}

const LargeScreenNav: React.FC<LargeScreenNavProps> = ({ menuItems }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [linkClicked, setLinkClicked] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
    setLinkClicked(false);
  };

  const handleLinkClick = () => {
    setOpenIndex(null);
    setLinkClicked(true);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (navRef.current && !navRef.current.contains(event.target as Node)) {
      setOpenIndex(null);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="hidden lg:flex lg:visible items-end" ref={navRef}>
      <ul className="flex h-full xl:h-4/5 items-center">
        {menuItems.map((item, index) => (
          <li
            key={index}
            className={`transition px-6 group relative h-full flex ${
              linkClicked ? "hover:bg-white" : "hover:bg-primary"
            }`}
          >
            <h1
              className="text-center mt-[20px] text-[20px] group-hover:text-gray-700 transition duration-300 cursor-pointer"
              onClick={() => item.subItems && toggleDropdown(index)}
            >
              {item.href ? (
                <Link href={item.href} onClick={handleLinkClick}>
                  {item.label}
                </Link>
              ) : (
                item.label
              )}
            </h1>

            {item.subItems && (
              <ul
                className={`bg-primary absolute left-0 top-full shadow-lg cursor-pointer rounded-b space-y-2 
                  ${
                    openIndex === index
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-2 invisible"
                  }
                  transition-all duration-300 z-10`}
              >
                {item.subItems.map((subItem, subIndex) => (
                  <li
                    key={subIndex}
                    className="hover:bg-secondary transition p-4 whitespace-nowrap"
                  >
                    <Link href={subItem.href} onClick={handleLinkClick}>
                      <h3 className="text-[20px] mr-6 whitespace-nowrap min-w-[120px]">
                        {subItem.label}
                      </h3>
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
      <div className="ml-10 mb-[55px] flex justify-center items-center">
        <Link href="/Donate" onClick={handleLinkClick}>
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded-lg transition duration-300">
            Contribute
          </button>
        </Link>
      </div>
    </div>
  );
};

export default LargeScreenNav;

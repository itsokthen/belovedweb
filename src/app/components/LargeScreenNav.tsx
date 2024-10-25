"use client";
import React from "react";
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
  return (
    <div className="hidden lg:flex lg:visible items-end">
      <ul className="flex h-full xl:h-4/5 items-center">
        {menuItems.map((item, index) => (
          <li
            key={index}
            className="hover:bg-primary transition px-6 group relative h-full flex"
          >
            <h1 className="text-center mt-[20px] text-[20px]  group-hover:text-gray-700 transition duration-300">
              {item.href ? (
                <Link href={item.href}>{item.label}</Link>
              ) : (
                item.label
              )}
            </h1>

            {item.subItems && (
              <ul className="bg-primary absolute left-0 top-full shadow-lg cursor-pointer rounded-b space-y-2 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 invisible group-hover:visible z-10">
                {item.subItems.map((subItem, subIndex) => (
                  <li
                    key={subIndex}
                    className="hover:bg-secondary transition p-4 whitespace-nowrap"
                  >
                    <Link href={subItem.href} className="">
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
        <Link href="/Donate">
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded-lg transition duration-300">
            Contribute
          </button>
        </Link>
      </div>
    </div>
  );
};

export default LargeScreenNav;

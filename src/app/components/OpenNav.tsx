import React from "react";

const OpenNav = () => {
  return (
    <div>
      <div
        className="fixed z-50 bg-white h-screen right-0 w-4/5 flex flex-col"
        style={{ top: "107.5px", height: "calc(100vh - 107.5px)" }}
      >
        <ul className="h-40">
          <li className="h-20">Our Story</li>
          <li>Our Pets</li>
          <li>Our Vision</li>
        </ul>
        <div className="h-40 flex items-center justify-center">
          <button>Donate</button>
        </div>
        <div className="h-40 flex items-center justify-center">
          <p>Facebook Instagram</p>
        </div>
      </div>
    </div>
  );
};

export default OpenNav;

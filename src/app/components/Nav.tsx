import React from "react";
import Image from "next/image";
import Hamburgerbutton from "./Hamburgerbutton";

const Nav = () => {
  return (
    <div>
      <div className="flex justify-between">
        <Image
          src={`/Logo1-lg.png`}
          alt="Beloved Logo"
          height="500"
          width="200"
        />
        <Hamburgerbutton />
      </div>
    </div>
  );
};

export default Nav;

import React from "react";
import Image from "next/image";
import styles from "./navcss.module.css";
import Hamburgerbutton from "./Hamburgerbutton";

const Nav = () => {
  return (
    <div>
      <div className={styles.flexes}>
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

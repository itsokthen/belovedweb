import React from "react";
import Image from "next/image";

const ComingSoon = () => {
  return (
    <div>
      <div
        className="mb-10"
        style={{ position: "relative", width: "100%", height: "80px" }}
      >
        <Image
          src={"/ComingSoon.png"}
          alt="Coming Soon!"
          fill
          objectFit="contain"
        />
      </div>
    </div>
  );
};

export default ComingSoon;

import React from "react";
import Image from "next/image";

const ImageSection = () => {
  return (
    <section>
      <div style={{ position: "relative", width: "100%", height: "200px" }}>
        <Image
          src={"/catBeloved.jpg"}
          alt="Banner Image of Cat"
          fill
          objectFit="cover"
          style={{ objectPosition: "center bottom" }}
        />
        <h1
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            color: "white",
            textAlign: "center",
            fontSize: "3rem",
            fontWeight: "bold",
          }}
        >
          Home
        </h1>
      </div>
    </section>
  );
};

export default ImageSection;

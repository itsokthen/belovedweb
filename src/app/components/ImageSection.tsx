"use client";
import React from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";

const ImageSection = () => {
  const pathname = usePathname();

  let sectionText = "Home";
  let imageUrl = "/catBeloved.jpg";

  if (pathname.startsWith("/our-story")) {
    sectionText = "Our Story";
    imageUrl = "/our-story-banner.jpg";
  } else if (pathname.startsWith("/our-pets")) {
    sectionText = "Our Pets";
    imageUrl = "/our-pets-banner.jpg";
  } else if (pathname.startsWith("/our-vision")) {
    sectionText = "Our Vision";
    imageUrl = "/our-vision-banner.jpg";
  }

  return (
    <section>
      <div className="relative w-full h-[200px] lg:h-[250px]">
        <Image
          src={imageUrl}
          alt={`${sectionText} Banner Image`}
          fill
          className="object-cover"
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
          {sectionText}
        </h1>
      </div>
    </section>
  );
};

export default ImageSection;

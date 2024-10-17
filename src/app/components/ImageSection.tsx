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
        <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-[40px] lg:text-[60px] font-bold text-center drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
          {sectionText}
        </h1>
      </div>
    </section>
  );
};

export default ImageSection;

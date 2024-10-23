"use client";
import React from "react";
import { usePathname } from "next/navigation";
import { CldImage } from "next-cloudinary";

const ImageSection = () => {
  const pathname = usePathname();

  let sectionText = "Home";
  let imageUrl = "l8pfzobotd38bii0egt5";

  if (pathname.startsWith("/our-story")) {
    sectionText = "Our Story";
    imageUrl = "ia71xwr8txc35a5tysnf";
  } else if (pathname.startsWith("/our-pets")) {
    sectionText = "Our Pets";
    imageUrl = "z4rprngb0p4y43b1z2lm";
  } else if (pathname.startsWith("/our-vision")) {
    sectionText = "Our Vision";
    imageUrl = "lhwe2xbhnvrwdquqsvx2";
  } else if (pathname.startsWith("/Donate")) {
    sectionText = "Contribute";
    imageUrl = "va8g1csqh00vi2vk68ap";
  }

  return (
    <section>
      <div className="relative w-full h-[200px] lg:h-[250px] xl:h-[300px] 2xl:h-[325px]">
        <CldImage
          src={imageUrl}
          alt={`${sectionText} Banner Image`}
          fill
          className="object-cover"
          style={{ objectPosition: "center 50%" }}
          sizes="100vw"
        />
        <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-[40px] lg:text-[60px] font-bold text-center drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
          {sectionText}
        </h1>
      </div>
    </section>
  );
};

export default ImageSection;

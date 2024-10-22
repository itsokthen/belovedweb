import React from "react";
import Image from "next/image";
import SocialMediaIcons from "./SocialMediaIcons";

const Footer = () => {
  return (
    <div className="bg-secondary flex flex-col items-center">
      {/* 3 Images side by side */}
      <div className="flex justify-evenly pt-10 text-center">
        <Image src="/Icon1.png" alt="Dog Paw Icon" width="70" height="70" />
        <Image src="/Icon2.png" alt="Heart Icon" width="70" height="70" />
        <Image src="/Icon3.png" alt="Peace Icon" width="70" height="70" />
      </div>
      <div className="text-center flex flex-col mx-10 items-center max-w-[700px] xl:max-w-[900px] 2xl:max-w-[1200px]">
        <p>
          Change the Story. We have so much love to give. Many people never get
          another pet because they don’t want to hurt like this again. One pet’s
          life should only be a CHAPTER in our own story. Could we, together,
          find enough peace to find a new pet? Not a replacement pet, but a new
          chapter in our story. The best way to honor the pet we’ve lost is to
          save another one from a shelter. Take the love we learned from one and
          pass it on to a new pet that needs us.
        </p>
        <div className="mt-5">
          <h2 className="font-bold text-[20px]">Contact</h2>
          <h4>1600 Pennsylvania Ave</h4>
          <h4>Washington, DC</h4>
        </div>
        <div className="mt-2">
          <h4>555-555-5555</h4>
          <h4>
            <a
              href="mailto:invest@BEloved.com"
              className="text-blue-600 font-semibold hover:text-blue-800"
            >
              info@BEloved.com
            </a>
          </h4>
        </div>
        <div className="mt-5">
          <SocialMediaIcons />
        </div>
        <div className="mt-5 mb-5">
          <h4>&copy; BEloved</h4>
        </div>
      </div>
    </div>
  );
};

export default Footer;

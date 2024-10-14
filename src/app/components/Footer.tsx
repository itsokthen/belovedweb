import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="bg-secondary">
      {/* 3 Images side by side */}
      <div className="flex justify-evenly pt-10">
        <Image src="/Icon1.png" alt="Dog Paw Icon" width="70" height="70" />
        <Image src="/Icon2.png" alt="Heart Icon" width="70" height="70" />
        <Image src="/Icon3.png" alt="Peace Icon" width="70" height="70" />
      </div>
      <div className="text-center flex flex-col mx-10 items-center">
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
          <h2>Contact</h2>
          <h4>1600 Pennsylvania Ave</h4>
          <h4>Washington, DC</h4>
        </div>
        <div className="mt-5">
          <h4>555-555-5555</h4>
          <h4>info@BEloved.com</h4>
        </div>
        <div className="mt-5">Image of facebook and insta</div>
      </div>
    </div>
  );
};

export default Footer;

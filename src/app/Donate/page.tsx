import React from "react";
import Link from "next/link";

const page = () => {
  return (
    <div className="my-20 mx-5 ">
      {/* Donation Section */}
      <h2 className="text-4xl font-bold text-gray-800 mb-6">
        Make a Difference with Your Contribution
      </h2>
      <p className="text-2xl text-gray-700 mb-4">
        At <strong className="text-primary">BEloved</strong>, we believe in
        building a compassionate community that values every life—human and
        animal alike. Your generous support helps us continue our mission to
        provide care, resources, and safe spaces for pets and the people who
        love them.
      </p>
      <p className="text-2xl text-gray-700 mb-4">
        Whether it’s through our{" "}
        <strong className="text-primary">Pet Care Program</strong>,{" "}
        <strong className="text-primary">The Clubhouse</strong>, or{" "}
        <strong className="text-primary">The Village</strong>, your donation
        ensures that families have access to the support they need to honor and
        remember their pets, while also fostering new beginnings.
      </p>
      <p className="text-2xl text-gray-700 mb-4">Your contribution helps:</p>
      <ul className="text-left mb-6 list-disc list-inside text-2xl">
        <li className="text-gray-700 mb-2">
          Offer <strong className="text-primary">pet care resources</strong> to
          families in need.
        </li>
        <li className="text-gray-700 mb-2">
          Build a network of support through{" "}
          <strong className="text-primary">memorial programs</strong> for pets
          who have passed.
        </li>
        <li className="text-gray-700 mb-2">
          Sustain our educational outreach through{" "}
          <strong className="text-primary">pet stories</strong> and community
          events.
        </li>
        <li className="text-gray-700 mb-2">
          Support the development of{" "}
          <strong className="text-primary">The Village</strong>, a sanctuary
          space for pets and their families.
        </li>
      </ul>
      <p className="text-2xl text-gray-700 mb-6">
        No matter the size of your gift, every dollar brings us closer to a more
        compassionate, loving world where pets and people thrive together. Join
        us in making a lasting impact. Your kindness changes lives, one paw at a
        time.
      </p>
      <p className="text-2xl font-semibold text-gray-800 mb-6">
        <strong className="text-primary">Donate now</strong> and be a part of
        something bigger.
      </p>
      <Link href="/Donate">
        <h3 className="inline-block px-8 py-4 bg-blue-600 text-white text-2xl font-semibold rounded-full hover:bg-blue-700 transition duration-300">
          Donate Now
        </h3>
      </Link>

      {/* Investor Section */}
      <div className="mt-16 bg-gray-100 p-6 rounded-lg shadow-md">
        <h3 className="text-3xl font-bold text-gray-800 mb-4">
          Interested in Partnering with Us?
        </h3>
        <p className="text-2xl text-gray-700 mb-4">
          At <strong className="text-primary">BEloved</strong>, we’re always
          looking for passionate partners who share our vision of creating a
          world where pets and people thrive together. If you’re an investor
          interested in supporting our mission, we’d love to discuss how we can
          collaborate.
        </p>
        <p className="text-2xl text-gray-700 mb-6">
          For more information about partnership opportunities and how your
          investment can make a lasting impact, please email us at{" "}
          <a
            href="mailto:invest@BEloved.com"
            className="text-blue-600 font-semibold hover:text-blue-800"
          >
            invest@BEloved.com
          </a>
          .
        </p>
        <p className="text-2xl text-gray-700">
          We value our partners and look forward to exploring ways we can work
          together to create a brighter future for pets and the people who love
          them.
        </p>
      </div>
    </div>
  );
};

export default page;

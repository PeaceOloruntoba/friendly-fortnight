import React from "react";
import { Link } from "react-router-dom";
import images from "../../../assets";

const sky = images?.sky;

export default function Contact() {
  return (
    <div className="items-center justify-center text-center w-full text-white relative">
      <img src={sky} alt="" className="h-96 w-full inset-0" />
      <div className="lg:px-40 md:px-32 md:py-8 sm:px-4 sm:py-1 lg:py-16 absolute inset-0 z-20 bg-black/80 flex flex-col items-center gap-2">
        <p className="uppercase text-[#ff9800] text-lg md:text-2xl font-semibold">
          Want to work with us?
        </p>
        <p className="md:text-2xl text-sm font-semibold">
          Digitally Transform &amp; Grow Your Business
        </p>
        <p className="md:text-md text-sm">
          Partner with us to enhance your business with cutting-edge IT and
          cybersecurity solutions. We offer tailored strategies that drive
          growth and secure your digital assets, ensuring your success in a
          competitive landscape.
        </p>
        <span className="flex gap-6 items-center justify-center text-xl">
          <a href="tel:">
            <button className="bg-blue-600 text-white py-2 px-6 rounded-lg">
              Call Now
            </button>
          </a>
          <Link to="/contact">
            <button className="bg-white text-blue-600 py-2 px-6 rounded-lg">
              Contact Us
            </button>
          </Link>
        </span>
      </div>
    </div>
  );
}

import React from "react";
import { Link } from "react-router-dom";
import images from "../../../assets";

const sky = images?.sky;

export default function Contact() {
  return (
    <div className="grid items-center justify-center text-center w-full text-white work">
      <img src={sky} alt="" className="h-96" />
      <div className="lg:px-40 md:px-32 md:py-8 sm:px-4 sm:py-1 lg:py-16">
        <p className="uppercase text-[#ff9800] text-2xl font-semibold p-2">
          Want to work with us?
        </p>
        <p className="text-4xl font-semibold p-2">
          Digitally Transform &amp; Grow Your Business
        </p>
        <p className="p-4 text-xl">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus,
          reprehenderit provident? Vel, iusto sit minus, accusamus aspernatur
          quae iste recusandae voluptate, impedit nobis voluptatem nesciunt
          corporis eaque mollitia excepturi explicabo.
        </p>
        <span className="flex gap-6 items-center justify-center text-xl">
          <Link to="/">
            <button className="bg-blue-600 text-white p-4 px-10 rounded-lg">
              Call Now
            </button>
          </Link>
          <Link to="/">
            <button className="bg-white text-blue-600 p-4 px-10 rounded-lg">
              Contact Us
            </button>
          </Link>
        </span>
      </div>
    </div>
  );
}

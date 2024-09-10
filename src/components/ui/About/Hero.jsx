import React from "react";
import { FaArrowRight } from "react-icons/fa";
import images from "../../../assets";

const feature1 = images?.feature1;
const feature2 = images?.feature2;
const feature3 = images?.feature3;

export default function Hero() {
  return (
    <div>
      <div className="grid lg:grid-cols-3 grid-cols-1 py-32 px-56 gap-5">
        <div className="bg-white p-6 text-center rounded-xl shadow-xl shadow-gray-200 group transform transition-transform duration-500 hover:-translate-y-4 flex flex-col items-center justify-center gap-6">
          <img src={feature1} alt="" className="w-24" />
          <p className="text-2xl font-semibold">Flexibility &amp; Responsive</p>
          <p className="text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua enim ad
            minim veniam
          </p>
          <Link
            to=""
            className="flex items-center justify-center gap-3 hover:gap-1 duration-500 text-purple-800 font-semibold"
          >
            <FaArrowRight />
            Learn More
          </Link>
        </div>
        <div className="bg-white p-6 text-center rounded-xl shadow-xl shadow-gray-200 group transform transition-transform duration-500 hover:-translate-y-4 flex flex-col items-center justify-center gap-6">
          <img src={feature2} alt="" className="w-24" />
          <p className="text-2xl font-semibold">Dedicated Teams</p>
          <p className="text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua enim ad
            minim veniam
          </p>
          <Link
            to=""
            className="flex items-center justify-center gap-3 hover:gap-1 duration-500 text-purple-800 font-semibold"
          >
            <FaArrowRight />
            Learn More
          </Link>
        </div>
        <div className="bg-white p-6 text-center rounded-xl shadow-xl shadow-gray-200 group transform transition-transform duration-500 hover:-translate-y-4 flex flex-col items-center justify-center gap-6">
          <img src={feature3} alt="" className="w-24" />
          <p className="text-2xl font-semibold">Focusing on Business</p>
          <p className="text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua enim ad
            minim veniam
          </p>
          <Link
            to=""
            className="flex items-center justify-center gap-3 hover:gap-1 duration-500 text-purple-800 font-semibold"
          >
            <FaArrowRight />
            Learn More
          </Link>
        </div>
      </div>
    </div>
  );
}

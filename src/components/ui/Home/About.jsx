import React from "react";
import { Link } from "react-router-dom";

import images from "../../../assets";

const aboutimg = images?.aboutimg;

export default function About() {
  return (
    <div>
      <div className="bg-[#F7F8F8] lg:flex grid p-4 lg:p-16 gap-4">
        <div className="grid py-8 gap-2 lg:gap-0">
          <p className="text-[#ff9800] text-2xl font-semibold">
            About Our Company
          </p>
          <p className="text-5xl font-semibold">
            Providing Your Business With A Quality IT Service is Our Passion
          </p>
          <p className="text-lg font-semibold text-[#474848]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
            dolorem quo ipsam tenetur quae non distinctio ipsum ullam
            repudiandae sint, saepe ad, officiis quaerat nihil reprehenderit
            soluta, molestias doloremque veniam.
          </p>
          <div className="grid text-[#212529]">
            <div className="flex justify-between items-center">
              <span className="text-base font-medium">Flowbite</span>
              <span className="text-sm font-medium">90%</span>
            </div>
            <div className="w-full bg-[#ddddff] rounded-full h-3">
              <div
                className="bg-[#7b68ee] h-3 rounded-full"
                style={{ width: "90%" }}
              ></div>
            </div>
          </div>
          <div className="grid text-[#212529]">
            <div className="flex justify-between items-center">
              <span className="text-base font-medium">Flowbite</span>
              <span className="text-sm font-medium">75%</span>
            </div>
            <div className="w-full bg-[#ddddff] rounded-full h-3">
              <div
                className="bg-[#7b68ee] h-3 rounded-full"
                style={{ width: "75%" }}
              ></div>
            </div>
          </div>
          <div className="grid text-[#212529]">
            <div className="flex justify-between items-center">
              <span className="text-base font-medium">Flowbite</span>
              <span className="text-sm font-medium">85%</span>
            </div>
            <div className="w-full bg-[#ddddff] rounded-full h-3">
              <div
                className="bg-[#7b68ee] h-3 rounded-full"
                style={{ width: "85%" }}
              ></div>
            </div>
          </div>
          <Link to="/about">
            <button className="bg-[#7b68ee] px-8 py-4 text-white font-semibold rounded">
              Learn More
            </button>
          </Link>
        </div>
        <div className="grid">
          <img src={aboutimg} alt="" className="rounded-lg" />
          <p className="grid items-center justify-center text-center py-8 bg-[#F7F8F8] -mt-52 mx-60 mb-32 rounded-xl border border-b-[#ff9800]">
            <span className="text-6xl font-semibold text-[#44224b]">5</span>
            <span className="text-[#ff9800] font-bold">
              YEARS OF EXPERIENCE
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

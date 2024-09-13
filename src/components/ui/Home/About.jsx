import React from "react";
import { Link } from "react-router-dom";

import images from "../../../assets";

const aboutimg = images?.aboutimg;

export default function About() {
  return (
    <div>
      <div className="bg-[#F7F8F8] flex flex-col md:flex-row p-4 lg:p-16 gap-4">
        <div className="flex flex-col items-start justify-center py-8 gap-2 lg:gap-4 w-full">
          <p className="text-[#ff9800] text-lg md:text-2xl font-semibold">
            About Our Company
          </p>
          <p className="md:text-2xl text-sm font-semibold">
            Providing Your Business With A Quality Service is Our Passion
          </p>
          <p className="md:text-md text-sm text-[#474848]">
            Welcome to Easing Life Group of Companies, an extensive company
            dedicated to simplifying and improving different parts of your life.
            We aspire to bring excellence, convenience, and innovation across
            numerous industries through our diverse portfolio of enterprises.
          </p>
          <div className="flex flex-col text-[#212529] w-full">
            <div className="flex items-center justify-between">
              <span>Expertise and Experience</span>
              <span>90%</span>
            </div>
            <div className="w-full bg-[#ddddff] rounded-full h-3">
              <div
                className="h-3 rounded-full bg-[#7b68ee]"
                style={{ width: "90%" }}
              ></div>
            </div>
          </div>
          <div className="flex flex-col text-[#212529] w-full">
            <div className="flex items-center justify-between">
              <span>Customized Solutions</span>
              <span>75%</span>
            </div>
            <div className="w-full bg-[#ddddff] rounded-full h-3">
              <div
                className="h-3 rounded-full bg-[#7b68ee]"
                style={{ width: "75%" }}
              ></div>
            </div>
          </div>
          <div className="flex flex-col text-[#212529] w-full">
            <div className="flex items-center justify-between">
              <span>Innovative Technology</span>
              <span>95%</span>
            </div>
            <div className="w-full bg-[#ddddff] rounded-full h-3">
              <div
                className="h-3 rounded-full bg-[#7b68ee]"
                style={{ width: "95%" }}
              ></div>
            </div>
          </div>
          <div className="flex flex-col text-[#212529] w-full">
            <div className="flex items-center justify-between">
              <span>Customer Relation</span>
              <span>70%</span>
            </div>
            <div className="w-full bg-[#ddddff] rounded-full h-3">
              <div
                className="h-3 rounded-full bg-[#7b68ee]"
                style={{ width: "70%" }}
              ></div>
            </div>
          </div>
          <Link to="/about">
            <button className="bg-[#7b68ee] px-6 py-2 text-sm text-white font-semibold rounded">
              Learn More
            </button>
          </Link>
        </div>
        <div className="w-full relative md:h-[500px]">
          <img
            src={aboutimg}
            alt=""
            className="rounded-lg w-full md:h-[500px]"
          />
          <span className="absolute bottom-0 right-0 left-0 w-full items-center justify-center flex">
            <div className="flex flex-col items-center justify-center bg-[#F7F8F8] border border-b-[#ff9800] rounded-xl p-2">
              <span className="text-6xl font-semibold text-[#44224b]">5</span>
              <span className="text-[#ff9800] font-bold uppercase">
                years of experience
              </span>
            </div>
          </span>
        </div>
        {/* <div className="grid">
          <p className="grid items-center justify-center text-center py-8 bg-[#F7F8F8] -mt-52 mx-60 mb-32 rounded-xl border border-b-[#ff9800]">
            <span className="text-6xl font-semibold text-[#44224b]">5</span>
            <span className="text-[#ff9800] font-bold">
              YEARS OF EXPERIENCE
            </span>
          </p>
        </div> */}
      </div>
    </div>
  );
}

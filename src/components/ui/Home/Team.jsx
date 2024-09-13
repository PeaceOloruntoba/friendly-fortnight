import React from "react";
import { FaLinkedinIn } from "react-icons/fa";
import images from "../../../assets";

const mee = images?.mee;

export default function Team() {
  return (
    <div className="items-center justify-center w-full text-center">
      <p className="text-[#ff9800] text-lg md:text-2xl font-semibold">
        Team Member
      </p>
      <p className="md:text-2xl text-sm font-semibold">Expert Team</p>
      <div className="lg:flex gap-10 px-16 p-8 w-fu">
        <div className="group grid relative">
          <div className="relative bg-gray-400 overflow-hidden rounded-lg group-hover:shadow-lg transition-all duration-300">
            <img src={mee} alt="" className="rounded-lg" />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="bg-gray-800 bg-opacity-75 p-4 rounded-lg flex w-full h-full items-center justify-center gap-4">
                <span className="text-white text-xl border p-1 rounded-lg">
                  <FaLinkedinIn />
                </span>
                <span className="text-white text-xl border p-1 rounded-lg">
                  <FaLinkedinIn />
                </span>
                <span className="text-white text-xl border p-1 rounded-lg">
                  <FaLinkedinIn />
                </span>
              </div>
            </div>
          </div>
          <p className="mt-2">Vincent Darkoh</p>
          <p className="text-gray-500">Founder, CEO</p>
        </div>
        <div className="group grid relative">
          <div className="relative bg-gray-400 overflow-hidden rounded-lg group-hover:shadow-lg transition-all duration-300">
            <img src={mee} alt="" className="rounded-lg" />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="bg-gray-800 bg-opacity-75 p-4 rounded-lg flex w-full h-full items-center justify-center gap-4">
                <span className="text-white text-xl border p-1 rounded-lg">
                  <FaLinkedinIn />
                </span>
                <span className="text-white text-xl border p-1 rounded-lg">
                  <FaLinkedinIn />
                </span>
                <span className="text-white text-xl border p-1 rounded-lg">
                  <FaLinkedinIn />
                </span>
              </div>
            </div>
          </div>
          <p className="mt-2">John </p>
          <p className="text-gray-500">Co-Founder, CTO</p>
        </div>
      </div>
    </div>
  );
}

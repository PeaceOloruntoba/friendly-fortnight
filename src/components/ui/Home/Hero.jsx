import React from "react";
import { Link } from "react-router-dom";
import images from "../../../assets";

const jumbotron = images?.jumbotron;
const homebottom = images?.homebottom;

export default function Jumbotron() {
  return (
    <div className="flex">
      <div className="relative">
        <div className="w-full font-semibold bg-gradient-to-b from-blue-900 via-blue-600 to-blue-500 pt-12 px-12">
          <div className="grid lg:grid-cols-2 gap-6">
            <div className="flex flex-col items-start justify-center gap-4">
              <p className="text-white text-xl md:text-3xl font-bold">
                IT Solution & Business Service Company
              </p>
              <p className="text-xs md:text-lg text-white font-normal">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi
                nemo quas id natus quod.
              </p>
              <span className="flex items-start justify-center gap-4">
                <Link to="/services">
                  <button className="bg-white py-2 px-4 text-sm rounded-lg text-blue-800">
                    Our Services
                  </button>
                </Link>
                <Link to="/contact">
                  <button className="bg-blue-800 py-2 px-4 text-sm rounded-lg text-white">
                    Contact Us
                  </button>
                </Link>
              </span>
            </div>
            <img
              src={jumbotron}
              alt="Jumbotron"
              className="max-w-full"
              width={400}
            />
          </div>
        </div>
        <div className="bg-blue-500 overflow-hidden">
          <img
            src={homebottom}
            alt="Home Bottom"
            className="w-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}

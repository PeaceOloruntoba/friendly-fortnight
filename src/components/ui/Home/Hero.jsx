import React from "react";
import { Link } from "react-router-dom";
import images from "../../../assets";

const jumbotron = images?.jumbotron;
const homebottom = images?.homebottom;

export default function Jumbotron() {
  return (
    <div>
      <div className="w-full pt-40 font-semibold bg-gradient-to-b from-blue-900 via-blue-600 to-blue-500 py-28">
        <div className="grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-12 px-32">
          <div className="flex flex-col pt-24 items-start justify-center gap-6">
            <p className="text-white text-7xl font-bold">
              IT Solution & Business Service Company
            </p>
            <p className="text-xl text-white font-normal">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi
              nemo quas id natus quod? Nostrum quo cum unde molestiae deleniti
              nam adipisci, sapiente optio aspernatur? Minima consectetur illo
              quod? Ad.
            </p>
            <span className="flex items-start justify-center gap-8">
              <Link to="/services">
                <button className="bg-white py-3 px-6 text-xl rounded-lg text-blue-800">
                  Our Services
                </button>
              </Link>
              <Link to="/contact">
                <button className="bg-blue-800 py-3 px-6 text-xl rounded-lg text-white">
                  Contact Us
                </button>
              </Link>
            </span>
          </div>
          <img src={jumbotron} alt="Jumbotron" className="z-10" width={400} />
        </div>
      </div>
      <img
        src={homebottom}
        alt="Home Bottom"
        className="lg:-mt-96 md:-mt-52 sm:-mt-52"
      />
    </div>
  );
}

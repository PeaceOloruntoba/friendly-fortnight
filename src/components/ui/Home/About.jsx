import React from "react";
import { Link } from "react-router-dom";

import images from "../../../assets";

const aboutimg = images?.aboutimg;

export default function About() {
  return (
    <div>
      <div className="w-full md:h-screen flex items-center p-4 mt-[-60px]">
        <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
          <div className="col-span-2">
            <p className="uppercase text-3xl text-sky-600 pt-14 font-bold">
              About us
            </p>
            <h2 className="py-2 text-black">Intro to Easing Life:</h2>
            <p className="py-2 text-slate-800">
              Welcome to Easing Life Group of Companies, an extensive company
              dedicated to simplifying and improving different parts of your
              life. We aspire to bring excellence, convenience, and innovation
              across numerous industries through our diverse portfolio of
              enterprises.
            </p>
            <p className="py-2 text-slate-900">
              At Easing Life Group of Companies, our mission is to simplify and
              enhance various aspects of your life. Through our IT solutions,
              laundry service, café and printing service, forex trading and
              cryptocurrency investment, educational and travel consultancy,
              online streaming service, DocEase solutions, and financial
              solutions, we are dedicated to providing convenience, security,
              and excellence in all our endeavors. Join us as we make your life
              more convenient, enjoyable, and financially successful
            </p>
            <Link to="/About">
              <p className="py-2 text-sky-800 underline cursor-pointer">
                Find out more about us...
              </p>
            </Link>
          </div>
          <div className="w-full h-auto m-auto shadow-xl shadow-gray-600 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
            <img className="rounded-xl" src={aboutimg} alt="/" />
          </div>
        </div>
      </div>
    </div>
  );
}

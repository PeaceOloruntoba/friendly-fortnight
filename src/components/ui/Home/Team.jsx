import React from "react";
import { FaFacebook, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import images from "../../../assets";
import { FaXTwitter } from "react-icons/fa6";

const ceo = images?.ceo;
const john = images?.john;

export default function Team() {
  return (
    <div className="items-center justify-center w-full text-center">
      <p className="text-[#ff9800] text-lg md:text-2xl font-semibold">
        Team Member
      </p>
      <p className="md:text-2xl text-sm font-semibold">Expert Team</p>
      <div className="lg:flex gap-10 px-16 p-8 w-full items-center justify-center">
        <div className="group grid relative">
          <div className="relative bg-gray-400 overflow-hidden rounded-lg group-hover:shadow-lg transition-all duration-300">
            <img src={ceo} alt="" className="rounded-lg w-56 h-72" />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="bg-gray-800 bg-opacity-75 p-4 rounded-lg flex w-full h-full items-center justify-center gap-4">
                <span className="text-white text-xl border p-1 rounded-lg hover:bg-black/70 transition-colors duration-300">
                  <a
                    href="https://www.linkedin.com/in/vincent-darkoh-60756618a"
                    target="_blank"
                  >
                    <FaLinkedinIn />
                  </a>
                </span>
                <span className="text-white text-xl border p-1 rounded-lg hover:bg-black/70 transition-colors duration-300">
                  <a
                    href="https://www.instagram.com/knight_vincente/"
                    target="_blank"
                  >
                    <FaInstagram />
                  </a>
                </span>{" "}
                <span className="text-white text-xl border p-1 rounded-lg hover:bg-black/70 transition-colors duration-300">
                  <a
                    href="https://twitter.com/poulsencrop?t=VRp3Kqqs7UlldBxgSvECVw&s=09"
                    target="_blank"
                  >
                    <FaXTwitter />
                  </a>
                </span>
                <span className="text-white text-xl border p-1 rounded-lg hover:bg-black/70 transition-colors duration-300">
                  <a
                    href="https://web.facebook.com/vincent.d.darkoh"
                    target="_blank"
                  >
                    <FaFacebook />
                  </a>
                </span>
              </div>
            </div>
          </div>
          <p className="mt-2">Vincent Darkoh</p>
          <p className="text-gray-500">Founder, CEO</p>
        </div>
        <div className="group grid relative">
          <div className="relative bg-gray-400 overflow-hidden rounded-lg group-hover:shadow-lg transition-all duration-300">
            <img src={john} alt="" className="rounded-lg w-56 h-72" />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="bg-gray-800 bg-opacity-75 p-4 rounded-lg flex w-full h-full items-center justify-center gap-4">
                <span className="text-white text-xl border p-1 rounded-lg hover:bg-black/70 transition-colors duration-300">
                  <a
                    href="https://www.linkedin.com/in/john-yakubu-41949815b/"
                    target="_blank"
                  >
                    <FaLinkedinIn />
                  </a>
                </span>
                {/* <span className="text-white text-xl border p-1 rounded-lg hover:bg-black/70 transition-colors duration-300">
                  <a
                    href="https://www.instagram.com/knight_vincente/"
                    target="_blank"
                  >
                    <FaInstagram />
                  </a>
                </span>{" "}
                <span className="text-white text-xl border p-1 rounded-lg hover:bg-black/70 transition-colors duration-300">
                  <a
                    href="https://twitter.com/poulsencrop?t=VRp3Kqqs7UlldBxgSvECVw&s=09"
                    target="_blank"
                  >
                    <FaXTwitter />
                  </a>
                </span> */}
                <span className="text-white text-xl border p-1 rounded-lg hover:bg-black/70 transition-colors duration-300">
                  <a
                    href="https://www.facebook.com/john.yakubu.921?sfnsn=wa&mibextid=RUbZ1f"
                    target="_blank"
                  >
                    <FaFacebook />
                  </a>
                </span>
              </div>
            </div>
          </div>
          <p className="mt-2">John Yakubu</p>
          <p className="text-gray-500">Co-Founder, CTO</p>
        </div>
      </div>
    </div>
  );
}

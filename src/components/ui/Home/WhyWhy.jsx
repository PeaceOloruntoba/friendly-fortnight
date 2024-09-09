import Image from "next/image";
import React from "react";
import { choose } from "@/assets";

export default function Land() {
  return (
    <div className="grid py-10 px-20">
      <div className="lg:flex grid py-10 gap-6">
        <Image src={choose} alt="" width={600} className="pl-20" />
        <div className="grid">
          <p className="text-[#ff9800] text-2xl font-semibold">
            Why Choose Us?
          </p>
          <p className="text-5xl font-semibold">
            Safeguard Your Brand with Cyber Security and IT Solutions
          </p>
          <p className="text-lg font-semibold text-[#474848]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem,
            excepturi tempore fugit alias ipsum quod aut non nulla culpa
            laboriosam nihil aspernatur autem voluptas necessitatibus maiores
            asperiores? Recusandae, velit omnis?
          </p>
          <div className="grid lg:grid-cols-2 gap-4 text-lg font-semibold lg:py-0 py-4">
            <div className="flex w-full shadow-lg shadow-gray-200 items-center px-4 rounded-lg py-2 border border-l-[#7b68ee]">
              Remote IT Assistance
            </div>
            <div className="flex w-full shadow-lg shadow-gray-200 items-center px-4 rounded-lg py-2 border border-l-[#7b68ee]">
              Cloud Services
            </div>
            <div className="flex w-full shadow-lg shadow-gray-200 items-center px-4 rounded-lg py-2 border border-l-[#7b68ee]">
              Managed IT Services
            </div>
            <div className="flex w-full shadow-lg shadow-gray-200 items-center px-4 rounded-lg py-2 border border-l-[#7b68ee]">
              IT Security Services
            </div>
            <div className="flex w-full shadow-lg shadow-gray-200 items-center px-4 rounded-lg py-2 border border-l-[#7b68ee]">
              Practice IT Management
            </div>
            <div className="flex w-full shadow-lg shadow-gray-200 items-center px-4 rounded-lg py-2 border border-l-[#7b68ee]">
              Solving IT Problems
            </div>
          </div>
        </div>
      </div>
      <div className="lg:flex grid py-10 gap-6">
        <div className="grid">
          <p className="text-[#ff9800] text-2xl font-semibold">Why Trust Us?</p>
          <p className="text-5xl font-semibold">
            Achieve Digital Transformation For Your Retail Business Services
          </p>
          <p className="text-lg font-semibold text-[#474848]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem,
            excepturi tempore fugit alias ipsum quod aut non nulla culpa
            laboriosam nihil aspernatur autem voluptas necessitatibus maiores
            asperiores? Recusandae, velit omnis?
          </p>
          <div className="grid lg:grid-cols-2 gap-4 text-lg font-semibold lg:py-0 py-4">
            <div className="flex w-full shadow-lg shadow-gray-200 items-center px-4 rounded-lg py-2 border border-l-[#7b68ee]">
              Remote IT Assistance
            </div>
            <div className="flex w-full shadow-lg shadow-gray-200 items-center px-4 rounded-lg py-2 border border-l-[#7b68ee]">
              Cloud Services
            </div>
            <div className="flex w-full shadow-lg shadow-gray-200 items-center px-4 rounded-lg py-2 border border-l-[#7b68ee]">
              Managed IT Services
            </div>
            <div className="flex w-full shadow-lg shadow-gray-200 items-center px-4 rounded-lg py-2 border border-l-[#7b68ee]">
              IT Security Services
            </div>
            <div className="flex w-full shadow-lg shadow-gray-200 items-center px-4 rounded-lg py-2 border border-l-[#7b68ee]">
              Practice IT Management
            </div>
            <div className="flex w-full shadow-lg shadow-gray-200 items-center px-4 rounded-lg py-2 border border-l-[#7b68ee]">
              Solving IT Problems
            </div>
          </div>
        </div>
        <Image src={choose} alt="" width={600} className="pl-20" />
      </div>
    </div>
  );
}

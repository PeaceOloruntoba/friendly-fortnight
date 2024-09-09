import React from "react";
import images from "../../../assets";

const choose = images?.choose;

export default function WhyWhy() {
  return (
    <div className="flex flex-col p-4 lg:p-16">
      <div className="lg:flex grid py-10 gap-6">
        <img src={choose} alt="" width={600} className="" />
        <div className="grid">
          <p className="text-[#ff9800] text-lg md:text-2xl font-semibold">
            Why Choose Us?
          </p>
          <p className="md:text-2xl text-sm font-semibold">
            Safeguard Your Brand with Cyber Security and IT Solutions
          </p>
          <p className="md:text-md text-sm text-[#474848]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem,
            excepturi tempore fugit alias ipsum quod aut non nulla culpa
            laboriosam nihil aspernatur autem voluptas necessitatibus maiores
            asperiores? Recusandae, velit omnis?
          </p>
          <div className="grid lg:grid-cols-2 gap-4 font-semibold lg:py-0 py-4">
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
          <p className="ttext-[#ff9800] text-lg md:text-2xl font-semibold">
            Why Trust Us?
          </p>
          <p className="md:text-2xl text-sm font-semibold">
            Achieve Digital Transformation For Your Retail Business Services
          </p>
          <p className="md:text-md text-sm text-[#474848]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem,
            excepturi tempore fugit alias ipsum quod aut non nulla culpa
            laboriosam nihil aspernatur autem voluptas necessitatibus maiores
            asperiores? Recusandae, velit omnis?
          </p>
          <div className="grid lg:grid-cols-2 gap-4 font-semibold lg:py-0 py-4">
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
        <img src={choose} alt="" width={600} className="pl-20" />
      </div>
    </div>
  );
}

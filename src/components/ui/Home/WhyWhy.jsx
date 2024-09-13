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
            Choose us for innovative, tailored solutions that drive efficiency,
            security, and growth for your business."
          </p>
          <p className="md:text-md text-sm text-[#474848]">
            Choosing Easing Life Group of Companies means choosing a partner
            dedicated to making your life simpler, more convenient, and more
            successful. We stand out not only because of the breadth of our
            offerings but because of our passion for delivering results that
            truly enhance the lives of our clients.
          </p>
          <div className="grid lg:grid-cols-2 gap-4 font-semibold lg:py-0 py-4">
            <div className="flex w-full shadow-lg shadow-gray-200 items-center px-4 rounded-lg py-2 border border-l-[#7b68ee]">
              All-in-One Convenience
            </div>
            <div className="flex w-full shadow-lg shadow-gray-200 items-center px-4 rounded-lg py-2 border border-l-[#7b68ee]">
              Personalized Attention
            </div>
            <div className="flex w-full shadow-lg shadow-gray-200 items-center px-4 rounded-lg py-2 border border-l-[#7b68ee]">
              Cutting-Edge Technology
            </div>
            <div className="flex w-full shadow-lg shadow-gray-200 items-center px-4 rounded-lg py-2 border border-l-[#7b68ee]">
              Affordable Solutions
            </div>
            <div className="flex w-full shadow-lg shadow-gray-200 items-center px-4 rounded-lg py-2 border border-l-[#7b68ee]">
              Efficiency & Speed
            </div>
            <div className="flex w-full shadow-lg shadow-gray-200 items-center px-4 rounded-lg py-2 border border-l-[#7b68ee]">
              Wide Industry Reach
            </div>
          </div>
        </div>
      </div>
      <div className="lg:flex grid py-10 gap-6">
        <div className="grid">
          <p className="text-[#ff9800] text-lg md:text-2xl font-semibold">
            Why Trust Us?
          </p>
          <p className="md:text-2xl text-sm font-semibold">
            Partner with us to achieve seamless digital transformation for your
            retail business
          </p>
          <p className="md:text-md text-sm text-[#474848]">
            At Easing Life Group of Companies, we have built our reputation on
            delivering unmatched quality and tailored solutions that meet the
            evolving needs of our clients. Our commitment to integrity,
            excellence, and client satisfaction sets us apart as a trusted
            partner in multiple industries. With a team of experts, cutting-edge
            technology, and a deep understanding of various sectors, we ensure
            that your life becomes more streamlined, secure, and successful.
          </p>
          <div className="grid lg:grid-cols-2 gap-4 font-semibold lg:py-0 py-4">
            <div className="flex w-full shadow-lg shadow-gray-200 items-center px-4 rounded-lg py-2 border border-l-[#7b68ee]">
              Proven Expertise
            </div>
            <div className="flex w-full shadow-lg shadow-gray-200 items-center px-4 rounded-lg py-2 border border-l-[#7b68ee]">
              Client-Centric Approach
            </div>
            <div className="flex w-full shadow-lg shadow-gray-200 items-center px-4 rounded-lg py-2 border border-l-[#7b68ee]">
              Innovative Solutions
            </div>
            <div className="flex w-full shadow-lg shadow-gray-200 items-center px-4 rounded-lg py-2 border border-l-[#7b68ee]">
              Reliability
            </div>
            <div className="flex w-full shadow-lg shadow-gray-200 items-center px-4 rounded-lg py-2 border border-l-[#7b68ee]">
              Transparency
            </div>
            <div className="flex w-full shadow-lg shadow-gray-200 items-center px-4 rounded-lg py-2 border border-l-[#7b68ee]">
              Holistic Services
            </div>
          </div>
        </div>
        <img src={choose} alt="" width={600} className="pl-20" />
      </div>
    </div>
  );
}

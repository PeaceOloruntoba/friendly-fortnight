import React from 'react'

export default function Services() {
  return (
    <div className="w-full bg-white flex flex-col items-center text-black/70">
      <div className="flex gap-4 items-center justify-center">
        <div className="bg-blue-600 px-8 md:px-16 h-[1px]"></div>
        <span className="font-semibold text-sm md:text-xl">What we offer</span>
        <div className="bg-blue-600 px-16 h-[1px]"></div>
      </div>
      <span className="text-xl md:text-3xl font-bold">Our Services</span>
    </div>
  );
}

import React from "react";

export default function WorkProcess() {
  return (
    <div className="flex flex-col gap-2 items-center justify-center bg-[#f7f8f8] py-4">
      <p className="text-[#ff9800] text-lg md:text-2xl font-semibold">
        4 Step Work Process
      </p>
      <p className="md:text-2xl text-sm font-semibold">Working Process</p>
      <div className="grid md:grid-cols-4 gap-4 py-2">
        <div className="flex flex-col border rounded p-3 items-center">
          <span className="text-xl">Research</span>
          <span className="text-sm">Do Research</span>
          <span className="text-xl font-semibold">01</span>
        </div>
        <div className="flex flex-col border rounded p-3 items-center">
          <span className="text-xl">Research</span>
          <span className="text-sm">Do Research</span>
          <span className="text-xl font-semibold">02</span>
        </div>
        <div className="flex flex-col border rounded p-3 items-center">
          <span className="text-xl">Research</span>
          <span className="text-sm">Do Research</span>
          <span className="text-xl font-semibold">03</span>
        </div>
        <div className="flex flex-col border rounded p-3 items-center">
          <span className="text-xl">Research</span>
          <span className="text-sm">Do Research</span>
          <span className="text-xl font-semibold">04</span>
        </div>
      </div>
    </div>
  );
}

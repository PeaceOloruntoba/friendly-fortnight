import React from "react";

export default function WorkProcess() {
  return (
    <div className="flex flex-col items-center justify-center bg-[#f7f8f8]">
      <p className="text-[#ff9800] text-lg md:text-2xl font-semibold">
        4 Step Work Process
      </p>
      <p className="md:text-2xl text-sm font-semibold">Working Process</p>
      <div className="grid md:grid-cols-4">
        <div className="flex flex-col">
          <span>Research</span>
          <span>Do Research</span>
          <span>01</span>
        </div>
      </div>
    </div>
  );
}

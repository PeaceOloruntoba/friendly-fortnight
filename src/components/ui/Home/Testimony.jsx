import React from "react";

export default function Testimony({ quote, author, company, avatar }) {
  return (
    <div className="w-full p-8 flex-shrink-0 text-center">
      <div className="p-6 bg-black/20 rounded-lg shadow-md">
        <p className="md:text-xl text-md font-semibold text-slate-900">
          &quot;{quote}&quot;
        </p>
        <div className="flex items-center justify-center mt-6">
          <img src={avatar} alt={author} className="rounded-full w-16 h-16" />
        </div>
        <p className="mt-4 font-bold text-sm md:text-md text-gray-900">{author}</p>
        <p className="text-gray-700">{company}</p>
      </div>
    </div>
  );
}

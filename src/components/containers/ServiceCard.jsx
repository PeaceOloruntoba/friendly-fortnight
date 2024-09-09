import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function ServiceCard({ title, content, image, link }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-xl shadow-gray-200 group transform transition-transform duration-500 hover:-translate-y-4 grid items-start justify-start">
      <img
        src={image}
        alt={title}
        className="transform w-24 group-hover:scale-x-[-1] transition-transform duration-500 rounded-full"
      />
      <p className="text-2xl font-semibold mt-4">{title}</p>
      <p className="text-gray-700 mt-2">{content}</p>
      <Link
        to={link}
        className="flex items-center justify-start gap-2 hover:gap-1 duration-500 text-purple-800 font-semibold"
      >
        <FaArrowRight />
        Learn More
      </Link>
    </div>
  );
}

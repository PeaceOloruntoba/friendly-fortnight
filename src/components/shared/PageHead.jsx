import React from "react";
import { FaDotCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function PageHead({ name }) {
  return (
    <div className="grid banner py-40 text-white text-center">
      <p className="font-bold text-5xl p-6">{name}</p>
      <p className="flex gap-4 items-center justify-center text-xl">
        <Link to="/" className="hover:text-blue-600 transition duration-300">
          Home
        </Link>
        <FaDotCircle /> {name}
      </p>
    </div>
  );
}

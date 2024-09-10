import React from "react";
import { FaDotCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function PageHead({ name }) {
  return (
    <div className="flex flex-col items-center justify-center gap-2 banner py-20 text-white text-center">
      <p className="font-semibold text-3xl">{name}</p>
      <p className="flex gap-4 items-center justify-center text-lg font-medium">
        <Link to="/" className="hover:text-blue-600 transition duration-300">
          Home
        </Link>
        <FaDotCircle /> {name}
      </p>
    </div>
  );
}

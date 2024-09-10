import React from "react";
import { FaDotCircle } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";

export default function ServicesDetails() {
  const { serviceName } = useParams();
  return (
    <div className="flex flex-col w-full items-center">
      <div className="flex flex-col w-full items-center justify-center gap-2 banner py-20 text-white text-center">
        <p className="font-semibold text-3xl uppercase">{serviceName}</p>
        <p className="flex gap-4 items-center justify-center text-lg font-medium">
          <Link to="/" className="hover:text-blue-600 transition duration-300">
            Home
          </Link>
          <FaDotCircle />
          <Link
            to="/services"
            className="hover:text-blue-600 transition duration-300"
          >
            Services
          </Link>
          <FaDotCircle /> {serviceName}
        </p>
      </div>
      <span>{serviceName}</span>
    </div>
  );
}

import React from "react";
import { Link } from "react-router-dom";

export default function PortfolioCard({ image, title, link, content }) {
  return (
    <div className="rounded-lg group relative">
      <img src={image} alt={title} className="rounded-xl" />
      <div className="hidden group-hover:block">
        <div className="flex items-end justify-center absolute inset-0 transition duration-500 p-4">
          <div className="grid bg-white p-4 rounded-xl w-full">
            <p>{title}</p>
            <p>
              <Link to={link}>{content}</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

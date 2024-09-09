import React from "react";
import { Link } from "react-router-dom";
import images from "../../assets";

const logo = images?.logo;

export default function Footer() {
  return (
    <div className="flex flex-col bg-blue-800 text-white text-xl">
      <div className="grid lg:grid-cols-2 w-full px-6 py-4 gap-2">
        <div className="grid items-center justify-between w-full">
          <Link
            to=""
            className="flex flex-col md:flex-row md:items-center gap-4"
          >
            <img src={logo} alt="" className="rounded w-32 md:w-24" />
            <span className="text-2xl font-bold">Easing Life</span>
          </Link>
          <p className="text-sm">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosan
            temporibus consequuntur quod ipsum vitae odit cupiditate nesciunt
            unde doloremque officiis hic necessitatibus
            <br /> quidem obcaecati et, perferendis, alias soluta voluptatum
            harum.
          </p>
        </div>
        <div className="grid lg:grid-cols-3 gap-4 md:grid-cols-2 sm:grid-cols-1">
          <div className="w-full text-sm">
            <p className="text-lg font-semibold">Our Services</p>
            <hr />
            <ul className="py-1">
              <li>
                <Link to="">Service 1</Link>
              </li>
              <li>
                <Link to="">Service 1</Link>
              </li>
              <li>
                <Link to="">Service 1</Link>
              </li>
              <li>
                <Link to="">Service 1</Link>
              </li>
              <li>
                <Link to="">Service 1</Link>
              </li>
            </ul>
          </div>
          <div className="w-full text-sm">
            <p className="text-lg font-semibold">Useful Links</p>
            <hr />
            <ul className="py-1">
              <li>
                <Link to="">Home</Link>
              </li>
              <li>
                <Link to="">About</Link>
              </li>
              <li>
                <Link to="">Services</Link>
              </li>
              <li>
                <Link to="">Teams</Link>
              </li>
              <li>
                <Link to="">Contact</Link>
              </li>
            </ul>
          </div>
          <div className="w-full text-sm">
            <p className="text-lg font-semibold">Contact Info</p>
            <hr />
            <ul className="py-1">
              <li>
                <Link to="">Email:</Link>
              </li>
              <li>
                <Link to="">Phone:</Link>
              </li>
              <li>
                <Link to="">Address</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <hr />
      <div className="flex flex-col md:flex-row justify-between items-center text-sm p-4 px-8">
        <span>© 2023 Easing Life - All Rights Reserved.</span>
        <span className="flex gap-2">
          <Link to="">Terms and Conditions</Link>|
          <Link to="">Privacy Policy</Link>
        </span>
      </div>
    </div>
  );
}

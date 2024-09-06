import React from "react";
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaMailBulk,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";
import images from "../../../assets";

const logo = images?.logo;

export default function Hero() {
  return (
    <div>
      <div className="mt-16 p-4">
        <figure className="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
          <img
            className="md:rounded-none rounded-full mx-auto max-w-96"
            src={logo}
            alt=""
          />
          {/* <img class="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src="/sarah-dayan.jpg" alt="" width="384" height="512"> */}
          <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
            <blockquote>
              <p className="text-lg font-medium text-white">
                Easing Life Group of Company is a Ghana based company that is
                available to render their services everywhere around the world.
              </p>
              <br />
              <p className="text-lg font-medium text-white">
                As the name implies, Easing Life is founded only for the main
                purpose of easing the life of our customers.
              </p>
            </blockquote>
            <figcaption className="font-medium">
              <div className="flex dark:text-sky-400 text-4xl m-2 justify-between">
                <FaGithub className="cursor-pointer hover:text-sky-800" />
                <FaFacebook className="cursor-pointer hover:text-sky-800" />
                <FaTwitter className="cursor-pointer hover:text-sky-800" />
                <FaInstagram className="cursor-pointer hover:text-sky-800" />
                <FaLinkedin className="cursor-pointer hover:text-sky-800" />
                <FaMailBulk className="cursor-pointer hover:text-sky-800" />
                <FaWhatsapp className="cursor-pointer hover:text-sky-800" />
              </div>
              <div className="text-slate-700 dark:text-slate-500">
                you can connect with us...
              </div>
            </figcaption>
          </div>
        </figure>
      </div>
    </div>
  );
}

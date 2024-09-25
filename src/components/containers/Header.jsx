import React from "react";
import { FaFacebook, FaInstagram, FaSquareXTwitter } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";

export default function Header() {
  return (
    <div className="w-full flex items-center justify-end md:justify-between px-12">
      <span className="md:block hidden">
        <a
          href="mailto:easinglife95@gmail.com"
          className="flex gap-1 items-center justify-center"
        >
          <IoMdMail className="text-xl text-slate-700" /> easinglife95@gmail.com
        </a>
      </span>
      <span className="flex gap-4 items-center justify-center">
        <a
          href="https://twitter.com/easinglifeGH?t=0RCBDq3RuILDAPizLN8Ktg&s=09"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaSquareXTwitter className="text-xl text-black" />
        </a>
        <a
          href="https://www.facebook.com/easingLifeGroupofCompanies/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebook className="text-xl text-blue-600" />
        </a>
        <a
          href="https://www.facebook.com/easingLifeGroupofCompanies/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram className="text-xl text-white bg-gradient-to-tr from-orange-500 via-pink-500 to-purple-800 rounded-md" />
        </a>
      </span>
    </div>
  );
}

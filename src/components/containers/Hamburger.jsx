import React, { useState } from "react";
import { CgMenuRight, CgCloseR } from "react-icons/cg";

export default function Hamburger() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button
        className="text-gray-500 focus:outline-none focus:text-gray-600"
        onClick={toggleMenu}
      >
        <CgMenuRight className="text-black/70 text-2xl" />
      </button>

      {isOpen && (
        <div className="fixed top-0 left-0 bottom-0 z-10 bg-opacity-90 w-screen h-screen bg-black/80 text-white font-semibold text-lg shadow-lg">
          <div className="absolute top-5 right-5" onClick={toggleMenu}>
            <CgCloseR className="text-white text-3xl" />
          </div>
          <div className="flex flex-col gap-8 items-start h-screen p-4 pt-[4em]">
            <ul className="flex flex-col gap-4">
              <li>
                <a href="#hero" onClick={() => setIsOpen(false)}>
                  Home
                </a>
              </li>
              <li>
                <a href="#services" onClick={() => setIsOpen(false)}>
                  Services
                </a>
              </li>
              <li>
                <a href="#whys" onClick={() => setIsOpen(false)}>
                  Why Easy Ride?
                </a>
              </li>
              <li>
                <a href="#faqs" onClick={() => setIsOpen(false)}>
                  Faqs
                </a>
              </li>
              <li>
                <a href="#testimonial" onClick={() => setIsOpen(false)}>
                  Testimonials
                </a>
              </li>
              <li>
                <a href="#contact" onClick={() => setIsOpen(false)}>
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import Hamburger from "./Hamburger";
import images from "../../assets";

const logo = images?.logo;

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const shouldHaveWhiteBg = scrollY > 0;
      setIsScrolled(shouldHaveWhiteBg);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav
      className={`w-full py-2 flex justify-between bg-transparent items-center px-4 md:text-sm font-semibold transition-all duration-300 z-50 ${
        isScrolled ? "bg-white shadow-xl" : "bg-blue-900"
      }`}
    >
      <div className="flex items-center justify-between mb-4 md:mb-0">
        <Link to="/" className="flex items-center justify-center gap-4">
          <img src={logo} alt="Logo" className="h-10 animate-spin rounded-xl" />
          <span
            className={`text-3xl font-bold ${
              isScrolled ? "text-blue-600" : "text-white"
            }`}
          >
            Easing Life
          </span>
        </Link>
      </div>
      <div className="hidden md:flex md:items-center">
        <ul
          className={`flex flex-row gap-4 md:gap-6 ${
            isScrolled ? "text-blue-600" : "text-white"
          }`}
        >
          <li>
            <Link to="/" onClick={closeMenu}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" onClick={closeMenu}>
              About
            </Link>
          </li>
          <li>
            <Link to="/services" onClick={closeMenu}>
              Services
            </Link>
          </li>
          <li>
            <Link to="/#team" onClick={closeMenu}>
              Team
            </Link>
          </li>
          <li>
            <Link to="/portfolio" onClick={closeMenu}>
              Portfolio
            </Link>
          </li>
          <li>
            <Link to="/#testimonial" onClick={closeMenu}>
              Testimonial
            </Link>
          </li>
        </ul>
      </div>
      <div className="hidden md:flex">
        <Link to="/contact">
          <button
            className="flex p-2 md:p-2 px-6 md:px-8 bg-blue-600 text-white rounded-lg"
            onClick={closeMenu}
          >
            Contact Us
          </button>
        </Link>
      </div>
      <div className="md:hidden">
        <button
          onClick={handleMenuToggle}
          className="text-blue-600 focus:outline-none"
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Hamburger for mobile screens */}
      <div className="md:hidden">
        <Hamburger isOpen={isMenuOpen} closeMenu={closeMenu} />
      </div>
    </nav>
  );
}

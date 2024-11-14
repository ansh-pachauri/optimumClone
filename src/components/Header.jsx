
import { Link } from 'react-router-dom';
import React, { useState } from "react";
import { assets } from "../assets/assets";

const Header = () => {
  // State to handle the toggle of the hamburger menu
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to toggle the hamburger menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className="header w-full h-28 bg-[#012964] flex items-center justify-between px-5 sm:px-10 lg:px-20">
        {/* Logo */}
        <div className="header1 flex items-center">
          <img
            src={assets.footerlogo}
            className="w-[150px] sm:w-[200px] md:w-[250px] lg:w-[310px]"
            alt="Logo"
          />
        </div>
        {/* Desktop Navigation Links */}
        <div className="hidden md:flex text-white text-[14px] sm:text-[16px] space-x-4 lg:space-x-8">
          <Link to="/" className="hover:text-blue-300">
            Home
          </Link>
          <Link to="/product" className="hover:text-blue-300">
            Product
          </Link>
          <Link to="/services" className="hover:text-blue-300">
            Services
          </Link>
          <Link to="/contact" className="hover:text-blue-300">
            Contact Us
          </Link>
          <Link
            to="/connect"
            className="w-[120px] h-10 bg-[#2761f1] rounded-full flex items-center justify-center transition ease-linear hover:bg-[#2a4a9c]"
          >
            <span className="text-white text-[14px] font-bold">
              Let's Connect
            </span>
          </Link>
        </div>


        

        {/* Hamburger Menu Icon for screens 896px and below */}
        <div
          className="header3 flex md:hidden items-center"
          onClick={toggleMenu}
        >
          <div className="w-6 h-6 flex flex-col justify-between items-center">
            <div className="w-full h-1 bg-white"></div>
            <div className="w-full h-1 bg-white"></div>
            <div className="w-full h-1 bg-white"></div>
          </div>
        </div>
      </div>

      {/* Hamburger menu content */}
      {isMenuOpen && (
        <div className="hamburger-menu bg-[#012964] text-white text-center py-4 md:hidden flex flex-col gap-2 font-bold">
        <Link
                to="/"
                className="text-white text-2xl hover:text-blue-300"
                 onClick={toggleMenu}
              >
                Home
              </Link>
              <Link
                to="/product"
                className="text-white text-2xl hover:text-blue-300"
                onClick={toggleMenu}
              >
                Product
              </Link>
              <Link
                to="/services"
                className="text-white text-2xl hover:text-blue-300"
                onClick={toggleMenu}
              >
                Services
              </Link>
              <Link
                to="/contact"
                className="text-white text-2xl hover:text-blue-300"
                onClick={toggleMenu}
              >
                Contact Us
              </Link>

              {/* "Let's Connect" Button for mobile */}
              <Link
                to="/connect"
                className="w-full h-12 bg-[#2761f1] rounded-full flex items-center justify-center transition ease-linear hover:bg-[#2a4a9c]"
                onClick={toggleMenu}
              >
                <span className="text-white text-xl font-bold">
                  Let's Connect
                </span>
              </Link>
        </div>
      )}
    </>
  );
};

export default Header;

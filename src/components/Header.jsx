

import React, { useState } from 'react';
import { assets } from '../assets/assets';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className="header w-full h-28 bg-[#012964] flex items-center justify-between px-5 sm:px-10 lg:px-20">
        <div className="header1 flex items-center">
          <img
            src={assets.shadowlogo}
            className="w-[150px] sm:w-[200px] md:w-[250px] lg:w-[310px]"
            alt="Logo"
          />
        </div>

        <div className="header2 hidden md:flex text-[#ffffff] text-[16px]">
        <Link to="/" className='ml-10 mr-10 hover:text-[#ffffffbd] font-semibold'>Home</Link>

        <Link to="/product" className='mr-10 hover:text-[#ffffffbd] font-semibold'>Product</Link>

        <Link to="/services" className='mr-10 hover:text-[#ffffffbd] font-semibold'>Services</Link>

        <Link to="/contact" className='mr-10 hover:text-[#ffffffbd] font-semibold'>Contact Us</Link>

          
          
        </div>

        <div className="header3 hidden md:flex items-center justify-center">
          <div className="btn w-[150px] h-16 bg-[#2761f1] rounded-[60px] flex items-center justify-center transition ease-linear delay-75 hover:bg-opacity-65">
          <Link to="/connect" className='text-[#ffffff] text-[15px] font-bold' >Let's Connect</Link>
        
          </div>
        </div>

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

      {isMenuOpen && (
        <div className="hamburger-menu bg-[#012964] text-white text-center py-4 md:hidden">
        <Link to="/" className='block py-2 hover:text-[#ffffffbd] font-semibold'>Home</Link>

        <Link to="/product" className='block py-2 hover:text-[#ffffffbd] font-semibold'>Products</Link>

        <Link to="/services" className='block py-2 hover:text-[#ffffffbd] font-semibold'>Services</Link>

        <Link to="/contact" className='block py-2 hover:text-[#ffffffbd] font-semibold'>ContactUs</Link>

          

          <div className="btn w-[150px] h-16 bg-[#2761f1] rounded-[60px] flex items-center justify-center transition ease-linear delay-75 hover:bg-opacity-65 mt-4 mx-auto">
          <Link to="/connect"className="text-[#ffffff] text-[15px] font-bold">Lets Connect</Link>
            
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
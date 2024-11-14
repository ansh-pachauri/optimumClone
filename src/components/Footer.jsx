import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <>
      <div className="bg-[#002865] w-full text-white flex flex-col sm:flex-row items-start justify-between sm:justify-between px-4 py-16 sm:py-8 md:py-12 lg:px-16 ">
        {/* left links */}
        <div className="flex flex-col gap-3 ml-0 sm:ml-0 text-[20px] md:text-xl md:mb-0 mb-10">
          <a href="#" className=" underline font-bold mt-10 ">
            Privacy Policy
          </a>
          <a href="#" className=" underline font-bold ">
            Term of Use
          </a>
          <a href="#" className=" underline font-bold mb-10">
            Advertising Guildlines
          </a>
          <a href="#" className=" underline font-bold mb-10">
            Terms and Conditions
          </a>
          <a href="#" className=" underline font-bold ">
            News 12
          </a>
        </div>


        {/* Middle Links */}
        <div className="flex flex-col items-start gap-2 mt-10 text-[20px] mb-10 md:mb-0 md:text-xl">
          <a href="#" className="underline font-bold mb-6">
            Follow
          </a>
          <div className="flex flex-row gap-2 mb-6">
          <div >
            {/* facebook liks */}
            <a href="https://www.facebook.com/mobiletech2020">
            <img
              className="w-[30px] h-[30px] cursor-pointer"
              src={assets.facebook}
              alt="facebook"
            />
            </a>
            
          </div>
          {/* instagram links */}
          <div>
            <img
              className=" w-[30px] h-[30px] cursor-pointer"
              src={assets.instagram}
              alt="instagram"
            />
          </div>
          {/* Linkedln */}
          <div>
          <a href="https://www.linkedin.com/in/sheryl-herfurth-b89a919/">
          <img
              className=" w-[30px] h-[30px] cursor-pointer"
              src={assets.linkedln}
              alt="linkedln"
            />
          </a>
            
          </div>
          </div>
          
          <a href="#" className="underline font-bold mb-10">
            Carrers
          </a>

          <div>
            <p>Copyright © 2024 Optimum Media, LLC. </p>
            <p>All Rights Reserved.</p>
          </div>
       
        </div>
         {/* righht links */}
         <div className="flex flex-col items-start md:items-end gap-2 justify-between md:text-xl mr-10 mb-16">
            <div>
            {/* optimum media logo */}
              <img src={assets.footerlogo} className="w-20 md:w-80 mb-4" alt="logo" />
              <div className="text-sm md:text-base">
                <p className="mb-4">Shadow Marketing LLC</p>
                <p  className="mb-4">177 Mill Pond Road</p>
                <p  className="mb-4">Gilbert, PA 18331 </p>
                <p  className="mb-4">908-619-5122 </p>
              </div>
            </div>
          </div>
      </div>
    </>
  );
};

export default Footer;

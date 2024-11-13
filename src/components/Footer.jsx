import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <>
      <div className="bg-[#002865] w-full text-white flex justify-between p-10 ">
        {/* left links */}
        <div className="flex flex-col gap-3 ml-10 text-[20px] mb-16">
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
        <div className="flex flex-col  gap-2 mt-10 text-[20px] mb-16">
          <a href="#" className="underline font-bold mb-6">
            Follow
          </a>
          <div className="flex flex-row gap-2 mb-6">
          <div >
            {/* facebook liks */}
            <img
              className="w-[30px] h-[30px] cursor-pointer"
              src={assets.facebook}
              alt="facebook"
            />
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
            <img
              className=" w-[30px] h-[30px] cursor-pointer"
              src={assets.linkedln}
              alt="linkedln"
            />
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
         <div className="flex flex-col gap-2 justify-between mr-10 mb-16">
            <div>
            {/* optimum media logo */}
              <img src={assets.logo} className="w-[450px] mb-6" alt="logo" />
              <div className="text-[20px]">
                <p className="mb-4">1 Court Square</p>
                <p  className="mb-4">Long Island City, NY 11101</p>
                <p  className="mb-4">sales@optimum.media</p>
                <p  className="mb-4">(929) 418-4190</p>
              </div>
            </div>
          </div>
      </div>
    </>
  );
};

export default Footer;

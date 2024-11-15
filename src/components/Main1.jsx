
import React from "react";
import { Link } from "react-router-dom";
import { assets } from "../assets/assets";

const Main1 = () => {
  return (
    <div className="main1 relative w-full min-h-screen bg-[url('/src/assets/main.jpg')] bg-center bg-cover mt-20 md:mt-0">
      {/* Desktop Section */}
      <div className="main1aelements pt-12 px-4 md:px-16">
        <div className="main1a hide-on-mobile left-0 sm:w-[60%] md:w-[50%] lg:w-[40%] xl:w-[35%]">
          <img
            src={assets.footerlogo}
            alt="Main Logo"
            className="w-full h-auto object-cover"
          />
        </div>

        <div className="main1b hidden md:flex bg-[#012964] bg-opacity-70 p-12 md:p-16 flex-col text-white sm:w-[60%] md:w-[50%] lg:w-[40%] xl:w-[35%]">
          <h2 className="text-4xl font-bold leading-tight">
            New Name<span className="text-[#f66709]">.</span>
          </h2>
          <h2 className="text-4xl font-bold mt-4 leading-tight">
            Same Trusted<span className="text-[#f66709]">.</span>
          </h2>
          <h2 className="text-4xl font-bold mt-4 leading-tight">
            Results<span className="text-[#f66709]">.</span>
          </h2>
          <p className="text-xl mt-5 font-light leading-relaxed">
            Optimum Media provides innovative, data-driven multiscreen advertising solutions reaching every DMA in the U.S.
          </p>
          <p className="text-xl mt-8 font-light leading-relaxed">
            Big business, small business — your business. No matter what, we’re here to help you grow.
          </p>
          <div className="mt-10">
            <Link
              to="#"
              className="px-6 py-3 bg-[#2761f1] rounded-full text-white font-bold hover:bg-opacity-80"
            >
              LEARN MORE
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Section */}
      <div className="main1b md:hidden w-full bg-[#012964] bg-opacity-70 text-white flex flex-col items-center py-8">
        <h2 className="text-3xl font-bold text-center">
          New Name<span className="text-[#f66709]">.</span>
        </h2>
        <h2 className="text-3xl font-bold text-center mt-2">
          Same Trusted<span className="text-[#f66709]">.</span>
        </h2>
        <h2 className="text-3xl font-bold text-center mt-2">
          Results<span className="text-[#f66709]">.</span>
        </h2>
        <p className="text-lg mt-4 text-center font-light px-4">
          Optimum Media provides innovative, data-driven multiscreen advertising solutions reaching every DMA in the U.S.
        </p>
        <p className="text-lg mt-4 text-center font-light px-4">
          Big business, small business — your business. No matter what, we’re here to help you grow.
        </p>
        <div className="mt-6">
          <Link
            to="#"
            className="px-6 py-2 bg-[#2761f1] rounded-full text-white font-bold hover:bg-opacity-80"
          >
            LEARN MORE
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Main1;

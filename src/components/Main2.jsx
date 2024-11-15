

import React from 'react';
import { assets } from '../assets/assets';
import { Link } from 'react-router-dom';
const Main2 = () => {
  return (
    <>
      <div className="main2 bg-[#eaebeb] text-[#ffffff] w-full pt-20 pb-16 p-8 sm:p-12 lg:p-16">
        <div className="main2a relative">
          <img
            src={assets.girlsmile}
            alt="Startup image"
            className="w-full h-full"
          />
          <div className="card2a w-full h-full bg-[#012964] bg-opacity-60 absolute top-0 left-0 p-8 sm:p-6 flex flex-col justify-center items-center transition ease-linear delay-75 hover:text-[#012964] hover:bg-white hover:bg-opacity-60">
            <div className="card2atext text-center">
              <h2 className="text-4xl sm:text-5xl font-semibold sm:leading-relaxed sm:mb-10">
              Fueling your growth with equity-free Media Funding<span className="text-[#f66709]">.</span>
              </h2>
              <h4 className="text-xl sm:text-2xl mt-10 px-10 sm:px-28 font-semibold leading-normal hide-on-smallmobile">
              At Shadow Marketing LLC, we bring a unique and proven media funding solution tailored for direct-response businesses. What makes us different is that we believe in your business's potential without taking ownership.
              </h4>
            </div>
          </div>
        </div>

        <div className="main2b mt-14">
          <div className="headingfont flex justify-center items-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#2761f1] text-center">
              Reaching the Right Audience Isn’t One Size Fits All
              <span className="text-[#f66709]">.</span>
            </h2>
          </div>

          <div className="contenttext flex justify-center items-center flex-col md:flex-row lg:flex-row gap-10">
            <div className="box1 w-full md:w-1/2 mx-auto relative flex justify-center items-center">
              <div className="box1img mt-16 w-full flex justify-center items-center">
                <img
                  src={assets.phone}
                  alt="Selfie image"
                  className="w-full h-auto md:h-[70vh] object-cover"
                />
              </div>
            </div>

            <div className="box2 w-full md:w-1/2 flex justify-center items-center flex-col gap-6  md:mt-0">
              <div className="box2b w-full text-center mt-4">
                <h4 className="text-black text-2xl leading-normal sm:text-3xl md:text-3xl font-thin md:leading-loose sm:leading-loose">
                Our non-dilutive media funding approach means you retain 100% of your equity while securing the capital you need to scale. With flexible terms, our funding solution is designed to drive growth without sacrificing control over your brand.
                </h4>
              </div>
              <div className="box2btn w-[230px] h-24 bg-[#012964] rounded-[60px] flex items-center justify-center transition ease-linear delay-75 hover:bg-opacity-65">
              <Link to="/funding" className='text-[#ffffff] text-[14px] font-bold text-center'>LEARN ABOUT FUNDING TARGETING</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main2;
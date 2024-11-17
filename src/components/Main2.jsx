

import React from 'react';
import { assets } from '../assets/assets';
import { Link } from 'react-router-dom';
import Card from './Card';
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
              Fueling your growth with equity-free Media Funding.
              </h2>
              <h4 className="text-xl sm:text-2xl mt-10 px-10 sm:px-28 font-semibold leading-normal hide-on-smallmobile">
              At Shadow Marketing LLC, we bring a unique and proven media funding solution tailored for direct-response businesses. What makes us different is that we believe in your business's potential without taking ownership.Our non-dilutive media funding approach means you retain 100% of your equity while securing the capital you need to scale. With flexible terms, our funding solution is designed to drive growth without sacrificing control over your brand.
              </h4>
            </div>
          </div>
        </div>

        
        <Card />
      </div>
    </>
  );
};

export default Main2;
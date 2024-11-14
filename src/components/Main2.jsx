
import React from 'react';
import { assets } from '../assets/assets';

const Main2 = () => {
  return (
    <>
      <div className="main2 bg-[#eaebeb] text-[#ffffff] w-full pt-20 pb-28 p-8 sm:p-12 lg:p-16">
        <div className="main2a relative">
          <img
            src={assets.girlsmile}
            alt="Startup image"
            className="w-full h-auto object-cover"
          />
          <div className="card2a w-full h-full bg-[#012964] bg-opacity-60 absolute top-0 left-0 p-8 sm:p-12 flex flex-col justify-center items-center">
            <div className="card2atext text-center">
              <h2 className="text-3xl sm:text-4xl font-semibold leading-snug">
                Real Business Outcomes<span className="text-[#f66709]">.</span>
              </h2>
              <h4 className="text-xl sm:text-2xl mt-5 font-thin leading-relaxed">
                We’re helping you create lasting impressions, not just serve them.
              </h4>
            </div>
            <div className="btn w-[150px] mt-8 h-16 bg-[#2761f1] rounded-[60px] flex items-center justify-center transition ease-linear delay-75 hover:bg-opacity-65">
              <a href="#" className="text-[#ffffff] text-[15px] font-bold">
                CASE STUDIES
              </a>
            </div>
          </div>
        </div>

        <div className="main2b mt-24">
          <div className="headingfont flex justify-center items-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#2761f1] text-center">
              Reaching the Right Audience Isn’t One Size Fits All
              <span className="text-[#f66709]">.</span>
            </h2>
          </div>

          <div className="contenttext flex justify-center items-center mt-20 flex-col md:flex-row lg:flex-row gap-16">
            {/* Box1 */}
            <div className="box1 w-full md:w-1/2 mx-auto relative flex justify-center items-center">
              <div className="box1img mt-16 w-full flex justify-center items-center">
                <img
                  src={assets.phone}
                  alt="Selfie image"
                  className="w-full h-auto md:h-[70vh] object-cover"
                />
              </div>
            </div>

            {/* Box2 */}
            <div className="box2 w-full md:w-1/2 flex justify-center items-center flex-col gap-6 mt-10 md:mt-0">
              <div className="box2a w-full text-center">
                <h4 className="text-black text-2xl sm:text-3xl md:text-3xl font-thin leading-relaxed">
                  Finding consumers who will see value in your advertising message is important to us.
                </h4>
              </div>
              <div className="box2b w-full text-center mt-4">
                <h4 className="text-black text-2xl sm:text-3xl md:text-3xl font-thin leading-relaxed">
                  Privacy compliance is important to us too! If you want to learn more about the data we use and the targeting capabilities we utilize to find your crowd, you’re in the right place.
                </h4>
              </div>
              <div className="box2btn w-[230px] mt-8 h-24 bg-[#012964] rounded-[60px] flex items-center justify-center transition ease-linear delay-75 hover:bg-opacity-65">
                <a href="#" className="text-[#ffffff] text-[14px] font-bold text-center">
                  LEARN ABOUT AUDIENCE TARGETING
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main2;
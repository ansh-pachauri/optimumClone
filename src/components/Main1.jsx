import React from 'react';
import { assets } from '../assets/assets';

const Main1 = () => {
    return (
        <>
            <div className="main1 w-full relative min-h-screen">
                <img 
                    src={assets.main} 
                    alt="Homepage first image" 
                    className="w-full h-full object-cover" 
                />

                <div className="main1a hide-on-mobile absolute top-16 left-16 sm:w-[50%] md:w-[40%] lg:w-[30%] xl:w-[25%]">
                    <img 
                        src={assets.footerlogo} 
                        alt="main 1a image" 
                        className="w-full h-auto object-cover" 
                    />
                </div>

                <div className="main1b hide-on-mobile absolute top-16 left-16 sm:w-[50%] md:w-[40%] lg:w-[30%] xl:w-[25%] bg-[#012964] bg-opacity-70 p-8 flex justify-center items-center flex-col text-[#ffffff] sm:hidden md:block">
                    <div className="main1btext">
                        <h2 className="text-5xl font-bold">
                            New Name<span className="text-[#f66709]">.</span>
                        </h2>
                        <h2 className="text-5xl font-bold mt-4">
                            Same Trusted<span className="text-[#f66709]">.</span>
                        </h2>
                        <h2 className="text-5xl font-bold mt-4">
                            Results<span className="text-[#f66709]">.</span>
                        </h2>
                        <h4 className="text-3xl mt-5 font-thin leading-relaxed">
                            Optimum Media provides innovative, data-driven multiscreen advertising solutions reaching every DMA in the U.S.
                        </h4>
                        <h4 className="text-3xl mt-12 font-thin leading-relaxed">
                            Big business, small business — your business. No matter what, we’re here to help you grow.
                        </h4>
                    </div>
                    <div className="btn w-[150px] h-16 bg-[#2761f1] rounded-[60px] mt-10 flex items-center justify-center transition ease-linear delay-75 hover:bg-opacity-65">
                        <a href="#" className="text-[#ffffff] text-[15px] font-bold">LEARN MORE</a>
                    </div>
                </div>

                <div className="main1b absolute top-0 left-0 w-full h-full bg-[#012964] bg-opacity-70 p-8 flex justify-center items-center flex-col text-[#ffffff] md:hidden">
                    <div className="main1btext">
                        <h2 className="text-5xl font-bold">
                            New Name<span className="text-[#f66709]">.</span>
                        </h2>
                        <h2 className="text-5xl font-bold mt-4">
                            Same Trusted<span className="text-[#f66709]">.</span>
                        </h2>
                        <h2 className="text-5xl font-bold mt-4">
                            Results<span className="text-[#f66709]">.</span>
                        </h2>
                        <h4 className="text-3xl mt-5 font-thin leading-relaxed">
                            Optimum Media provides innovative, data-driven multiscreen advertising solutions reaching every DMA in the U.S.
                        </h4>
                        <h4 className="text-3xl mt-12 font-thin leading-relaxed">
                            Big business, small business — your business. No matter what, we’re here to help you grow.
                        </h4>
                    </div>
                    <div className="btn w-[150px] h-16 bg-[#2761f1] rounded-[60px] mt-10 flex items-center justify-center transition ease-linear delay-75 hover:bg-opacity-65">
                        <a href="#" className="text-[#ffffff] text-[15px] font-bold">LEARN MORE</a>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Main1;
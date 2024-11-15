

import React from "react";
import { assets } from "../assets/assets";

const Main1 = () => {
    return (
        <div className="main1 relative w-full bg-[url('/src/assets/main.jpg')] bg-center bg-cover">
            <div className="main1aelements hide-on-mobile pt-12 px-4 md:px-16">
                <div className="main1a hide-on-mobile left-0 sm:w-[60%] md:w-[50%] lg:w-[40%] xl:w-[35%]">
                    <img
                        src={assets.footerlogo}
                        alt="Main Logo"
                        className="w-full h-auto object-cover"
                    />
                </div>

                <div className="main1b hidden hide-on-mobile md:flex bg-[#012964] bg-opacity-70 p-12 md:p-16 flex-col text-white transition ease-linear delay-75 sm:w-[60%] md:w-[50%] lg:w-[40%] xl:w-[35%] hover:text-[#012964] hover:bg-white">
                    <p className="text-4xl font-bold leading-snug">
                        At Shadow Marketing LLC, we empower brands to grow through innovative, equity-free funding and data-driven media solutions.  Our mission is to maximize your reach and impact with targeted strategies that drive you revenue<span className="text-[#f66709]">.</span>
                    </p>
                </div>
            </div>

            {/* mobile view */}
            <div className="main1b md:hidden w-full bg-[#012964] bg-opacity-70 text-white flex flex-col items-center py-8">
                <p className="text-4xl font-bold leading-snug px-10">
                    At Shadow Marketing LLC, we empower brands to grow through innovative, equity-free funding and data-driven media solutions.  Our mission is to maximize your reach and impact with targeted strategies that drive you revenue<span className="text-[#f66709]">.</span>
                </p>
            </div>
        </div>
    );
};

export default Main1;
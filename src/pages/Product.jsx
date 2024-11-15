import React, { useState } from "react";
import { assets } from "../assets/assets";
import Contact from "../components/Contact";
import ReadMoreReact from "read-more-react";

const Product = () => {
  
  return (
    <>
      <div className="relative w-full h-[400px]  sm:h-[300px] md:h-[400px]">
        {/* image  */}
        <img src={assets.product} className="w-full  h-full object-cover " />
        <div className="absolute inset-0 flex items-center justify-center ">
          <div className="bg-[#002864] bg-opacity-50 w-full flex justify-center items-start py-6 mt-72 px-4 ml-10 mr-10 lg:ml-20 lg:mr-20 sm:px-20 md:px-32">
            <h1 className="text-white text-4xl sm:text-3xl md:text-4xl  font-bold">
              Products
            </h1>
          </div>
        </div>
      </div>
      

      {/* AdMessenger: */}
      <div className="bg-white flex flex-col lg:flex-row justify-between items-start gap-6 lg:gap-10 text-left  px-4 py-16 sm:py-8 md:py-12 lg:px-16">
        <div className="flex flex-col gap-6">
          <h1 className="text-xl font-bold text-blue-900 ">
             AdMessenger
          </h1>

          <div className="text-md sm:text-lg font-medium text-blue-900 max-w-3xl leading-relaxed font-sans space-y-4 whitespace-pre-line ">
            <ReadMoreReact
              text={
                 `Our proprietary AdMessenger platform is an award-winning tool recognized as the "Best Mobile Marketing Platform" by the MarTech Breakthrough Awards. With AdMessenger, you can leverage visitor data from your website to create direct advertising opportunities, connecting with high-intent audiences across multiple channels. AdMessenger utilizes advanced and EXCLUSIVE targeting and retargeting strategies to help you engage new audiences and re-engage existing ones.`
              }
              min={150}
              ideal={250}
              max={400}
              readMoreText={
                <span className=" cursor-pointer tect-[#1d4ed8] font-bold transition-colors  hover:text-[#2563eb]">
                  Read More {">"}
                  {">"}{" "}
                </span>
              }
              
            ></ReadMoreReact>
          </div>
        </div>

        <div className="lg:mt-0 mt-12">
          <img
            className=" rounded-lg w-full h-[200px] md:h-[250px] lg:h-[300px] object-cover drop-shadow-xl"
            src={assets.admarketing}
          />
        </div>
      </div>

      {/* Pre-Roll Video Ads: */}

      <div className="bg-gray-100 flex flex-col lg:flex-row justify-between items-start gap-6 lg:gap-10 text-left px-4 py-16 sm:py-8 md:py-12 lg:px-16">
        <div className=" lg:mt-0 mt-12">
          <img
            className=" rounded-lg w-full h-[200px] md:h-[250px] lg:h-[300px] object-cover drop-shadow-xl "
            src={assets.videoadd}
          />
        </div>

        <div className="flex flex-col gap-6">
          <h1 className="text-xl font-bold text-blue-900 ">
             Pre-Roll Video Ads
          </h1>
          <div className="text-md sm:text-lg font-medium text-blue-900 max-w-3xl leading-relaxed font-sans space-y-4 whitespace-pre-line ">
            <ReadMoreReact
              text={
                 `Capture attention from the very start with Pre-Roll Video Ads. Our pre-roll ad campaigns begin with a 30-second video that introduces your brand to viewers before the main video content. We test several creatives to identify the top-performing version, ensuring maximum engagement as we scale the campaign. Pre-roll video ads are ideal for building brand awareness and making a lasting impression on your audience.
                `
              }
              min={150}
              ideal={250}
              max={400}
              readMoreText={
                <span className=" cursor-pointer tect-[#1d4ed8] font-bold transition-colors  hover:text-[#2563eb]">
                  Read More {">"}
                  {">"}{" "}
                </span>
              }
              
            ></ReadMoreReact>
          </div>
        </div>
      </div>

      {/* Over-the-Top Television Advertising (OTT)   */}

      <div className="bg-white flex flex-col lg:flex-row justify-between items-start gap-6 lg:gap-10 text-left px-4 py-16 sm:py-8 md:py-12 lg:px-16">
        <div className="flex flex-col gap-6">
          <h1 className="text-xl font-semibold text-blue-900 ">
             Over-the-Top Television Advertising (OTT) 
          </h1>
          <div className="text-md sm:text-lg font-medium text-blue-900 max-w-3xl leading-relaxed font-sans space-y-4 whitespace-pre-line ">
            <ReadMoreReact
              text={
                 `Our OTT Advertising solutions allow you to reach consumers on streaming platforms across devices such as smart TVs, mobile, and desktop. OTT ads provide premium, highly-viewed placements that connect your brand with audiences where they consume content most—outside of traditional cable. With OTT, you gain precise targeting capabilities, allowing you to reach specific demographics and interests for better campaign efficiency and results.
                `
              }
              min={150}
              ideal={250}
              max={400}
              readMoreText={
                <span className=" cursor-pointer tect-[#1d4ed8] font-bold transition-colors  hover:text-[#2563eb]">
                  Read More {">"}
                  {">"}{" "}
                </span>
              }
              
            ></ReadMoreReact>
          </div>
        </div>

        <div className=" lg:mt-0 mt-12">
          <img
            className=" rounded-lg  w-full h-[200px] md:h-[250px] lg:h-[300px] object-cover drop-shadow-xl"
            src={assets.ottmarketing}
          />
        </div>
      </div>

      {/* Banner Ads */}

      <div className="bg-gray-100 flex flex-col lg:flex-row justify-between items-start gap-6 lg:gap-10 text-left px-4 py-16 sm:py-8 md:py-12 lg:px-16">
        <div className=" lg:mt-0 mt-12">
          <img
            className=" rounded-lg w-full h-[200px] md:h-[250px] lg:h-[300px] object-cover drop-shadow-xl "
            src={assets.banner}
          />
        </div>

        <div className="flex flex-col gap-6">
          <h1 className="text-xl font-semibold text-blue-900 ">
           Banner Ads
          </h1>
          <div className="text-md sm:text-lg font-medium text-blue-900 max-w-3xl leading-relaxed font-sans space-y-4 whitespace-pre-line ">
            <ReadMoreReact
              text={
                 `Enhance your visibility with Banner Ads that capture audience attention across websites and mobile apps. Our banner ad campaigns are targeted to keep your brand top-of-mind, whether your goal is driving traffic, boosting conversions, or increasing brand awareness. Our team creates engaging banner ads optimized for performance across various devices, ensuring that your brand stands out in any environment.
                `
              }
              min={150}
              ideal={250}
              max={400}
              readMoreText={
                <span className=" cursor-pointer tect-[#1d4ed8] font-bold transition-colors  hover:text-[#2563eb]">
                  Read More {">"}
                  {">"}{" "}
                </span>
              }
              
            ></ReadMoreReact>
          </div>
        </div>
      </div>

      {/* Social Media */}

      <div className="bg-white flex flex-col lg:flex-row justify-between items-start gap-6 lg:gap-10 text-left px-4 py-16 sm:py-8 md:py-12 lg:px-16">
        <div className="flex flex-col gap-6">
          <h1 className="text-xl font-semibold text-blue-900 ">
             Social Media
          </h1>
          <div className="text-md sm:text-lg font-medium text-blue-900 max-w-3xl leading-relaxed font-sans space-y-4 whitespace-pre-line ">
            <ReadMoreReact
              text={
                 `We serve as your dedicated media buyers across Facebook, TikTok, Instagram, and all major platforms, focused on maximizing your reach and impact through targeted, data-driven strategies that achieve real results..
                `
              }
              min={150}
              ideal={250}
              max={400}
              readMoreText={
                <span className=" cursor-pointer tect-[#1d4ed8] font-bold transition-colors  hover:text-[#2563eb]">
                  Read More {">"}
                  {">"}{" "}
                </span>
              }
              
            ></ReadMoreReact>
          </div>
        </div>

        <div className="lg:mt-0 mt-12">
          <img
            className=" rounded-lg w-full h-[200px] md:h-[250px] lg:h-[300px] object-cover drop-shadow-xl "
            src={assets.socialmedia}
          />
        </div>
      </div>
      

      <Contact />
    </>
  );
};

export default Product;

import React from "react";
import { assets } from "../assets/assets";

const Product = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="relative w-full h-[400px]  sm:h-[300px] md:h-[400px]">
        <img
          src={assets.product}
          className="w-full h-full object-cover"
          alt="Services"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-blue-900 bg-opacity-50 w-full flex justify-center items-start py-6 mt-72 px-4 ml-10 mr-10 lg:ml-20 lg:mr-20 sm:px-20 md:px-32">
            <h1 className="text-white text-4xl sm:text-3xl md:text-4xl font-bold">
              Products
            </h1>
          </div>
        </div>
      </div>

      {/* Cards Section */}
      <div className="grid gap-10 mt-10 mb-10 sm:grid-cols-1 lg:grid-cols-2 px-4 sm:px-8 lg:px-20">
        {[
          {
            img: assets.admarketing,
            title: "AdMessenger",
            text: `
              Our proprietary AdMessenger platform is an award-winning tool recognized as the "Best Mobile Marketing Platform" by the MarTech Breakthrough Awards. With AdMessenger, you can leverage visitor data from your website to create direct advertising opportunities, connecting with high-intent audiences across multiple channels. AdMessenger utilizes advanced and EXCLUSIVE targeting and retargeting strategies to help you engage new audiences and re-engage existing ones.
            `,
          },
          {
            img: assets.videoadd,
            title: "Pre-Roll Video Ads",
            text: `
             Capture attention from the very start with Pre-Roll Video Ads. Our pre-roll ad campaigns begin with a 30-second video that introduces your brand to viewers before the main video content. We test several creatives to identify the top-performing version, ensuring maximum engagement as we scale the campaign. Pre-roll video ads are ideal for building brand awareness and making a lasting impression on your audience.
            `,
          },
          {
            img: assets.ottmarketing,
            title: "Over-the-Top Television Advertising (OTT)",
            text: `
              Our OTT Advertising solutions allow you to reach consumers on streaming platforms across devices such as smart TVs, mobile, and desktop. OTT ads provide premium, highly-viewed placements that connect your brand with audiences where they consume content most—outside of traditional cable. With OTT, you gain precise targeting capabilities, allowing you to reach specific demographics and interests for better campaign efficiency and results.
            `,
          },
          {
            img: assets.banner,
            title: "Campaign Management & Optimization",
            text: `
             Enhance your visibility with Banner Ads that capture audience attention across websites and mobile apps. Our banner ad campaigns are targeted to keep your brand top-of-mind, whether your goal is driving traffic, boosting conversions, or increasing brand awareness. Our team creates engaging banner ads optimized for performance across various devices, ensuring that your brand stands out in any environment.
            `,
          },
          {
            img: assets.socialmedia, // Add the correct image reference for analysis here
            title: "Social Media",
            text: `
             We serve as your dedicated media buyers across Facebook, TikTok, Instagram, and all major platforms, focused on maximizing your reach and impact through targeted, data-driven strategies that achieve real results.
            `,
          },
        ].map((card, index) => (
          <div
            key={index}
            className="flex flex-col bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
          >
            {/* Card Image */}
            <div className="w-full h-64 sm:h-80 overflow-hidden">
              <img
                src={card.img}
                alt={card.title}
                className="object-cover w-full h-full"
              />
            </div>
            {/* Card Content */}
            <div className="p-6">
              <h5 className="mb-2 text-2xl font-bold text-gray-900 text-justify">
                {card.title}
                
              </h5>
              <p className="text-gray-700 leading-relaxed whitespace-pre-line text-justify">
                {card.text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Product;

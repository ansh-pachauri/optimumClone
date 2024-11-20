import React from "react";
import { assets } from "../assets/assets";
import Contact from "../components/Contact";

const Services = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="relative w-full h-[400px] sm:h-[300px] md:h-[400px]">
        <img
          src={assets.servicepic}
          className="w-full h-full object-cover"
          alt="Services"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-blue-900 bg-opacity-50 w-full flex justify-center items-start py-6 mt-72 px-4 ml-10 mr-10 lg:ml-20 lg:mr-20 sm:px-20 md:px-32">
            <h1 className="text-white text-4xl sm:text-3xl md:text-4xl font-bold">
              Services
            </h1>
          </div>
        </div>
      </div>

      {/* Introduction */}
      <div className="bg-white text-center px-4 py-8 md:py-12 lg:px-10">
        <p className="text-2xl font-bold text-black max-w-3xl mx-auto leading-relaxed sm:text-xl md:text-2xl sm:max-w-xl md:max-w-3xl">
          At Shadow Marketing LLC, we know that effective advertising goes
          beyond just placing an ad, it’s about creating a targeted, optimized,
          and results-driven campaign that connects with your audience in
          meaningful ways.
        </p>
      </div>

      {/* Cards Section */}
      <div className="grid gap-10 mt-10 sm:grid-cols-1 lg:grid-cols-2 px-4 sm:px-8 lg:px-20">
        {[
          {
            img: assets.consulting,
            title: "Strategic Consulting",
            text: `
              Every successful campaign starts with a solid strategy. Our consulting services provide you with a customized roadmap to help you define goals, target audiences, and choose the right mix of ad formats.
              ● Audience Analysis: Gain a deeper understanding of who your audience is and how to reach them.
              ● Platform Recommendations: Identify the best platforms for your ads, whether it's mobile, OTT, Social Media or Digital.
            `,
          },
          {
            img: assets.targeting,
            title: "Targeting & Retargeting",
            text: `
              Reaching the right audience at the right time is essential for any ad campaign’s success. Our targeting services use advanced data analytics and proprietary tools to hone in on high-intent audiences.
              ● Demographic and Behavioral Targeting.
              ● Retargeting Strategies.
            `,
          },
          {
            img: assets.development,
            title: "Creative Development and Testing",
            text: `
              Engaging ad creatives are critical to capturing attention and converting interest into action. Our creative development team crafts compelling visuals and messaging that resonate with your audience.
              ● A/B Testing: Evaluate multiple creatives to find the best.
              ● Content Creation: High-quality visuals, videos, and ads.
            `,
          },
          {
            img: assets.optimize,
            title: "Campaign Management & Optimization",
            text: `
              Our end-to-end campaign management services ensure that your ads run smoothly, stay on budget, and deliver on key performance metrics. We handle everything from setup to reporting.
              ● Real-Time Monitoring.
              ● Performance Insights.
            `,
          },
          {
            img: assets.analysis,
            title: "Data Analysis & Insights",
            text: `
              Data drives every decision we make. Our analytics team provides in-depth reporting and actionable insights that help you refine and improve your campaigns.
              ● Performance Metrics: Track ROI, engagement, and conversions.
              ● Competitive Analysis: Understand your competitors and outpace them.
              ● Predictive Insights: Leverage AI and machine learning to forecast future trends.
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

      {/* Footer Section */}
      <div className="text-center font-bold px-4 py-5 mt-7 mb-10 text-lg sm:text-2xl lg:text-3xl">
        <h1>
          Partner with Shadow Marketing LLC to leverage our media buying and
          funding expertise.
        </h1>
      </div>
    </>
  );
};

export default Services;

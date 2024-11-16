import React, { useState } from "react";
import { assets } from "../assets/assets";
import Contact from "../components/Contact";
import ReadMoreReact from "read-more-react";

const Services = () => {
  
  return (
    <>
      <div className="relative w-full h-[400px]  sm:h-[300px] md:h-[400px]">
        {/* image  */}
        <img src={assets.service} className="w-full  h-full object-cover " />
        <div className="absolute inset-0 flex items-center justify-center ">
          <div className="bg-[#E35F58] bg-opacity-50 w-full flex justify-center items-start py-6 mt-72 px-4 ml-10 mr-10 lg:ml-20 lg:mr-20 sm:px-20 md:px-32">
            <h1 className="text-white text-4xl sm:text-3xl md:text-4xl  font-bold">
              Services
            </h1>
          </div>
        </div>
      </div>
      <div className="bg-white text-center px-4 py-8 sm:py-8 md:py-12 lg:px-10">
        <p className="text-xl font-bold text-blue-950 max-w-3xl mx-auto leading-relaxed font-sans sm:text-xl md:text-2xl  sm:max-w-xl md:max-w-3xl ">
          At Shadow Marketing LLC, we know that effective advertising goes
          beyond just placing an ad, it’s about creating a targeted, optimized,
          and results-driven campaign that connects with your audience in
          meaningful ways. Here’s a detailed overview of the comprehensive
          services that we offer to optimize your campaigns success.
        </p>
      </div>

      {/* counselting */}
      <div className="bg-white flex flex-col lg:flex-row justify-between items-start gap-6 lg:gap-10 text-left  px-4 py-16 sm:py-8 md:py-12 lg:px-16">
        <div className="flex flex-col gap-6">
          <h1 className="text-xl font-bold text-black ">
            ● Strategic Consulting
          </h1>

          <div className="text-md sm:text-lg font-medium text-gray-700 max-w-3xl leading-relaxed font-sans space-y-4 whitespace-pre-line ">
            <ReadMoreReact
              text={
                 `During the consultation process, we work closely with your team to understand your brand, your unique selling points, and your ideal customer profile. This collaborative approach ensures that each campaign is tailored to your business objectives and designed for maximum impact.
                ● Audience Analysis: Gain a deeper understanding of who your audience is and how to reach them.
                ● Platform Recommendations: Identify the best platforms for your ads, whether it's mobile, OTT, Social Media, or Digital.
                ● Goal Setting and KPI Development: Establish clear, measurable goals for each campaign to track performance and ROI.`
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
            src={assets.consulting}
          />
        </div>
      </div>

      {/* targetting */}

      <div className="bg-gray-100 flex flex-col lg:flex-row justify-between items-start gap-6 lg:gap-10 text-left px-4 py-16 sm:py-8 md:py-12 lg:px-16">
        <div className=" lg:mt-0 mt-12">
          <img
            className=" rounded-lg w-full h-[200px] md:h-[250px] lg:h-[300px] object-cover drop-shadow-xl "
            src={assets.targeting}
          />
        </div>

        <div className="flex flex-col gap-6">
          <h1 className="text-xl font-bold text-black ">
            ● Targeting & Retargeting
          </h1>
          <div className="text-md sm:text-lg font-medium text-gray-700 max-w-3xl leading-relaxed font-sans space-y-4 whitespace-pre-line ">
            <ReadMoreReact
              text={
                 `Reaching the right audience at the right time is essential for any ad campaign’s success.  Our targeting services use advanced data analytics and proprietary tools to hone in on high-intent audiences, ensuring your ads reach those most likely to convert.  For retargeting, we reconnect with individuals who have previously shown interest in your brand, reinforcing your message and driving higher engagement.
                ●	Demographic and Behavioral Targeting: Refine your audience based on factors like age, location, interests, and online behavior.
                ●	Retargeting Strategies: Re-engage previous website visitors or ad viewers with tailored messages to move them further down the conversion funnel.
                ●	Lookalike Audiences: Identify new potential customers with profiles similar to your existing clients to expand your reach.
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

      {/* Creative development */}

      <div className="bg-white flex flex-col lg:flex-row justify-between items-start gap-6 lg:gap-10 text-left px-4 py-16 sm:py-8 md:py-12 lg:px-16">
        <div className="flex flex-col gap-6">
          <h1 className="text-xl font-bold text-black ">
            ● Creative development and testing
          </h1>
          <div className="text-md sm:text-lg font-medium text-gray-700 max-w-3xl leading-relaxed font-sans space-y-4 whitespace-pre-line ">
            <ReadMoreReact
              text={
                 `Engaging ad creatives are critical to capturing attention and converting interest into action. Our creative development team crafts compelling visuals and messaging that resonate with your audience, whether it’s for a 30-second pre-roll video or a targeted banner ad.  
                We conduct rigorous and creative testing to evaluate which versions perform best, allowing us to refine and optimize each asset before scaling the campaign.
                ●	Content Creation: Develop engaging video, banner, and display ads that capture your brand’s essence.
                ●	A/B Testing: Test multiple versions of your creatives to identify the highest-performing option for scaling.
                ●	Performance Feedback Loops: Continually assess creative performance and make adjustments to maintain high engagement.
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
            src={assets.development}
          />
        </div>
      </div>

      {/* optimization */}

      <div className="bg-gray-100 flex flex-col lg:flex-row justify-between items-start gap-6 lg:gap-10 text-left px-4 py-16 sm:py-8 md:py-12 lg:px-16">
        <div className=" lg:mt-0 mt-12">
          <img
            className=" rounded-lg w-full h-[200px] md:h-[250px] lg:h-[300px] object-cover drop-shadow-xl "
            src={assets.optimize}
          />
        </div>

        <div className="flex flex-col gap-6">
          <h1 className="text-xl font-bold text-black ">
            ● Campaign Management & Optimization
          </h1>
          <div className="text-md sm:text-lg font-medium text-gray-700 max-w-3xl leading-relaxed font-sans space-y-4 whitespace-pre-line ">
            <ReadMoreReact
              text={
                 `Our end-to-end campaign management services ensure that your ads run smoothly, stay on budget, and deliver on key performance metrics.  We handle everything from setting up campaigns to real-time monitoring and adjusting, so you can focus on your business. With detailed analytics and insights, we provide ongoing optimization to keep your campaigns performing at their best.
                ●	Campaign Setup and Execution: We handle the technical aspects of launching and managing campaigns on various platforms.
                ●	Real-Time Monitoring: We track ad performance live to quickly identify any necessary adjustments.
                ●	Performance Reporting & Insights: We receive detailed reports that break down key metrics and insights, giving you a clear picture of campaign ROI and areas for improvement.
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

      {/* analysis */}

      <div className="bg-white flex flex-col lg:flex-row justify-between items-start gap-6 lg:gap-10 text-left px-4 py-16 sm:py-8 md:py-12 lg:px-16">
        <div className="flex flex-col gap-6">
          <h1 className="text-xl font-bold text-black ">
            ● Advanced Analytics and Reporting
          </h1>
          <div className="text-md sm:text-lg font-medium text-gray-700 max-w-3xl leading-relaxed font-sans space-y-4 whitespace-pre-line ">
            <ReadMoreReact
              text={
                 `Our advanced analytics services give you an in-depth view of your campaign’s success, showing exactly how each ad contributes to your goals. We provide customized reports that track metrics like reach, engagement, conversion rates, and ROI, helping you understand what’s working and where there’s room for improvement. This data-driven approach enables continuous optimization and fuels long-term campaign success.
                ●	Custom Reporting: We provide access to clear, actionable reports tailored to your specific objectives.
                ●	Metric Tracking: We keep you informed with regular updates on KPIs like click-through rates, engagement, and conversions.
                ●	Insightful Recommendations: You will receive expert analysis on campaign performance, with recommendations to enhance future initiatives.

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
            className=" rounded-lg w-full h-[200px] md:h-[250px] lg:h-[300px] object-cover drop-shadow-xl"
            src={assets.analysis}
          />
        </div>
      </div>
      <div className="text-center font-bold px-4 py-5 text-lg sm:text-xl lg:text-2xl">
        <h1 className="tect-center ">
          Partner with Shadow Marketing LLC to leverage our media buying and
          funding expertise—and watch your brand reach new heights
        </h1>
      </div>

      <Contact />
    </>
  );
};

export default Services;

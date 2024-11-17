import React from "react";
import { assets } from "../assets/assets";

const Card = () => {
  return (
    <>
      

      {/* the small paragraph */}
      <div className="text-center  p-10 ">
        <h4 className="font-bold text-black text-3xl mb-5  ">
        Your Business is one step away from achieving your goals.
        </h4>
        <p className="font-semibold text-gray-700 text-center text-xl  ">
        No one understands direct-response business challenges like Shadow Marketing LLC. We recognize the difficulty of finding a reliable funding partner, especially in the dynamic world of direct response, e-commerce, and DTC marketing. We’ve developed a solution to ensure you can secure the capital required for growth without relinquishing equity. It’s your vision, your hard work, and your success—kept entirely in your hands.
        </p>
      </div>

      {/* Cards Section */}
      <div className="grid mb-10 gap-10 mt-10 sm:grid-cols-1  lg:grid-cols-2 px-4 sm:px-8 lg:px-20">
        {/* Card 1 */}
        <div
          href="#"
          className="flex flex-col items-center bg-white border p-5 border-gray-200 rounded-lg shadow md:flex-row hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
        >
          <img
            className="object-cover w-full rounded-t-lg h-full md:h-full md:w-48 md:rounded-none md:rounded-s-lg"
            src={assets.nondilute}
            alt="Non-Dilutive Funding"
          />
          <div className="flex flex-col  justify-between p-4 leading-normal">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white transition ease-linear delay-75 hover:bg-re">
              What Is Non-Dilutive Funding?
            </h5>
            <p className="mb-3 font-normal text-justify text-gray-700 dark:text-gray-400">
              Non-dilutive funding means that you maintain complete ownership of your business. Unlike other funding channels that seek equity, we provide the credit you need to expand without taking a stake in your company.
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div
          href="#"
          className="flex flex-col items-center p-5 bg-white border border-gray-200 rounded-lg shadow md:flex-row hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
        >
          <img
            className="object-cover w-full rounded-t-lg h-full md:h-full md:w-48 md:rounded-none md:rounded-s-lg"
            src={assets.mediafund}
            alt="Media Funding"
          />
          <div className="flex flex-col  justify-between p-4 leading-normal">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              How does Media Funding work?
            </h5>
            <p className="mb-3 font-normal text-justify text-gray-700 dark:text-gray-400">
              Media funding is a specialized credit line allocated exclusively for your marketing and advertising efforts. With guaranteed media funding, you can expand your reach without constantly reinvesting operational revenue into your campaigns.
            </p>
          </div>
        </div>

        {/* Card 3 */}
        <div
          href="#"
          className="flex flex-col items-center p-5 man-card bg-white border border-gray-200 rounded-lg shadow md:flex-row hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
        >
          <img
            className="object-cover w-full rounded-t-lg h-full md:h-full md:w-48 md:rounded-none md:rounded-s-lg"
            src={assets.man}
            alt="Ideal Candidate for Media Funding"
          />
          <div className="flex flex-col  justify-between p-4 leading-normal">
            <h5 className="mb-2 text-2xl font-bold tracking-tight lg:text-justify text-gray-900 dark:text-white">
              Are you an ideal candidate for Media Funding?
            </h5>
            <p className="mb-3 font-normal text-justify text-gray-700 dark:text-gray-400">
              If you have any of the following, you may be a strong candidate for our Media Funding solution:</p>
              <span>
              <ul className="list-disc ml-4 text-gray-700">
                <li>A large reserve held by your merchant processor</li>
                <li>A subscription-based model with a solid customer base</li>
                <li>High-ticket products paid in installments</li>
                <li>A site monetized heavily through Google ad revenue</li>
              </ul>
              </span>
              
            
          </div>
        </div>

        {/* Card 4 */}
        <div
          href="#"
          className="flex flex-col items-start man-card p-5 bg-white border border-gray-200 rounded-lg shadow md:flex-row hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
        >
          <img
            className="object-cover w-full rounded-t-lg h-full md:h-full md:w-48 md:rounded-none md:rounded-s-lg"
            src={assets.beyound}
            alt="Beyond Funding"
          />
          <div className="flex flex-col  justify-between p-4 leading-normal">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white lg:text-justify">
              Beyond Funding: Industry experts you can rely on.
            </h5>
            <p className="mb-3 font-normal text-justify text-gray-700 dark:text-gray-400">
              At Shadow Marketing LLC, we do more than provide capital. With decades of experience in direct response marketing and brand advertising, our team offers the guidance and strategic insights you need to thrive.
            </p>
          </div>
        </div>
      </div>

      
    </>
  );
};

export default Card;

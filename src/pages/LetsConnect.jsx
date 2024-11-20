import React from "react";
import {assets} from "../assets/assets";
import Contact from "../components/Contact";


const LetsConnect = () => {
  return (
    <>
      <div className="relative w-full h-[400px]   sm:h-[300px] md:h-[400px]">
        {/* image  */}
        <img src={assets.letimagedit} className="w-full  h-full object-cover " />
        <div className="absolute inset-0 flex items-center justify-center ">
          <div className="bg-blue-900 bg-opacity-50 w-full flex justify-center items-start py-6 mt-72 px-4 ml-10 mr-10 lg:ml-20 lg:mr-20 sm:px-20 md:px-32">
            <h1 className="text-white text-4xl sm:text-3xl md:text-4xl  font-bold">
              Let's Connect
            </h1>
          </div>
        </div>
      </div>
      <div className="bg-white text-center p-16 sm:p-8 md:p-16 ">
        <p className="text-2xl font-bold text-blue-950 max-w-3xl mx-auto leading-relaxed font-sans sm:text-xl md:text-2xl  sm:max-w-xl md:max-w-3xl ">
          For new customers interested in doing business with us or learning more, please fill out the form below. One of our sales representatives will be in touch as soon as possible!
        </p>
      </div>

      <div className="bg-gray-100 text-center  p-8 sm:p-6 md:p-8">
        <p className="text-xl sm:text-base md:text-lg italic text-gray-700 max-w-3xl mx-auto leading-relaxed sm:max-w-xl md:max-w-3xl font-sans">
          Current customers with specific questions or looking to connect with your sales rep, email: <a href="mailto:admin@shadowmarketingllc.com "className="text-blue-500 underline" >admin@shadowmarketingllc.com</a>or call:<a href="tel:908-619-5122 " className="text-blue-500 underline">908-619-5122 .</a> Please provide us with the following details so that we can better
          assist you: contact name, business name, email, phone number, name of your sales rep, and your question.
        </p>
      </div>
      <div className="bg-white p-4 sm:p-8 md:p-12">
      <Contact />
      </div>
      
    </>
  );
};

export default LetsConnect;

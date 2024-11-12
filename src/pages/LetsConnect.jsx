import React from "react";
import {assets} from "../assets/assets";
import Contact from "../components/Contact";


const LetsConnect = () => {
  return (
    <>
      <div className="relative w-full h-[400px]">
        <img src={assets.letimagedit} className="w-full h-full object-cover " />
        <div className="absolute inset-0 flex items-center justify-center bg-[#002864] bg-opacity-50 mt-[250px] ml-[300px] mr-[300px]">
            <h1 className="text-white text-4xl font-bold">Let's Connect</h1>
        </div>
      </div>
      <div className="bg-white text-center p-8">
        <p className="text-lg font-semibold text-blue-950 max-w-2xl mx-auto leading-relaxed font-sans">
          For new customers interested in doing business with us or<br /> learning more, please fill out the form below. One of our sales representatives<br/>will be in touch as soon as possible!
        </p>
      </div>

      <div className="bg-gray-100 text-center p-8">
        <p className="text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed font-sans">
          Current customers with specific questions or looking to connect with your sales rep, email: <a href="mailto:sales@optimum.media "className="text-blue-500 underline" >sales@optimum.media</a>or call:<a href="tel:929-418-4190" className="text-blue-500 underline">929-418-4190.</a> Please provide us with the following details so that we can better
          assist you: contact name, business name, email, phone number, name of your sales rep, and your question.
        </p>
      </div>
      <div className="bg-white">
      <Contact />
      </div>
      
    </>
  );
};

export default LetsConnect;

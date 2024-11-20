import React from 'react';
import { assets } from '../assets/assets';
import Contact from '../components/Contact';

const Contactus = () => {
    return (
        <>
        <div className="relative w-full h-[400px]  sm:h-[300px] md:h-[400px]">
        {/* image  */}
        <img src={assets.contact1} className="w-full  h-full object-cover " />
        <div className="absolute inset-0 flex items-center justify-center ">
          <div className="bg-blue-900 bg-opacity-50 w-full flex justify-center items-start py-6 mt-72 px-4 ml-10 mr-10 lg:ml-20 lg:mr-20 sm:px-20 md:px-32">
            <h1 className="text-white text-4xl sm:text-3xl md:text-4xl  font-bold">
              Contact Us
            </h1>
          </div>
        </div>
      </div>
      


            <div className="contactinfo flex justify-center flex-col items-center mt-16 px-4">
                <div className="contactusheading">
                    <h1 className="text-gray-800 font-extrabold text-3xl md:text-5xl text-center">
                        GET IN TOUCH WITH US.
                    </h1>
                </div>
                <div className="contactuspageinfo flex flex-col md:flex-row justify-evenly w-full mt-16 md:mt-20 space-y-10 md:space-y-0 md:space-x-10">
                    <div className="location flex flex-col md:flex-row items-center">
                        <div className="locationimg h-12 w-12 md:h-16 md:w-16 mr-0 md:mr-10 flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" height="50" width="55" viewBox="0 0 384 512" className="w-full h-full">
                                <path fill="#f66709" d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
                            </svg>
                        </div>
                        <div className="locationinfo flex flex-col items-center md:items-start">
                            <h2 className="text-[#2761f1] font-semibold text-xl md:text-2xl mb-4 md:mb-6">Our Location</h2>
                            <h5 className="text-lg md:text-xl text-center md:text-left">
                                Shadow Marketing LLC <br />
                                177 Mill Pond Road<br />
                                Gilbert, PA 18331
                            </h5>
                        </div>
                    </div>

                    <div className="phonenumber flex flex-col md:flex-row items-center">
                        <div className="phonenumberimg h-12 w-12 md:h-16 md:w-16 mr-0 md:mr-10">
                            <svg xmlns="http://www.w3.org/2000/svg" height="40" width="45" viewBox="0 0 512 512" className="w-full h-full">
                                <path fill="#f66709" d="M280 0C408.1 0 512 103.9 512 232c0 13.3-10.7 24-24 24s-24-10.7-24-24c0-101.6-82.4-184-184-184c-13.3 0-24-10.7-24-24s10.7-24 24-24zm8 192a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm-32-72c0-13.3 10.7-24 24-24c75.1 0 136 60.9 136 136c0 13.3-10.7 24-24 24s-24-10.7-24-24c0-48.6-39.4-88-88-88c-13.3 0-24-10.7-24-24zM117.5 1.4c19.4-5.3 39.7 4.6 47.4 23.2l40 96c6.8 16.3 2.1 35.2-11.6 46.3L144 207.3c33.3 70.4 90.3 127.4 160.7 160.7L345 318.7c11.2-13.7 30-18.4 46.3-11.6l96 40c18.6 7.7 28.5 28 23.2 47.4l-24 88C481.8 499.9 466 512 448 512C200.6 512 0 311.4 0 64C0 46 12.1 30.2 29.5 25.4l88-24z" />
                            </svg>
                        </div>
                        <div className="phonenumberinfo flex flex-col items-center md:items-start">
                            <h2 className="text-[#2761f1] font-semibold text-xl md:text-2xl mb-4 md:mb-6">Phone Number</h2>
                            <a href='tel:908-619-5122' className="text-lg md:text-xl">908-619-5122</a>
                            
                        </div>
                    </div>

                    <div className="email flex flex-col md:flex-row items-center">
                        <div className="emailimg h-12 w-12 md:h-16 md:w-16 mr-0 md:mr-10">
                            <img src={assets.mail} alt="email logo" className="w-full h-full" />
                        </div>
                        <div className="emailinfo flex flex-col items-center md:items-start">
                            <h2 className="text-[#2761f1] font-semibold text-xl md:text-2xl mb-4 md:mb-6">Email Address</h2>
                            <a href='maltto:admin@shadowmarketingllc.com' className="text-lg md:text-xl">admin@shadowmarketingllc.com</a>
                            
                        </div>
                    </div>
                </div>

                <div className="contactusheading mt-16 p-4 md:p-16">
                    <h1 className="text-gray-800 font-extrabold text-3xl md:text-5xl text-center leading-relaxed">
                        Excited to elevate your business and brand ? Fill out the form below, and let’s unlock new possibilities together.
                    </h1>
                </div>
            </div>
            <Contact />
        </>
    );
};

export default Contactus;
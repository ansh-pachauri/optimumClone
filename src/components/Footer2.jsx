import React from "react";
import { Link } from "react-router-dom";
import { assets } from "../assets/assets";

const Footer2 = () => {
  return (
    <>
      <footer className="bg-[#0f0d42] text-white">
        <div className="mx-auto w-full max-w-screen-xl px-12 item-center py-8 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-8 md:gap-0">
            {/* Logo and Company Name */}
            <div className="flex flex-col items-center md:items-start">
              <Link
                to="/"
                className="flex flex-col items-center md:items-start"
              >
                <img
                  src={assets.shadowlogo1}
                  className=" h-28 mb-4"
                  alt="Marketing Logo"
                />
                <span className="text-xl font-bold  flex items-start text-center md:text-left whitespace-nowrap">
                  Shadow Marketing LLC
                </span>
              </Link>
            </div>

            {/* Navigation Links */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm justify-between text-center md:text-left">
              
             
              <a
                href="tel:908-619-5122"
                className="flex flex-col sm:flex-row items-center justify-center gap-2 hover:text-gray-300 break-words w-full sm:w-auto"
              >
                <svg
                  className="w-6 h-6 sm:w-8 sm:h-8"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M2.86 2.86C3.68 2.04 4.84 2.04 5.66 2.86L7.46 4.66C8.2 5.4 8.23 6.59 7.52 7.36L6.3 8.58C6.21 8.67 6.17 8.8 6.2 8.92C6.68 10.9 7.97 12.8 9.98 14.81C11.99 16.83 13.88 18.11 15.86 18.6C16 18.63 16.13 18.59 16.22 18.49L17.44 17.28C18.21 16.57 19.4 16.6 20.14 17.34L21.94 19.14C22.76 19.96 22.76 21.12 21.94 21.94C20.14 23.74 17.58 23.75 14.26 21.93C11.13 20.21 8.31 17.74 5.82 14.55C3.35 11.38 1.26 8.54 0.54 5.95C-0.19 3.36 0.04 0.88 2.86 2.86Z" />
                </svg>
                <span className="font-bold text-sm sm:text-base text-center sm:text-left">
                  908-619-5122
                </span>
              </a>

              <a
                href="mailto:admin@shadowmarketingllc.com"
                className="flex flex-col sm:flex-row items-center justify-center gap-2 hover:text-gray-300 break-words w-full sm:w-auto"
              >
                <svg
                  className="w-6 h-6 sm:w-8 sm:h-8"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M3 4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2H3zm18 2-9 5.99L3 6h18zM3 8.27l8.91 5.94c.34.22.79.22 1.13 0L21 8.27V18H3V8.27z" />
                </svg>
                <span className="truncate sm:text-center font-bold text-white  " title="admin@shadowmarketingllc.com">
                admin@shadowmarketingllc.com
                </span>

               
              </a>
            </div>
          </div>

          <hr className="my-6 border-white" />

          {/* Footer Bottom Section */}
          <div className="flex flex-col sm:flex-row justify-between items-center text-sm text-white">
            <span className="mb-4 sm:mb-0">
              © 2024
              <Link to="/" className="hover:underline text-white font-semibold">
                {" "}
                Shadow Marketing LLC™
              </Link>
              . All Rights Reserved.
            </span>
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/mobiletech2020"
                className="hover:text-gray-300"
              >
                <svg
                  className="w-6 h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 8 19"
                >
                  <path d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/sheryl-herfurth-b89a919/"
                className="hover:text-gray-300"
              >
                <svg
                  className="w-6 h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M4.98 3.5C4.98 2.12 6.1 1 7.48 1c1.38 0 2.5 1.12 2.5 2.5S8.86 6 7.48 6A2.5 2.5 0 0 1 4.98 3.5zM3 8h4v12H3V8zm7 0h4v1.69c.56-.81 1.57-1.69 3.31-1.69 3.54 0 4.19 2.33 4.19 5.36V20h-4v-5.04c0-1.2-.03-2.76-1.68-2.76-1.68 0-1.94 1.31-1.94 2.67V20h-4V8z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer2;

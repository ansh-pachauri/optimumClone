import React from "react";
import { Link } from "react-router-dom";
import { assets } from "../assets/assets";

const Footer2 = () => {
  return (
    <>
      <footer className="bg-[#002865] text-white">
        <div className="mx-auto w-full max-w-screen-xl p-6 lg:p-8">
          <div className="flex flex-col md:flex-row md:justify-between md:items-center">
            <div className="mb-6 md:mb-0 flex flex-col items-center md:flex-row md:items-start">
              <Link to="/" className="flex flex-col items-center md:items-start">
                <img
                  src={assets.shadowlogo}
                  className="h-32 mb-2 md:mb-0 md:mr-4"
                  alt="Marketing Logo"
                />
                <span className="text-2xl font-bold  text-center md:text-left">
                  Shadow Marketing LLC
                </span>
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-6 sm:gap-8 sm:grid-cols-3">
              <div>
                <Link
                  to="/privacy-policy"
                  className="text-white hover:underline"
                >
                  <h2 className="mb-4 text-sm font-semibold uppercase">
                    Privacy Policy
                  </h2>
                </Link>
              </div>
              <div>
                <Link to="/terms-of-use" className="text-white hover:underline">
                  <h2 className="mb-4 text-sm font-semibold uppercase">
                    Terms of Use
                  </h2>
                </Link>
              </div>
              <div>
                <Link
                  to="/advertising-guidelines"
                  className="text-white hover:underline"
                >
                  <h2 className="mb-4 text-sm font-semibold uppercase">
                    Advertising Guidelines
                  </h2>
                </Link>
              </div>
              <div>
                <Link
                  to="/terms-and-conditions"
                  className="text-white hover:underline"
                >
                  <h2 className="mb-4 text-sm font-semibold uppercase">
                    Terms and Conditions
                  </h2>
                </Link>
              </div>
            </div>
          </div>
          <hr className="my-6 border-gray-500" />
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
            <span className="text-sm text-gray-400 text-center sm:text-left">
              © 2023
              <Link to="/" className="hover:underline text-white font-semibold">
                {" "}
                Shadow Marketing LLC™
              </Link>
              . All Rights Reserved.
            </span>
            <div className="flex mt-4 sm:mt-0 justify-center">
              <a
                href="https://www.facebook.com/mobiletech2020"
                className="text-white hover:text-gray-300 mx-3"
              >
                <svg
                  className="w-6 h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 8 19"
                >
                  <path
                    fillRule="evenodd"
                    d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="sr-only">Facebook page</span>
              </a>
              <a
                href="https://www.linkedin.com/in/sheryl-herfurth-b89a919/"
                className="text-white hover:text-gray-300 mx-3"
              >
                <svg
                  className="w-6 h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M4.98 3.5C4.98 2.12 6.1 1 7.48 1c1.38 0 2.5 1.12 2.5 2.5S8.86 6 7.48 6A2.5 2.5 0 0 1 4.98 3.5zM3 8h4v12H3V8zm7 0h4v1.69c.56-.81 1.57-1.69 3.31-1.69 3.54 0 4.19 2.33 4.19 5.36V20h-4v-5.04c0-1.2-.03-2.76-1.68-2.76-1.68 0-1.94 1.31-1.94 2.67V20h-4V8z" />
                </svg>
                <span className="sr-only">LinkedIn account</span>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer2;

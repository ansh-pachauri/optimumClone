import React, { useState } from 'react';
import { assets } from '../assets/assets';
// Import each image individually
import q1 from '../assets/q1.jpg'; // Replace with actual paths
import q2 from '../assets/q2.jpg';
import q3 from '../assets/q3.jpg';
import q4 from '../assets/q4.jpg';
import q5 from '../assets/q5.jpg';
import q6 from '../assets/q6.jpg';


const MainCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [q1,q2,q3,q4,q5,q6];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="flex justify-center my-10">
      <div className="relative w-full max-w-4xl mx-10 sm:mx-16 lg:mx-auto overflow-hidden">
        {/* Image container */}
        <div
          className="flex transition-transform duration-500"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Slide ${index + 1}`}
              className="w-full h-auto max-h-[500px] object-cover"
            />
          ))}
        </div>

        {/* Previous button */}
        <button
          onClick={prevSlide}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-30 text-white px-4 py-8 rounded-r-md hover:bg-opacity-50 transition-opacity focus:outline-none sm:px-6 sm:py-10 md:px-8 md:py-12"
        >
          ❮
        </button>

        {/* Next button */}
        <button
          onClick={nextSlide}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-30 text-white px-4 py-8 rounded-l-md hover:bg-opacity-50 transition-opacity focus:outline-none sm:px-6 sm:py-10 md:px-8 md:py-12"
        >
          ❯
        </button>

        {/* Indicator dots */}
        <div className="absolute bottom-4 w-full flex justify-center space-x-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full ${
                index === currentIndex ? 'bg-black' : 'bg-gray-400'
              } focus:outline-none`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MainCarousel;
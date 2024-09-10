import React, { useState, useEffect } from "react";
import Testimony from "./Testimony";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

export default function TestimonialSlider({ testimonials }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 6000); // Auto-scroll every 6 seconds
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const handlePrevClick = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto">
      <button
        className="absolute left-5 z-50 top-1/2 transform -translate-y-1/2 bg-gray-200 hover:bg-gray-300 p-2 rounded-full"
        onClick={handlePrevClick}
      >
        <FaArrowLeft />
      </button>

      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {testimonials.map((testimonial, index) => (
            <Testimony key={index} {...testimonial} />
          ))}
        </div>
      </div>

      <button
        className="absolute right-5 top-1/2 transform -translate-y-1/2 bg-gray-200 hover:bg-gray-300 p-2 rounded-full"
        onClick={handleNextClick}
      >
        <FaArrowRight />
      </button>
    </div>
  );
}

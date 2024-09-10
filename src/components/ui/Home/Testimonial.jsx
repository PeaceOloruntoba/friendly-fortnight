import React from "react";
import TestimonialSlider from "./TestimonialSlider";
import { testimonialData } from "../../../data/testimonialData";

export default function Testimonial() {
  return (
    <div className="p-3 md:p-8 bg-white text-center" id="testimonial">
      <p className="text-[#ff9800] text-lg md:text-2xl font-semibold">
        Testimonials
      </p>
      <p className="md:text-2xl text-sm font-semibold">
        What our clients say about us
      </p>
      <TestimonialSlider testimonials={testimonialData} />
    </div>
  );
}

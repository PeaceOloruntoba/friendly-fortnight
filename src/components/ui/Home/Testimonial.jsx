import React from "react";
import TestimonialSlider from "./TestimonialSlider";
import { testimonialData } from "../../../data/testimonialData";

export default function Testimonial() {
  return (
    <div className="p-3 md:p-8 bg-white" id="testimonial">
      <p className="md:text-2xl text-lg font-bold text-center mb-4">Testimonials</p>
      <TestimonialSlider testimonials={testimonialData} />
    </div>
  );
}

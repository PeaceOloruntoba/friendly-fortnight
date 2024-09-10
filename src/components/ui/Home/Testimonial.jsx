import React from "react";
import TestimonialSlider from "./TestimonialSlider";
import { testimonialData } from "../../../data/testimonialData";

export default function Testimonial() {
  return (
    <div className="p-10 bg-white" id="testimonial">
      <p className="text-3xl font-bold text-center mb-4">Testimonials</p>
      <TestimonialSlider testimonials={testimonialData} />
    </div>
  );
}

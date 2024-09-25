import React, { useEffect } from "react";
import Hero from "../components/ui/Home/Hero";
import About from "../components/ui/Home/About";
import Services from "../components/ui/Home/Services";
import WhyWhy from "../components/ui/Home/WhyWhy";
import Team from "../components/ui/Home/Team";
import Contact from "../components/ui/Home/Contact";
import Testimonial from "../components/ui/Home/Testimonial";
import { useLocation } from "react-router-dom";

export default function Home() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.replace("#", ""));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);
  return (
    <div className="bg-white">
      <Hero />
      <Services />
      <About />
      <WhyWhy />
      <div id="team">
        <Team />
      </div>
      <div id="testimonial">
        <Testimonial />
      </div>
      <Contact />
    </div>
  );
}

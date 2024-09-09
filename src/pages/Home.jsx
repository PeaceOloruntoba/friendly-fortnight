import React from "react";
import Hero from "../components/ui/Home/Hero";
import About from "../components/ui/Home/About";
import Services from "../components/ui/Home/Services";

export default function Home() {
  return (
    <div className="bg-white">
      <Hero />
      <Services />
      <About />
    </div>
  );
}

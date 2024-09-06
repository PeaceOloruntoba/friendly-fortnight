import React from "react";
import Hero from "../components/ui/Home/Hero";
import About from "../components/ui/Home/About";

export default function Home() {
  return (
    <div className="bg-black text-white">
      <Hero />
      <About />
      Home
    </div>
  );
}

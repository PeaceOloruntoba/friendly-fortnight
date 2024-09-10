import React from "react";
import PageHead from "../components/shared/PageHead";
import Hero from "../components/ui/Services/Hero";
import WhyWhy from "../components/ui/Home/WhyWhy";
import Contact from "../components/ui/Home/Contact";

export default function Services() {
  return (
    <div className="flex flex-col w-full">
      <PageHead name={"Services"} />
      <Hero />
      <WhyWhy />
      <Contact />
    </div>
  );
}

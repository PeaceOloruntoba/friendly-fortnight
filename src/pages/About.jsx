import React from "react";
import PageHead from "../components/shared/PageHead";
import Hero from "../components/ui/About/Hero";

export default function About() {
  return (
    <div className="flex flex-col w-full">
      <PageHead name={"About Us"} />
      <Hero />
    </div>
  );
}

import React from "react";
import PageHead from "../components/shared/PageHead";
import Hero from "../components/ui/About/Hero";
import More from "../components/ui/About/More";

export default function About() {
  return (
    <div className="flex flex-col w-full">
      <PageHead name={"About Us"} />
      <Hero />
      <More />
    </div>
  );
}

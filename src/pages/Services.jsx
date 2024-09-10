import React from "react";
import PageHead from "../components/shared/PageHead";
import Hero from "../components/ui/Services/Hero";

export default function Services() {
  return (
    <div className="flex flex-col w-full">
      <PageHead name={"Services"} />
      <Hero />
    </div>
  );
}

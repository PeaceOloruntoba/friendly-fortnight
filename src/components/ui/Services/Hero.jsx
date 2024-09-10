import React from "react";
import ServiceCard from "../../containers/ServiceCard";
import { servicesData } from "../../../data/servicesData";

export default function Hero() {
  return (
    <div className="w-full bg-white flex flex-col items-center text-black/70 py-8">
      <div className="flex gap-4 items-center justify-center">
        <div className="bg-blue-600 px-8 md:px-16 h-[1px]"></div>
        <span className="font-semibold text-sm md:text-xl">What we offer</span>
        <div className="bg-blue-600 px-8 md:px-16 h-[1px]"></div>
      </div>
      <span className="text-xl md:text-3xl font-bold">Our Services</span>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 py-12 md:px-24 px-4">
        {servicesData?.map((service) => (
          <ServiceCard
            key={service?.id}
            title={service?.title}
            content={service?.content}
            image={service?.image}
            link={service?.link}
          />
        ))}
      </div>
    </div>
  );
}

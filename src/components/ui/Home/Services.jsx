import React from "react";
import { servicesData } from "../../../data/servicesData";
import ServiceCard from "../../containers/ServiceCard";
import { Link } from "react-router-dom";

export default function Services() {
  return (
    <div className="w-full bg-white flex flex-col items-center text-black/70 py-8">
      <div className="flex gap-4 items-center justify-center">
        <div className="bg-blue-600 px-8 md:px-16 h-[1px]"></div>
        <span className="font-semibold text-sm md:text-xl">What we offer</span>
        <div className="bg-blue-600 px-8 md:px-16 h-[1px]"></div>
      </div>
      <span className="text-xl md:text-3xl font-bold">Our Services</span>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 py-12 md:px-24 px-4">
        {servicesData?.slice(0, 3)?.map((service) => (
          <ServiceCard
            key={service?.id}
            title={service?.title}
            content={service?.content}
            image={service?.image}
            link={`/services/${service?.link}`}
          />
        ))}
      </div>
      <div className="w-full items-center flex justify-end px-8 md:px-24">
        <Link to="/services">
          <button className="bg-blue-600 text-white px-4 py-2 rounded font-semibold hover:bg-blue-800 transition-all duration-500">
            More Services
          </button>
        </Link>
      </div>
    </div>
  );
}

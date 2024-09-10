import React from "react";
import { useParams } from "react-router-dom";

export default function ServicesDetails() {
  const { serviceName } = useParams();
  return (
    <div className="flex flex-col w-full items-center">
      <span>{serviceName}</span>
    </div>
  );
}

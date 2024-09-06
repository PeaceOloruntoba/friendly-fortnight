import React from "react";
import { useParams } from "react-router-dom";

export default function ServicesDetails() {
  const { serviceName } = useParams();
  return <div>{serviceName}</div>;
}

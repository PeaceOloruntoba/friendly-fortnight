import React from "react";
import PageHead from "../components/shared/PageHead";
import Projects from "../components/ui/portfolio/Projects";

export default function Portfolio() {
  return (
    <div className="flex flex-col w-full">
      <PageHead name={"Portfolio"} />
      <Projects />
    </div>
  );
}

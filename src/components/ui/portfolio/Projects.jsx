import React from "react";
import PortfolioCard from "../../containers/PortfolioCard";
import { folioData } from "../../../data/portfolioData";

export default function Projects() {
  return (
    <div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 py-8 px-4 md:px-12">
        {folioData?.map((card, index) => (
          <PortfolioCard
            key={index}
            title={card.title}
            content={card.content}
            image={card.image}
            link={card.link}
          />
        ))}
      </div>
    </div>
  );
}

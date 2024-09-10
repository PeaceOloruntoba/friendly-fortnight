import React from "react";

export default function Projects() {
  return (
    <div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 py-8 px-40 pb-32">
        {folioData.map((card, index) => (
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

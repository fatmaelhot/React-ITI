import React from 'react';
import Card from '../cards/card';

const Portfolio = () => {
  const cards = [
    {
      title: "Web Development",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla id metus nec enim convallis tristique."
    },
    {
      title: "Database Management",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla id metus nec enim convallis tristique."
    },
    {
      title: "Programming Languages",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla id metus nec enim convallis tristique."
    },
    {
      title: "Web Design",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla id metus nec enim convallis tristique."
    },
    {
      title: "Graphic Design",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla id metus nec enim convallis tristique."
    },
    {
      title: "Project Management",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla id metus nec enim convallis tristique."
    }
  ];

  return (
    <div className="container mt-5 mb-5">
      <h2 className="text-center mb-4 fs-2 fw-bold">Portfolio</h2>
      <div className="row">
        {cards.map((card, index) => (
          <div className="col-md-4" key={index}>
            <Card
              title={card.title}
              description={card.description}
              index={index}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;


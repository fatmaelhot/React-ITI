import React from 'react';
import Card from '../cards/card';

const Portfolio = () => {
  return (
    <div className="container mt-5 mb-5">
      <h2 className="text-center mb-4 fs-2 fw-bold">Portfolio</h2>
      <div className="row">
        <Card
          title="Web Development"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla id metus nec enim convallis tristique."
        />
        <Card
          title="Database Management"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla id metus nec enim convallis tristique."
        />
        <Card
          title="Programming Languages"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla id metus nec enim convallis tristique."
        />
        <Card
          title="Web Design"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla id metus nec enim convallis tristique."
        />
        <Card
          title="Graphic Design"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla id metus nec enim convallis tristique."
        />
        <Card
          title="Project Management"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla id metus nec enim convallis tristique."
        />
      </div>
    </div>
  );
};

export default Portfolio;

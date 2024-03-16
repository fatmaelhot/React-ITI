import React from 'react';
import './card.css';

const Card = ({ title,description }) => {
  return (
    <div className="col-md-4  ">
      <div className="card mb-4 myPortfolio border-0">
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p>{description}</p>
          
        </div>
      </div>
    </div>
  );
};

export default Card;

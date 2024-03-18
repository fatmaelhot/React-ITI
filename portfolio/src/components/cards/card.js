import React from 'react';
import './card.css';

const Card = ({ title,description,index }) => {
  return (
    <div >
      <div className="card mb-4 myPortfolio border-0">
        <div className="card-body" style={{ backgroundColor: index % 2 === 0 ? 'darkgrey' : 'lightgrey' }}
            >
          <h5 className="card-title">{title}</h5>
          <p>{description}</p>
          
        </div>
      </div>
    </div>
  );
};

export default Card;

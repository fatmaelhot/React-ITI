import React from 'react';

const SkillBar = ({ name, level, description }) => {
  return (
    <div className="mb-4">
      <h3>{name}</h3>
      <div className="progress">
        <div className="progress-bar bg-primary" style={{ width: `${level}%` }}>
          {`${level}%`}
        </div>
      </div>
      <p>{description}</p>
    </div>
  );
};

export default SkillBar;

import React from 'react';
import SkillBar from '../skillbar/skillbar';

const Skills = () => {
  return (
    <div className="container-fluid bg-dark text-light py-5">
      <div className="container">
        <h2 className="text-center mb-4">Skills</h2>
        <div className="row">
          <div className="col-md-6">
            <SkillBar
              name="Programming Languages"
              level={80}
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla id metus nec enim convallis tristique."
            />
            <SkillBar
              name="Web Development"
              level={90}
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla id metus nec enim convallis tristique."
            />
          </div>
          <div className="col-md-6">
            <SkillBar
              name="Database Management"
              level={75}
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla id metus nec enim convallis tristique."
            />
            <SkillBar
              name="Other Skills"
              level={85}
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla id metus nec enim convallis tristique."
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;

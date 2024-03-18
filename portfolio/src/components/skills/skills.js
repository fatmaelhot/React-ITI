import React from 'react';
import SkillBar from '../skillbar/skillbar';

const Skills = () => {
  const skills = [
    {
      name: "Programming Languages",
      level: 80,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla id metus nec enim convallis tristique."
    },
    {
      name: "Web Development",
      level: 90,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla id metus nec enim convallis tristique."
    },
    {
      name:"Database Management",
      level:75,
      description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla id metus nec enim convallis tristique."
    },     
    { 
      name:"Other Skills",
      level:85,
      description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla id metus nec enim convallis tristique."
    }
  ];

  return (
    <div className="container-fluid bg-dark text-light py-5">
      <div className="container">
        <h2 className="text-center mb-4">Skills</h2>
        <div className="row">
          {skills.map((skill, index) => (
            <div className="col-md-6" key={index}>
              <SkillBar
                name={skill.name}
                level={skill.level}
                description={skill.description}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;

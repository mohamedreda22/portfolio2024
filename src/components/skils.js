import "../styles/skills.css"
import React from 'react';
import skillsdata from '../data/skillsdata';

export default function Skills() {
    return (
        <div className="skills">
            <h1>Skills</h1>
            <h3>Here are some of my skills</h3>
            <div className="skills-container">
                {skillsdata.map((skill) => (
                    <div className="skill" >
                        <h2>{skill.name}</h2>
                        <div className="skill-bar">
                        <div className="skill-progress" style={{width: `${skill.level}%`}}></div>
                                
                                    <p>{skill.level}%</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

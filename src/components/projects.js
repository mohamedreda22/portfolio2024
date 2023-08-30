import Card from "./card";
import "../styles/App.css";
import React from "react";
import projectsdata from "../data/projectsdata";

export default function Projects() {
    return (
        <div className="app">        
        <div style={{textAlign:"center"}} id="projects"><h1>Projects</h1>
        <h3>Here are some of my projects</h3></div>

        <div className="card-container">
            {projectsdata.map((project) => (
                <Card
                    key={project.id}
                    title={project.title}
                    description={project.description}
                    image={project.image}
                    link={project.link}
                    live={project.live}
                />
            ))}

       


        </div>
        </div>
    );}
import Card from "./card";
import "../styles/App.css";
import React from "react";

export default function Projects() {
    return (
        <div className="app">        
        <div style={{textAlign:"center"}} id="projects"><h1>Projects</h1>
        <h3>Here are some of my projects</h3></div>

        <div className="card-container">
            <Card
                title="Card Title 1"
                description="This is the description for card 1."
                image="https://via.placeholder.com/150"
            />
            <Card
                title="Card Title 2"
                description="This is the description for card 2."
                image="https://via.placeholder.com/150"
            />
        </div>
        </div>
    );}
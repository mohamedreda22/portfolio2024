import React from 'react';
import '../styles/card.css';

const Card = (props) => {
    return (
        <div className="card">
            <img src={props.image} alt={props.title} />
            <h2>{props.title}</h2>
            <p>{props.description}</p>
        </div>
    );
};

export default Card;

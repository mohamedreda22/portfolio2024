import React from 'react';
import '../styles/card.css';

export const Card = (props) => {
    return (
        <div className="card">
            <img src={props.image} alt={props.title} />
            <h2>{props.title}</h2>
            <p>{props.description}</p>
            <a target='blank' href={props.link}>{props.link}</a>
            <br/>
            <a target="blank"href={props.live}>live preview</a>

        </div>
    );
};

export default Card;



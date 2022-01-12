import React from "react";
import './card.css';

const Card = (props) => {
    return (
        <a className="card" target="_blank" href={props.link} rel="noreferrer">
            <div className="card_title">{props.title}</div>
            <img className="card_img" src={props.img} alt="Project img"></img>
            <div className="card_descr">{props.descr}</div>
        </a>
    );
}

export default Card;
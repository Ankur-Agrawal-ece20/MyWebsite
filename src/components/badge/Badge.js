import React from "react";
import './badge.css';

const Badge = (props) => {
    return (
        <div className="badge">
            <div className="badge_title">{props.title}</div>
            <div className="flexbox">
                {props.skills.map(function(object, i){
                    return <div className="badge_skills">{object}</div>;
                })}
            </div>    
        </div>
    );
}

export default Badge;
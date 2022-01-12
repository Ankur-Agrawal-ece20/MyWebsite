import React from "react";
import './styles/project.css';
import Card from "../components/cards/card";
const DATA=[
    {
        "title":"My Website",
        "img":"website.jpg",
        "descr":"This website created using react.js. I hope you like it :)",
        "link":"/",
    },
    {
        "title":"WeatherApp",
        "img":"weatherapp.jpg",
        "descr":"A backend using DRF and google app script which alerts user about rainfall every night!",
        "link":"https://github.com/Ankur-Agrawal-ece20/Weatherbackend",
    },
    {
        "title":"Tic-Tac-Toe",
        "img":"tictactoe.png",
        "descr":"A game with never losing computer that works on minimax algorithm!",
        "link":"https://ankur-agrawal-ece20.github.io/Tic-Tac-Toe/index.html",
    },
    {
        "title":"TODO APP",
        "img":"todo.png",
        "descr":"A simple TODO APP using react and JSON APIs!",
        "link":"https://react-project-jsa5975mw-ankur-agrawal-ece20.vercel.app/",
    },
    {
        "title":"Simple Calculator",
        "img":"calculator.png",
        "descr":"A simple calculator using pure javascript!",
        "link":"https://ankur-agrawal-ece20.github.io/Task_Calculator/index.html",
    },
    {
        "title":"Stone-Paper-Scissors",
        "img":"stonepaperscissor.jpg",
        "descr":"A game using pure html, css and a basic of js!",
        "link":"http://htmlpreview.github.io/?https://github.com/Ankur-Agrawal-ece20/Game/blob/main/game.html",
    }
]
const Project = () => {
    return (
        <>
            <div id="projects_main">
                <div className="flexbox">
                    <h2 className="projects_title hover-underline-animation">My Projects</h2>
                </div>
                <div className="flexbox">
                    {DATA.map(function(object, i){
                        return <Card title={object.title} img={object.img} descr={object.descr} link={object.link} key={i} />;
                    })}
                </div>
            </div>
        </>
    );
}

export default Project;
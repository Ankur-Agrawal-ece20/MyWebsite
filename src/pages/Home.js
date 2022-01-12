import React from "react";
import './styles/style.css';
import Typer from "../components/typer/Typer";

const Home = () => {
    return (
        <>
            <div id="home">
                <img id="myimg" src="Mypic1.jpeg" alt="My pic"/>
                <div id="name">Ankur Agrawal</div>
                <div id="badge">Learner & Developer</div>
                <div id="typer">
                    <Typer/>
                </div>
            </div>
        </>
    );
}

export default Home;
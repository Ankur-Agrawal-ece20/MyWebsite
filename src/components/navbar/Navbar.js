import React from "react";
import './nav.css';
import { Link } from "react-router-dom";

const Navbar = () => {
    const showNav = (e) => {
        var x = document.getElementById("myTopnav");
        var y = document.getElementById("icon");
        var z = document.getElementsByClassName("tabs");
        if(e.target.className!=="icon"){
            for (var i = 0; i < z.length; i++) {
                z[i].className="tabs";
              }
            e.target.className+=" active";
        }
        if (x.className === "topnav") {
            x.className += " responsive";
            y.innerHTML="&#10060;"
        } else {
            x.className = "topnav";
            y.innerHTML="&#9776;"
        }
    }
    return (
        // <Router>
        <div className="topnav" id="myTopnav">
            <a href={() => false} className="name">Ankur Agrawal</a>
            <Link onClick={showNav} className="tabs active" to="/">Home</Link>
            <Link onClick={showNav} className="tabs" to="/about">About</Link>
            <Link onClick={showNav} className="tabs" to="/projects">Projects</Link>
            <Link onClick={showNav} className="tabs" to="/contacts">Contacts</Link>
            <a href="https://drive.google.com/file/d/18IlUuAkN3TOqx6xDd6JCFPpaVhW0SaDu/view" target="_blank" className="tabs"><b>&#9660; Resume</b></a>
            <a href={() => false} id="icon" className="icon" onClick={showNav}>&#9776;</a>
        </div>
        // </Router>
    );
}

export default Navbar;
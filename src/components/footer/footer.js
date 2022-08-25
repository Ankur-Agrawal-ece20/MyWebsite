import React from "react";
import './footer.css';

const Footer = (props) => {
    const Expand=()=>{
        var x=document.getElementById("toexpand");
        var y=document.getElementById("showbtn");
        var z=document.getElementById("bottomgrid");
        if(x.style.display==="none"){
            x.style.display="unset";
            y.innerHTML="&or;"
            y.className="clicked";
            z.style.display="none";
        }
        else{
            x.style.display="none";
            y.innerHTML="&and;";
            y.className="unclicked";
            z.style.display="unset";
        }
    }
    return (
        <div className="footer flexbox" style={{position: props.mode}}>
            <button id="showbtn" className="unclicked" onClick={Expand}>&and;</button>
            <div id="toexpand">
                <div className="footer_grid">
                    <a href="https://mail.google.com/mail/u/0/?fs=1&to=ankuragrawal9455@gmail.com&tf=cm" target="_blank" rel="noreferrer" className="footer_link">
                        <img src="google1.png" alt="Gmail"/>
                    </a>
                    <a href="https://github.com/Ankur-Agrawal-ece20" target="_blank" rel="noreferrer" className="footer_link">
                        <img src="github1.png" alt="Git"/>
                    </a>
                    <a href="https://www.linkedin.com/in/ankur-agrawal-a7520a207" className="footer_link" target="_blank" rel="noreferrer">
                        <img src="linkedin1.png" alt="LinkedIn"/>
                    </a>
                </div>
                <p className="invite">
                    Want to use this template? 
                    <a href="https://github.com/Ankur-Agrawal-ece20/MyWebsite" target="_blank" rel="noreferrer" > 
                        Click here!
                    </a>
                    <p>Thanks for visiting!</p>
                </p>
            </div>
            <p className="copyright">
                &copy; All rights reserved by @Ankur-Agrawal-ece20
            </p>

            <div id="bottomgrid" className="footer_grid">
                <a href="https://mail.google.com/mail/u/0/?fs=1&to=ankuragrawal9455@gmail.com&tf=cm" target="_blank" rel="noreferrer" className="footer_link">
                    <img src="google1.png" alt="Gmail"/>
                </a>
                <a href="https://github.com/Ankur-Agrawal-ece20" target="_blank" rel="noreferrer" className="footer_link">
                    <img src="github1.png" alt="Git"/>
                </a>
                <a href="https://www.linkedin.com/in/ankur-agrawal-a7520a207" className="footer_link" target="_blank" rel="noreferrer">
                    <img src="linkedin1.png" alt="LinkedIn"/>
                </a>
            </div>
        </div>
    );
}

export default Footer;
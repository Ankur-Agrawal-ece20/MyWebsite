import React from "react";
import './styles/about.css';
import Badge from "../components/badge/Badge";

const SKILLS=[
    {
        "title": "Frontend Development",
        "skills": ["HTML","CSS","JS"]
    },
    {
        "title": "Frontend Frameworks",
        "skills": ["Reactjs"]
    },
    {
        "title": "Backend Development",
        "skills": ["Django","DRF"]
    },
    {
        "title": "Programming",
        "skills": ["Python","C","C++","Typescript"]
    },
    {
        "title": "Robotics",
        "skills": ["Robot Learning","ROS"]
    },
    {
        "title": "Deployment",
        "skills": ["Netlify","Heroku","Vercel","gh-pages"]
    },
]

const About = () => {
    return (
        <>
            <div className="about_main">
                <div className="flexbox">
                     <div className="about_title hover-underline-animation">About Me</div>
                </div>
                <div className="flexbox">
                    <div className="about_descr gridbox">
                    <img className="about_img" src="Mypic1.jpg" alt="My pic"/>
                    <p>
                        Myself Ankur Agrawal, a Electronics undergraduate at IIT BHU. 
                        <br/>I am tech guy who loves developing and coding. 
                        <br/>I enjoy building
                        <strong> Rest-APIs, Full Stack Websites and Static Webapps </strong>.
                        <br/>
                        I love contributing to 
                        <strong> Open Source &#10084; projects </strong>
                        where I can build something that can help people.
                        <br/>
                        Being an electronics stud I also love IoT and robotics. 
                        <br/>I am a guy who can find bugs,
                        develop ideas, can create hardware as well as code them. 
                        <br/>
                        My other strengths include that I am quick learner, punctual and hard worker.
                        <br/>
                        <br/>
                        Feel free to contact me in any of the handels or you can fill the contact form also.
                        <br/>
                        Thanks for visiting my website.
                    </p>
                    </div>  
                </div>
                <div className="flexbox">
                     <div className="about_title hover-underline-animation">My Skills</div>
                </div>
                <div className="about_skills flexbox">
                    {SKILLS.map(function(object, i){
                        return <Badge title={object.title} skills={object.skills} key={i} />;
                    })}
                </div>
            </div>
        </>
    );
}

export default About;
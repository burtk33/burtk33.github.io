import React from "react";
import ProfilePic from "../images/ProfilePic.jpg";

function About() {
    return (
        <div className="container border" id="about-body">

            <div className="row">
                <div className="col-12">
                    <div className="card" id="about-header">
                        <h1 className="card-body">
                            About Me
                    </h1>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-12">
                    <div className="float-start">
                        <div className="card text-white bg-dark text-center">
                            <img className="card-img-top" src={ProfilePic} alt="Profile"
                                style={{width:"250px", height: "300px"}}/>
                                <div className="card-body">
                                    <h5 className="card-text">Email: <a href="mailto:burtk33@gmail.com">burtk33@gmail.com</a></h5>
                                    <h5 className="card-text">Phone: 609-682-0387</h5>
                                    <a
                                        href="https://drive.google.com/file/d/17cVYv5kNJkjhPXrWWZ4Z7_r40vgwuBvl/view?usp=sharing"><button
                                            className="btn btn-primary">Resume</button></a>
                                </div>
                    </div>
                        </div>
                        <p>
                            Hello, my name is Kyle Burt. I am a certified full-stack web developer through
                            the University of Penn LPS Coding Bootcamp. I currently work as a service manager at a fireplace
                            installation and repair store. I have a few years experience with the Java programming language as
                            well. I look forward to working as a Junior Web Developer with aspirations to become a Senior
                            Developer.
                </p>
                        <p>
                            I graduated high school from Eastern Regional High School in Voorhees, NJ. I currently live in the
                            Fairmount section of Philadelphia in a house with a few friends.
                </p>
                        <p>
                            In my spare time i enjoy playing video games and watching science fiction movies. I especially love
                            the practical special effects in older movies. I also enjoy spending time outside and going camping
                            whenever I can. I have all my camping gear constantly at the ready for whenever i want to spend a
                            few days in the wilderness.
                </p>
                        <p>
                            <a href="https://github.com/burtk33" id="github-icon"><i className="fab fa-github-square fa-3x"></i></a>
                            <a href="https://www.linkedin.com/in/kyle-burt-068668200/" id="linked-icon"><i className="fab fa-linkedin fa-3x"></i></a>
                        </p>
                    </div>
                </div>
            </div>
    );
}

export default About;
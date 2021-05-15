import React from "react";
import Project from "./Project";
import CineFile from "../images/cineFileScreen.png";
import WorkVibe from "../images/workVibe.png";
import passwordGen from "../images/passwordGenScreen.png";
import fitnessTracker from "../images/fitnessTracker.png";
import noteTaker from "../images/noteTaker.png";
import Budget from "../images/Budget.PNG";

function Portfolio() {
    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <Project
                    title="CineFile"
                    repo="https://github.com/burtk33/CineFile"
                    link="https://burtk33.github.io/CineFile/"
                    image={CineFile}
                    />
                </div>
                <div className="col">
                    <Project
                    title="Work Vibe"
                    repo="https://github.com/burtk33/work-vibe"
                    link="https://work-vibe.herokuapp.com/"
                    image={WorkVibe}
                    />
                </div>
                <div className="col">
                    <Project
                    title="Password Generator"
                    repo="https://github.com/burtk33/passwordGenerator"
                    link="https://burtk33.github.io/passwordGenerator/"
                    image={passwordGen}
                    />
                </div>
                <div className="col">
                    <Project
                    title="Progressive Budget"
                    repo="https://github.com/burtk33/progressive-budget"
                    link="https://prog-budget-tracker.herokuapp.com/"
                    image={Budget}
                    />
                </div>
                <div className="col">
                    <Project
                    title="Fitness Tracker"
                    repo="https://github.com/burtk33/fitness-tracker"
                    link="https://fitness-tracker-33.herokuapp.com/"
                    image={fitnessTracker}
                    />
                </div>
                <div className="col">
                    <Project
                    title="Note Taker"
                    repo="https://github.com/burtk33/noteTaker"
                    link="https://note-taker-burtk33.herokuapp.com/"
                    image={noteTaker}
                    />
                </div>
            </div>
            <div id="bottom">

            </div>
        </div>
    );
}

export default Portfolio;
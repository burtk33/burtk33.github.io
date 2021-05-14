import React from "react";
import Project from "./Project";
import CineFile from "../images/cineFileScreen.png";
import WorkVibe from "../images/workVibe.PNG";
import WorkDay from "../images/workDayPlannerScreen.PNG";
import passwordGen from "../images/passwordGenScreen.PNG";

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
                    title="Work Day Planner"
                    repo="https://github.com/burtk33/CineFile"
                    link="https://burtk33.github.io/CineFile/"
                    image={WorkDay}
                    />
                </div>
            </div>
        </div>
    );
}

export default Portfolio;
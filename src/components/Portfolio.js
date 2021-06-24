import React from "react";
import Project from "./Project";
import CineFile from "../images/Cinefile.png";
import WorkVibe from "../images/workVibe.png";
import matchboard from "../images/matchboard.png";
import fitnessTracker from "../images/fitnessTracker.png";
import books from "../images/books.png";
import Budget from "../images/progressive.png";

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
                    title="Match Board"
                    repo="https://github.com/Chinedu613/BoardMatch"
                    link="https://boardmatch.herokuapp.com/"
                    image={matchboard}
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
                    title="React Google Books"
                    repo="https://github.com/burtk33/react-google-books"
                    link="http://google-books-r.herokuapp.com/"
                    image={books}
                    />
                </div>
            </div>
            <div id="bottom">

            </div>
        </div>
    );
}

export default Portfolio;
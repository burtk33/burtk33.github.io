import React from "react";

function Project(props) {
    return (
        <div className="card text-white text-center bg-dark mb-3" style={{width: "20rem"}} id="project">
            <img src={props.image} className="card-img-top" alt="Screenshot"/>
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <a href={props.repo} className="btn btn-primary">Github Repository</a>
                    <a href={props.link} className="btn btn-primary">Deployed Page</a>
                </div>
        </div>
    );
}

export default Project;
import React from "react";

function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand">Kyle Burt</a> <i className="fas fa-save fa-2x" style="color: white"></i>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="index.html">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="contact.html">Contact</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="portfolio.html">Portfolio</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        </div>
    );
}

export default Navbar;
import React from "react";

function Contact() {
    return (
        <div>
            <div className="container" id="contact-body">
                <div className="row">
                    <div className="col-12">
                        <div className="card bg-dark">
                            <h1 className="card-body">
                                Contact Me
                            </h1>
                        </div>
                    </div>
                </div>

                <div className="mb-3">
                    <label for="exampleFormControlInput1" className="form-label">Name</label>
                    <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Name" />
                </div>

                <div className="mb-3">
                    <label for="exampleFormControlInput1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                </div>

                <div className="mb-3">
                    <label for="exampleFormControlTextarea1" className="form-label">Message</label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
                <button type="button" className="btn btn-primary">Submit</button>
            </div>
        </div>    
    );
}

export default Contact;
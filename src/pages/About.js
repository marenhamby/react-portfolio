import React from "react";
import Container from "../components/Container";


function About() {
    return (
        <div>
            <Container>
                <div className="card text-white bg-dark mb-3">
                    {/* class name above had style="max-width: auto; */}
                    <h1 className="card-header">About Me</h1>
                    <div className="card-body">
                        {/* <img src="Assets/images/IMG-1903_2.png" alt="photo of Maren in Iceland" className="float-left mr-3" style="width:40%" > */}
                        <p className="card-text">Hi! I'm Maren. I was born and raised in Kannapolis, NC and I currently live in Durham, NC. I went to UNC Chapel Hill and have since been working in the clinical trials industry. I have a passion for organization and love using it to increase efficiency in the workplace.  I'm now looking to change directions and work in a more in the tech industry where my attention to detail and love for problem solving can really be utilized.</p>Check out my resume:
                        {/* <a href="./Assets/Maren_Hamby_Resume_2.docx" style="color: #A8BCD4">Click Here!</a> */}
                    </div>
                </div>
            </Container>
        </div>
    );
}

export default About;

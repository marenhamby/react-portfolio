import React from "react";
import Card from "../components/Card";
import Container from "../components/Container";
import "./about.css";



function About() {
    return (
        <div>
            <Container>
                <Card>
                    <img src="image/IMG-1903_2.png" alt="Maren in Iceland" className="float-left mr-3"></img>
                    <p className="card-text">Hi! I'm Maren. I was born and raised in Kannapolis, NC and I currently live in Durham, NC. I went to UNC Chapel Hill and have since been working in the clinical trials industry. I have a passion for organization and love using it to increase efficiency in the workplace.  I'm now looking to change directions and work in a more in the tech industry where my attention to detail and love for problem solving can really be utilized.</p>Check out my resume:  
                    <a href="Maren_Hamby_Resume_2.docx" className="link"> Click Here!</a>
                </Card>
            </Container>
        </div>
    );
}

export default About;

import React from "react";
import Card from "../components/Card";
import Container from "../components/Container";
import "./contact.css";


function Contact() {
    return (
        <div>
            <Container>
                <Card>
                    <div className="form-group">
                        <h3>Email:</h3>
                        <h4>maren.hamby@gmail.com</h4>
                    </div>
                    <div className="form-group">
                        <h3>LinkedIn:</h3>
                        <h4>
                            <a href="https://linkedin.com/in/maren-hamby-90a924ba" target="_blank" rel="noreferrer noopener" className="link">Click Me!</a>
                        </h4>
                    </div>
                    <div className="form-group">
                        <h3>GitHub:</h3>
                        <h4>
                            <a href="https://github.com/marenhamby" target="_blank" rel="noreferrer noopener" className="link">Click Me!</a>
                        </h4>
                    </div>
                </Card>
            </Container>
        </div>

    );
}

export default Contact;

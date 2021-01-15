import React, { Component } from "react";
import Card from "../components/Card";
import Container from "../components/Container";
import Row from "../components/Row";
import Project from "../components/Project";
import "./portfolio.css";




class Portfolio extends Component {

    state = [{
        title: "The Productivity Planner",
        image: "image/planner-dashboard.png",
        alt: "planner webpage",
        deployed: "https://obscure-lake-47661.herokuapp.com/",
        code: "https://github.com/averyjbrown2/Project-2",
    },
    {
        title: "The Work Day Scheduler",
        image: "image/schedule_page_screenshot.PNG",
        alt: "scheduler webpage",
        deployed: "https://marenhamby.github.io/work-scheduler/",
        code: "https://github.com/marenhamby/work-scheduler",
    },
    {
        title: "The UltiMutt Dog Finder",
        image: "image/homePage.png",
        alt: "dog finder webpage",
        deployed: "https://marenhamby.github.io/UltiMutt_dog_finder/",
        code: "https://github.com/marenhamby/UltiMutt_dog_finder",
    },
    ];

    render() {
        return (
            <div>
                <Container>
                    <Card>
                        <Row>
                            <Project
                                title={this.state[0].title}
                                image={this.state[0].image}
                                alt={this.state[0].alt}
                                deployed={this.state[0].deployed}
                                code={this.state[0].code}
                            ></Project>
                            <Project
                                title={this.state[1].title}
                                image={this.state[1].image}
                                alt={this.state[1].alt}
                                deployed={this.state[1].deployed}
                                code={this.state[1].code}
                            ></Project>
                            <Project
                                title={this.state[2].title}
                                image={this.state[2].image}
                                alt={this.state[2].alt}
                                deployed={this.state[2].deployed}
                                code={this.state[2].code}
                            ></Project>
                        </Row>
                    </Card>
                </Container>
            </div >
        );
    }
}

export default Portfolio;

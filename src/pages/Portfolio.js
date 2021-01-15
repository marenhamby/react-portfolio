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
    {
        title: "Burger Eater",
        image: "image/burger-eater.png",
        alt: "burger eater page",
        deployed: "https://guarded-inlet-46841.herokuapp.com/",
        code: "https://github.com/marenhamby/burger-eater",
    },
    {
        title: "Note Taker",
        image: "image/Note-Taker_homepage.PNG",
        alt: "note taker page",
        deployed: "https://desolate-brushlands-41857.herokuapp.com/",
        code: "https://github.com/marenhamby/note-taker",
    },
    {
        title: "Weather Dashboard",
        image: "image/weather-dashboard.PNG",
        alt: "weather dashboard page",
        deployed: "https://marenhamby.github.io/weather-dashboard/",
        code: "https://github.com/marenhamby/weather-dashboard",
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
                            <Project
                                title={this.state[3].title}
                                image={this.state[3].image}
                                alt={this.state[3].alt}
                                deployed={this.state[3].deployed}
                                code={this.state[3].code}
                            ></Project>
                            <Project
                                title={this.state[4].title}
                                image={this.state[4].image}
                                alt={this.state[4].alt}
                                deployed={this.state[4].deployed}
                                code={this.state[4].code}
                            ></Project>
                            <Project
                                title={this.state[5].title}
                                image={this.state[5].image}
                                alt={this.state[5].alt}
                                deployed={this.state[5].deployed}
                                code={this.state[5].code}
                            ></Project>
                        </Row>
                    </Card>
                </Container>
            </div >
        );
    }
}

export default Portfolio;

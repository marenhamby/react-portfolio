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

    //   loadProjects = state => {
    //       for (i=0, i< state.length, i++) {
    //         return {
    //             title= state[i].title,
    //             image= state[i].image,
    //             alt= state[i].alt,
    //             deployed= state[i].deployed,
    //             code= state[i].code
    //         }
    //       }
    //       });
    //   }


    render() {
        return (
            <div>
                <Container>
                    <Card>
                        <Row>
                            <Project
                                title={this.state.title}
                                image={this.state.image}
                                alt={this.state.alt}
                                deployed={this.state.deployed}
                                code={this.state.code}
                            ></Project>
                        </Row>
                    </Card>
                </Container>
            </div >

        );


    }
}

export default Portfolio;

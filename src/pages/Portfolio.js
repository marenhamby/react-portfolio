import React from "react";
import Card from "../components/Card";
import Container from "../components/Container";
import "./portfolio.css";

function Portfolio() {
    return (
        <div>
            <Container>
                <Card>
                    <div className="row">
                        <div className="col">
                            <h4>The Productivity Planner</h4>
                            <img src="image/planner-dashboard.png" alt="planner webpage" className="portImage"></img>
                            <h5>
                                {/* <a href="https://obscure-lake-47661.herokuapp.com/" target="_blank" style="color: #A8BCD4">Link to the deployed page here!</a> */}
                            </h5>
                            <h5>
                                {/* <a href="https://github.com/averyjbrown2/Project-2" target="_blank" style="color: #A8BCD4">Link to the code here!</a> */}
                            </h5>

                        </div>
                        <div className="col">
                            <h4>The Work Day Scheduler</h4>
                            <img src="image/schedule_page_screenshot.PNG" alt="Scheduler webpage" className="portImage"></img>
                            <h5>
                                {/* <a href="https://marenhamby.github.io/work-scheduler/" target="_blank" style="color: #A8BCD4">Link to the deployed page here!</a> */}
                            </h5>
                            <h5>
                                {/* <a href="https://github.com/marenhamby/work-scheduler" target="_blank" style="color: #A8BCD4">Link to the code here!</a> */}
                            </h5>

                        </div>
                        <div className="col">
                            <h4>The UltiMutt Dog Finder</h4>
                            <img src="image/homePage.png" alt="dog finder webpage" className="portImage"></img>
                            <h5>
                                {/* <a href="https://marenhamby.github.io/UltiMutt_dog_finder/" target="_blank" style="color: #A8BCD4">Link to the deployed page here!</a> */}
                            </h5>
                            <h5>
                                {/* <a href="https://github.com/marenhamby/UltiMutt_dog_finder" target="_blank" style="color: #A8BCD4">Link to the code here!</a> */}
                            </h5>

                        </div>
                    </div>
                </Card>
            </Container>
        </div>

    );
}

export default Portfolio;

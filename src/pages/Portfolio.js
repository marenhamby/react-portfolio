import React from "react";

function About() {
    return (
        <div className="container">
        <div className="card text-white bg-dark mb-3">
             {/* style="max-width: auto" */}
            <h1 className="card-header">Portfolio</h1>
            <div className="card-body">
                <div className="row">
                    <div className="col">
                        <h4>The Productivity Planner</h4>
                        <img src="img/plannerDashboard.png" alt="planner webpage">
                             {/* style="width: 100%" style="margin: 16px" */}
                        <h5>
                            {/* <a href="https://obscure-lake-47661.herokuapp.com/" target="_blank" style="color: #A8BCD4">Link to the deployed page here!</a> */}
                        </h5>
                        <h5>
                            {/* <a href="https://github.com/averyjbrown2/Project-2" target="_blank" style="color: #A8BCD4">Link to the code here!</a> */}
                        </h5>
                        </img>
                    </div>
                    <div className="col">
                        <h4>The Work Day Scheduler</h4>
                        <img src="img/schedule_page_screenshot.PNG" alt="Scheduler webpage"> 
                        {/* style="width: 100%" style="margin: 16px" */}
                        <h5>
                            {/* <a href="https://marenhamby.github.io/work-scheduler/" target="_blank" style="color: #A8BCD4">Link to the deployed page here!</a> */}
                        </h5>
                        <h5>
                            {/* <a href="https://github.com/marenhamby/work-scheduler" target="_blank" style="color: #A8BCD4">Link to the code here!</a> */}
                        </h5>
                        </img>
                    </div>
                    <div className="col">
                        <h4>The UltiMutt Dog Finder</h4>
                        <img src="img/homePage.png" alt="dog finder webpage">
                             {/* style="width: 100%" style="margin: 16px" */}
                        <h5>
                            {/* <a href="https://marenhamby.github.io/UltiMutt_dog_finder/" target="_blank" style="color: #A8BCD4">Link to the deployed page here!</a> */}
                        </h5>
                        <h5>
                            {/* <a href="https://github.com/marenhamby/UltiMutt_dog_finder" target="_blank" style="color: #A8BCD4">Link to the code here!</a> */}
                        </h5>
                        </img>
                    </div>
                </div>
            </div>
                
        </div>
        </div>
    );
}

export default About;

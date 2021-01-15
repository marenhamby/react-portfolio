import React from "react";


function Project(props) {
    return (
        <div className="col">
            <h4>The Productivity Planner</h4>
            <img src="image/planner-dashboard.png" alt="planner webpage" className="portImage"></img>
            <h5>
                <a href="https://obscure-lake-47661.herokuapp.com/" target="_blank" rel="noreferrer noopener" className="link">Link to the deployed page here!</a>
            </h5>
            <h5>
                <a href="https://github.com/averyjbrown2/Project-2" target="_blank" rel="noreferrer noopener" className="link">Link to the code here!</a>
            </h5>

        </div>
    );
}

export default Project;
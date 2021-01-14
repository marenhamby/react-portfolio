import React from "react";


function About() {
    return (
        <div className="container">
        <div className="card text-white bg-dark mb-3">
        {/* // style="max-width: auto;" */}
           <h1 className="card-header">Contact</h1>
           <div className="card-body">
               <div className="form-group">
                   <h3>Email:</h3>
                   <h4> 
                       {/* style="color: #A8BCD4" */}
                       maren.hamby@gmail.com</h4>
               </div>
               <div className="form-group">
                    <h3>LinkedIn:</h3>
                    <h4>
                         {/* style="color: #A8BCD4"> */}
                        {/* <a href="https://linkedin.com/in/maren-hamby-90a924ba" target="_blank" style="color: #A8BCD4">Click Me!</a> */}
                    </h4> 
               </div>
               <div className="form-group">
                    <h3>GitHub:</h3>
                    <h4>
                         {/* style="color: #A8BCD4" */}
                        {/* <a href="https://github.com/marenhamby" target="_blank" style="color: #A8BCD4">Click Me!</a> */}
                    </h4>
                </div>
            </div>
        </div>
        </div>
    );
}

export default About;

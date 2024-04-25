// Dashboard.jsx

import React from "react";
import './Dashboard.css';

function Dashboard() {
    return (
        <div className="dashboard-container">
            <div className="row">
                <div className="course-box">
                    <h2 className="course-heading">Department Name 1</h2>
                    <p>Course Name 1</p>
                    <p>Teacher Name 1</p>
                    <button className="button">Enter</button>
                </div>
                <div className="course-box">
                    <h2 className="course-heading">Department Name 2</h2>
                    <p>Course Name 2</p>
                    <p>Teacher Name 2</p>
                    <button className="button">Enter</button>
                </div>
            </div>
            <div className="row">
                <div className="course-box">
                    <h2 className="course-heading">Department Name 3</h2>
                    <p>Course Name 3</p>
                    <p>Teacher Name 3</p>
                    <button className="button">Enter</button>
                </div>
                <div className="course-box">
                    <h2 className="course-heading">Department Name 4</h2>
                    <p>Course Name 4</p>
                    <p>Teacher Name 4</p>
                    <button className="button">Enter</button>
                </div>
            </div>
            <div className="row">
                <div className="course-box">
                    <h2 className="course-heading">Department Name 5</h2>
                    <p>Course Name 3</p>
                    <p>Teacher Name 3</p>
                    <button className="button">Enter</button>
                </div>
                <div className="course-box">
                    <h2 className="course-heading">Department Name 6</h2>
                    <p>Course Name 4</p>
                    <p>Teacher Name 4</p>
                    <button className="button">Enter</button>
                </div>
            </div>
        </div>
    )
}

export default Dashboard;

// Dashboard.jsx

import React from "react";
import './Dashboard.css';

function Dashboard() {
    return (
        <div className="dashboard-container">
            <div className="course-box">
                <h2 className="course-heading">Department Name</h2>
                <table className="course-details">
                    <tbody>
                        <tr>
                            <td>Course:</td>
                            <td>Course Name</td>
                        </tr>
                    </tbody>
                </table>
                <div className="button-container">
                    <button className="button">Enter</button>
                </div>
            </div>
            <div className="course-box">
                <h2 className="course-heading">Department Name</h2>
                <table className="course-details">
                    <tbody>
                        <tr>
                            <td>Course:</td>
                            <td>Course Name</td>
                        </tr>
                    </tbody>
                </table>
                <div className="button-container">
                    <button className="button">Enter</button>
                </div>
            </div>
        </div>
    )
}

export default Dashboard;

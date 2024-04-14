import React from 'react';
import './Department.css';
const data = [
    { name: 'CSE', id: 22, ns: '50', tf: 2, tc: 4 },
    { name: 'ECE', id: 60, ns: '15', tf: 4, tc: 3 },
    { name: "EEE", id: 19, ns: "5", tf: 5, tc: 8 },
    { name: "MCA", id: 25, ns: "12", tf: 3, tc: 7 },
]
function Department() {
    return (
        <div className="App">
            <table>
                <thead>All departments</thead>
                <tr>
                    <th>Name</th>
                    <th>Department id</th>
                    <th>No of Students</th>
                    <th>Total Faculty</th>
                    <th>Total Courses</th>
                </tr>
                {data.map((val, key) => {
                    return (
                        <tr key={key}>
                            <td>{val.name}</td>
                            <td>{val.id}</td>
                            <td>{val.ns}</td>
                            <td>{val.tc}</td>
                            <td>{val.tf}</td>
                        </tr>
                    )
                })}
            </table>
        </div>
    );
}

export default Department;

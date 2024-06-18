import axios from 'axios';
import React, { useState } from 'react';
import { useParams } from 'react-router';
import Swal from 'sweetalert2';
import Teachersidebar from './Teachersidebar';

function Addassignments() {
    const [assignmentData, setAssignmentData] = useState({
        title: '',
        detail: ''
    });

    const handleChange = (event) => {
        setAssignmentData({
            ...assignmentData,
            [event.target.name]: event.target.value
        });
    };

    const { teacherid, studentid } = useParams();

    const formsubmit = () => {
        const formData = new FormData();
        formData.append('student', studentid);
        formData.append('teacher', teacherid);
        formData.append('title', assignmentData.title);
        formData.append('detail', assignmentData.detail);

        const baseurl = `http://127.0.0.1:8000/api/studentassignments/${teacherid}/${studentid}`;

        axios.post(baseurl, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
            .then((res) => {
                if (res.status === 200 || res.status === 201) {
                    Swal.fire({
                        title: "Assignment has been added",
                        icon: 'success',
                        toast: true,
                        timer: 3000,
                        position: 'bottom-right',
                        timerProgressBar: true,
                        showConfirmButton: false
                    });
                    window.location.reload();
                }
            })
            .catch((error) => {
                console.error(error);
            });
    };

    return (
        <div>
            <div className='container mt-4'>
                <div className='row'>
                    <aside className='col-md-3'>
                        <Teachersidebar />
                    </aside>
                    <section className='col-md-9'>
                        <div className='card'>
                            <h5 className='card-header'>Add Assignment</h5>
                            <div className="card-body">
                                <div className="mb-3 row ms-2 mt-2 me-2">
                                    <label htmlFor="title" className="col-sm-2 col-form-label">Title</label>
                                    <div className="col-sm-10">
                                        <input
                                            type="text"
                                            name="title"
                                            value={assignmentData.title}
                                            onChange={handleChange}
                                            className="form-control mt-2"
                                            id="title"
                                        />
                                    </div>
                                </div>
                                <div className="mb-3 row ms-2 mt-2 me-2">
                                    <label htmlFor="detail" className="col-sm-2 col-form-label">Description</label>
                                    <div className="col-sm-10">
                                        <input
                                            type="text"
                                            name="detail"
                                            value={assignmentData.detail}
                                            onChange={handleChange}
                                            className="form-control mt-2"
                                            id="detail"
                                        />
                                    </div>
                                </div>
                                <button
                                    className='btn btn-primary btn-sm ms-3 mb-3'
                                    onClick={formsubmit}
                                    style={{ 'width': '100px' }}
                                >
                                    Submit
                                </button>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
}

export default Addassignments;


import React from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

function Coursedetail() {
    let { course_id } = useParams();
    return (
        <div>
            <div className='container mt-3'>
                <div className='row'>
                    <div className='col-4'>
                        <img src="/image1.jpg" class="img-thumbnail" alt="..." />
                    </div>
                    <div className='col-8'>
                        <h3>Course detail</h3>
                        <p>something....</p>
                        <p className='fw-bold'>Course by:<a href='#'>Teacher1</a></p>
                        <p className='fw-bold'>Duration:3 hours 20 minutes</p>
                        <p className='fw-bold'>Total enrolled:50 students</p>
                        <p className='fw-bold'>Rating :4/5</p>



                    </div>

                </div>

            </div>


            <div className='course-videos'>



                <div className="card mt-5">
                    <div className="card-header">
                        Course lecture videos
                    </div>
                    <ul class="list-group list-group-flush">
                        <button className='btn btn-sm  '><li className="list-group-item d-flex justify-content-between align-items-center " >Introduction
                            <i class=" bi-youtube d-flex justify-content-end "     ></i> </li></button>
                        <button className='btn btn-sm  '><li className="list-group-item d-flex justify-content-between align-items-center " >Installation
                            <i class=" bi-youtube d-flex justify-content-end "     ></i> </li></button>
                        <button className='btn btn-sm  '><li className="list-group-item d-flex justify-content-between align-items-center " >Getting starting with the project
                            <i class=" bi-youtube d-flex justify-content-end "     ></i> </li></button>


                    </ul>
                </div>
            </div>

            <h3 className='pb-1 mb- 5 mt-5 '>Related Courses</h3>

            <div className='row'>

                <div className='col-md-3'>

                    <div className="card" >
                        <Link to="/detail/1"><img src="/image3.jpg" className="card-img-top" alt="..." /></Link>
                        <div className="card-body">
                            <h5 className="card-title"><Link to="/detail/1">Course title</Link></h5>
                        </div>
                    </div>
                </div>

                <div className='col-md-3'>

                    <div className="card" >
                        <img src="/image3.jpg" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title"><a href='#'>Course title</a></h5>
                        </div>
                    </div>
                </div>

                <div className='col-md-3'>

                    <div className="card" >
                        <img src="/image3.jpg" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title"><a href='#'>Course title</a></h5>
                        </div>
                    </div>
                </div>
                <div className='col-md-3'>

                    <div className="card" >
                        <img src="/image3.jpg" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title"><a href='#'>Course title</a></h5>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Coursedetail;

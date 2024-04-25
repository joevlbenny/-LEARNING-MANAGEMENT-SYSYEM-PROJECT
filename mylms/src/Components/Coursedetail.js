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
                        <p> Course description</p>
                        <p className='fw-bold'>Course by:<Link to='/teacherdetail'>Teacher1</Link></p>
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
                        <button className='btn btn-sm  ' data-bs-toggle="modal" data-bs-target="#videoModal1">  <li className="list-group-item d-flex justify-content-between align-items-center " >Introduction
                            <i class=" bi-youtube d-flex justify-content-end "     ></i>


                            {/* #modal */}
                            <div class="modal" tabindex="-1" id='videoModal1'>
                                <div class="modal-dialog modal-lg">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <h5 class="modal-title">Video 1</h5>
                                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>




                                        <div class="ratio ratio-16x9">
                                            <iframe src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0" title="YouTube video" allowfullscreen></iframe>
                                        </div>
                                    </div>
                                </div>
                            </div>



                            {/* /// */}
                        </li>
                        </button>
                        <button className='btn btn-sm  ' data-bs-toggle="modal" data-bs-target="#videoModal1"><li className="list-group-item d-flex justify-content-between align-items-center " >Installation
                            <i class=" bi-youtube d-flex justify-content-end "     ></i>




                            {/* # video modal 2*/}
                            <div class="modal" tabindex="-1" id='videoModal2'>
                                <div class="modal-dialog">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <h5 class="modal-title">Modal title</h5>
                                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <div class="modal-body">
                                            <p>Modal body text goes here.</p>
                                        </div>
                                        <div class="modal-footer">
                                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                            <button type="button" class="btn btn-primary">Save changes</button>
                                        </div>
                                    </div>
                                </div>
                            </div>



                            {/* /// */}




                        </li></button>

                        <button className='btn btn-sm  ' data-bs-toggle="modal" data-bs-target="#videoModal1"><li className="list-group-item d-flex justify-content-between align-items-center " > Frontend development
                            <i class=" bi-youtube d-flex justify-content-end "     ></i>




                            {/* # video modal 2*/}
                            <div class="modal" tabindex="-1" id='videoModal2'>
                                <div class="modal-dialog">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <h5 class="modal-title">Modal title</h5>
                                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <div class="modal-body">
                                            <p>Modal body text goes here.</p>
                                        </div>
                                        <div class="modal-footer">
                                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                            <button type="button" class="btn btn-primary">Save changes</button>
                                        </div>
                                    </div>
                                </div>
                            </div>



                            {/* /// */}




                        </li></button>
                        <button className='btn btn-sm  ' data-bs-toggle="modal" data-bs-target="#videoModal1"><li className="list-group-item d-flex justify-content-between align-items-center " >Backend server development
                            <i class=" bi-youtube d-flex justify-content-end "     ></i>




                            {/* # video modal 2*/}
                            <div class="modal" tabindex="-1" id='videoModal2'>
                                <div class="modal-dialog">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <h5 class="modal-title">Modal title</h5>
                                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <div class="modal-body">
                                            <p>Modal body text goes here.</p>
                                        </div>
                                        <div class="modal-footer">
                                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                            <button type="button" class="btn btn-primary">Save changes</button>
                                        </div>
                                    </div>
                                </div>
                            </div>



                            {/* /// */}




                        </li></button>

                        <button className='btn btn-sm  ' data-bs-toggle="modal" data-bs-target="#videoModal1"><li className="list-group-item d-flex justify-content-between align-items-center " >Conclusion
                            <i class=" bi-youtube d-flex justify-content-end "     ></i>




                            {/* # video modal 2*/}
                            <div class="modal" tabindex="-1" id='videoModal2'>
                                <div class="modal-dialog">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <h5 class="modal-title">Modal title</h5>
                                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <div class="modal-body">
                                            <p>Modal body text goes here.</p>
                                        </div>
                                        <div class="modal-footer">
                                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                            <button type="button" class="btn btn-primary">Save changes</button>
                                        </div>
                                    </div>
                                </div>
                            </div>



                            {/* /// */}




                        </li></button>


                    </ul>
                </div>
            </div>

            <h3 className='pb-1 mb- 5 mt-5 '>Related Courses</h3>

            <div className='row'>

                <div className='col-md-3'>

                    <div className="card" >
                        <Link to="/detail/1"><img src="/image6.jpg" className="card-img-top" alt="..." style={{ height: "200px" }} /></Link>
                        <div className="card-body">
                            <h5 className="card-title"><Link to="/teacher/1">Course title</Link></h5>
                        </div>
                    </div>
                </div>

                <div className='col-md-3'>

                    <div className="card" >
                        <img src="/image3.jpg" className="card-img-top" alt="..." style={{ height: "200px" }} />
                        <div className="card-body">
                            <h5 className="card-title"><a href='#'>Course title</a></h5>
                        </div>
                    </div>
                </div>

                <div className='col-md-3'>

                    <div className="card" >
                        <img src="/image4.jpg" className="card-img-top" alt="..." style={{ height: "200px" }} />
                        <div className="card-body">
                            <h5 className="card-title"><a href='#'>Course title</a></h5>
                        </div>
                    </div>
                </div>
                <div className='col-md-3'>

                    <div className="card" >
                        <img src="/image5.jpg" className="card-img-top" alt="..." style={{ height: "200px" }} />
                        <div className="card-body">
                            <h5 className="card-title"><a href='#'>Course title</a></h5>
                        </div>
                    </div>
                </div>

            </div>
        </div >
    );
}

export default Coursedetail;

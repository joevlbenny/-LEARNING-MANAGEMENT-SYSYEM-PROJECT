import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

function Home() {
    useEffect(() => {
        document.title = "LMS Home Page"
    }
    )
    return (
        <div className='container mt-4'>
            <h3 className='pb-1 mb-4'>Latest Courses <Link to='/allcourses' className='float-end'>See All</Link></h3>
            <div className='row'>

                <div className='col-md-3'>

                    <div className="card h-100" >
                        <Link to="/detail/1"><img src="image4.jpg" className="card-img-top" alt="..." style={{ height: "200px" }} /></Link>
                        <div className="card-body">
                            <h5 className="card-title"><Link to="#">Python</Link></h5>
                        </div>
                    </div>
                </div>

                <div className='col-md-3'>

                    <div className="card h-100" >
                        <img src="image5.jpg" className="card-img-top" alt="..." style={{ height: "200px" }} />
                        <div className="card-body">
                            <h5 className="card-title"><a href='#'>C++</a></h5>
                        </div>
                    </div>
                </div>

                <div className='col-md-3'>

                    <div className="card h-100" >
                        <img src="image6.jpg" className="card-img-top" alt="..." style={{ height: "200px" }} />
                        <div className="card-body">
                            <h5 className="card-title"><a href='#'>C programming</a></h5>
                        </div>
                    </div>
                </div>
                <div className='col-md-3'>

                    <div className="card h-100" >
                        <img src="image7.jpg" className="card-img-top" alt="..." style={{ height: "200px" }} />
                        <div className="card-body">
                            <h5 className="card-title"><a href='#'>Reactjs</a></h5>
                        </div>
                    </div>
                </div>

            </div>


            <h3 className='pb-1 my-4'>Popular Courses <Link to='/popularcourses' className='float-end'>See All</Link></h3>
            <div className='row'>

                <div className='col-md-3'>

                    <div className="card h-100" >
                        <img src="image8.jpg" className="card-img-top" alt="..." style={{ height: "200px" }} />
                        <div className="card-body">
                            <h5 className="card-title"><a href='#'>Django</a></h5>
                        </div>
                    </div>
                </div>

                <div className='col-md-3'>

                    <div className="card h-100" >
                        <img src="image3.jpg" className="card-img-top" alt="..." style={{ height: "200px" }} />
                        <div className="card-body">
                            <h5 className="card-title"><a href='#'>Artifical Intelligence</a></h5>
                        </div>
                    </div>
                </div>

                <div className='col-md-3'>

                    <div className="card h-100" >
                        <img src="image1.jpg" className="card-img-top" alt="..." style={{ height: "200px" }} />
                        <div className="card-body">
                            <h5 className="card-title"><a href='#'>Flutter</a></h5>
                        </div>
                    </div>
                </div>
                <div className='col-md-3'>

                    <div className="card h-100" >
                        <img src="image2.jpg" className="card-img-top" alt="..." style={{ height: "200px" }} />
                        <div className="card-body">
                            <h5 className="card-title"><a href='#'>Html,Css</a></h5>
                        </div>
                    </div>
                </div>

            </div>


            <h3 className='pb-1 my-4'>Popular Teachers <Link to='/popularteachers' className='float-end'>See All</Link></h3>
            <div className='row'>

                <div className='col-md-3'>

                    <div className="card" >
                        <img src="teacher2.jpg" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title"><a href='#'>Thomas sir</a></h5>
                        </div>
                    </div>
                </div>

                <div className='col-md-3'>

                    <div className="card" >
                        <img src="image11.jpg" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title"><a href='#'>Philip sir</a></h5>
                        </div>
                    </div>
                </div>

                <div className='col-md-3'>

                    <div className="card" >
                        <img src="image12.jpg" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title"><a href='#'>Manju madam</a></h5>
                        </div>
                    </div>
                </div>
                <div className='col-md-3'>

                    <div className="card" >
                        <img src="image13.jpg" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title"><a href='#'>Deepak sir</a></h5>
                        </div>
                    </div>
                </div>

            </div>
            <h3 className='pb-1 my-4'>Student Testimonals</h3>

            <div id="carouselExampleCaptions" className="carousel slide bg-dark text-white py-5" data-bs-ride="carousel" data-interval="2">
                <div class="carousel-indicators  ">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <figure class="text-center">
                            <blockquote class="blockquote">
                                <p>MY-LMS transformed learning with its user-friendly interface and diverse resources, making studying efficient and enjoyable.</p>
                            </blockquote>
                            <figcaption class="blockquote-footer">
                                Teresa<cite title="Source Title"> TCS </cite>
                            </figcaption>
                        </figure>
                    </div>
                    <div class="carousel-item">
                        <figure class="text-center">
                            <blockquote class="blockquote">
                                <p>The intuitive design and comprehensive features of MY-LMS facilitated my academic journey, providing essential tools for success.</p>
                            </blockquote>
                            <figcaption class="blockquote-footer">
                                Paul<cite title="Source Title">  IBS Software</cite>
                            </figcaption>
                        </figure>
                    </div>
                    <div class="carousel-item">
                        <figure class="text-center">
                            <blockquote class="blockquote">
                                <p>Thanks to MY-LMS, I've expanded my knowledge and skills, receiving exceptional support from their team.</p>
                            </blockquote>
                            <figcaption class="blockquote-footer">
                                Deepak <cite title="Source Title">UST Global</cite>
                            </figcaption>
                        </figure>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>


        </div>


    )
}

export default Home

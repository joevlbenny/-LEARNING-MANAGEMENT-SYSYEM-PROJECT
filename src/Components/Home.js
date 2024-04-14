import React from 'react';
import { Link } from 'react-router-dom';


function Home() {
    return (
        <div className='container mt-4'>
            <h3 className='pb-1 mb-4'>Latest Courses</h3>
            <div className='row'>

                <div className='col-md-3'>

                    <div className="card" >
                        <Link to="/detail/1"><img src="image1.jpg" className="card-img-top" alt="..." /></Link>
                        <div className="card-body">
                            <h5 className="card-title"><Link to="/detail/1">Course title</Link></h5>
                        </div>
                    </div>
                </div>

                <div className='col-md-3'>

                    <div className="card" >
                        <img src="monitor.jpg" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title"><a href='#'>Course title</a></h5>
                        </div>
                    </div>
                </div>

                <div className='col-md-3'>

                    <div className="card" >
                        <img src="office.jpg" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title"><a href='#'>Course title</a></h5>
                        </div>
                    </div>
                </div>
                <div className='col-md-3'>

                    <div className="card" >
                        <img src="peakpx.jpg" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title"><a href='#'>Course title</a></h5>
                        </div>
                    </div>
                </div>

            </div>


            <h3 className='pb-1 my-4'>Popular Courses</h3>
            <div className='row'>

                <div className='col-md-3'>

                    <div className="card" >
                        <img src="image1.jpg" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title"><a href='#'>Course title</a></h5>
                        </div>
                    </div>
                </div>

                <div className='col-md-3'>

                    <div className="card" >
                        <img src="image1.jpg" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title"><a href='#'>Course title</a></h5>
                        </div>
                    </div>
                </div>

                <div className='col-md-3'>

                    <div className="card" >
                        <img src="image1.jpg" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title"><a href='#'>Course title</a></h5>
                        </div>
                    </div>
                </div>
                <div className='col-md-3'>

                    <div className="card" >
                        <img src="image1.jpg" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title"><a href='#'>Course title</a></h5>
                        </div>
                    </div>
                </div>

            </div>


            <h3 className='pb-1 my-4'>Popular Teachers</h3>
            <div className='row'>

                <div className='col-md-3'>

                    <div className="card" >
                        <img src="image1.jpg" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title"><a href='#'>Teacher name</a></h5>
                        </div>
                    </div>
                </div>

                <div className='col-md-3'>

                    <div className="card" >
                        <img src="image1.jpg" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title"><a href='#'>Teacher name</a></h5>
                        </div>
                    </div>
                </div>

                <div className='col-md-3'>

                    <div className="card" >
                        <img src="image1.jpg" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title"><a href='#'>Teacher name</a></h5>
                        </div>
                    </div>
                </div>
                <div className='col-md-3'>

                    <div className="card" >
                        <img src="image1.jpg" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title"><a href='#'>Teacher name</a></h5>
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
                                <p>A well-known quote, contained in a blockquote element.</p>
                            </blockquote>
                            <figcaption class="blockquote-footer">
                                Someone famous in <cite title="Source Title">Source Title</cite>
                            </figcaption>
                        </figure>
                    </div>
                    <div class="carousel-item">
                        <figure class="text-center">
                            <blockquote class="blockquote">
                                <p>A well-known quote, contained in a blockquote element.</p>
                            </blockquote>
                            <figcaption class="blockquote-footer">
                                Someone famous in <cite title="Source Title">Source Title</cite>
                            </figcaption>
                        </figure>
                    </div>
                    <div class="carousel-item">
                        <figure class="text-center">
                            <blockquote class="blockquote">
                                <p>A well-known quote, contained in a blockquote element.</p>
                            </blockquote>
                            <figcaption class="blockquote-footer">
                                Someone famous in <cite title="Source Title">Source Title</cite>
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

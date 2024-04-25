import React from 'react'
import { Link } from 'react-router-dom'
function Teacherdetail() {
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
                        <p className='fw-bold'>Course by:<Link to='/teacherdetail'>Abraham Philip</Link></p>
                        <p className='fw-bold'>Skils:<Link to='/category/python'>Python</Link> ,<Link to='/category/python'>C</Link>  </p>
                        <p className='fw-bold'>Recent Courses:<Link to='/category/python'>Reactjs</Link></p>
                        <p className='fw-bold'>Rating :4/5</p>



                    </div>

                </div>

            </div>


            <div className='container mt-3'>



                <div className="card mt-4">
                    <div className="card-header">
                        Course list
                    </div>

                    <div className='list-group list-group-flush'>
                        <div className='list-group  item list-group-item-action '>
                            <Link to='/detail/1' class="list-group-item list-group-item-action">Python Leacture 1</Link>
                        </div>
                        <div className='list-group  item list-group-item-action '>
                            <Link to='/detail/1' class="list-group-item list-group-item-action">Python Leacture 2</Link>
                        </div>
                        <div className='list-group  item list-group-item-action '>
                            <Link to='/detail/1/' class="list-group-item list-group-item-action">Python Leacture 3</Link>
                        </div><div className='list-group  item list-group-item-action '>
                            <Link to='/detail/1' class="list-group-item list-group-item-action">Python Leacture 4</Link>
                        </div><div className='list-group  item list-group-item-action '>
                            <Link to='/detail/1' class="list-group-item list-group-item-action">Python Leacture 5</Link>
                        </div><div className='list-group  item list-group-item-action '>
                            <Link to='/detail/1' class="list-group-item list-group-item-action">Python Leacture 6</Link>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    )
}

export default Teacherdetail

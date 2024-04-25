import React from 'react';
import { Link } from 'react-router-dom';
import Teachersidebar from './Teachersidebar';
function Userlist() {
    return (
        <div>
            <div className='container mt-4'>
                <div className='row'>


                    < aside className='col-md-3'>

                        <Teachersidebar />
                    </aside>
                    <section className='col-md-9'>
                        <div className='card'>
                            <h5 className='card-header'>All Students List</h5>
                            <div className='card-body'>
                                <table class="table table-bordered table-hover ">
                                    <thead>
                                        <tr>
                                            <th scope="col">Name</th>
                                            <th scope="col">Email</th>
                                            <th scope="col">Username</th>
                                            <th scope="col ">Interested Categories</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Alen</td>
                                            <td>alen@gmail.com</td>
                                            <td>alen345</td>
                                            <td>Python</td>

                                            <Link to='#' className='btn btn-warning btn-sm active ms-2'>Assignments</Link>
                                            <Link to='#' className='btn btn-success btn-sm active ms-2'>Add Assignment</Link>


                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    )
}

export default Userlist;

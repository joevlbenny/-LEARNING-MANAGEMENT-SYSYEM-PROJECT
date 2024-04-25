import React from 'react'
import { Link } from 'react-router-dom'
import Teachersidebar from './Teachersidebar'
function Teachercourses() {
  return (
    <div>
      <div className='container mt-4'>
        <div className='row'>


          < aside className='col-md-3'>

            <Teachersidebar />
          </aside>
          <section className='col-md-9'>
            <div className='card'>
              <h5 className='card-header'>My Courses</h5>
              <div className='card-body'>
                <table class="table table-light ">
                  <thead>
                    <tr>
                      <th scope="col">No</th>
                      <th scope="col">Course</th>
                      <th scope="col">Created by</th>
                      <th scope="col ">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">1</th>
                      <td>Artifical Intelligence</td>
                      <td> <Link to='#'>Paul John</Link></td>
                      <td><Link className=' btn btn-danger btn-sm active ms-5' to='#'>Delete</Link></td>

                      <td><Link className=' btn btn-primary btn-sm active ms-2' to='/addchapter/2'>Addcourse</Link></td>

                    </tr>
                    <tr>
                      <th scope="row">2</th>
                      <td>Django</td>
                      <td> <Link to='#'>Abraham Philip</Link></td>

                      {/* <button className='btn  btn-danger  btn-sm active'>Delete</button> */}
                      <td><Link className=' btn btn-danger btn-sm active ms-5' to='#'>Delete</Link></td>

                      <td><Link className=' btn btn-primary btn-sm active ms-2' to='/addchapter/2'>Addcourse</Link></td>

                    </tr>
                    <tr>
                      <th scope="row">3</th>
                      <td>React</td>
                      <td> <Link to='#'>Alex Thomas</Link></td>

                      <td><Link className=' btn btn-danger btn-sm active ms-5' to='#'>Delete</Link></td>

                      <td><Link className=' btn btn-primary btn-sm active ms-2' to='/addchapter/2'>Addcourse</Link></td>

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

export default Teachercourses

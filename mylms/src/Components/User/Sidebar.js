import React from 'react'
import { Link } from 'react-router-dom'
function Sidebar() {
    return (
        <div>


            <div className='card'>

                <div className='list-group list-group-flush '>
                    <Link to='/dashboard' className='list-group-item list-group-item-action'>Dashboard</Link>
                    <Link to='/mycourses' className='list-group-item list-group-item-action'>My courses</Link>
                    <Link to='/favouritecourses' className='list-group-item list-group-item-action'>Favourite Courses</Link>
                    <Link to='/recommendedcourses' className='list-group-item list-group-item-action'>Recommened courses</Link>
                    <Link to='/profile' className='list-group-item list-group-item-action'>Profile</Link>
                    <Link to='/changepassword' className='list-group-item list-group-item-action'>Change Password</Link>
                    <Link to='/login' className='list-group-item list-group-item-action text-danger'>Logout</Link>


                </div>
            </div>

        </div>
    )
}

export default Sidebar

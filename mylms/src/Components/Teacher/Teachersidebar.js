import React from 'react'
import { Link } from 'react-router-dom'
function Teachersidebar() {
    return (
        <div>


            <div className='card'>

                <div className='list-group list-group-flush '>
                    <Link to='/dashboard' className='list-group-item list-group-item-action'>Dashboard</Link>
                    <Link to='/teachercourses' className='list-group-item list-group-item-action'>My courses</Link>
                    <Link to='/studentlist' className='list-group-item list-group-item-action'>My students</Link>
                    <Link to='/addcourses' className='list-group-item list-group-item-action'>Add Courses</Link>
                    <Link to='/teacherprofile' className='list-group-item list-group-item-action'>Profile</Link>
                    <Link to='/changeteacherpassword' className='list-group-item list-group-item-action'>Change Password</Link>
                    <Link to='/teacherlogout' className='list-group-item list-group-item-action text-danger'>Logout</Link>


                </div>
            </div>

        </div>
    )
}

export default Teachersidebar

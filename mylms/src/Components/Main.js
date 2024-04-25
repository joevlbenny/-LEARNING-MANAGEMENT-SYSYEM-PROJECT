import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Footer from './Footer'
import Header from './Header'
import Home from './Home'
import Login from './Login'
import Popularcourses from './Popularcourses'
import PopularTeachers from './Popularteachers'
import Signup from './Signup'

//List Page
import Allcourses from './Allcourses'
import Categorycourse from './Categorycourse'
import Coursedetail from './Coursedetail'

//Users
import Changepassword from './User/Changepassword'
import Dashboard from './User/Dashboard'
import Favouritecourse from './User/Favouritecourse'
import Mycourses from './User/Mycourses'
import Profile from './User/Profile'
import RecommendCourse from './User/RecommendCourse'

//Teachers

import Addchapter from './Teacher/Addchapter'
import Addcourse from './Teacher/Addcourse'
import Changeteacherpassword from './Teacher/Changeteacherpassword'
import TeacherLogout from './Teacher/TeacherLogout'
import Teachercourses from './Teacher/Teachercourses'
import Teacherdashboard from './Teacher/Teacherdashboard'
import Teacherdetail from './Teacher/Teacherdetail'
import Teacherlogin from './Teacher/Teacherlogin'
import Teacherprofile from './Teacher/Teacherprofile'
import Teachersignup from './Teacher/Teachersignup'
import Userlist from './Teacher/Userlist'
function Main() {
    return (
        <div>

            <Header />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/dashboard" element={<Dashboard />} />
                {/* <Route path="/department" element={<Department />} />
                <Route path="/courses" element={<Courses />} /> */}
                <Route path="/detail/:course_id" element={<Coursedetail />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/mycourses" element={<Mycourses />} />
                <Route path="/favouritecourses" element={<Favouritecourse />} />
                <Route path='/recommendedcourses' element={<RecommendCourse />}></Route>
                <Route path='/profile' element={<Profile />}></Route>
                <Route path='/changepassword' element={<Changepassword />}></Route>
                <Route path='/studentlist' element={<Userlist />}></Route>



                {/* Teacher */}
                <Route path='/teacherlogin' element={<Teacherlogin />}></Route>
                <Route path='/teacherlogout' element={<TeacherLogout />}></Route>
                <Route path='/teachersignup' element={<Teachersignup />}></Route>
                <Route path='/teacherdashboard' element={<Teacherdashboard />}></Route>
                <Route path='/teacherprofile' element={<Teacherprofile />}></Route>
                <Route path='/addcourses' element={<Addcourse />}></Route>
                <Route path='/addchapter/:course_id' element={<Addchapter />}></Route>
                <Route path='/changeteacherpassword' element={<Changeteacherpassword />}></Route>
                <Route path='/teachercourses' element={<Teachercourses />}></Route>
                <Route path='/teacherdetail' element={<Teacherdetail />}></Route>
                <Route path='/allcourses' element={<Allcourses />}></Route>
                <Route path='/popularcourses' element={<Popularcourses />}></Route>
                <Route path='/popularteachers' element={<PopularTeachers />}></Route>
                <Route path='/category/:category_slug' element={<Categorycourse />}></Route>



            </Routes>


            <Footer />
        </div>
    )
}

export default Main






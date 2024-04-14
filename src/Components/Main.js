import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Footer from './Footer'
import Header from './Header'
import Home from './Home'
import Login from './Login'
import Signup from './Signup'
import Changepassword from './User/Changepassword'
import Dashboard from './User/Dashboard'
import Favouritecourse from './User/Favouritecourse'
import Mycourses from './User/Mycourses'
import Profile from './User/Profile'
import RecommendCourse from './User/RecommendCourse'
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
                {/* <Route path="/detail/:course_id" element={<Coursedetail />} /> */}
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/mycourses" element={<Mycourses />} />
                <Route path="/favouritecourses" element={<Favouritecourse />} />
                <Route path='/recommendedcourses' element={<RecommendCourse />}></Route>
                <Route path='/profile' element={<Profile />}></Route>
                <Route path='/changepassword' element={<Changepassword />}></Route>


            </Routes>


            <Footer />
        </div>
    )
}

export default Main






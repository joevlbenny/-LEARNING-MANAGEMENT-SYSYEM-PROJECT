import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './Teacherlogin.css';
const baseurl = 'http://127.0.0.1:8000/api/'
function Teacherlogin() {
  const [teacherLoginData, setTeacherLoginData] = useState({
    email: '',
    password: ''
  });
  const handleChange = (event) => {
    setTeacherLoginData({
      ...teacherLoginData,
      [event.target.name]: event.target.value
    });
  }


  const submitForm = (event) => {
    event.preventDefault(); // Prevent default form submission behavior
    const teacherFormData = new FormData();
    teacherFormData.append('email', teacherLoginData.email)
    teacherFormData.append('password', teacherLoginData.password)


    try {
      axios.post(baseurl + 'teacherlogin/', teacherFormData)
        .then((response) => {
          if (response.data.bool == true) {
            localStorage.setItem("teacherLoginStatus", true);
            window.location.href = '/teacherdashboard'

          }
        });
    } catch (error) {
      console.log(error)
    }
  }

  const teacherLoginStatus = localStorage.getItem('teacherLoginStatus')
  if (teacherLoginStatus == 'true') {
    window.location.href = '/teacherdashboard'
  }
  useEffect(() => {
    document.title = 'Teacher login'
  });

  return (
    <div>
      <div class="main">
        <section class="sign-in">
          <div class="container">
            <div class="signin-content">

              <div class="signin-form">
                <h2 class="form-title">Sign in to eLMS</h2>
                <form method="POST" class="register-form" id="login-form">

                  <div class="form-group">

                    <label><span class="material-symbols-outlined"
                      style={{ verticalalign: "text-bottom" }}> Username </span> </label>

                    <input type="email" value={teacherLoginData.email} onChange={handleChange} name='email' />
                  </div>
                  <div class="form-group">
                    <label><span class="material-symbols-outlined"
                      style={{ verticalalign: "text-bottom" }}>Password</span></label>
                    <input type="password" value={teacherLoginData.password} onChange={handleChange} name='password' />

                  </div>
                  <div class="d-flex justify-content-center">
                    {/* <button class="btn btn-lg btn-primary btn-login text-uppercase fw-bold mb-3 btn-sm" style={{ 'width': '100px' }}
                      type="submit" onClick={submitForm}>Login</button> */}

                    <button class="btn btn-lg btn-primary btn-login text-uppercase fw-bold mb-3 btn-sm" style={{ 'width': '100px' }}
                      onClick={submitForm}>Login</button>

                  </div>
                </form>
                {/* <div class="d-flex justify-content-around flex-wrap">

                  <div class="loginadmin">
                    <a href="/admin" target="_blank">Sign in as Admin</a>
                  </div>
                </div> */}

              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Teacherlogin;

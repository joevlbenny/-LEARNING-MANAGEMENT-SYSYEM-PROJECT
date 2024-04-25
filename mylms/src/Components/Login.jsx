import axios from 'axios';
import React, { useState } from 'react';

import './Login.css';
const baseurl = 'http://127.0.0.1:8000/api/'

function Login() {

  const [studentLoginData, setstudentLoginData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (event) => {
    setstudentLoginData({
      ...studentLoginData,
      [event.target.name]: event.target.value
    });
  }


  const submitForm = (event) => {
    event.preventDefault();
    const studentFormData = new FormData();
    studentFormData.append('email', studentLoginData.email)
    studentFormData.append('password', studentLoginData.password)


    try {
      axios.post(baseurl + 'studentlogin/', studentFormData)
        .then((response) => {
          if (response.data.bool == true) {
            localStorage.setItem("studentLoginStatus", true);
            window.location.href = '/studentdashboard'

          }
        });
    } catch (error) {
      console.log(error)
    }
  }

  const studentLoginStatus = localStorage.getItem('studentLoginStatus')
  if (studentLoginStatus == 'true') {
    window.location.href = '/studentdashboard'
  }
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
                      style={{ verticalalign: "text-bottom" }}>Username</span></label>

                    <input placeholder="Username" onChange={handleChange} />
                  </div>
                  <div class="form-group">
                    <label><span class="material-symbols-outlined"
                      style={{ verticalalign: "text-bottom" }}>Password</span></label>
                    <input type='password'  placeholder="Password" onChange={handleChange} />

                  </div>
                  <div class="d-flex justify-content-center">
                    <button class="btn btn-lg btn-primary btn-login text-uppercase fw-bold mb-3 btn-sm" style={{ 'width': '100px' }}
                      type="submit" onClick={submitForm}>Sign in</button>
                  </div>
                </form>


              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Login

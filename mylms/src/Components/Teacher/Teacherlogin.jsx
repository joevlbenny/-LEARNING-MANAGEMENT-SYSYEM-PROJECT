import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './Teacherlogin.css';

const baseurl = 'http://127.0.0.1:8000/api/';

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

  const submitForm = async (event) => {
    event.preventDefault();
    const teacherFormData = new FormData();
    teacherFormData.append('email', teacherLoginData.email);
    teacherFormData.append('password', teacherLoginData.password);

    try {
      const response = await axios.post(baseurl + 'teacherlogin/', teacherFormData);
      if (response.data.bool === true) {
        localStorage.setItem("teacherLoginStatus", true);
        localStorage.setItem("teacherToken", response.data.token);     // For storing token
        window.location.href = '/teacherdashboard';
      } else {
        alert('Invalid login credentials');
      }
    } catch (error) {
      console.log(error);
    }
  }

  const teacherLoginStatus = localStorage.getItem('teacherLoginStatus');
  if (teacherLoginStatus === 'true') {
    window.location.href = '/teacherdashboard';
  }

  useEffect(() => {
    document.title = 'Teacher login';
  }, []);

  return (
    <div>
      <div className="main">
        <section className="sign-in">
          <div className="container">
            <div className="signin-content">
              <div className="signin-form">
                <h2 className="form-title">Sign in to eLMS</h2>
                <form method="POST" className="register-form" id="login-form">
                  <div className="form-group">
                    <label>
                      <span className="material-symbols-outlined" style={{ verticalAlign: "text-bottom" }}> Username </span>
                    </label>
                    <input type="email" value={teacherLoginData.email} onChange={handleChange} name='email' />
                  </div>
                  <div className="form-group">
                    <label>
                      <span className="material-symbols-outlined" style={{ verticalAlign: "text-bottom" }}>Password</span>
                    </label>
                    <input type="password" value={teacherLoginData.password} onChange={handleChange} name='password' />
                  </div>
                  <div className="d-flex justify-content-center">
                    <button className="btn btn-lg btn-primary btn-login text-uppercase fw-bold mb-3 btn-sm" style={{ width: '100px' }} onClick={submitForm}>Login</button>
                  </div>
                </form>
                {/* <div className="d-flex justify-content-around flex-wrap">
                  <div className="loginadmin">
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

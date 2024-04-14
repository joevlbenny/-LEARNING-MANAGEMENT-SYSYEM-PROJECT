import React from 'react';
import './Login.css';
function login() {
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

                    <input placeholder="Username" />
                  </div>
                  <div class="form-group">
                    <label><span class="material-symbols-outlined"
                      style={{ verticalalign: "text-bottom" }}>Password</span></label>
                    <input placeholder="Password" />

                  </div>
                  <div class="d-flex justify-content-center">
                    <button class="btn btn-lg btn-primary btn-login text-uppercase fw-bold mb-3 btn-sm" style={{ 'width': '100px' }}
                      type="submit">Sign in</button>
                  </div>
                </form>
                <div class="d-flex justify-content-around flex-wrap">

                  <div class="loginadmin">
                    <a href="/admin" target="_blank">Sign in as Admin</a>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default login

import Axios from 'axios';
import React, { useState } from 'react';
import './signup.css';

function Signup() {
    const [usernamereg, setusernamereg] = useState("");
    const [useremail, setuseremail] = useState("");
    const [userage, setuserage] = useState("");
    const [userpassword, setuserpassword] = useState("");

    const register = () => {
        Axios.post('http://localhost:3000/signup', {
            username: usernamereg,
            email: useremail,
            age: userage,
            password: userpassword,
        }).then((response) => {
            console.log(response);
        }).catch((error) => {
            console.error(error);
        });
    };

    return (
        <div className="main">
            <section className="signup">
                <div className="signup-content">
                    <div className="signup-form">
                        <h2 className="form-title">Signup Page</h2>
                        <form className="register-form" id="signup-form">
                            <div className="form-group">
                                <label htmlFor="username">Enter your name </label>
                                <input id="username" type="text" onChange={(e) => setusernamereg(e.target.value)} required />
                            </div><br />
                            <div className="form-group">
                                <label htmlFor="email">Enter your email </label>
                                <input id="email" type="email" onChange={(e) => setuseremail(e.target.value)} required />
                            </div><br />
                            <div className="form-group">
                                <label htmlFor="age">Age </label>
                                <input id="age" type="text" onChange={(e) => setuserage(e.target.value)} required />
                            </div><br />
                            <div className="form-group">
                                <label htmlFor="password">Enter your password </label>
                                <input id="password" type="password" onChange={(e) => setuserpassword(e.target.value)} required />
                            </div><br />
                            <div className="form-group">
                                <label htmlFor="psw-repeat">Repeat password </label>
                                <input type="password" name="psw-repeat" required />
                            </div><br />
                            <div className="button">
                                <button onClick={register} type="button">Join Now</button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Signup;

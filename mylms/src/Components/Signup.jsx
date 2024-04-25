import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './signup.css';

const baseurl = 'http://127.0.0.1:8000/api/student/';

function Signup() {
    // const [usernamereg, setusernamereg] = useState("");
    // const [useremail, setuseremail] = useState("");
    // const [userage, setuserage] = useState("");
    // const [userpassword, setuserpassword] = useState("");

    // const register = () => {
    //     Axios.post('http://localhost:3000/signup', {
    //         username: usernamereg,
    //         email: useremail,
    //         age: userage,
    //         password: userpassword,
    //     }).then((response) => {
    //         console.log(response);
    //     }).catch((error) => {
    //         console.error(error);
    //     });
    // };

    const [studentData, setstudentData] = useState({
        'fullname': '',
        'email': '',
        'password': '',
        'age': '',
        'interests': '',
        'status': '',

    });



    const handleChange = (event) => {
        setstudentData({
            ...studentData,
            [event.target.name]: event.target.value
        });
    }


    const submitbutton = () => {
        // event.preventDefault();
        const studentFormData = new FormData();
        studentFormData.append('fullname', studentData.fullname)
        studentFormData.append('email', studentData.email)
        studentFormData.append('age', studentData.age)
        studentFormData.append('password', studentData.password)
        studentFormData.append('interests', studentData.interests)
        try {
            axios.post(baseurl, studentFormData).then((response) => {
                console.log(response.data);
                setstudentData({
                    'fullname': '',
                    'email': '',
                    'password': '',
                    'age': '',
                    'interests': '',
                    'status': 'success',
                })
            });

        }

        catch (error) {
            console.log(error)
            setstudentData({
                'status': 'error',
            })

        }

    }

    useEffect(() => {
        document.title = "Student Registration"
    })

    return (
        <div className="main">
            <section className="signup">
                <div className="signup-content">
                    <div className="signup-form">
                        {studentData.status === 'success' && <p className='text-success'>Thank you for registration</p>}
                        {studentData.status === 'error' && <p className='text-danger'>Something wrong happened!!</p>}
                        <h2 className="form-title">Signup Page</h2>
                        <form className="register-form" id="signup-form">
                            <div className="form-group">
                                <label htmlFor="username">Enter your name </label>
                                <input value={studentData.fullname} id="fullname" type="text" name='fullname' onChange={handleChange} required />
                            </div><br />
                            <div className="form-group">
                                <label htmlFor="email">Enter your email </label>
                                <input value={studentData.email} id="email" type="email" name='email' onChange={handleChange} required />
                            </div><br />
                            <div className="form-group">
                                <label htmlFor="age">Age </label>
                                <input value={studentData.age} id="age" type="text" name='age' onChange={handleChange} required />
                            </div><br />
                            <div className="form-group">
                                <label htmlFor="password">Enter your password </label>
                                <input value={studentData.password} id="password" type="password" name='password' onChange={handleChange} required />
                            </div><br />

                            <div className="form-group">
                                <label htmlFor="psw-repeat">Interests </label>
                                <input value={studentData.interests} type="text" name='interests' onChange={handleChange} required />
                            </div><br />
                            <div className="button">
                                <button onClick={submitbutton} type="button">Join Now</button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Signup

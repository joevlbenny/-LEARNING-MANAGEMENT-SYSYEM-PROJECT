import axios from 'axios';
import { default as React, useEffect, useState } from 'react';
import './Teachersignup.css';

const baseurl = 'http://127.0.0.1:8000/api/teacher/'
function Signup() {

    const [teacherData, setteacherData] = useState({
        'fullname': '',
        'email': '',
        'password': '',
        'qualification': '',
        'mobile': '',
        'skills': '',
        'status': '',

    });

    //change element value
    const handleChange = (event) => {
        setteacherData({
            ...teacherData,
            [event.target.name]: event.target.value
        });
    }

    //end




    //submitbutton
    const submitbutton = () => {
        const teacherFormData = new FormData();
        teacherFormData.append('fullname', teacherData.fullname)
        teacherFormData.append('email', teacherData.email)
        teacherFormData.append('password', teacherData.password)
        teacherFormData.append('qualification', teacherData.qualification)
        teacherFormData.append('mobileno', teacherData.mobile)
        teacherFormData.append('skills', teacherData.skills)

        try {
            axios.post(baseurl, teacherFormData).then((response) => {
                console.log(response.data);
                setteacherData({
                    'fullname': '',
                    'email': '',
                    'password': '',
                    'qualification': '',
                    'mobile': '',
                    'skills': '',
                    'status': 'success',
                })
            });

        } catch (error) {
            console.log(error)
            setteacherData({
                'status': 'error',
            })

        }

    }
    //end






    useEffect(() => {
        document.title = "Teacher Register"
    })


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
    const teacherLoginStatus = localStorage.getItem('teacherLoginStatus')
    if (teacherLoginStatus == 'true') {
        window.location.href = '/teacherdashboard'
    }

    useEffect(() => {
        document.title = 'Teacher Registration Page'
    });
    return (
        <div className="main">
            <section className="signup">
                <div className="signup-content">
                    <div className="signup-form">
                        {teacherData.status === 'success' && <p className='text-success'>Thank you for registration</p>}
                        {teacherData.status === 'error' && <p className='text-danger'>Something wrong happened!!</p>}

                        <h2 className="form-title"> Teacher Signup Page</h2>
                        <form className="register-form" name="signup-form">
                            <div className="form-group">
                                <label htmlFor="username">Enter your name </label>
                                <input value={teacherData.fullname} onChange={handleChange} name="fullname" type="text" required />
                            </div><br />
                            <div className="form-group">
                                <label htmlFor="email">Enter your email </label>
                                <input value={teacherData.email} onChange={handleChange} name="email" type="text" required />
                            </div><br />

                            <div className="form-group">
                                <label htmlFor="password">Enter your password </label>
                                <input value={teacherData.password} onChange={handleChange} name="password" type="password" required />
                            </div><br />
                            <div className="form-group">
                                <label htmlFor="qualification">Qualification </label>
                                <input value={teacherData.qualification} onChange={handleChange} name="qualification" type="text" required />
                            </div><br />
                            <div className="form-group">
                                <label htmlFor="mobileno">Mobile number</label>
                                <input value={teacherData.mobile} onChange={handleChange} type="number" name="mobile" required />
                            </div><br />
                            <div className="form-group">
                                <label htmlFor="skills">Skills</label>
                                <input value={teacherData.skills} onChange={handleChange} type="text" name="skills" required />
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

export default Signup;

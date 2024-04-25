import React from 'react';
import Teachersidebar from './Teachersidebar';

import axios from 'axios';
import { useEffect, useState } from 'react';
const baseurl = 'http://127.0.0.1:8000/api'

function Addcourse() {

    const [cats, setcats] = useState([]);
    const [courseData, setCourseData] = useState({
        category: '',
        title: '',
        teacher: '',
        description: '',
        featuredimage: '',
        technologies: '',
    });

    useEffect(() => {
        try {
            axios.get(baseurl + '/category/').then((res) => {
                setcats(res.data);
            }

            )
        }
        catch (error) {
            console.log(error);
        }
    }, []);



    const handleChange = (event) => {
        setCourseData({
            ...courseData,
            [event.target.name]: event.target.value
        });
    }

    const handleFileChange = (event) => {
        setCourseData({
            ...courseData,
            [event.target.name]: event.target.files[0]
        });
    }


    const formsubmit = (event) => {
        // event.preventDefault();
        const formdata = new FormData();
        formdata.append('category', courseData.category);
        formdata.append('title', courseData.title);
        formdata.append('teacher', courseData.teacher);
        formdata.append('description', courseData.description);
        formdata.append('featuredimage', courseData.featuredimage);
        formdata.append('technologies', courseData.technologies);


        try {
            axios.post(baseurl + '/course/', formdata, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            }).then((res) => {
                console.log(res.data);
            }).catch((error) => {
                console.error('Error submitting form:', error);
                console.log('hii')
            });
        } catch (error) {
            console.error('Error submitting THE form:', error);
        }
    };

    useEffect(() => {
        document.title = 'Add Courses'
    });
    return (
        <div>




            <div className='container mt-4'>
                <div className='row'>


                    < aside className='col-md-3'>

                        <Teachersidebar />
                    </aside>

                    <section className='col-md-9 '>
                        <div className='card'>
                            <h5 className='card-header'>Add Courses</h5>
                            <div className="card-body">

                                <div class="mb-3 row ms-2 mt-2 me-2">
                                    <label for="staticEmail" class="col-sm-2 col-form-label ">Category</label>
                                    <select name='category' onChange={handleChange} class='form-control'>
                                        {cats.map((category, index) => { return <option key={index}>{category.title}</option> })}
                                    </select>
                                </div>


                                <div class="mb-3 row ms-2 mt-2 me-2">
                                    <label for="staticteacher" class="col-sm-2 col-form-label ">Teacher</label>
                                    <div class="col-sm-10">
                                        <input type="text" onChange={handleChange} class="form-control mt-2 " id="staticteacher" />
                                    </div>
                                </div>

                                <div class="mb-3 row ms-2 mt-2 me-2">
                                    <label for="staticEmail" class="col-sm-2 col-form-label ">Title</label>
                                    <div class="col-sm-10">
                                        <input type="text" onChange={handleChange} class="form-control mt-2 " id="statictitle" />
                                    </div>
                                </div>

                                <div class="mb-3 row ms-2 mt-2 me-2">
                                    <label for="staticEmail" class="col-sm-2 col-form-label ">Description</label>
                                    <div class="col-sm-10">
                                        <input type="text" onChange={handleChange} class="form-control mt-2 " id="staticdes" />
                                    </div>
                                </div>
                                <div class="mb-3 row ms-2 mt-2 me-2">
                                    <label for="staticEmail" class="col-sm-2 col-form-label ">Featured image</label>
                                    <div class="col-sm-10">
                                        <input type="file" onChange={handleFileChange} class="form-control mt-2 " id="staticimg" />
                                    </div>
                                </div>
                                <div class="mb-3 row ms-2 mt-2 me-2">
                                    <label for="inputPassword" class="col-sm-2 col-form-label">Technologies</label>
                                    <div class="col-sm-10">
                                        <input type="text" onChange={handleChange} class="form-control mt-2" placeholder='HTML,CSS,Reactjs,Django' id="inputPassword" />
                                    </div>
                                </div>


                                <button className='btn-primary btn-sm ms-3 mb-3' onClick={formsubmit} style={{ 'width': '100px' }}>Submit</button>
                            </div>
                        </div>


                    </section>


                </div>
            </div>



        </div>
    )
}

export default Addcourse

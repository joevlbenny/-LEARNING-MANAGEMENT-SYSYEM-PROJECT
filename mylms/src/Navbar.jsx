import React from 'react';
import Icon from './Icons.png';
import './Navbar.css';
function Navbar() {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar navbar-light bg-light">

                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item active mr-12">
                            <a class="nav-link" href="#">Home <span class="sr-only"></span></a>
                        </li>
                        <li class="nav-item mr-2">
                            <a class="nav-link" href="#">Dashboard</a>
                        </li>
                        <li class="nav-item dropdown mr-10">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                My  Courses
                            </a>
                            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <a class="dropdown-item" href="#">CSE</a>
                                <a class="dropdown-item" href="#">Electronics</a>
                                <div class="dropdown-divider"></div>
                                <a class="dropdown-item" href="#">Other</a>
                            </div>
                        </li>
                        <li class="nav-item dropdown mr-10 justify-content end">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Account
                            </a>
                            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <a class="dropdown-item" href="#">Profile</a>
                                <a class="dropdown-item" href="#">Grade</a>
                                <a class="dropdown-item" href="#">Calender</a>
                                <a class="dropdown-item" href="#">Reports</a>
                                <div class="dropdown-divider"></div>
                                <a class="dropdown-item" href="#">Logout</a>

                                <img src={Icon} style={{ width: 100, marginTop: -7 }} />

                            </div>
                        </li>
                    </ul>



                </div>
                <form class="form-inline my-2 my-lg-0 justify-content-end" >
                    <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                    {/* <button class="btn btn-outline-success my-2 " type="submit">Search</button> */}

                </form>
                <button class="btn btn-outline-success my-2 my-sm-0 " type="submit">Search</button>
            </nav>
        </div>
    )
}

export default Navbar

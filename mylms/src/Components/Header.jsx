import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { Navbar, NavDropdown } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";

function Header() {
    const teacherLoginStatus = localStorage.getItem('teacherLoginStatus')

    return (
        // <Router>


        <div>

            <Navbar collapseOnSelect expand="lg"
                className="bg-info navbar-light bg-dark ">
                <Container>

                    <Navbar.Toggle
                        aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav" >
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to={"/home"} className="text-light">
                                <span className="text-light">
                                    <img
                                        src="home1.png"
                                        width="50"
                                        height="50"
                                        className="d-inline-block align-top"
                                        alt="React Bootstrap logo"
                                    />
                                </span>
                            </Nav.Link>
                            <Nav.Link as={Link} to={"/home"} className="text-light ms-200 d-flex justify-content-center">
                                <span className="text-primary" style={{ 'width': '100px', 'fontSize': '1.5em' }}>
                                    MY-LMS
                                </span>
                            </Nav.Link>




                        </Nav>


                    </Navbar.Collapse>


                    <Navbar.Toggle aria-controls="basic-navbar-nav" />

                </Container>

                <Navbar.Collapse id="basic-navbar-nav" className="ml-auto">
                    <Nav className="ml-auto">
                        <NavDropdown title={
                            <img
                                src="teachericon.png"
                                width="50"
                                height="50"
                                className="d-inline-block align-top"
                                alt="React Bootstrap logo"
                            />
                        } id="basic-nav-dropdown">
                            {!teacherLoginStatus &&
                                <>
                                    <NavDropdown.Item as={Link} to="/teacherlogin">Login</NavDropdown.Item>
                                    <NavDropdown.Item as={Link} to="/teachersignup">Signup</NavDropdown.Item>
                                </>
                            }
                            {teacherLoginStatus &&
                                <>
                                    <NavDropdown.Item as={Link} to="/teacherdashboard">Dashboard</NavDropdown.Item>
                                    <NavDropdown.Item as={Link} to="/teacherlogout">Logout</NavDropdown.Item>
                                </>
                            }

                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
                <Navbar.Collapse id="basic-navbar-nav" className="ml-auto">
                    <Nav className="ml-auto">
                        <NavDropdown title={
                            <img
                                src="Icon.png"
                                width="50"
                                height="50"
                                className="d-inline-block align-top"
                                alt="React Bootstrap logo"
                            />
                        } id="basic-nav-dropdown">
                            <NavDropdown.Item as={Link} to="/login">User Login</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/signup">User Signup</NavDropdown.Item>


                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>



        </div>

    );
}

export default Header;

import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { Navbar, NavDropdown } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";

function Header() {
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
                                    Home
                                </span>
                            </Nav.Link>
                            <Nav.Link as={Link} to={"/dashboard"} className="text-light">

                                <span className=" text-light">
                                    Dashboard
                                </span>
                            </Nav.Link>

                            <Nav.Link
                                as={Link} to={"/department"}>
                                <span className=" text-light">
                                    Department
                                </span>
                            </Nav.Link>
                            <Nav.Link
                                as={Link} to={"/courses"}>
                                <span className=" text-light">
                                    Courses
                                </span>
                            </Nav.Link>
                        </Nav>

                        <Nav>
                            <Nav.Link href="#logout" className="text-light">
                                Logout
                            </Nav.Link>

                        </Nav>
                    </Navbar.Collapse>


                    <Navbar.Toggle aria-controls="basic-navbar-nav" />

                </Container>
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
                            <NavDropdown.Item as={Link} to="/login">Login</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/signup">Sign up</NavDropdown.Item>

                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>

            {/* <Navbar bg="light" expand="lg">
            </Navbar> */}
            {/* <div>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/home" element={<Home />} />
                        <Route path="/dashboard" element={<Dashboard />} />
                        <Route path="/department" element={<Department />} />
                        <Route path="/courses" element={<Courses />} />
                        <Route path="/detail/:course_id" element={<Coursedetail />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/signup" element={<Signup />} />
                    </Routes>
                </div> */}

        </div>

    );
}

export default Header;

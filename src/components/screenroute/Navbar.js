import React from 'react';
import { Navbar, Nav, Container, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import image from "../../Assests/Data/cmb9.png";
// import FormControl from 'react-bootstrap/FormControl';
// import Container from 'react-bootstrap/Container'
import './Navbar.css';
function Navbars(props) {
    return (
        <>
            <Navbar bg="light" sticky="top" expand="lg">
                <Container fluid>
                    <Navbar.Brand href="#" className='header-style'  >           
                    <img
                    src={image}
                    // width="40"
                    // height="40"
                    className="d-inline-block align-top logo-style"
                    alt="React Bootstrap logo"
                />
                <div className='header-style-name'>ℂ𝕒𝕤𝕙 𝕄𝕪 𝔹𝕚𝕜𝕖</div>
                 
                </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="/Bikes">Bikes</Nav.Link>
                            {/* <NavDropdown title="Link" id="navbarScrollingDropdown">
                                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action5">
                                    Something else here
                                </NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href="#" disabled>
                                Link
                            </Nav.Link> */}
                        </Nav>
                        <Form className="d-flex">
                            <FormControl
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                            />
                            <Button variant="outline-success">Search</Button>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}

export default Navbars;
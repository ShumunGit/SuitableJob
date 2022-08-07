import React from "react";
import 'bootstrap/dist/css/bootstrap.css'
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import logo from '../img/logo.png';
import { LinkContainer } from 'react-router-bootstrap';

function MainNav() {
    return (
        <div>
            <Navbar bg="myGreen" variant="dark" sticky='top' expand="lg">
                <Navbar.Brand>
                    <img src={logo} width="40px" height="40px" class="rounded" alt="logo" />{' '}
                    Suitable Job
                </Navbar.Brand>

                <Navbar.Toggle />
                <Navbar.Collapse>

                    <Nav>
                        <NavDropdown title="Suitable">
                            <LinkContainer to='SuitableJob'>
                                <NavDropdown.Item>Suitable Job</NavDropdown.Item>
                            </LinkContainer>
    
                            <NavDropdown.Item href='#'>Suitable Result</NavDropdown.Item>
                            <NavDropdown.Item href='#'>Hours</NavDropdown.Item>
                            <NavDropdown.Item href='#'>Cv</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href='#'>Instructions</NavDropdown.Item>
                        </NavDropdown>

                        <LinkContainer to='Contact'>
                            <Nav.Link href='products'>Contact Us</Nav.Link>
                        </LinkContainer>


                        <LinkContainer to='Register'>
                            <Nav.Link>Register</Nav.Link>
                        </LinkContainer>

                        <LinkContainer to='/Login'>
                            <Nav.Link>Log in</Nav.Link>
                        </LinkContainer>
                    </Nav>

                </Navbar.Collapse>
            </Navbar>

        </div>
    )
}

export default MainNav;
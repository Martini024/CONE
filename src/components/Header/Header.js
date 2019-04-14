import React, {Component} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import Headroom from 'react-headroom';
import { Col, Navbar, Nav, NavDropdown } from 'react-bootstrap';
import './Header.css';

class Header extends Component {
    render() {
        return (
            <div className="header">
                <Headroom>
                    <Navbar collapseOnSelect expand="lg" bg="light">
                        <Col sm="1"></Col>
                        <Navbar.Brand href="/" className="col-2">
                            <img className="d-inline-block align-top logo" alt="CONE logo" src={require('./logo.png')}></img>
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav" className="col-8">
                            <Nav className="col-9 justify-content-around">
                                <Nav.Item>
                                    <Nav.Link href="#">About Us</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link href="#">Events</Nav.Link>
                                </Nav.Item>
                                <NavDropdown title="Projects" id="collasible-nav-dropdown">
                                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                                </NavDropdown>
                                <Nav.Item>
                                    <Nav.Link href="#">Get Involved</Nav.Link>
                                </Nav.Item>
                                <Nav.Link href="/search">
                                    <FontAwesomeIcon icon="search" />
                                </Nav.Link>
                            </Nav>
                            <Nav className="col-3 justify-content-end">
                                <Nav.Link href="">
                                    <FontAwesomeIcon icon={['fab', 'facebook']} />
                                </Nav.Link>
                                <Nav.Link href="">
                                    <FontAwesomeIcon icon={['fab', 'twitter']} />
                                </Nav.Link>
                                <Nav.Link href="">
                                    <FontAwesomeIcon icon={['fab', 'youtube']} />
                                </Nav.Link>
                                <Nav.Link href="">
                                    <FontAwesomeIcon icon={['fab', 'instagram']} />
                                </Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                        <Col sm="1"></Col>
                    </Navbar>
                </Headroom>
            </div>
        );
    }
}

export default Header;

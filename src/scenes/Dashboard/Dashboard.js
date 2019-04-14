import React from 'react'
import './Dashboard.css'
import { Col, Row, Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';

class Dashboard extends React.Component {
    render() {
        return (
            <>
                <Navbar fixed-top bg="dark" variant="dark">
                    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                    <Nav className="mr-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#features">Features</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link>
                    </Nav>
                    <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        <Button variant="outline-info">Search</Button>
                    </Form>
                </Navbar>
            </>
        );
    }
}

export default Dashboard;

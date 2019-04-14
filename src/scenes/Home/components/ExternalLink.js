import React from 'react'
import './ExternalLink.css';
import { Container, Col, Row, Card } from 'react-bootstrap';

class ExternalLink extends React.Component {
    render () {
        return (
            <Container>
                <Row className="justify-content-around">
                    <Col sm="5" className="external-link">
                        <img className="d-block w-100" src={require('./logo.png')} alt="First slide" />
                    </Col>
                    <Col sm="5" className="external-link">
                        <img className="d-block w-100" src={require('./logo.png')} alt="First slide" />
                    </Col>
                </Row>
            </Container>


        );
    }
}

export default ExternalLink;

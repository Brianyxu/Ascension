import React, { Component } from 'react';
import { Row, Container, Col } from 'react-bootstrap';


class Contact extends Component {
    render() {
        return (
            <div className="outer">
                <Container className="inner">

                    <Col sm={1}></Col>
                    <Col sm={10}>
                        <h3>Contact Us</h3>
                        <hr></hr>
                        <div>Address Line 1</div>
                        <div>Address Line 2</div>
                        <div>Address Line 3</div>
                        <br></br>
                        <div>Phone Number</div>
                        <div>Email</div>

                    </Col>
                    <Col sm={1}></Col>


                </Container></div>
        );
    }
}

export default Contact;
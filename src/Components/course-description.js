import React, { Component } from 'react';
import { CardDeck, Card, Container, Col } from 'react-bootstrap';
import Cat from "../Pictures/cat.jpg"

class CourseDescription extends Component {
    render() {
        return (
            <div className="outer">
                <Container className="inner">
                    <Col sm={10} className="coursecol">
                        <CardDeck>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={Cat} />
                                <Card.Body>
                                    <Card.Title>Math</Card.Title>
                                    <Card.Text>
                                        Taught by: ABC
                                        <br></br>
                                        Math Description
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={Cat} />
                                <Card.Body>
                                    <Card.Title>English</Card.Title>
                                    <Card.Text>
                                        Taught: DCE
                                        <br></br>
                                        English Description
                                 </Card.Text>
                                </Card.Body>
                            </Card>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={Cat} />
                                <Card.Body>
                                    <Card.Title>Other</Card.Title>
                                    <Card.Text>
                                        Taught by: Mr. testlonglastname
                                    <br></br>
                                        Other Description
                                 </Card.Text>
                                </Card.Body>
                            </Card>
                        </CardDeck>
                        <div className="break"></div>
                        <CardDeck>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={Cat} />
                                <Card.Body>
                                    <Card.Title>Math</Card.Title>
                                    <Card.Text>
                                        Taught by: ABC
                                        <br></br>
                                        Math Description
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={Cat} />
                                <Card.Body>
                                    <Card.Title>English</Card.Title>
                                    <Card.Text>
                                        Taught: DCE
                                        <br></br>
                                        English Description
                                 </Card.Text>
                                </Card.Body>
                            </Card>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={Cat} />
                                <Card.Body>
                                    <Card.Title>Other</Card.Title>
                                    <Card.Text>
                                        Taught by: Mr. testlonglastname
                                    <br></br>
                                        Other Description
                                 </Card.Text>
                                </Card.Body>
                            </Card>
                        </CardDeck>
                    </Col>

                </Container></div>
        );
    }
}

export default CourseDescription;
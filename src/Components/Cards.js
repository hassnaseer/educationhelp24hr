import * as React from 'react';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CardGroup from 'react-bootstrap/CardGroup';
import img from '../Images/ava1.png'
import img1 from '../Images/ava2.png'
import img2 from '../Images/ava4.png'
import img13 from '../Images/user.webp';
import img14 from '../Images/capture 12.PNG'
function GroupExample() {
    return (
        <>
            <Container>
                <Row>
                    <Col lg={4}><div class="card  mb-3" style={{ maxWidth: '18rem' }}>
                        <div class="card-header">
                            <div class="row">

                                <div class="col-3"><div class="pic">
                                    <img src={img13} />
                                </div></div>
                                <div class="col-7">Cust.ID: <br /><Rating
                                    style={{ maxWidth: 100 }}
                                    value={5}
                                    readOnly
                                />
                                    <b>US</b>
                                </div>
                            </div>
                        </div>
                        <Card.Body>
                            <Card.Title>Literature</Card.Title>
                            <Card.Text>
                            During my grads, I had an assignment due in 10 days and that
                  assignment had 7 pages of instructions. I was then busy with my exam preparation
                  and I hired an expert. I secured a decent grade in it.
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted">Written by: <b> Lionel Fogarty </b></small>
                        </Card.Footer>
                    </div></Col>
                    <Col lg={4}><div class="card  mb-3" style={{ maxWidth: '18rem' }}>
                        <div class="card-header">
                            <div class="row">
                                <div class="col-3"><div class="pic">
                                    <img src={img13} />
                                </div></div><br />
                                <div class="col-7">Cust.ID:  <br /><Rating
                                    style={{ maxWidth: 100 }}
                                    value={5}
                                    readOnly
                                />
                                    <b> Australia</b>
                                </div>
                            </div>
                        </div>
                        <Card.Body>
                            <Card.Title>Nursing</Card.Title>
                            <Card.Text>
                            During my PG nursing studies, I had received an assignment of 2
                  booklets with multiple questions. As per the instructions the filled booklets
                  need to be submitted within a week. The solution got 90%.
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted">Written by: <b> Kate Howarth  </b></small>
                        </Card.Footer>
                    </div></Col>
                    <Col lg={4}><div class="card  mb-3" style={{ maxWidth: '18rem' }}>
                        <div class="card-header">
                            <div class="row">
                                <div class="col-3"><div class="pic">
                                    <img src={img13} />
                                </div></div>
                                <div class="col-7">Cust.ID: <Rating
                                    style={{ maxWidth: 100 }}
                                    value={5}
                                    readOnly
                                />
                                    <b> Sidney</b>
                                </div>
                            </div>
                        </div>
                        <Card.Body>
                            <Card.Title>History</Card.Title>
                            <Card.Text>
                            I had an urgent need of a management assignment expert and
                  there is no
                  doubt I had received an excellent quality assignment within 3 days. The quality
                  of the
                  assignment was really good and I recommend this site.
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted">Written by: <b>Dipiya Jain</b></small>
                        </Card.Footer>
                    </div></Col>
                </Row>
            </Container >

            {/* <div className="container">
                <div className="row">
                    <div className="col">
                        <CardGroup>

                            <Card>
                                <div class="card  mb-3" style={{ maxWidth: '18rem' }}>
                                    <div class="card-header">
                                        <div class="row">

                                            <div class="col-3"><img src={img13} alt="" /></div><br />
                                            <div class="col-7">Cust.ID: <br /><Rating /><br />
                                                <b>Sidney, Australia</b>
                                            </div>
                                        </div>
                                    </div>
                                    <Card.Body>
                                        <Card.Title>Management</Card.Title>
                                        <Card.Text>
                                            I had an urgent need of a management assignment expert and
                                            there is no
                                            doubt I had received an excellent quality assignment within 3 days. The quality
                                            of the
                                            assignment was really good and I recommend this site.
                                        </Card.Text>
                                    </Card.Body>
                                    <Card.Footer>
                                        <small className="text-muted">Written by: <b> Dipiya Jain </b></small>
                                    </Card.Footer>
                                </div>
                            </Card>
                            <Card>
                                <div class="card  mb-3" style={{ maxWidth: '18rem' }}>
                                    <div class="card-header">
                                        <div class="row">
                                            <div class="col-3"><img src={img13} alt="" /></div><br />
                                            <div class="col-7">Cust.ID:  <br /><Rating /><br />
                                                <b> Australia</b>
                                            </div>
                                        </div>
                                    </div>
                                    <Card.Body>
                                        <Card.Title>Engineering</Card.Title>
                                        <Card.Text>
                                            Before 4 days of submission, I had found that my assignment on
                                            engineering
                                            is not even started. I had no other option than hiring the experts. I scored 90%
                                            in it.
                                        </Card.Text> <br />
                                    </Card.Body>
                                    <Card.Footer>
                                        <small className="text-muted">Written by: <b> Bhavana BP</b></small>
                                    </Card.Footer>
                                </div>
                            </Card>
                            <Card>
                                <div class="card  mb-3" style={{ maxWidth: '18rem' }}>
                                    <div class="card-header">
                                        <div class="row">
                                            <div class="col-3"><img src={img13} alt="" /></div>
                                            <div class="col-7">Cust.ID: <Rating />
                                                <b>Sidney, Australia</b>
                                            </div>
                                        </div>
                                    </div>
                                    <Card.Body>
                                        <Card.Title>Creative arts</Card.Title>
                                        <Card.Text>
                                            For the first time, I outsourced my homework and I am more than
                                            satisfied
                                            with the service of this site. I got an 89% score on my homework. Thank you.
                                        </Card.Text> <br />
                                    </Card.Body>
                                    <Card.Footer>
                                        <small className="text-muted">Written by: <b>Anita NAIR</b></small>
                                    </Card.Footer>
                                </div>
                            </Card>
                        </CardGroup>
                    </div>
                </div>
            </div> */}
        </>
    );
}

export default GroupExample;
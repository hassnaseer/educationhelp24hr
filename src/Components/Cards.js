import * as React from 'react';
import Rating from '../Components/Rating';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CardGroup from 'react-bootstrap/CardGroup';
import img13 from '../Images/user.webp';
import img14 from '../Images/capture 12.PNG'
function GroupExample() {
    return (
        <>
            <Container>
                <Row>
                    <Col><div class="card  mb-3" style={{ maxWidth: '18rem' }}>
                        <div class="card-header">
                            <div class="row">

                                <div class="col-3"><img src={img13} alt="" /></div><br />
                                <div class="col-7">Cust.ID: <br /><Rating /><br />
                                    <b>Canada</b>
                                </div>
                            </div>
                        </div>
                        <Card.Body>
                            <Card.Title>Management</Card.Title>
                            <Card.Text>
                                I had an urgent need of a management assignment expert and
                                there is no
                                doubt I had received an excellent quality assignment within 3 days.
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted">Written by: <b> Dipiya Jain </b></small>
                        </Card.Footer>
                    </div></Col>
                    <Col><div class="card  mb-3" style={{ maxWidth: '18rem' }}>
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
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted">Written by: <b> Bhavana BP</b></small>
                        </Card.Footer>
                    </div></Col>
                    <Col><div class="card  mb-3" style={{ maxWidth: '18rem' }}>
                        <div class="card-header">
                            <div class="row">
                                <div class="col-3"><img src={img13} alt="" /></div>
                                <div class="col-7">Cust.ID: <Rating />
                                    <b> Australia</b>
                                </div>
                            </div>
                        </div>
                        <Card.Body>
                            <Card.Title>Creative arts</Card.Title>
                            <Card.Text>
                                For the first time, I outsourced my homework and I am more than
                                satisfied
                                with the service of this site. I got an 89% score on my homework. Thank you.
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted">Written by: <b>Anita NAIR</b></small>
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
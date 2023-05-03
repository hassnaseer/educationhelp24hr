import React from 'react'
import Image from 'react-bootstrap/Image';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import img from '../../Images/3d-illustration-colorful-assignment-report-card-png-removebg-preview.png'
import img1 from '../../Images/92099655_114094236915126_2046583248330424320_n-768x397.jpg'
import img2 from '../../Images/rZ-q5UR5_400x400.jpg'
import Navbar from '../../Components/Navbar'
import Footer from '../../Components/Footer'

function Assignment() {
    return (
        <>
            <Navbar /><br />
            <div class="container"></div>
            <div class="jumbotron jumbotron-fluid" style={{ backgroundColor: '#5c616e' }}>
                <div class="container my-2">
                    <div class="row">
                        <div class="col-9">
                            <div class="container my-lg-5"></div>
                            <h1 style={{ color: 'white' }}> <b>Solve your Assignment <br /> Through Us
                            </b></h1><br />
                            <p style={{ color: 'white' }}>You Have to don’t worry about your assignment <br /> We are hear to help You In
                                your studies.
                            </p>
                        </div>
                        <div class="col">
                            <img src={img} class="img-fluid" alt="..." />
                        </div>

                    </div >
                </div>
            </div>
            <br />
            {/* <div className="container">
                <div className="row">
                    <div className="col-6">
                        <p class="lead">
                            GRAMMAR AND SPELLING SUGGESTIONS </p>
                        <p className="h1">Proofread with ease</p>
                        <p>Clean up typos, grammatical mistakes, and misplaced <br /> punctuation with just a few clicks.
                        </p>

                    </div>
                    <div className="col-6 text-center">
                        <img src="https://images.ctfassets.net/1e6ajr2k4140/1jvarNZ7Kroc2lhhCqGaVa/2b290e9a343f8c0a58e3a08f76d0766a/example-spelling.png?w=768&fm=webp" class="img-fluid" width={'500'} />
                    </div>
                </div>
            </div> */}
            <div className="container">
                <Container>
                    <Row>
                        <Col><img src="https://images.ctfassets.net/1e6ajr2k4140/3d3yPScyZRJFRQlwRtUOs8/f54d8026004e54f838deda7640269745/icon-ai-powered.svg" class="img-fluid" alt="Responsive image" width={'50'} />
                            <p class="lead"><strong>Submit plagiarism-free essays with flawless citations.</strong></p></Col>
                        <Col><img src="https://images.ctfassets.net/1e6ajr2k4140/4sX8DrqPp2EVb24X7r94LC/32848600ae7cdc92fc5642b1063bc135/Icons_lightning-paper.svg" class="img-fluid" alt="Responsive image" width={'50'} />
                            <p class="lead"><strong>Proofread instantly to catch mistakes and save you time.</strong></p></Col>
                        <Col><img src="https://images.ctfassets.net/1e6ajr2k4140/3d0oCxa4OCt41thDPOEwjK/9d8e382b09ae8620537a7c363fd71812/Icons__7_.svg" width={'50'} />
                            <p class="lead"><strong>94% students say Grammarly improve their grades.</strong></p></Col>
                        <Col><img src="https://images.ctfassets.net/1e6ajr2k4140/3weknGddo6mhAoOhoVLiXb/27dc8fb6fd7a83adc4ea662a91bb94d4/Icons_magnifying-glass.svg" width={'50'} />
                            <p class="lead"><strong>Proofread instantly to catch mistakes and save you time.</strong></p></Col>
                    </Row>
                </Container>
                <div className="container">
                    <h1 class="display-4 text-center">Everything You Need to Ace Your Assignments</h1>
                </div><br />
                <div className="container">
                    <Row >
                        <Col><br /><br />
                            <p class="lead">
                                GRAMMAR AND SPELLING SUGGESTIONS </p>
                            <p className="h1">Proofread with ease</p>
                            <p>Clean up typos, grammatical mistakes, and misplaced <br /> punctuation with just a few clicks.
                            </p>

                        </Col>
                        <Col>
                            <img src="https://images.ctfassets.net/1e6ajr2k4140/1jvarNZ7Kroc2lhhCqGaVa/2b290e9a343f8c0a58e3a08f76d0766a/example-spelling.png?w=768&fm=webp" width={'400'} />
                        </Col>
                    </Row><br />
                    <Row >
                        <Col>
                            <img src="https://images.ctfassets.net/1e6ajr2k4140/2MazXk2X9pUJ1VQUOhV4zi/e7d521b395522b9ad91d8ed215d28613/example-clarity.png?w=768&fm=webp" width={'400'} />
                        </Col>
                        <Col><br /><br />
                            <p class="lead">
                                FULL-SENTENCE REWRITES </p>
                            <p className="h1">Make your ideas clear</p>
                            <p>Clean up tangled, unclear sentences to get your point across.
                            </p>

                        </Col>
                    </Row><br />
                    <Row>
                        <Col><br /><br />
                            <p class="lead">
                                PLAGIARISM DETECTION </p>
                            <p className="h1">Cite your sources</p>
                            <p>Identify passages that may need citations <br /> and see sourcing information.
                            </p>

                        </Col>
                        <Col>
                            <img src="https://images.ctfassets.net/1e6ajr2k4140/6WeNfoOpFUdctguuVa3XF9/e169a1dea5beaffbe9c888f9e7534557/example-plagiarism.png?w=768&fm=webp" width={'400'} />
                        </Col>
                    </Row><br />
                    <Row md={2}>
                        <Col>
                            <img src="https://images.ctfassets.net/1e6ajr2k4140/5kHUJmCXiEHX4VfAXx07G4/3bf511cc30cdb6280c966ee57f5eb17c/Image.jpg?w=768&fm=webp" width={'400'} />
                        </Col>
                        <Col><br /><br />
                            <p class="lead">
                                TONE DETECTION </p>
                            <p className="h1">Strike the right tone</p>
                            <p>Understand how formal, confident, and direct your <br /> writing will sound to a reader.
                            </p>

                        </Col>
                    </Row><br />
                </div>

            </div><br />
            {/* <div class="text-center">
                <img src={img1} class="img-fluid" alt="" />
            </div> */}
            {/* <br /><br />
            <div class="container my-2">
                <div class="row">
                    <div class="col-9">
                        <div class="container my-lg-5"></div>
                        <h1> <b> "We have Simple Rule just solve assignment as your own Work on it as your own"</b></h1>
                    </div>
                    <div class="col">
                        <img src={img2} class="img-fluid" alt="..." />
                    </div>
                </div>
            </div> */}
            <Footer />
        </>
    )
}

export default Assignment

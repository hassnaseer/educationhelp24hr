import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Navbar from '../../Components/Navbar'
import Footer from '../../Components/Footer'
import img from '../../Images/about.png'
import { Link } from "react-router-dom";

function About() {
    return (
        <>
            <Navbar />
            <div class="jumbotron jumbotron-fluid">
                <img src={img} class="img-fluid" alt="..." width={'100%'} />
            </div>
            {/* <div className="container">
                <img src={img} class="img-fluid my-4" alt="..." width={'100%'} />
            </div> */}
            {/* <div class="jumbotron jumbotron-fluid" style={{ backgroundColor: '#5c616e' }}>
                <div class="container my-2">
                    <div class="row">
                        <div class="col-9">
                            <div class="container my-lg-5"></div>
                            <h1 style={{ color: 'white' }}> <b>
                            </b></h1>
                        </div>
                        <div class="col">
                            <img src="https://media.istockphoto.com/id/1282357363/photo/wooden-block-with-message-about-us.jpg?s=612x612&w=0&k=20&c=m07g22JpWSA89jedycdBQN3QN5VeYKZHb4sOciJ6S5g=" class="img-fluid my-4" alt="..." width={'100%'} />

                        </div>
                    </div>
                </div>
            </div> */}
            <br /><br />

            <div className="container">
                <Row>
                    <Col lg={6}>
                        <div className="container text-justify">

                            <p class="h1">
                                About Us </p>
                            <p> With their hectic schedules, university students need prompt support, and one of the services we provide for them is managing their statistics & programming assignments, homework, and projects. The Statistics Assignment Help is one such entity designed with the student’s busy schedule in mind. We put our efforts into offering high-quality statistics solutions to all our students so that they can get their desired grades. We give our clients exceptional statistics expert assistance so they may complete their academic assignments successfully. We have experts for 90+ statistical tools including SPSS, SAS, Python, R Programming, Excel, SQL, STATA, Tableau, Mintab etc. With data science, big data and machine learning algorithms gaining importance in college curriculum, we ensure that our statistics assignment experts are updated with the latest courses & curriculum.
                            </p>
                        </div>

                    </Col>
                    <Col lg={6}>
                        <div className="container text-justify">
                            <div className='my-5' >
                                <img className='my-5' src="https://media.istockphoto.com/id/1480802079/photo/contact-us-or-the-customer-support-connect-man-using-showing-and-touching-on-virtual-screen.jpg?s=612x612&w=0&k=20&c=jTMmrd3LN7hpSvvCIOerThoaUldtghpQjAfc46HaT9s=" width={'420'} />
                            </div>
                        </div>
                    </Col>

                </Row>
            </div >
            <div className="container d-flex justify-content-center">
                <div className="row">
                    <div className="col-md-6 text-center">
                        <img src="https://www.thestatisticsassignmenthelp.com/assets/img/vision.png" class="img-fluid" alt="Responsive image"></img>
                        <h3 className='text-center'>Vision</h3>
                        <p className='text-center'>Teach each student to organize, simplify and comprehend data.</p>
                    </div>

                    <div className="col-md-6 text-center">
                        <img src="https://www.thestatisticsassignmenthelp.com/assets/img/mission.png" class="img-fluid" alt="Responsive image"></img>
                        <h3 className='text-center'>Mission</h3>
                        <p className='text-center'>To develop knowledge and intellect of statistics students thus helping them to pursue productive and satisfying career.</p>
                    </div>
                </div>
            </div>
            <div className="container" style={{ backgroundColor: "#f0f0f0", width: '100%' }}>
                <div className="row">
                    <div className="col-md-3 my-4 text-center ">
                        <img src="https://www.thestatisticsassignmenthelp.com/assets/img/a-sub.png" class="img-fluid" alt="Responsive image" />
                        <h3 className='my-3'>93+</h3>
                        <h5>Subjects</h5>
                    </div>
                    <div className="col-md-3 my-4  text-center">
                        <img src="https://www.thestatisticsassignmenthelp.com/assets/img/a-exp.png" class="img-fluid" alt="Responsive image" />
                        <h3 className='my-3'>957+</h3>
                        <h5>Qualified Experts</h5>
                    </div>
                    <div className="col-md-3 my-4 text-center ">
                        <img src="https://www.thestatisticsassignmenthelp.com/assets/img/a-stu.png" class="img-fluid" alt="Responsive image" />
                        <h3 className='my-3'>14,894+</h3>
                        <h5>Registered Students</h5>
                    </div>
                    <div className="col-md-3 my-4 text-center ">
                        <img src="https://www.thestatisticsassignmenthelp.com/assets/img/a-del.png" class="img-fluid" alt="Responsive image" />
                        <h3 className='my-3'>75,892+</h3>
                        <h5>Order Delivered</h5>
                    </div>
                </div>
            </div>
            <div className="container my-4">
                <div class="container-fluid ">
                    <h1 className='text-center '> Here you find us!</h1><br />
                    <div class="map-responsive ">
                        <iframe src="https://www.google.com/maps/embed/v1/place?key=AIzaSyA0s1a7phLN0iaD6-UE7m4qP-z21pH0eSc&q=City Star Shopping Center, 51-B, Main Maulana Shaukat Ali Rd, Township Block 1 Sector B 1 Lahore, Punjab 54770, Pakistan" width="600" height="450" frameborder="0" style={{ border: '0' }} allowfullscreen></iframe>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default About

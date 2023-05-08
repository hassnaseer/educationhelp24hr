import React from 'react'
import img from '../../Images/istockphoto-1428873725-612x612-removebg-preview (1).png'
import img1 from '../../Images/domain-registration.png'
import img2 from '../../Images/viral-marketing.png'
import img3 from '../../Images/certificate (1).png'
import img4 from '../../Images/startup.png'
import img5 from '../../Images/PN0350101-S.jpg'
import img6 from '../../Images/TC0200101-S.jpg'
import img7 from '../../Images/ET0150101-S.jpg'
import Navbar from '../../Components/Navbar'
import Footer from '../../Components/Footer'
import { Link } from 'react-router-dom'

function Sample_Design() {
    return (
        <>
            <Navbar /><br />
            <div class="container my-2"></div>
            <div class="jumbotron jumbotron-fluid" style={{ backgroundColor: '#5c616e' }}>
                <div class="container my-2">
                    <div class="row">
                        <div class="col-lg-9">
                            <div class="container my-lg-5"></div>
                            <h1 style={{ color: 'white' }}> <b>Check The Sample Of our Assignment, Projects, Task, Papers & Thesis

                            </b></h1>
                        </div>
                        <div class="col-lg-3 text-center">
                            <img src={img} class="img-fluid" alt="..." />

                        </div>
                    </div>
                </div>
            </div>
            {/* <div class="text-center">
                <h1><b> Sample Design</b></h1>
            </div><br /> */}<br />
            <div class="container">
                <div class="row">
                    <div class="col-md-6">
                        <div class="card"><br />
                            <div class="text-center">
                                <img src={img1} class="rounded" alt="..." width="50" />
                            </div>
                            <div class="card-body">
                                <h5 class="card-title" style={{ textAlign: 'center' }}><b> Development</b></h5>
                                <p class="card-text" style={{ textAlign: 'center' }}>We have a professional team of development
                                    with Custom Coding and WordPress. wix built in websites</p>
                                <p style={{ textAlign: 'center' }}>
                                    <Link to="/Sample" type="button" class="btn btn-outline-danger">Read More</Link>
                                </p>
                            </div>
                        </div>
                    </div><br />
                    <div class="col-md-6">
                        <div class="card"><br />
                            <div class="text-center">
                                <img src={img2} class="rounded" alt="..." width="50" />
                            </div>
                            <div class="card-body">
                                <h5 class="card-title" style={{ textAlign: 'center' }}><b> Graphic design</b></h5>
                                <p class="card-text" style={{ textAlign: 'center' }}>There is a professional team of Graphic
                                    designer's who have a good grip on
                                    design as well as good grip on content.</p>
                                <p style={{ textAlign: 'center' }}>
                                    <Link to="/Sample" type="button" class="btn btn-outline-danger">Read More</Link>
                                </p>
                            </div>
                        </div>
                    </div><br />
                </div>
            </div>
            <br />
            <div class="container">
                <div class="row">
                    <div class="col-md-6">
                        <div class="card"><br />
                            <div class="text-center">
                                <img src={img3} class="rounded" alt="..." width="50" />
                            </div>
                            <div class="card-body">
                                <h5 class="card-title" style={{ textAlign: 'center' }}><b> Science Subjects</b></h5>
                                <p class="card-text" style={{ textAlign: 'center' }}>A good grip on a science subject with a good
                                    knowledge and a good thinking.</p>
                                <p style={{ textAlign: 'center' }}>
                                    <Link to="/Sample" type="button" class="btn btn-outline-danger">Read More</Link>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="card"><br />
                            <div class="text-center">
                                <img src={img4} class="rounded" alt="..." width="50" />
                            </div>
                            <div class="card-body">
                                <h5 class="card-title" style={{ textAlign: 'center' }}><b> Management</b></h5>
                                <p class="card-text" style={{ textAlign: 'center' }}>We have a very good and eligible person in a
                                    management fields and they all have a good grip in their own domain.</p>
                                <p style={{ textAlign: 'center' }}>
                                    <Link to="/Sample" type="button" class="btn btn-outline-danger">Read More</Link>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div><br />
            <div class="container">
                <h1> <b> File Cover</b></h1>
                <p><b> Designed for a client with proper research color theme work design. It was a redimate design with Proper
                    Hard work.</b></p>
            </div><br /><br />
            <div class="text-center">
                <img src={img5} class="img-fluid" alt="" />
            </div><br /><br />
            <div class="container">
                <h1> <b> Website Designer Brochure</b></h1>
                <p><b> Designed for a client with proper research color theme work design. It was a redimate design with Proper
                    Hard work.</b></p>
            </div><br />
            <div class="text-center">
                <img src={img6} class="img-fluid" alt="" />
            </div><br /><br />
            <div class="container">
                <h1> <b> Elementary School Brochure</b></h1>
                <p><b> Designed for a client with proper research color theme work design. It was a redimate design with Proper
                    Hard work.</b></p>
            </div><br />
            <div class="text-center">
                <img src={img7} class="img-fluid" alt="" />
            </div><br /><br />
            <Footer />
        </>
    )
}

export default Sample_Design

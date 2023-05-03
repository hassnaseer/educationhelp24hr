import React from 'react'

import img from '../../Images/new.png'
import img1 from '../../Images/coding-solution.avif'
import img2 from '../../Images/f1041931956c7aeef7cbf53e2ff41f97.jpg'
import img3 from '../../Images/d.png'
import img4 from '../../Images/exam-essay-writing-tips-tests_5595_1.jpg'
import Navbar from '../../Components/Navbar'
import Footer from '../../Components/Footer'

function Assignment_Solution() {
    return (
        <>
            <Navbar /><br />
            <div class="container my-2"></div>
            <div class="jumbotron jumbotron-fluid" style={{ backgroundColor: '#5c616e' }}>
                <div class="container my-2">
                    <div class="row">
                        <div class="col-9">
                            <div class="container my-lg-5"></div>
                            <h1 style={{ color: 'white' }}> <b> Our Best Sample Assignment Solution for Our Students!
                            </b></h1>
                        </div>
                        <div class="col">
                            <img src={img} class="img-fluid" alt="..." />

                        </div>
                    </div>
                </div>
            </div>
            <br /><br />
            <div class="container text-center">
                <div class="row">
                    <div class="col">
                        <img src={img1} class="img-fluid" alt="..." />
                    </div>
                    <div class="col">
                        <div class="container my-lg-5"></div>
                        <h1><b> Coding Solution</b></h1>
                        <p>Our best Coding solution for our client and he was happy and satisfied from our response. Our
                            passionate and hard work team work hard to compile the solution</p>
                    </div>
                </div>
            </div><br /><br />
            <div class="container text-center">
                <div class="row">
                    <div class="col">
                        <div class="container my-lg-5"></div>
                        <h1><b> English Essay</b></h1>
                        <p>OUR ENGLISH ESSAY WORK</p>
                    </div>
                    <div class="col">
                        <div class="container"></div>
                        <img src={img2} class="img-fluid" alt="..." width="auto" />
                    </div>
                    <div class="col">
                        <div class="container"></div>
                        <img src={img4} class="img-fluid" alt="..." width="auto" />
                    </div>
                </div>
            </div><br /><br />
            <div class="container text-center">
                <div class="row">
                    <div class="col">
                        <img src={img3} class="img-fluid" alt="..." />
                    </div>
                    <div class="col">
                        <div class="container my-lg-5"></div>
                        <h1><b> Medicine</b></h1>
                        <p>Are you looking for any medical Assignment? We will help you in your services Contact us with our
                            team and will help you in your services</p>
                    </div>
                </div>
            </div><br /><br /><br />
            <Footer />
        </>
    )
}

export default Assignment_Solution

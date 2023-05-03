import React from 'react'
import img from '../../Images/graphic-design.png'
import img5 from '../../Images/PN0350101-S.jpg'
import img6 from '../../Images/TC0200101-S.jpg'
import img7 from '../../Images/ET0150101-S.jpg'
import Navbar from '../../Components/Navbar'
import Footer from '../../Components/Footer'

function Sample() {
    return (
        <>
            <Navbar /><br />
            <div class="container my-2"></div>
            <div class="jumbotron jumbotron-fluid" style={{ backgroundColor: '#5c616e' }}>
                <div class="container my-2">
                    <div class="row">
                        <div class="col-9">
                            <div class="container my-lg-5"></div>
                            <h1 style={{ color: 'white' }}> <b>Our Best Graphic Design Solution

                            </b></h1>
                        </div>
                        <div class="col">
                            <img src={img} class="img-fluid" alt="..." />

                        </div>
                    </div>
                </div>
            </div>

            <br />

            <div class="container">
                <h1> <b> File Cover</b></h1>
                <p><b> Designed for a client with proper research color theme work design. It was a redimate design with Proper
                    Hard work.</b></p>
            </div><br /><br />
            <div class="text-center">
                <img src={img5} class="img-fluid" alt="Responsive image" />
            </div><br /><br />
            <div class="container">
                <h1> <b> Website Designer Brochure</b></h1>
                <p><b> Designed for a client with proper research color theme work design. It was a redimate design with Proper
                    Hard work.</b></p>
            </div><br />
            <div class="text-center">
                <img src={img6} class="img-fluid" alt="Responsive image" />
            </div><br /><br />
            <div class="container">
                <h1> <b> Elementary School Brochure</b></h1>
                <p><b> Designed for a client with proper research color theme work design. It was a redimate design with Proper
                    Hard work.</b></p>
            </div><br />
            <div class="text-center">
                <img src={img7} class="img-fluid" alt="Responsive image" />
            </div><br />
            <Footer />
        </>
    )
}

export default Sample

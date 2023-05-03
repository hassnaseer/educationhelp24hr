import React from 'react'
import img from '../../Images/images-removebg-preview-1 (1).png'
import Navbar from '../../Components/Navbar'
import Footer from '../../Components/Footer'

function Article() {
    return (
        <>
            <Navbar /><br />
            <div class="container my-2"></div>
            <div class="jumbotron jumbotron-fluid" style={{ backgroundColor: '#5c616e   ' }}>
                <div class="container my-2">
                    <div class="row">
                        <div class="col-9">
                            <div class="container my-lg-5"></div>
                            <h1 style={{ color: 'white' }}> <b> Want to write an article for your Study

                            </b></h1>
                            <p style={{ color: 'white' }}>Don’t Worry Hire us we will help you this in your services
                            </p>
                        </div>
                        <div class="col">
                            <img src={img} class="img-fluid" alt="..." />
                        </div>
                    </div>
                </div>
            </div>
            <div class="container">
                <h2 class="text-center">"If you worry about your writing an Article you don't have to be worry because
                    educationhelp24hr.com are hear to solve your problem we are hear just contact us and we will write it for you"
                </h2>
            </div><br />
            <Footer />
        </>
    )
}

export default Article

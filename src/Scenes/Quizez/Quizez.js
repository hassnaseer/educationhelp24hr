import React from 'react'

import img from '../../Images/ggg-removebg-preview.png'
import Navbar from '../../Components/Navbar'
import Footer from '../../Components/Footer'

function Quizez() {
    return (
        <>
            <Navbar /><br />
            {/* <div class="container my-2"></div> */}
            {/* <div class="container my-4">
                <div class="row mx-0">
                    <div class="col pt-4">
                        <h1 class="my-5 display-6 text-white"> <b> Facing Difficulties With Your <br />Online
                            Exams/Assignments?
                        </b></h1><h4 className="text-effect text-left" >We offer 50% discounts</h4>
                        <h4 className='my-4 text-white'>With Our Unbeatable Discounts, Access Top-Quality Assignment Tutoring Services At A Price That Works For You.</h4>
                        <p class="lead"><button type="button" style={{ borderRadius: '50px' }} class="btn btn-outline-light">
                            <b> Take A
                                Tour</b></button></p>
                    </div>
                    <div class="col text-center">
                        <img className='my-5' src="https://www.asignmenthelp.com/img/sale-bag.webp" alt="" style={{
                            width: '350px'
                        }} />


                    </div>
                </div>

            </div> */}
            <div class="jumbotron jumbotron-fluid" style={{ backgroundColor: '#5c616e' }}>
                <div class="container my-4">
                    <div class="row mx-0">
                        <div class="col-lg-9 pt-4">
                            <h1 className='my-2 mx-5 display-6 text-white' > <b> Face difficulty in solve <br /> your class Quiz

                            </b></h1>
                            <p className='my-2 mx-5 text-white' >Don’t Worry we will help you in solve your quiz
                            </p>
                        </div>
                        <div class="col-lg-3 text-center">
                            <img src={img} class="img-fluid my-5" alt="..." />
                        </div>
                    </div>
                </div>
            </div>
            <div class="container my-4" style={{ textAlign: 'center' }}>
                <h1>Reasons To Choose Our Quiz Writing Help</h1>
            </div>
            <div class="contaier">
            </div><br /><br />
            <div className="container">
                <div className="row mx-5">
                    <div className="col">
                        <p class="h4 ">1.Knowledge quiz</p>
                        <p class="text-justify ">This type is a set of educational questions about a specific topic, like an assessment. For marketers, it could be about Digital Marketing, or about email marketing, for example. </p>
                        <p class=" text-justify ">As long as the subject is relevant to your buyer persona, you’re doing it right.</p>
                        <p class=" text-justify ">The rule is: you have to create technical questions about it to evaluate how well the user knows the subject. </p>
                        <p class=" text-justify ">It’s interesting because it’s like a challenging game regarding something relevant for users.  </p>

                        <div className='text-center' >
                            <img src="https://media.istockphoto.com/id/1129349453/photo/we-would-like-to-volunteer-our-services.jpg?s=612x612&w=0&k=20&c=Y0NB49mFPz3VX_7V8ImgUovQ03ZaJmGsnnBshrkFNJ4=" class="img-fluid" alt="..." />
                        </div>
                    </div>
                </div>
            </div><br />
            <div className="container">
                <div className="row mx-5">
                    <div className="col">
                        <p class="h4 ">2.Survey</p>
                        <p class="text-justify ">The survey is a kind of quiz that involves questions and ratings. People can rate each item on a scale of 1 to 5, for example.  </p>
                        <p class=" text-justify ">It gives the participant precise choices and collects their opinion on some concept or approach.</p>
                        <div className="container text-center">
                            <img src="https://media.istockphoto.com/id/1468678659/photo/hands-documents-and-writing-with-a-woman-in-a-hospital-filling-out-an-application-or.jpg?s=612x612&w=0&k=20&c=5sItgWUOQQij6o_4V_sAogERtQ_uLKlzn2jwofam_mU=" class="img-fluid" alt="..." />

                        </div>
                    </div>
                </div>
            </div><br />
            <div className="container">
                <div className="row mx-5">
                    <div className="col">
                        <p class="h4 ">3.Personality test</p>
                        <p class="text-justify ">One of the most popular types of quizzes out there is the personality test.   </p>
                        <p class=" text-justify ">In this one, people provide some answers to discover more about them at the end of the game.</p>
                        <p class=" text-justify ">Each answer leads to a distinct category. The test plays with the curiosity that everyone has and the urge to know about themselves.</p>
                        <div className="container text-center">
                            <img src="https://media.istockphoto.com/id/1447388982/photo/business-man-thinking-about-strong-and-weak-points.jpg?s=612x612&w=0&k=20&c=TlZv6kMqogZndTmaWz7KmUff7PBe-mhztJxTqevvQPA=" class="img-fluid" alt="..." />

                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Quizez

import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import img from '../Images/about.png'
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
            {/* <div className="container">
                <div className='row '>
                    <div className="col">
                        <div class="d-flex flex-column">
                            <p class="h2 mx-5 text-center">About Us</p>
                            <p class=" mx-5">Trying to complete the assignment but getting stuck? Do not worry, we are here for you! All Assignment Experts is a global firm providing assignment help, homework help and online tutoring services to global students. We help students to complete their assignments as per their requirements and within the deadline. A solid conceptual foundation is what we want for the students who approach us. We have a team of 900+ experts from USA, UK, Canada, Malaysia, Singapore and other countries who can provide instant assignment help to students.</p>
                            <p class=" mx-5 ">The assignment solutions are written as per student’s instructions and specifications. We adhere to strict standards while working on the solution, then get the complete solution reviewed from an experienced expert, check for errors and make improvements and then the final work is delivered to your inbox within deadline. This makes us the best assignment helper online as we ensure highest quality in everything we do.</p>
                            <p class="h5 mx-5">Qualified Assignment Helpers </p>
                            <p class=" mx-5 ">All Assignment Experts has a team qualified experts or assignment helpers from leading universities across the world. They offer unique and extremely well written assignments and homework. We cater to students studying in the US, Canada, UK, New Zealand, Malaysia, Singapore and the list goes on. If you want to improve your conceptual understanding and boost your grades then you just need to contact us. Our homework helpers cover wide range of subjects. Our team can handle any subject from Finance to Programming, Economics, Accounting, Engineering, and many more. Based on what you are looking for, we assign the right expert for you. Whether you need <strong> <Link to="/Statistics"> <b> Statistics Assignment Help</b></Link> </strong> , accounting or finance homework help we are ready to help you out. If you need Programming assignment help then we have a team of nerdy programmers who work 24×7 to deliver well-commented and clean codes to you. If you need assistance with any subject then just have a discussion with the assignment helper. </p>
                            <p class="h5 mx-5">Get Instant Assignment Help Online </p>
                            <p class=" mx-5 ">We aim to educate our students and help them succeed in life. We provide step-by-step and well commented instant assignment help to students, so that they can understand the concepts used to complete the assignment. All Assignment Experts takes pride in helping the students with complete and well researched work. That is the reason we are rated very highly and all our students provide positive assignment help review for our experts. Our team not only help you with your assignments but we also believe in counselling and providing online tutoring via skype to ensure clarity of concepts. You can pay for assignment and get the work delivered to your inbox within the deadline. </p>
                            <p class="h5 mx-5">Why Choose All Assignment Experts? </p>
                            <p class=" mx-5 ">With so many assignment help websites, it is difficult to find a reliable and trustworthy assignment help company.Let us tell you that we ensure quality work which is reviewed by experienced expert once it is completed. The solution will be delivered before the deadline and the response to revision will be faster. This is what makes us one of the most trusted homework help provider. If you are looking for top assignment help USA or top assignment help UK, then you are at the right place. We hire the experts from same country to ensure the requirements are met properly. Only a local assignment helper can provide the right solution to you. We also offer Assignment Help for subjects like engineering, management, statistics, finance, accounting, programming etc. The experts will provide well-commented step-by-step work for better understanding of students. Based on your homework requirement, we will choose the best expert for you. Our team has access to multiple databases like Science Direct, Emerald etc which helps them to gather the right data for your work which helps in arriving at a right solution after analysis. We have a separate team for quality checking who review the solution. We check each work for originality, errors and quality and only after this check is done we share the work with you.Our assignment help Malaysia is also very popular as it caters to students from Kuala Lumpur and other cities in the country. They come to us for homework, projects and online tutoring service. Even after we deliver the assignment solution to you, we would happy to help you with any revisions or queries related to the work done.Please go through our pricing page, offers page, expert profile and reviews page to know more about the services we provide. You would be able to learn from our project help and thus will have more time for you own self- study, part-time job or extra-curricular activity that you might want to pursue. We believe that education should be all-rounded. It should include sports, hobbies and interests. Our assignment help service helps you to focus on your interests by delegating the not so interesting work to us.We understand that you might be a little anxious about taking outside help. Please berest assured that your confidentiality is guaranteed. All your details will remain only between the two of us. They are not and will not be shared with any other. You can also make payments very safely and securely through various channels. So, if you one of those students who need the right guidance for your assignment, homework or projects and want to boost your grades, then share your requirements at <span className='text-secondary' >support@asignmenthelps.com</span>  or get in touch with our 24*7 customer support on Live Chat. We assure you to provide the most reliable and quality help for all orders. If you want to know about services in detail, then please visit our blog section. Our experts have penned few study tips, career advice and conceptual work in the blogs. </p>
                        </div>
                    </div>
                </div >
            </div >
            <div className="" style={{ backgroundColor: "#f0f0f0" }}>
                <h1 className='text-center'  >Why Choose All Assignment Experts?</h1> <br />
                <div class="container">
                    <div class="row row-cols-1 row-cols-md-3 g-4">
                        <div class="col text-center">
                            <img src="https://allassignmentexperts.com/assets/img/icon/ontimedelevery2.png" class="img-fluid" alt="Responsive image"></img>
                            <h5 class="card-title"><b> On Time Delivery</b></h5>
                            <p class="card-text">Quality and accurate work delivered to your inbox well before the deadline</p>
                        </div>
                        <div class="col text-center">
                            <img src="https://allassignmentexperts.com/assets/img/icon/PlagiarismFreeService2.png" class="img-fluid" alt="Responsive image"></img>
                            <h5 class="card-title"><b> Original Workce</b></h5>
                            <p class="card-text">Get original and error-free solution for all assignments and homework
                            </p>
                        </div>
                        <div class="col text-center">
                            <img src="https://allassignmentexperts.com/assets/img/icon/247support.png" class="img-fluid" alt="Responsive image"></img>
                            <h5 class="card-title"><b> 24×7 Support</b></h5>
                            <p class="card-text">Round the clock assistance to help with revisions and queries
                            </p>
                        </div>
                    </div><br />
                    <div class="row row-cols-1 row-cols-md-3 g-4">
                        <div class="col text-center">
                            <img src="https://allassignmentexperts.com/assets/img/icon/piggy-bank.png" class="img-fluid" alt="Responsive image"></img>
                            <h5 class="card-title"><b> Affordable Pricing</b></h5>
                            <p class="card-text">Pocket-friendly prices & flexibility to make partial payments</p>
                        </div>
                        <div class="col text-center">
                            <img src="https://allassignmentexperts.com/assets/img/icon/Qualified_experts.png" class="img-fluid" alt="Responsive image"></img>
                            <h5 class="card-title"><b> Nerdy Experts</b></h5>
                            <p class="card-text">Well qualified and experienced experts committed to deliver high quality solutions
                            </p>
                        </div>
                        <div class="col text-center">
                            <img src="https://allassignmentexperts.com/assets/img/icon/Confidentiality.png" class="img-fluid" alt="Responsive image"></img>
                            <h5 class="card-title"><b> Confidentiality</b></h5>
                            <p class="card-text">Strict cadence to ensure the privacy of customers
                            </p>
                        </div>
                    </div>
                </div>
            </div> */}
            <div className="container">
                <Row>
                    <Col>
                        <div className="container text-justify">
                            <div className='my-5' >
                                <p class="h1">
                                    About Us </p>
                                <p> With their hectic schedules, university students need prompt support, and one of the services we provide for them is managing their statistics & programming assignments, homework, and projects. The Statistics Assignment Help is one such entity designed with the student’s busy schedule in mind. We put our efforts into offering high-quality statistics solutions to all our students so that they can get their desired grades. We give our clients exceptional statistics expert assistance so they may complete their academic assignments successfully. We have experts for 90+ statistical tools including SPSS, SAS, Python, R Programming, Excel, SQL, STATA, Tableau, Mintab etc. With data science, big data and machine learning algorithms gaining importance in college curriculum, we ensure that our statistics assignment experts are updated with the latest courses & curriculum.
                                </p>
                            </div>
                        </div>
                    </Col>
                    <Col>
                        <div className="container text-justify">
                            <div className='my-5' >
                                <img className='my-5' src="https://media.istockphoto.com/id/1480802079/photo/contact-us-or-the-customer-support-connect-man-using-showing-and-touching-on-virtual-screen.jpg?s=612x612&w=0&k=20&c=jTMmrd3LN7hpSvvCIOerThoaUldtghpQjAfc46HaT9s=" width={'450'} />
                            </div>
                        </div>
                    </Col>

                </Row>
            </div>
            <div className="container d-flex justify-content-center">
                <div className="row">
                    <div className="col text-center">
                        <img src="https://www.thestatisticsassignmenthelp.com/assets/img/vision.png" class="img-fluid" alt="Responsive image"></img>
                        <h3 className='text-center'>Vision</h3>
                        <p className='text-center'>Teach each student to organize, simplify and comprehend data.</p>
                    </div>

                    <div className="col text-center">
                        <img src="https://www.thestatisticsassignmenthelp.com/assets/img/mission.png" class="img-fluid" alt="Responsive image"></img>
                        <h3 className='text-center'>Mission</h3>
                        <p className='text-center'>To develop knowledge and intellect of statistics students thus helping them to pursue productive and satisfying career.</p>
                    </div>
                </div>
            </div>
            <div className="container" style={{ backgroundColor: "#f0f0f0", width: '100%' }}>
                <div className="row ">
                    <div className="col mx-5">
                        <img src="https://www.thestatisticsassignmenthelp.com/assets/img/a-sub.png" class="img-fluid" alt="Responsive image" />
                        <h3>93+</h3>
                        <h5>Subjects</h5>
                    </div>
                    <div className="col mx-5">
                        <img src="https://www.thestatisticsassignmenthelp.com/assets/img/a-exp.png" class="img-fluid" alt="Responsive image" />
                        <h3>957+</h3>
                        <h5>Qualified Experts</h5>
                    </div>
                    <div className="col mx-5">
                        <img src="https://www.thestatisticsassignmenthelp.com/assets/img/a-stu.png" class="img-fluid" alt="Responsive image" />
                        <h3>14,894+</h3>
                        <h5>Registered Students</h5>
                    </div>
                    <div className="col mx-5">
                        <img src="https://www.thestatisticsassignmenthelp.com/assets/img/a-del.png" class="img-fluid" alt="Responsive image" />
                        <h3>75,892+</h3>
                        <h5>Order Delivered</h5>
                    </div>
                </div>
            </div><br />
            <div className="container">
                <div class="container-fluid">
                    <div class="map-responsive">
                        <iframe src="https://www.google.com/maps/embed/v1/place?key=AIzaSyA0s1a7phLN0iaD6-UE7m4qP-z21pH0eSc&q=City Star Shopping Center, 51-B, Main Maulana Shaukat Ali Rd, Township Block 1 Sector B 1 Lahore, Punjab 54770, Pakistan" width="600" height="450" frameborder="0" style={{ border: '0' }} allowfullscreen></iframe>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default About

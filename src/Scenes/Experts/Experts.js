import React from 'react'
import '../../Scenes/Experts/Index2.css'
import img from '../../Images/Mesa-de-trabajo-1.png'
import img1 from '../../Images/ava1.png'
import img2 from '../../Images/ava2.png'
import img3 from '../../Images/ava4.png'
import img4 from '../../Images/y10.png'
import img5 from '../../Images/y11.png'
import Navbar from '../../Components/Navbar'
import Footer from '../../Components/Footer'



function Experts() {
    return (
        <>
            <Navbar /><br />
            <div class="jumbotron jumbotron-fluid" style={{ backgroundColor: '#5c616e' }}>
                <div class="container my-2">
                    <div class="row">
                        <div class="col-9">
                            <div class="container my-lg-5"></div>
                            <h1 className='mx-5' style={{ color: 'white' }}> <b> Meet With Our Expert Team <br />
                                Professionals in their Field
                            </b></h1>
                        </div>
                        <div class="col">
                            <img src={img} class="img-fluid" alt="..." />

                        </div>
                    </div>
                </div>
            </div>
            <br /><br />
            <div className="container">
                <h1 className='text-center' >How We Choose Our Experts?</h1>
                <p className='text-center mx-5 ' >We hire only the best experts. Every time you place an order with ‘The Statistics Assignment Help’, be assured of accurate and plagiarism-free solution.</p>
            </div>
            <div class="container">
                <div class="row">
                    <div class="col-md-3 col-sm-6">
                        <div class="serviceBox">
                            <h3 class="title">Step 1    </h3>
                            <div class="service-icon">
                                <img src="https://www.thestatisticsassignmenthelp.com/assets/img/icons/e-expert.png" alt="" />
                                <h3 class="title">90+</h3>
                                <p class="description">Experts with years of experience considered</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3 col-sm-6">
                        <div class="serviceBox purple">
                            <h3 class="title">Step 2</h3>
                            <div class="service-icon">
                                <img src="https://www.thestatisticsassignmenthelp.com/assets/img/icons/e-test.png" alt="" />
                                <h3 class="title">72%</h3>
                                <p class="description">Are shortlisted for rigorous aptitude and tests</p>
                            </div>

                        </div>
                    </div>
                    <div class="col-md-3 col-sm-6">
                        <div class="serviceBox purple">
                            <h3 class="title">Step 3</h3>
                            <div class="service-icon">
                                <img src="https://www.thestatisticsassignmenthelp.com/assets/img/icons/e-interview.png" alt="" />
                                <h3 class="title">25%</h3>
                                <p class="description">Get an opportunity to go through 3 technical interviews</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3 col-sm-6">
                        <div class="serviceBox purple">
                            <h3 class="title">Step 4</h3>
                            <div class="service-icon">
                                <img src="https://www.thestatisticsassignmenthelp.com/assets/img/icons/e-join.png" alt="" />
                                <h3 class="title">5%</h3>
                                <p class="description">Join our team</p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <p className="text-center mx-5">We have a team of 550+ experts, who cater to 80+ statistics subjects. We keep refining our expert team based on upcoming technologies. Below is the list of some of the most popular experts who have solved more than 500 statistics assignments so far.</p>
            </div>
            <div class="container">
                <div class="row mx-5">
                    <div class="col-md-4 col-sm-6">
                        <div class="our-team">
                            <div class="pic">
                                <img src="https://allassignmentexperts.com/img/experts/19.png" alt="" />
                            </div>

                            <div class="team-content">
                                <h3 class="title">Aiden G.</h3>
                                <span class="post">Education: PhD from Curtin University, Malaysia</span>
                            </div>
                            <p class="description">
                                Current Job: Novelist (12+ Years) <br /><br />
                                Areas Of Interest: Literary Nonfiction, History, Political Science
                            </p>
                        </div>
                    </div>
                    <div class="col-md-4 col-sm-6">
                        <div class="our-team">
                            <div class="pic">
                                <img src="https://allassignmentexperts.com/img/experts/31.png" alt="" />
                            </div>

                            <div class="team-content">
                                <h3 class="title">Carlisle D.</h3>
                                <span class="post">Education: PhD in Computer Science from Institute of Technology</span>
                            </div>
                            <p class="description">
                                Current Job: Online Shopping Startup (3+ Years) - Lead Programmer <br />
                                Areas Of Interest: JavaScript, Python, C++ & Database, Designing games
                            </p>
                        </div>
                    </div>
                    <div class="col-md-4 col-sm-6">
                        <div class="our-team">
                            <div class="pic">
                                <img src="https://allassignmentexperts.com/img/experts/28.png" alt="" />
                            </div>

                            <div class="team-content">
                                <h3 class="title">Isabella J.</h3>
                                <span class="post">Education: PhD in Statistics from University of Warwick</span>
                            </div>
                            <p class="description">
                                Current Job: Data Scientist (7+ Years) <br /><br />
                                Areas Of Interest: Multivariate Analysis, Statistical Genetics, Bioinformatics
                            </p>
                        </div>
                    </div>
                </div>
            </div><br />
            <div class="container">
                <div class="row">
                    <div class="col-md-4 col-sm-6">
                        <div class="our-team">
                            <div class="pic">
                                <img src="https://allassignmentexperts.com/img/experts/52.png" alt="" />
                            </div>

                            <div class="team-content">
                                <h3 class="title">Mark J.</h3>
                                <span class="post">Education: Programming Graduate from University of Lisbon</span>
                            </div>
                            <p class="description">
                                Current Job: Corporate Job (6+ Years) - Healthcare Research Programmer <br />
                                Areas Of Interest: JavaScript, Swift, Ruby, Artificial Intelligence
                            </p>
                        </div>
                    </div>
                    <div class="col-md-4 col-sm-6">
                        <div class="our-team">
                            <div class="pic">
                                <img src="https://allassignmentexperts.com/img/experts/66.png" alt="" />
                            </div>

                            <div class="team-content">
                                <h3 class="title">Andrew H.</h3>
                                <span class="post">Education: MBA - The University of Nottingham</span>
                            </div>
                            <p class="description">
                                Current Job: Professor at Durham University <br />
                                Areas Of Interest: Strategy, Innovation, Corporate Governance, Leadership
                            </p>
                        </div>
                    </div>
                    <div class="col-md-4 col-sm-6">
                        <div class="our-team">
                            <div class="pic">
                                <img src="https://allassignmentexperts.com/img/experts/42.png" alt="" />
                            </div>

                            <div class="team-content">
                                <h3 class="title">Jayson K.</h3>
                                <span class="post">Education: Pursuing PhD - University of Texas</span>
                            </div>
                            <p class="description">
                                Current Job: Entrepreneur (12+ Years) <br /><br />
                                Areas Of Interest: Product Launch, Product Distribution, Brand Management, NPD
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    )
}

export default Experts

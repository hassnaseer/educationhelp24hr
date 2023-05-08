import React from 'react'
import img from '../../Images/Chemistry.png'
import Navbar from '../../Components/Navbar'
import Footer from '../../Components/Footer'

function Chemistry() {
    return (
        <>
            <Navbar />
            <div class="container my-2"></div>
            <div class="jumbotron jumbotron-fluid" style={{ backgroundColor: '#5c616e' }}>
                <div class="container my-2">
                    <div class="row">
                        <div class="col-lg-9">
                            <div class="container my-lg-5"></div>
                            <h1 className='mx-5 my-2' style={{ color: 'white' }}> <b> Chemistry Assignment


                            </b></h1>
                            <p className='mx-5 my-5' style={{ color: 'white' }}>Don’t worry we are hear

                            </p>
                        </div>
                        <div class="col-lg-3 text-center">
                            <img src={img} class="img-fluid my-5" alt="..." />

                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className='row '>
                    <div className="col">
                        <p class=" h2 mx-5">Chemistry Assignment Help</p>
                        <p class=" mx-5">Chemistry assignment help is a specialized online study help service for students, looking for quick and quality chemistry assignments completion. At Tutorhelpdesk.com we offer academic help support all around the globe in 24x7! All our assignments are plagiarism free and we offer assignment help service for wide array of subjects related to chemistry like organic chemistry, electrochemistry, inorganic chemistry, etc. with 100% accuracy and cogency. Despite our best effort if ever any of our solved assignment undergoes amendment need, we offer 100% free-of-cost modification service. Allied to our chemistry assignment help service, we also offer online solution clarification service for additional support for our user clients.</p>
                        <p class=" h3 mx-5">What is Chemistry?</p>
                        <p class=" mx-5 ">Chemistry is another physical science which has its roots attached to Physics. It is a study of  the composition and the behaviours of matter. The basic unit of the study of chemistry is considered to ‘atom.’ Etymology of the word chemistry can be traced to the word ‘alchemy’ which has been practiced largely in the Middle Eastern Countries of the world. The term alchemy on the other hand traces its roots to the Persian word kimia.</p>
                        <p class=" mx-5 ">Many scholars have termed Chemistry as a core science as it connects the relation between other fields of sciences such as biology, physics, geology etc. We at tutorhelpdesk offer chemistry assignment help for students of all grades and specialization.</p>
                        <p class=" h3 mx-5">Chemistry Homework Help</p>
                        <p class=" mx-5 ">We at Tutorhelpdesk offer expert and authentic Chemistry homework help for students of almost all academic levels. We appoint only subject-matter-expert tutors with solid online tutoring and assignment help background.  We take our best effort in offering time bound delivery of the job we undertake and all our completed homework projects are original and written with unique approach. It is extremely easy to hire chemistry assignment help online: students need to contact livechat to discuss about the homework. Once the formality gets done, online chemistry tutors start working on the project and they deliver the homework within deadline after driving the solution. </p>
                        <p class=" h5 mx-5">We offer  chemistry assignment help in following areas:</p>
                        <p class=" mx-5"> <li className='text-primary'>Atomic Structure</li>
                            <li className='text-primary' >States of matters</li>
                            <li className='text-primary' >Chemical Thermodynamics</li>
                            <li className='text-primary' >Chemical Equilibrium</li>
                            <li className='text-primary' >Chemical Kinetics</li>
                            <li className='text-primary' >Electrochemistry</li>
                            <li className='text-primary' >Organic Chemistry</li>
                            <li className='text-primary' >Inorganic Chemistry</li>
                            <li className='text-primary' >Radioactivity</li>
                            <li className='text-primary' >Principles of Extraction of Metals</li>
                            <li className='text-primary' >Alcohols</li>
                            <li className='text-primary' >Phenols</li>
                            <li className='text-primary' >Ethers</li>
                        </p>
                    </div>
                </div >
            </div>
            <Footer />
        </>
    )
}

export default Chemistry

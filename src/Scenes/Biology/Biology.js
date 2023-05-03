import React from 'react'
import Navbar from '../../Components/Navbar'
import Footer from '../../Components/Footer'

function Calculus() {
    return (
        <>
            <Navbar />
            <div class="container my-2"></div>
            <div class="jumbotron jumbotron-fluid" style={{ backgroundColor: '#5c616e' }}>
                <div class="container my-2">
                    <div class="row">
                        <div class="col-9">
                            <div class="container my-lg-5"></div>
                            <h1 className='mx-5' style={{ color: 'white' }}> <b> Biology Assignment
                            </b></h1>
                            <p className='mx-5' style={{ color: 'white' }}>Don’t worry we are hear
                            </p>
                        </div>
                        <div class="col">
                            <img src="https://media.istockphoto.com/id/158649166/photo/lab-experiment.jpg?s=612x612&w=0&k=20&c=geIx7AFR5lznZ8gl7NyXqJBHfi5bQIX2Cf9fWOj7meY=" class="img-fluid my-4" alt="..." />
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className='row '>
                    <div className="col">
                        <p class="h2 mx-5">Biology</p>
                        <p class=" mx-5">Biology is another school of study of natural sciences.  It constitutes the science that understands the natural organisms their evolution, growth and taxonomy. The term biology is derived from the Greek word ‘bios’ that means life. Biology was studied in the ancient times as natural philosophy in the Egypt and Indian Subcontinent. Aristotle was the father of the study of biology while the study of medicine which was done even before Aristotle was done by Hippocrates.</p>
                        <p class=" mx-5 ">The study of Biology grew in leaps and bounds after the invention of the microscope by Antony van Leeuwenhoek. The researchers discovered living organisms like the spermatozoa, bacteria and infusoria which were not seen otherwise with naked eyes.</p>
                        <p class=" mx-5 ">Some other significant contributions to various forms of biological sciences were of Jean-Baptiste Lamarck, Humboldt, Alfred Russel Wallace and Charles Darwin. Darwin is by far the most significant contributor to the theory of evolution. The theory of survival of the fittest decoded the concepts of evolution and extinction.</p>
                        <p class=" mx-5 ">In present times the latest studies in the field of genetics and cloning are the vibrant areas of research in biological sciences. Some of the popular branches of biology are Aerobiology, Biochemistry ,Biophysics , Botany, Ethology  and Population ecology. </p>
                        <p class="h5 mx-5">We offer Biology Assignment help in following areas: </p>
                        <p class=" mx-5"> <li className='text-primary'>General Biology</li>
                            <li className='text-primary' >Botany</li>
                            <li className='text-primary' >Plant Biology</li>
                            <li className='text-primary' >Zoology</li>
                            <li className='text-primary' >Anatomy</li>
                            <li className='text-primary' >Cell Biology</li>
                            <li className='text-primary' >Microscopys</li>
                            <li className='text-primary' >Classic Genetics</li>
                            <li className='text-primary' >DNA and RNA</li>
                            <li className='text-primary' >The Chromosome Theory</li>
                            <li className='text-primary' >Evolution</li>
                            <li className='text-primary' >Ecology</li>
                            <li className='text-primary' >Microbiology  </li>
                        </p>
                    </div>
                </div >
            </div>
            <Footer />
        </>
    )
}

export default Calculus

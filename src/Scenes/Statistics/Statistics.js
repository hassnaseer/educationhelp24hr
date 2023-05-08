import React from 'react'
import img from '../../Images/images-removebg-preview.png'
import img1 from '../../Images/statistics-assignment_5656b61ac02ee.jpg'
import img2 from '../../Images/Statistics.png'
import Navbar from '../../Components/Navbar';
import Footer from '../../Components/Footer'
function Statistics() {
    return (
        <>
            <Navbar /><br />
            <div class="container my-2"></div>
            <div class="jumbotron jumbotron-fluid" style={{ backgroundColor: '#5c616e' }}>
                <div class="container my-2">
                    <div class="row">
                        <div class="col-lg-9">
                            <div class="container my-lg-5"></div>
                            <h1 className='mx-5 my-5' style={{ color: 'white' }}> <b> Statistic Assignment
                            </b></h1>
                            <p className='mx-5 my-5' style={{ color: 'white' }}>You Have to don’t worry about your assignment <br /> We are hear to help You In your studies.

                            </p>
                        </div>
                        <div class="col-lg-3 text-center">
                            <img src={img2} class="img-fluid my-5" alt="..." />

                        </div>
                    </div>
                </div>
            </div>
            <br /><br />
            {/* <div class="text-center">
                <img src={img1} class="img-fluid" alt="Responsive image" />
            </div><br /> */}
            <div className="container">
                <div className='row '>
                    <div className="col">
                        <p class="h2 mx-5">Statistics Assignment Help</p>
                        <p class=" mx-5">Complexity of statistics subject is well known. Statistics involves solving complex problems having multi-dimensional data using computational methods. Information technology has played a vital role in handling and simplifying such complex methods and scenarios but students face a lot of difficulties in understanding the right application of statistical concepts and implementing them using statistical softwares. Our statistics assignment help service has been strategized and simplified to help students in learning statistics problem solving. We use latest and genuine tools & softwares to make statistics easy. We deliver step by step help with statistics assignments which is self-explanatory to make students understand the method of solving problems without any inconvenience.</p>
                        <p class=" mx-5">We provide statistics assignment help in all areas like probability theory, random variables, distribution function, standard deviation, hypothesis testing, binomial distribution, poisson distribution, normal distribution, analysis of variance (ANOVA), chi-squared test, linear regression etc. Apart from basic statistics problems, we also help in statistical softwares like SAS, SPSS, R, Minitab, Eviews, Megastat, Gretl, JMP, STATA etc. These softwares are widely used by statistics professors for statistical analysis, business forecasting, data mining, operations research and project management.</p>
                        <p class="h3 mx-5">What is Statistics?</p>
                        <p class=" mx-5 ">Statistics is the science and practice of developing human knowledge through the use of empirical data expressed in quantitative form. Statistics is normally considered a distinct mathematical science instead of a branch of mathematics. Statistical analysis involves the process of collecting and analyzing data and then summarizing the data into a numerical form. Statistics provides tools for prediction and forecasting through the use of data and statistical models. Statistics is applicable to a wide variety of academic disciplines such as Finance, Insurance, and Economics. The appearance of advanced statistics techniques and software has widened the scope of application of Statistics to further areas.</p>
                        <p class="h3 mx-5">Statistics Homework Help</p>
                        <p class=" mx-5 ">f you are seeking for statistics assignment help then we are available 24X7 for you. Our statistics assignment tutors are qualified experts having a good hand on various statistics problems and applications. We also assist student in their statistics dissertations and projects involving collection of economic data and analyzing it through the use of softwares.</p>
                        <p class="h3 mx-5">Why Choose Tutorhelpdesk.com for Statistics Assignment Writing?</p>
                        <p class=" mx-5 ">The prominent features of our Statistics Homework help include:
                            <li>Practising statisticians and actuarians to help you: Our panel of tutors possess practical knowledge of statistics, so that their solutions are right on the mark</li>
                            <li>Comfortable with SAS, MATLAB, Minitab, SPSS, STATA, R and other prevalent tools which help provide answers using the prescribed softwares.</li>
                            <li>Experience which allows us to turn around original, accurate, plagiarism free statistics assignment solutions within hours!</li>
                        </p>
                    </div>
                </div >
            </div>
            <div className="container">
                <div className='row '>
                    <div className="col">
                        <p class="h5 mx-5">We offer Statistics Assignment help in following areas:</p>
                        <p class=" mx-5"> <li className='text-primary'>Probability theory</li>
                            <li className='text-primary' >Random variables</li>
                            <li className='text-primary' >Distribution function</li>
                            <li className='text-primary' >Expected value and variance</li>
                            <li className='text-primary' >Chebyshev’s Inequality</li>
                            <li className='text-primary' >Law of Large Numbers</li>
                            <li className='text-primary' >Linear regression</li>
                            <li className='text-primary' >Contingency tables</li>
                            <li className='text-primary' >Distribution-free tests</li>
                        </p>
                    </div>
                </div >
            </div>
            <Footer />
        </>
    )
}

export default Statistics

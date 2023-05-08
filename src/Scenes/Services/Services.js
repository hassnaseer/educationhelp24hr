import React from 'react'
import img from '../../Images/svgexport-1.png'
import Navbar from '../../Components/Navbar'
import Footer from '../../Components/Footer'
function Services() {
  return (
    <>
      <Navbar /><br />
      <div class="container my-2"></div>

      <div class="jumbotron jumbotron-fluid" style={{ backgroundColor: '#5c616e' }}>
        <div class="container">
          <div class="row">
            <div class="col-lg-9">
              <div class="container my-lg-5"></div>
              <h1 className="text-white my-5" > <b>Our Services

              </b></h1>
              <p className="text-white my-5" >Order now and get professional help</p>
            </div>
            <div class="col-lg-3 text-center">
              <img src={img} class="img-fluid my-4" alt="..." />
            </div>
          </div>
        </div>
      </div>
      <div class="text-center my-2">
        <h1><b> WHO ARE WE?</b></h1>
      </div><br />
      <div class="container">
        <div class="text-center">
          <p> The Assignment Hero is the leading assignment help provider worldwide. We have an exclusive assignment help
            service for students who are pursuing their degrees in Universities of various fields.

            We have a team of assignment writing experts from top universities to help these students in the best
            possible manner. Each of these academic writers possesses extensive knowledge and expertise. They draft
            top-notch and plagiarism-free assignments.
          </p>
        </div>
      </div><br />
      <div class="text-center">
        <h1><b> SERVICES THAT WE OFFER?​</b></h1>
      </div><br />
      <div class="container">
        <div class="row row-cols-1 row-cols-md-3 g-4">
          <div class="col-md-4">
            <div class="card h-20">
              <div class="card-body">
                <h5 class="card-title text-center"><b> Graphic Design</b></h5>
                <p class="card-title text-center"> Provide all Illustration and design with best creativity</p>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card h-20">
              <div class="card-body">
                <h5 class="card-title text-center"><b> Online homework assignment help</b></h5>
                <p class="card-title text-center"> We will write Your assignment solution </p>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card h-20">

              <div class="card-body">
                <h5 class="card-title text-center"><b> Web development</b></h5>
                <p class="card-title text-center"> All WordPress and custom coding with frontend and backend
                </p>
              </div>
            </div>
          </div>
        </div>
      </div><br />
      <div class="container">
        <div class="row row-cols-1 row-cols-md-3 g-4">
          <div class="col-md-4">
            <div class="card h-20">
              <div class="card-body">
                <h5 class="card-title text-center"><b> Brand strategy</b></h5>
                <p class="card-title text-center">We provide and plan your business strategy</p>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card h-20">
              <div class="card-body">
                <h5 class="card-title text-center"><b> Consultant</b></h5>
                <p class="card-title text-center">We will help you in selection of your course</p>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card h-20">
              <div class="card-body">
                <h5 class="card-title text-center"><b> Custom essay writing </b></h5>
                <p class="card-title text-center">We will write essay </p>
              </div>
            </div>
          </div>
        </div>
      </div><br />
      <div class="container">
        <div class="row row-cols-1 row-cols-md-3 g-4">
          <div class="col-md-4">
            <div class="card h-20">
              <div class="card-body">
                <h5 class="card-title text-center"><b> Paper solve</b></h5>
                <p class="card-title text-center"> We will solve your finals and mid paper  </p>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card h-20">
              <div class="card-body">
                <h5 class="card-title text-center"><b> Coursework help</b></h5>
                <p class="card-title text-center"> We will help you in your course work </p>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card h-20">

              <div class="card-body">
                <h5 class="card-title text-center"><b>Quiz</b></h5>
                <p class="card-title text-center"> We will also solve your Quiz </p>
              </div>
            </div>
          </div>
        </div>
      </div><br />
      <div style={{ backgroundColor: 'rgb(92, 97, 110)' }} ><br /><br />
        <div class="container">
          <div class="row row-cols-1 row-cols-md-3 g-4">
            <div class="col">
              <div class="card h-20">
                <div class="card-body">
                  <h5 class="card-title text-center"><b> 24/7 Help</b></h5>
                  <p class="card-text">24/7 customer support is a model where customers can get their issues resolved anytime they need assistance. This is the support that is available 24 hours a day and 7 days a week.</p>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card h-20">
                <div class="card-body">
                  <h5 class="card-title text-center"><b> On Time Delivery​</b></h5>
                  <p class="card-text">Meeting customer’s expectations and delivery requirements must be a top priority for our company  to succeed. However, meeting those expectations is easier said than done. 
                  </p>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card h-20">
                <div class="card-body">
                  <h5 class="card-title"><b> Unlimited Revision</b></h5>
                  <p class="card-text">Here at your satisfaction is our top priority that’s why we are happy to offer you  UNLIMITED REVISIONS  on all your orders. In order to maintain  the quality of our service, we offer for the first 60 days after delivery.</p>
                </div>
              </div>
            </div>
          </div>
        </div><br /><br /><br />
      </div><br /><br /><br />
      <Footer />
    </>
  )
}

export default Services

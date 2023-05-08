import React from 'react'
import Navbar from '../../Components/Navbar'
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import img from '../../Images/bird.png'
import img1 from '../../Images/Capture12-removebg-preview.png'
import img2 from '../../Images/capture 12.PNG'
import img13 from '../../Images/user.webp';
import img14 from '../../Images/Capture12-removebg-preview.png'
import img19 from '../../Images/Testimonials-picture.png'
import Footer from '../../Components/Footer'

function Reviews() {
  return (
    <>
      <Navbar /><br />
      <div class="container my-2"></div>
      <div class="jumbotron jumbotron-fluid" style={{ backgroundColor: '#5c616e' }}>
        <div class="container my-2">
          <div class="row">
            <div class="col-lg-9 my-5">
              <div class="container my-lg-5"></div>
              <h1 className='text-white my-5'> <b> Honest User Testimonials

              </b></h1>
              <p className='text-white my-2'>Find out how our customers feel about working
                with us.
              </p>
              <img src={img1} class="img-fluid" alt="..." />
            </div>
            <div class="col-lg-3 text-center">
              <img src={img} class="img-fluid my-5" alt="..." />
              <img src="/3d-illustration-colorful-assignment-report-card-png-removebg-preview.png" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div class="container my-2" style={{ textAlign: 'center' }}>
        <h1><b> RATING BREAKDOWN
        </b></h1><br />
        <img src={img2} alt="" />
      </div>
      <div class="container my-2" style={{ textAlign: 'center' }}>
        <h1><b> Our Stats Say More Than Any Words
        </b></h1><br />
      </div>
      <div className="container ">
        <div class="row">
          <div class="col-lg-4 col-sm-12">
            <div class="card  mb-3" style={{ maxWidth: '18rem' }}>
              <div class="card-header ">
                <div class="row">
                  <div class="col-3"><img src={img13} alt="" /></div><br />
                  <div class="col-9">Cust.ID: <br /> <Rating
                    style={{ maxWidth: 100 }}
                    value={4}
                    readOnly
                  />
                    <b>Sidney, Australia</b>
                  </div>
                </div>
              </div>
              <div class="card-body">
                <h5 class="card-title">Management</h5>
                <p class="card-text">I had an urgent need of a management assignment expert and
                  there is no
                  doubt I had received an excellent quality assignment within 3 days. The quality
                  of the
                  assignment was really good and I recommend this site.</p>
              </div>
              <div class="card-footer bg-transparent ">Written by: <b> Dipiya Jain</b>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-sm-12">
            <div class="card  mb-3" style={{ maxWidth: '18rem' }}>
              <div class="card-header">
                <div class="row">
                  <div class="col-3"><img src={img13} alt="" /></div><br />
                  <div class="col-9">Cust.ID: <br /> <Rating
                    style={{ maxWidth: 100 }}
                    value={4}
                    readOnly
                  />
                    <b>US</b>
                  </div>
                </div>
              </div>
              <div class="card-body">
                <h5 class="card-title">Engineering</h5>
                <p class="card-text">Before 4 days of submission, I had found that my assignment on
                  engineering
                  is not even started. I had no other option than hiring the experts. I scored 90%
                  in it.
                  <br /><br /><br />
                </p>
              </div>
              <div class="card-footer bg-transparent">Written by: <b> Bhavana BP</b></div>
            </div>
          </div>
          <div class="col-lg-4 col-sm-12">
            <div class="card mb-3" style={{ maxWidth: '18rem' }}>
              <div class="card-header">
                <div class="row">
                  <div class="col-3"><img src={img13} alt="" /></div><br />
                  <div class="col-9">Cust.ID: <br /> <Rating
                    style={{ maxWidth: 100 }}
                    value={4}
                    readOnly
                  />
                    <b>US</b>
                  </div>
                </div>


              </div>
              <div class="card-body">
                <h5 class="card-title">Creative arts</h5>
                <p class="card-text">For the first time, I outsourced my homework and I am more than
                  satisfied
                  with the service of this site. I got an 89% score on my homework. Thank you.
                  <br /><br /><br />
                </p>
              </div>
              <div class="card-footer bg-transparent">Written by: <b>Anita NAIR</b></div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div class="row">
          <div class="col-lg-4 col-sm-12">
            <div class="card mb-3" style={{ maxWidth: '18rem' }}>
              <div class="card-header">
                <div class="row">
                  <div class="col-3"><img src={img13} alt="" /></div><br />
                  <div class="col-9">Cust.ID: <br /> <Rating
                    style={{ maxWidth: 100 }}
                    value={5}
                    readOnly
                  />
                    <b>Canada</b>
                  </div>
                </div>
              </div>
              <div class="card-body">
                <h5 class="card-title">Management</h5>
                <p class="card-text">My specialization is project management and I was literally
                  stuck in between my assignment. I found no decent recourses to help me out in
                  that situation. I scored really well in it.</p>
              </div><br />
              <div class="card-footer bg-transparent">Written by: <b>
                Iris Burgoyne
              </b>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-sm-12">
            <div class="card mb-3" style={{ maxWidth: '18rem' }}>
              <div class="card-header">
                <div class="row">
                  <div class="col-3"><img src={img13} alt="" /></div><br />
                  <div class="col-9">Cust.ID: <br /> <Rating
                    style={{ maxWidth: 100 }}
                    value={5}
                    readOnly
                  />
                    <b>US</b>
                  </div>
                </div>


              </div>
              <div class="card-body">
                <h5 class="card-title">Literature</h5>
                <p class="card-text">During my grads, I had an assignment due in 10 days and that
                  assignment had 7 pages of instructions. I was then busy with my exam preparation
                  and I hired an expert. I secured a decent grade in it.
                </p>
              </div>
              <div class="card-footer bg-transparent ">Written by: <b>
                Lionel Fogarty</b></div>
            </div>
          </div>
          <div class="col-lg-4 col-sm-12">
            <div class="card mb-3" style={{ maxWidth: '18rem' }}>
              <div class="card-header ">
                <div class="row">
                  <div class="col-3"><img src={img13} alt="" /></div><br />
                  <div class="col-9">Cust.ID: <br /> <Rating
                    style={{ maxWidth: 100 }}
                    value={4}
                    readOnly
                  />
                    <b>US</b>
                  </div>
                </div>


              </div>
              <div class="card-body">
                <h5 class="card-title">Nursing</h5>
                <p class="card-text">During my PG nursing studies, I had received an assignment of 2
                  booklets with multiple questions. As per the instructions the filled booklets
                  need to be submitted within a week. The solution got 90%.
                </p>
              </div>
              <div class="card-footer bg-transparent ">Written by: <b>
                Kate Howarth</b></div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div class="row">
          <div class="col">
            <div class="card mb-3" style={{ maxWidth: '18rem' }}>
              <div class="card-header">
                <div class="row">
                  <div class="col-3"><img src={img13} alt="" /></div><br />
                  <div class="col-9">Cust.ID: <br /> <Rating
                    style={{ maxWidth: 100 }}
                    value={4}
                    readOnly
                  />
                    <b>Sidney, Australia</b>
                  </div>
                </div>
              </div>
              <div class="card-body">
                <h5 class="card-title">History</h5>
                <p class="card-text">I had an urgent need of a management assignment expert and
                  there is no
                  doubt I had received an excellent quality assignment within 3 days. The quality
                  of the
                  assignment was really good and I recommend this site.</p>
              </div>
              <div class="card-footer bg-transparent">Written by: <b> Dipiya Jain</b>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-sm-12">
            <div class="card mb-3" style={{ maxWidth: '18rem' }}>
              <div class="card-header ">
                <div class="row">
                  <div class="col-3"><img src={img13} alt="" /></div><br />
                  <div class="col-9">Cust.ID: <br /> <Rating
                    style={{ maxWidth: 100 }}
                    value={3}
                    readOnly
                  />
                    <b>Australia</b>
                  </div>
                </div>


              </div>
              <div class="card-body">
                <h5 class="card-title">English</h5>
                <p class="card-text">During my PG studies, I suddenly got an assignment of 15 pages
                  due in 1 week. I was totally clueless at that time and had no idea how to
                  proceed with it. I hired an expert and got 95%
                </p>
              </div><br />
              <div class="card-footer bg-transparent">Written by: <b>
                Geordie Williamson
              </b></div>
            </div>
          </div>
          <div class="col-lg-4 col-sm-12">
            <div class="card mb-3" style={{ maxWidth: '18rem' }}>
              <div class="card-header ">
                <div class="row">
                  <div class="col-3"><img src={img13} alt="" /></div><br />
                  <div class="col-9">Cust.ID: <br /> <Rating
                    style={{ maxWidth: 100 }}
                    value={4}
                    readOnly
                  />
                    <b>Australia</b>
                  </div>
                </div>


              </div>
              <div class="card-body">
                <h5 class="card-title">Statistics</h5>
                <p class="card-text">Being a student of statistics, I am familiar with complicated
                  assignments. However, once I came across an assignment where I was running out
                  of resources. I hired and expert to complete it and this assignment got 98%.
                </p>
              </div>
              <div class="card-footer bg-transparent">Written by: <b>
                Nainika Gautam</b></div>
            </div>
          </div>
        </div>
      </div>
      <div class="container my-2" style={{ textAlign: 'center' }}>
        <h2><b> What Makes Our Reviews Trustworthy
        </b></h2><br />
        <div class="container">
          <div class="row">
            <div class="col-md-6">
              <img src={img19} alt="" />
            </div>
            <div class="col-md-6">
              <br /><br />
              <p>Only real customers, who received a completed order, can leave a review.</p>

              <p> Every feedback is based on our customers’ experience and will never be deleted.</p>


              <p> We listen to what you say: your reviews help us to control the work of our writers.</p>
            </div>
          </div>
        </div>
      </div>
      <div class="container">
        <h1 class="text-center">The Assignment Hero Review - 98% Students Are Happy With Our Service. Here Is The Reason!
        </h1>
      </div><br />
      <div class="container">We, at MyAssignmenthelp.com, take pride in boasting the fact that we have been able to
        satisfy 98 percent of our clients with our services. In fact, you can see for yourself how happy each of those
        customers when you browse through the MyAssignmenthelp reviews section. Undoubtedly, the credit goes to our
        qualified writers who deliver unmatched.
        customer-satisfying services along with some exciting features:</div>
      <div class="container"><b> On-time delivery:</b> Our experts have always kept their promise of on-time delivery of
        assignment help. In fact, a majority of the MyAssignment Help reviews appreciate our services as we have
        saved numerous clients from missing their deadlines.</div>

      <div class="container"><b> Most affordable services: </b> Another feature of MyAssignmenthelp.com that is loved by
        all
        our customers is the pricing of our services. In fact, most users, who have availed our services, mention it
        in their MyAssignmenthelp reviews.</div>
      <div class="container"> <b> Plagiarism-free support:</b> Since the inception of this company, our experts have
        provided
        students with plagiarism-free content. A lot of students have received better grades and appreciation from the
        professors due to our 100% original content. <br />
        Besides, the promise of 100% confidentiality, supervision of 5000+ PhD experts, and rework guarantee have taken
        our services to the next level. The MyAssignmenthelp reviews are just admiration of those unparalleled services.
      </div>
      <Footer />
    </>
  )
}

export default Reviews

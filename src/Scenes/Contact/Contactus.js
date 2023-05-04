import React, { useRef } from 'react'
import emailjs from '@emailjs/browser';
import { MailIcon } from 'react-mail-icon'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import img45 from '../../Images/123.png'
import img from '../../Images/contact-us-3483604-2912020.webp';
import img1 from '../../Images/whatsapp-2317203__340.webp';
import Navbar from '../../Components/Navbar'
import Footer from '../../Components/Footer';
import { Container } from 'react-bootstrap';
import { useState } from 'react';

function Contactus() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [message, setMesage] = useState("")
  const [time, setTime] = useState("")
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.send('service_1sw7nhf', 'template_yvuaccs', {
      from_name: name,
      to_name: "Support@asignmenthelps.com",
      message: `
      email: ${email}
      phoneNumber: ${phone}
      Dead Line: ${time}
      Message : ${message}`
    }, '0ioiXilLahVOhf2dO')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  };
  return (
    <>
      <Navbar /><br />
      <div class="container my-2"></div>
      <div class=" a jumbotron jumbotron-fluid" >

        <div class="container my-3">
          <div class="row ">
            <div class="col"><br /><br />
              <h1 class="my-3 mx-4 display-6 text-white"> <b> Contact Us With Our Professional!
              </b></h1><br /><br />
              <h4 className='my-4 mx-4 text-white'>
                Feel free to contact us by Facebook, Instagram or by email and we will be sure to get back to you as
                soon as possible. We are one click away.</h4>
              <p class="lead mx-4"><button type="button" style={{ borderRadius: '50px' }} class="btn btn-outline-light">
                <b> Take A
                  Tour</b></button></p>
            </div>
            <div class="col my-5">
              <img className='my-5 mx-0' src="https://media.istockphoto.com/id/1053986724/photo/contact-us-symbols-on-toy-blocks-contact-us-and-crm-concept.jpg?s=612x612&w=0&k=20&c=QZUO3M1G7NfrDhoWCN3kzvh9IWOz1Nmopeb90nnqOWg=" alt="" style={{ width: '450px' }} />


            </div>

          </div>

        </div>    <br />
      </div>
      {/* <div class="card bg-dark text-white">
  <img class="card-img" src="https://media.istockphoto.com/id/1382197757/photo/panoramic-image-of-handsome-businessman-using-smartphone-for-business-communication.jpg?s=612x612&w=0&k=20&c=MsQ9yU2kRQW4ulrwrBwpEgVRpfT8QgUW7tzlJ43WIws=" alt="Card image" />
  <div class="card-img-overlay ">
    <h3 class="card-title text-center ">Contact Us With Our Professional!</h3><br />
    <p class="h5 card-text text-center">Get in touch and a member of Tech Solutions Pro will always be here and happy to help.
          Feel free to contact us by Facebook, Instagram or by email and we will be sure to get back to you as
          soon as possible. We are one click away.</p>
    <p class="s card-text lead text-center"><button type="button" style={{ borderRadius: '50px' }} class="btn btn-outline-light">
                                <b> Contact Us</b></button></p>
  </div>
</div> */}

      {/* <div class=" a jumbotron jumbotron-fluid" >
                <div class="container my-4">
                    <div class="row mx-0">
                        <br /><br />
                            <h1 class="display-6 text-white my-5 text-center"> <b> Contact Us With Our Professional!
                            </b></h1><br /><br />
                            <h4 class="text-center text-white my-5">Get in touch and a member of Tech Solutions Pro will always be here and happy to help.
          Feel free to contact us by Facebook, Instagram or by email and we will be sure to get back to you as
          soon as possible. We are one click away.</h4>
                            <h4 className='my-4 text-white text-center'></h4>
                            <p class="lead text-center"><button type="button" style={{ borderRadius: '50px' }} class="btn btn-outline-light">
                                <b> Contact Us</b></button></p> 
                    </div>

                </div>    <br />
            </div> */}

      {/* <div class="jumbotron jumbotron-fluid" style={{ backgroundColor: '#5c616e' }}>
        <div class="container my-2">
          <div class="row">
            <div class="col-9">
              <div class="container my-lg-5"></div>
              <h1 className='mx-5' style={{ color: 'white' }}> <b> Contact Us With Our Professional!
              </b></h1>
            </div>
            <div class="col">
              <img src={img} class="img-fluid" alt="..." />
            </div>
          </div>
        </div>
      </div><br /> */}
      {/* <div class="container my-2 text-center" >
        <h1><b> Contact Us</b></h1><br />
        <p class="text-left mx-4">Get in touch and a member of Tech Solutions Pro will always be here and happy to help.
          Feel free to contact us by Facebook, Instagram or by email and we will be sure to get back to you as
          soon as possible. We are one click away.</p>
      </div> */}<br />
      <div className="container">
        <Row>
          <Col md={6}>
            <div className="container text-justify">
              <div className='my-5' >
                <p class="h3">
                  Get in touch </p>
                <p> Please feel free to contact us for any query. Our team will get back to you soon.
                </p>
                <Col md={{ span: 6, offset: 3 }}> <hr />
                </Col>
                <div  >
                  <p class="h3">
                    Our Contacts </p>
                  <p > <i class="bi bi-envelope"></i><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope" viewBox="0 0 16 16">
                    <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />
                  </svg> Email: support@asignmenthelps.com
                  </p>

                  <p><i class="bi bi-telephone"></i><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-telephone" viewBox="0 0 16 16">
                    <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
                  </svg> Phone/Whatsapp: + 1 564-544-6567
                  </p>
                </div>

                {/* <div div class="card text-white " style={{ maxWidth: '8rem' }}>

                  <p><a href=""><i class="bi bi-facebook"></i><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16">
                    <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                  </svg>
                    facebook.com </a>
                  </p>
                </div><br />
                <div class="card text-white " style={{ maxWidth: '8rem' }}>
                  <p><a href=""><i class="bi bi-instagram"></i><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-instagram" viewBox="0 0 16 16">
                    <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
                  </svg>Instagram </a></p>
                </div><br />
                <div class="card text-white " style={{ maxWidth: '8rem' }}>

                  <p> <a href=""><i class="bi bi-geo-alt-fill"></i><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
                    <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
                  </svg>Location </a></p></div> */}
              </div>
            </div>



          </Col>
          <Col md={6}>
            <div className="container" style={{ backgroundColor: '#d7d6d9', borderRadius: '4%' }}>
              <form ref={form} onSubmit={sendEmail}>
                <div class="form-group">
                  <h1 className='text-center'>Send a message</h1>
                  <label for="exampleFormControlInput1">Name</label>
                  <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="e.g john" value={name} onChange={(e) => setName(e.target.value)} />
                </div>
                <div class="form-group">
                  <label for="exampleFormControlInput1">Email address</label>
                  <input type="email" class="form-control" id="exampleFormControlInput1"
                    placeholder="e.g @example.com" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div class="form-group">
                  <label for="exampleFormControlSelect1">Your Task</label>
                  <select class="form-control" id="exampleFormControlSelect1">
                    <option>Assignment</option>
                    <option>Paper</option>
                    <option>Quiz</option>
                  </select>
                </div>
                <div class="form-group">
                  <label for="exampleFormControlInput1">Phone</label>
                  <input type="number" class="form-control" id="exampleFormControlInput1"
                    placeholder="e.g +12345678" value={phone} onChange={(e) => setPhone(e.target.value)} />
                </div>
                <div class="form-group">
                  <label for="exampleFormControlInput1">DeadLine</label>
                  <input type="date" class="form-control" id="exampleFormControlInput1"
                    value={time} onChange={(e) => setTime(e.target.value)} />
                </div>
                <div class="form-group">
                  <label for="exampleFormControlTextarea1">About Your Task</label>
                  <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" value={message} onChange={(e) => setMesage(e.target.value)}></textarea>
                </div><br />
                <div class="form-group">
                  <button class="btn btn-danger" name="submit" type="submit" value="Send">Submit</button>
                </div>
              </form><br />
            </div>
          </Col>
        </Row>
      </div>
      <Footer />
    </>
  )
}

export default Contactus

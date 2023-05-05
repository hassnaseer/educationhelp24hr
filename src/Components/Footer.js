import React, { useRef } from 'react'
import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { Link } from 'react-router-dom';
import img from '../Images/logo3.png';
import img1 from '../Images/Capture.PNG'
import img2 from '../Images/Capture1.PNG'
import img3 from '../Images/Capture2.PNG'
function Footer() {
    const form = useRef();
    const [name, setName] = useState("")
    const [message, setMesage] = useState("")
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.send('service_1sw7nhf', 'template_yvuaccs', {
            from_name: name,
            to_name: "Support@asignmenthelps.com",
            message: `
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
            <div class="container">
                <div class="elementor-widget-container">
                    <hr style={{ height: '1px', border: 'none', color: '#000', backgroundColor: '#000' }} />
                </div>
            </div>
            <div class="container">
                <div class="row">
                    <div class="col"> <Link to="/Home"> <img
                        src={img} alt=""
                        style={{ width: '200px' }} /></Link></div>
                    <div class="col">
                        <ul class="navbar-nav mr-auto">
                            <li class="nav-item">
                                <h1 className='text-dark'> <b> Discover </b> </h1>
                                <Link class="nav-link" to="/Services"> <b> Services</b></Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/Assignment"> <b> Assignment</b></Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/Reviews"> <b> Review</b></Link>
                            </li>

                            <li class="nav-item">
                                <Link class="nav-link" to="/Contact-us"> <b> Contact-us</b></Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/Experts"> <b> Experts</b></Link>
                            </li>

                        </ul>
                    </div>
                    <div class="col">
                        <h1 className='text-dark'><b>Contact</b></h1>
                        <h6><img src={img1} alt="" /><Link to="tel:+15645446567" >+ 1 564-544-6567
                        </Link></h6>
                        <h6><img src={img2} alt="" /><Link to="https://chatwith.io/s/642c1d420fe9d" target="_blank"
                            rel="noreferrer">+ 1 564-544-6567
                        </Link></h6>
                        <h6 className='d-flex'><img src={img3} alt="" /> <Link to="mailto:support@asignmenthelps.com"
                        >support@asignmenthelps.com
                        </Link></h6>

                    </div>

                    <div class="col">
                        <h1 className='text-dark'> <b> Newsletter</b></h1>
                        <form ref={form} onSubmit={sendEmail}>
                            <div class="form-group">
                                <label for="exampleFormControlInput1">Name</label>
                                <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="e.g john" value={name} onChange={(e) => setName(e.target.value)} />
                            </div>
                            <div class="form-group">
                                <label for="exampleFormControlTextarea1">Message</label>
                                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" value={message} onChange={(e) => setMesage(e.target.value)}></textarea>
                            </div> <br />
                            <button class="btn btn-danger" name="submit" type="submit" value="Send">Submit</button>
                        </form>
                    </div>
                </div>

            </div>
            <br />
        </>
    )
}

export default Footer

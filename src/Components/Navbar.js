import React from 'react'
import img from '../Images/Black Grey Simple Library Logo (4).png';
import { Link } from "react-router-dom";
import './index.css';

function Navbar() {
    return (
        <>
            <nav className="navbar fixed-top navbar navbar-expand-lg navbar navbar-light" style={{ backgroundColor: 'white' }}>
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/Home"><img classNameName='mx-4'
                        src={img} alt=" " width="70"
                        height="70" /></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#main_nav"
                        aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="main_nav">
                        <ul className="navbar-nav">
                            <li className="nav-item active"> <Link className="nav-link text-dark" to="/Home"> <b> Home
                            </b></Link>
                            </li>

                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle text-dark" to="/" data-bs-toggle="dropdown">
                                    <b> Services</b></Link>
                                <ul className="dropdown-menu" style={{ backgroundColor: 'white' }}>
                                    {/* <li><Link className="dropdown-item text-dark" to="/Assignment"> <b> Assignment </b></Link>
                                        <ul className="submenu dropdown-menu" style={{ backgroundColor: 'white' }}>
                                            <li><Link className="dropdown-item text-dark" to="/Computer_Science"> <b> Computer Science
                                            </b></Link></li>
                                            <li><Link className="dropdown-item text-dark" to="/Finance"> <b> Finance</b></Link></li>
                                            <li><Link className="dropdown-item text-dark" to="/Management"> <b> Management</b> </Link></li>
                                            <li><Link className="dropdown-item text-dark" to="/Statistics"> <b> Statistics</b></Link></li>
                                            <li><Link className="dropdown-item text-dark" to="/Accounting"> <b> Accounting</b></Link></li>
                                            <li><Link className="dropdown-item text-dark" to="/Physics"> <b> Physics</b></Link></li>
                                            <li><Link className="dropdown-item text-dark" to="/Math"> <b> Math</b></Link></li>
                                            <li><Link className="dropdown-item text-dark" to="/Chemistry"> <b> Chemistry</b></Link></li>
                                            <li><Link className="dropdown-item text-dark" to="/Biology"> <b> Biology</b></Link></li>

                                        </ul>
                                    </li> */}
                                    <li><Link className="dropdown-item text-dark" to="/Quizez"> <b> Quizez</b> </Link></li>
                                    {/* <li><Link className="dropdown-item text-dark" to="/Paper"> <b> Paper</b> </Link></li> */}
                                    <li><Link className="dropdown-item text-dark" to="/Thesis"> <b> Thesis</b> </Link></li>
                                    {/* <li><Link className="dropdown-item text-dark" to="/Article"> <b> Article</b> </Link></li> */}
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                    {/* <Link className="nav-link dropdown-toggle text-dark" to="/" data-bs-toggle="dropdown">
                                        <b> Assignment</b></Link> */}
                                <ul className="submenu dropdown-menu" style={{ backgroundColor: 'white' }}>
                                    {/* <li><Link className="dropdown-item text-dark" to="/Computer_Science"> <b> Computer Science
                                    </b></Link></li>
                                    <li><Link className="dropdown-item text-dark" to="/Finance"> <b> Finance</b></Link></li>
                                    <li><Link className="dropdown-item text-dark" to="/Management"> <b> Management</b> </Link></li>
                                    <li><Link className="dropdown-item text-dark" to="/Statistics"> <b> Statistics</b></Link></li> */}
                                    {/* <li><Link className="dropdown-item text-dark" to="/Accounting"> <b> Accounting</b></Link></li>
                                    <li><Link className="dropdown-item text-dark" to="/Physics"> <b> Physics</b></Link></li>
                                    <li><Link className="dropdown-item text-dark" to="/Math"> <b> Math</b></Link></li>
                                    <li><Link className="dropdown-item text-dark" to="/Chemistry"> <b> Chemistry</b></Link></li>
                                    <li><Link className="dropdown-item text-dark" to="/Biology"> <b> Biology</b></Link></li> */}

                                </ul>
                                {/* <ul className="dropdown-menu" style={{ backgroundColor: 'white' }}>
                                        <li><Link className="dropdown-item text-dark" to="/Assignment"> <b> Assignment </b></Link>
                                            <ul className="submenu dropdown-menu" style={{ backgroundColor: 'white' }}>
                                                <li><Link className="dropdown-item text-dark" to="/Computer_Science"> <b> Computer Science
                                                </b></Link></li>
                                                <li><Link className="dropdown-item text-dark" to="/Finance"> <b> Finance</b></Link></li>
                                                <li><Link className="dropdown-item text-dark" to="/Management"> <b> Management</b> </Link></li>
                                                <li><Link className="dropdown-item text-dark" to="/Statistics"> <b> Statistics</b></Link></li>
                                                <li><Link className="dropdown-item text-dark" to="/Accounting"> <b> Accounting</b></Link></li>
                                                <li><Link className="dropdown-item text-dark" to="/Physics"> <b> Physics</b></Link></li>
                                                <li><Link className="dropdown-item text-dark" to="/Math"> <b> Math</b></Link></li>
                                                <li><Link className="dropdown-item text-dark" to="/Chemistry"> <b> Chemistry</b></Link></li>
                                                <li><Link className="dropdown-item text-dark" to="/Biology"> <b> Biology</b></Link></li>

                                            </ul>
                                        </li>
                                        <li><Link className="dropdown-item text-dark" to="/quizez"> <b> Quizez</b> </Link></li>
                                        <li><Link className="dropdown-item text-dark" to="/Paper"> <b> Paper</b> </Link></li>
                                        <li><Link className="dropdown-item text-dark" to="/Thesis"> <b> Thesis</b> </Link></li>
                                        <li><Link className="dropdown-item text-dark" to="/Article"> <b> Article</b> </Link></li>
                                    </ul> */}
                            </li>
                            {/* <li className="nav-item active"> <Link className="nav-link text-dark" to="/Reviews"> <b>
                                Reviews</b></Link>
                            </li> */}
                            <li className="nav-item active"> <Link className="nav-link text-dark" to="/Contact-us"> <b>
                                Contact-us</b></Link>
                            </li>
                            <li className="nav-item active"> <Link className="nav-link text-dark" to="/About-us"> <b> About-us
                            </b></Link>
                            </li>
                            {/* <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle text-dark" to="/" data-bs-toggle="dropdown">
                                    <b> Sample</b></Link>
                                <ul className="dropdown-menu" style={{ backgroundColor: 'white' }}>
                                    <li><Link className="dropdown-item text-dark" to="/Sample_design"> <b> Sample Design</b> </Link></li>
                                    <li><Link className="dropdown-item text-dark" to="/Assignment_Solution"> <b> Assignment Solution</b>
                                    </Link></li>
                                </ul>
                            </li> */}
                            {/* <li className="nav-item active"> <Link className="nav-link text-dark" to="/Experts"> <b>
                                Experts</b></Link></li> */}
                        </ul>

                        <ul className="navbar-nav ms-auto">
                            <form className="form-inline my-2 my-lg-0">
                                <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                                {/* <button className="btn btn-outline-danger my-2 my-sm-0" type="submit">Search</button> */}
                            </form>
                            <div className="mx-2">
                            <button className="btn btn-outline-primary my-2 my-sm-0" type="submit">Search</button>
                                {/* <button className="btn btn-danger" data-toggle="modal" data-target="#LoginModal">Login</button>
                                <button className="btn btn-danger" data-toggle="modal" data-target="#SignupModal">Signup</button> */}

                            </div>
                        </ul>

                    </div>
                </div>
            </nav>  <br /><br /><br />
        </>
    )
}

export default Navbar

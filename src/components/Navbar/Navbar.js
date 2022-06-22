import React from 'react'
import { Link } from 'react-router-dom'
import { Dropdown, OffcanvasTitle } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faHeart, faHome, faUser } from '@fortawesome/free-solid-svg-icons'
import './Navbar.css'
import { useState } from "react";
import Offcanvas from 'react-bootstrap/Offcanvas'

function Navbar() {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div>
            <div className='first-navbar w-100'>
                <nav className="w-100 navbar navbar-expand-lg bg-dark p-2 m-0 justify-content-between gap-2" >
                    {/* Collapse button  */}
                    <button onClick={handleShow} className="navbar-toggler bg-light shadow-none" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon "><FontAwesomeIcon icon={faBars} className="mt-1" /></span>
                    </button>

                    {/*Offcanvas body*/}
                    <Offcanvas show={show} onHide={handleClose} className='w-50'>
                        <Offcanvas.Header closeButton>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <ul className="navbar-nav navbar-collapse d-flex flex-column justify-content-center gap-2  text-center " >
                                <li className="nav-item nav-items-2"><Link className='nav-link text-dark' to=""><b>HOME</b></Link></li>
                                <li className="nav-item nav-items-2"><Link className='nav-link text-dark' to="about"><b>ABOUT</b></Link></li>

                                <OffcanvasTitle style={{ fontSize: "16px" }}><b>DESTINATIONS</b></OffcanvasTitle>
                                <li className='nav-item nav-items-2'><Link className="nav-link text-dark" to="divine">Divine destinations</Link></li>
                                <li className='nav-item nav-items-2'><Link className="nav-link text-dark" to="hills">Hill stations</Link></li>
                                <li className='nav-item nav-items-2'><Link className="nav-link text-dark" to="beaches">Beaches</Link></li>
                                <li className='nav-item nav-items-2'><Link className="nav-link text-dark" to="monuments">Monuments</Link></li>
                                <li className='nav-item nav-items-2'><Link className="nav-link text-dark" to="wildlife">Wildlife Sanctuaries</Link></li>
                                <li className="nav-item nav-items-2"><Link className='nav-link text-dark' to="travel"><b>TRAVEL</b></Link></li>
                                <li className="nav-item nav-items-2"><Link className='nav-link text-dark' to="contactus"><b>CONTACTUS</b></Link></li>


                                <li className='d-flex gap-4 mt-3 mx-auto' >
                                    <li>
                                        <Link className='nav-link text-dark' to='wishlist'><FontAwesomeIcon icon={faHeart} className='fa-lg' /></Link>
                                    </li>
                                    <li className=''>
                                        <Link className='nav-link text-dark' to='profile'><FontAwesomeIcon icon={faUser} className='fa-lg' /></Link>
                                    </li>
                                </li>
                            </ul>
                        </Offcanvas.Body>
                    </Offcanvas>


                    {/* Collapsible navbar */}
                    <div className=" nav-item collapse navbar-collapse" id="navbarNavDropDown">
                        <ul className="navbar-nav navbar-collapse justify-content-between p-0" >
                            <div className='d-flex g-5'>
                                <li className='nav-item'>
                                    <Link className='nav-link mx-5 text-light' to=""><FontAwesomeIcon icon={faHome} className='fa-lg' /> HOME</Link>
                                </li>
                                <li className="nav-item mx-2">
                                    <Link className="nav-link text-light" to="about">ABOUT</Link>
                                </li>
                                <li className="nav-item mx-5">
                                    <Dropdown>
                                        <Dropdown.Toggle id="dropdown-basic" className='bg-dark shadow-none border-0'>DESTINATIONS</Dropdown.Toggle>
                                        <Dropdown.Menu className='dropdown-menu shadow bg-dark'>
                                            <Dropdown.Item ><Link className="nav-link" to="divine">Divine destinations</Link></Dropdown.Item>
                                            <Dropdown.Item ><Link className="nav-link" to="hills">Hill stations</Link></Dropdown.Item>
                                            <Dropdown.Item ><Link className="nav-link" to="beaches">Beaches</Link></Dropdown.Item>
                                            <Dropdown.Item ><Link className="nav-link" to="monuments">Monuments</Link></Dropdown.Item>
                                            <Dropdown.Item ><Link className="nav-link" to="wildlife">Wildlife Sanctuaries</Link></Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </li>
                                <li className="nav-item ">
                                    <Link className="nav-link text-light" to="travel">TRAVEL</Link>
                                </li>
                                <li className="nav-item mx-5">
                                    <Link className="nav-link text-light" to="contactus">CONTACTUS</Link>
                                </li>
                            </div>
                            <div className='d-flex g-5'>
                                <li>
                                    <Link className='nav-link text-light me-3' to='cart'><FontAwesomeIcon icon={faHeart} className='fa-lg' /></Link>
                                </li>
                                <li className='me-5'>
                                    <Dropdown>
                                        <Dropdown.Toggle id="dropdown-basic" className='bg-dark shadow-none border-0'><FontAwesomeIcon icon={faUser} className='fa-lg' /></Dropdown.Toggle>
                                        <Dropdown.Menu className='dropdown-menu shadow bg-dark'>
                                            <Dropdown.Item ><Link className="nav-link" to="profile">Profile</Link></Dropdown.Item>
                                            <Dropdown.Item ><Link className="nav-link" to="logout">Logout</Link></Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </li>
                            </div>
                        </ul>
                    </div>
                </nav>
            </div>

        </div>
    )
}
export default Navbar;
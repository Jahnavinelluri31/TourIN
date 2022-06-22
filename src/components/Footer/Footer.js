import React from 'react';
import { MDBFooter } from 'mdb-react-ui-kit';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faGoogle} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faHome, faPhone, faPrint, faTrain} from '@fortawesome/free-solid-svg-icons';

function Footer() {
    return (
        <MDBFooter bgColor='dark' className='text-center text-lg-start text-white'>
            <section className='d-flex justify-content-center justify-content-lg-between p-3 border-bottom'>
                <div className='me-5 d-none d-lg-block'>
                    <span>Get connected with us on:</span>
                </div>
                <div className='d-flex gap-4'>
                    <FontAwesomeIcon icon={faFacebook} ></FontAwesomeIcon>
                    <FontAwesomeIcon icon={faTwitter} ></FontAwesomeIcon>
                    <FontAwesomeIcon icon={faGoogle} ></FontAwesomeIcon>
                    <FontAwesomeIcon icon={faInstagram} ></FontAwesomeIcon>
                </div>
            </section>
            <section className=''>
                <div className='container text-center text-md-start mt-5'>
                    <div className='row mt-3'>
                        <div className='col-md-3 col-lg-4 col-xl-3 mx-auto mb-4'>
                            <h6 className='text-uppercase fw-bold mb-4'>
                                <FontAwesomeIcon icon={faTrain}></FontAwesomeIcon>   TOURIN
                            </h6>
                            <p>
                                Over the last few years, we feel proud to say that TourIN Tourism has
                                taken never seen before initiatives to promote ecotourism and contribute for
                                the overall development of greenery at many tourist destinations.
                            </p>
                        </div>

                        <div className='col-md-2 col-lg-2 col-xl-2 mx-auto mb-4'>
                            <h6 className='text-uppercase fw-bold mb-4'>Our Services</h6>
                            <p>Travels</p>
                            <p>Rooms</p>
                            <p>Food</p>
                            <p>Guides</p>
                        </div>

                        <div className='col-md-3 col-lg-2 col-xl-2 mx-auto mb-4'>
                            <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
                            <p>tourtourism.com</p>
                            <p>touristtour.com</p>
                            <p>tourisminfo.com</p>
                            <p>touristinfo.com</p>
                        </div>

                        <div className='col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4'>
                            <h6 className='text-uppercase fw-bold mb-4'>Contact us</h6>
                            <p><FontAwesomeIcon icon={faHome}></FontAwesomeIcon> Hyderabad, Telangana, India</p>
                            <p><FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon> toursim@tourIN.com</p>
                            <p><FontAwesomeIcon icon={faPhone}></FontAwesomeIcon> +91-9963637831</p>
                            <p><FontAwesomeIcon icon={faPrint}></FontAwesomeIcon> + 01-234-567-89</p>
                        </div>
                    </div>
                </div>
            </section>
            <div className='text-center p-2 text-muted' style={{ backgroundColor: 'white' }}>
                © 2022 Copyright: tourIN tourism
            </div>
        </MDBFooter>
    );
}

export default Footer;
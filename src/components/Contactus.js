import React from 'react'

function Contactus() {
    return (
        <div className="container bg-light">
            <p className="lead text-center text-danger display-4"><em>Contact Us</em></p>
            <br/>
            <div className='row'>
                <div className='text-center col-lg-4'>
                    <img src='images/logo.jpg' width="300px" height="300px" className='img-fluid mt-4' />
                </div>
                <div className='col-lg-5'>
                    <h3 className='font-link mt-3' style={{fontSize:"30px"}}><b>TourIN Tourism Development Corporation
                    </b></h3>
                    <p className='lead'>
                        <em>3-5-891, Tourism House<br />
                            Himayatnagar, Hyderabad - 500 029,<br />
                            Telangana, India.<br />
                            Phone: +91-40-23262151, +91-40-23262152, +91-40-23262153, +91-40-23262154, +91-40-23262157<br />
                            Fax: +91-40-23261801</em>
                    </p>
                </div>
            </div>
        </div >
    )
}
export default Contactus;
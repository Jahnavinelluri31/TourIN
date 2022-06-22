import React from 'react';
import { MDBCard, MDBCardTitle, MDBCardText, MDBCardBody, MDBCardImage, MDBRow, MDBCol } from 'mdb-react-ui-kit';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faStarHalfStroke, faHeart, faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import { useForm } from 'react-hook-form'
import { Card, Row, Col } from 'react-bootstrap';

function Beaches() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onFormSubmit = (userData) => {
        console.log(userData)
    }
    return (
        <div className='container w-75'>
            <br />
            <Row xs={1} md={2} lg={3} className="g-4">
                <Col>
                    <Card className='bg-light shadow p-1'>
                        <Card.Img variant="top" className="rounded w-100 shadow" src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Rushikonda_beach_view_001.jpg" />
                        <Card.Body>
                            <Card.Title style={{ color: "red" }}><b>KHAMMAM- RISHIKONDA BEACH</b></Card.Title>
                            <Card.Text>
                                <b style={{ fontSize: "15px" }}>Package :</b><em style={{ fontSize: "15px" }}> 2 NIGHTS, 3 DAY-DAILY PACKAGE</em>
                                <br />
                                <b style={{ fontSize: "15px" }}>Service starting :</b><em style={{ fontSize: "15px" }}> KHAMMAM</em>
                                <br />
                                <b style={{ fontSize: "15px" }}>Package Code :</b><em style={{ fontSize: "15px" }}> 5072</em>
                                <br />
                                <b style={{ fontSize: "15px" }}>Rating :</b> <FontAwesomeIcon style={{ color: "orange" }} icon={faStar} size="1x"></FontAwesomeIcon>
                                <FontAwesomeIcon style={{ color: "orange" }} icon={faStar} size="1x"></FontAwesomeIcon>
                                <FontAwesomeIcon style={{ color: "orange" }} icon={faStar} size="1x"></FontAwesomeIcon>
                                <FontAwesomeIcon style={{ color: "orange" }} icon={faStar} size="1x"></FontAwesomeIcon>
                                <FontAwesomeIcon style={{ color: "orange" }} icon={faStarHalfStroke} size="1x"></FontAwesomeIcon>
                                <br />
                                <b style={{ fontSize: "15px" }}>State :</b><em style={{ fontSize: "15px" }}>ANDHRA PRADESH</em>
                            </Card.Text>
                        </Card.Body>
                        <Card.Body>
                            <form onSubmit={handleSubmit(onFormSubmit)}>
                                <div className='row'>
                                    <div className="col-sm-7 mt-2">
                                        <button type="submit" className="btn btn-warning w-100">Add to Wishlist  <FontAwesomeIcon icon={faHeart} size="1x"></FontAwesomeIcon> </button>
                                    </div>
                                    <div className="col-sm-5 mt-2">
                                        <button type="submit" className="btn btn-success w-100">Book   <FontAwesomeIcon style={{ color: "white" }} icon={faPaperPlane} size="1x"></FontAwesomeIcon> </button>
                                    </div>
                                </div>
                            </form>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card className='p-1 shadow bg-light'>
                        <Card.Img variant="top" className="shadow rounded w-100" src="https://www.gosahin.com/go/p/b/1517186506_Alappuzha-Beach1.jpg" />
                        <Card.Body>
                            <Card.Title style={{ color: "red" }}><b>KHAMMAM- MARINA BEACH</b></Card.Title>
                            <Card.Text>
                                <b style={{ fontSize: "15px" }}>Package :</b><em style={{ fontSize: "15px" }}> 3 NIGHTS, 3 DAY-DAILY PACKAGE</em>
                                <br />
                                <b style={{ fontSize: "15px" }}>Service starting :</b><em style={{ fontSize: "15px" }}> KHAMMAM</em>
                                <br />
                                <b style={{ fontSize: "15px" }}>Package Code :</b><em style={{ fontSize: "15px" }}> 5076</em>
                                <br />
                                <b style={{ fontSize: "15px" }}>Rating :</b> <FontAwesomeIcon style={{ color: "orange" }} icon={faStar} size="1x"></FontAwesomeIcon>
                                <FontAwesomeIcon style={{ color: "orange" }} icon={faStar} size="1x"></FontAwesomeIcon>
                                <FontAwesomeIcon style={{ color: "orange" }} icon={faStar} size="1x"></FontAwesomeIcon>
                                <FontAwesomeIcon style={{ color: "orange" }} icon={faStar} size="1x"></FontAwesomeIcon>
                                <br />
                                <b style={{ fontSize: "15px" }}>State :</b><em style={{ fontSize: "15px" }}> TAMIL NADU</em>
                            </Card.Text>
                        </Card.Body>
                        <Card.Body>
                            <form onSubmit={handleSubmit(onFormSubmit)}>
                                <div className='row'>
                                    <div className="col-sm-7 mt-2">
                                        <button type="submit" className="btn btn-warning w-100">Add to Wishlist  <FontAwesomeIcon icon={faHeart} size="1x"></FontAwesomeIcon> </button>
                                    </div>
                                    <div className="col-sm-5 mt-2">
                                        <button type="submit" className="btn btn-success w-100">Book   <FontAwesomeIcon style={{ color: "white" }} icon={faPaperPlane} size="1x"></FontAwesomeIcon> </button>
                                    </div>
                                </div>
                            </form>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card className='p-1 shadow bg-light'>
                        <Card.Img variant="top" className="shadow w-100 rounded" src="https://www.holidify.com/images/cmsuploads/compressed/Alapuzha_Beach_20180914130855.JPG" />
                        <Card.Body>
                            <Card.Title style={{ color: "red" }}><b>KHAMMAM- ALAPPUZHA BEACH</b></Card.Title>
                            <Card.Text>
                                <b style={{ fontSize: "15px" }}>Package :</b><em style={{ fontSize: "15px" }}> 4 NIGHTS, 3 DAY-DAILY PACKAGE</em>
                                <br />
                                <b style={{ fontSize: "15px" }}>Service starting :</b><em style={{ fontSize: "15px" }}> KHAMMAM</em>
                                <br />
                                <b style={{ fontSize: "15px" }}>Package Code :</b><em style={{ fontSize: "15px" }}> 5073</em>
                                <br />
                                <b style={{ fontSize: "15px" }}>Rating :</b> <FontAwesomeIcon style={{ color: "orange" }} icon={faStar} size="1x"></FontAwesomeIcon>
                                <FontAwesomeIcon style={{ color: "orange" }} icon={faStar} size="1x"></FontAwesomeIcon>
                                <FontAwesomeIcon style={{ color: "orange" }} icon={faStar} size="1x"></FontAwesomeIcon>
                                <FontAwesomeIcon style={{ color: "orange" }} icon={faStar} size="1x"></FontAwesomeIcon>
                                <FontAwesomeIcon style={{ color: "orange" }} icon={faStar} size="1x"></FontAwesomeIcon>
                                <br />
                                <b style={{ fontSize: "15px" }}>State :</b><em style={{ fontSize: "15px" }}> KERALA</em>
                            </Card.Text>
                        </Card.Body>
                        <Card.Body>
                            <form onSubmit={handleSubmit(onFormSubmit)}>
                                <div className='row'>
                                    <div className="col-sm-7 mt-2">
                                        <button type="submit" className="btn btn-warning w-100">Add to Wishlist  <FontAwesomeIcon icon={faHeart} size="1x"></FontAwesomeIcon> </button>
                                    </div>
                                    <div className="col-sm-5 mt-2">
                                        <button type="submit" className="btn btn-success w-100">Book   <FontAwesomeIcon style={{ color: "white" }} icon={faPaperPlane} size="1x"></FontAwesomeIcon> </button>
                                    </div>
                                </div>
                            </form>
                        </Card.Body>
                    </Card>
                </Col>

                <Col>
                    <Card className="p-1 shadow bg-light">
                        <Card.Img variant="top" className="shadow rounded w-100" src="http://keerthanshirva.info/wp-content/uploads/2020/03/1560846223_5.jpg-768x473.jpg" />
                        <Card.Body>
                            <Card.Title style={{ color: "red" }}><b>KHAMMAM- OM BEACH</b></Card.Title>
                            <Card.Text>
                                <b style={{ fontSize: "15px" }}>Package :</b><em style={{ fontSize: "15px" }}> 1 NIGHT, 2 DAY-DAILY PACKAGE</em>
                                <br />
                                <b style={{ fontSize: "15px" }}>Service starting :</b><em style={{ fontSize: "15px" }}> KHAMMAM</em>
                                <br />
                                <b style={{ fontSize: "15px" }}>Package Code :</b><em style={{ fontSize: "15px" }}> 5075</em>
                                <br />
                                <b style={{ fontSize: "15px" }}>Rating :</b> <FontAwesomeIcon style={{ color: "orange" }} icon={faStar} size="1x"></FontAwesomeIcon>
                                <FontAwesomeIcon style={{ color: "orange" }} icon={faStar} size="1x"></FontAwesomeIcon>
                                <FontAwesomeIcon style={{ color: "orange" }} icon={faStar} size="1x"></FontAwesomeIcon>
                                <FontAwesomeIcon style={{ color: "orange" }} icon={faStarHalfStroke} size="1x"></FontAwesomeIcon>
                                <br />
                                <b style={{ fontSize: "15px" }}>State :</b><em style={{ fontSize: "15px" }}> KARNATAKA</em>
                            </Card.Text>
                        </Card.Body>
                        <Card.Body>
                            <form onSubmit={handleSubmit(onFormSubmit)}>
                                <div className='row'>
                                    <div className="col-sm-7 mt-2">
                                        <button type="submit" className="btn btn-warning w-100">Add to Wishlist  <FontAwesomeIcon icon={faHeart} size="1x"></FontAwesomeIcon> </button>
                                    </div>
                                    <div className="col-sm-5 mt-2">
                                        <button type="submit" className="btn btn-success w-100">Book   <FontAwesomeIcon style={{ color: "white" }} icon={faPaperPlane} size="1x"></FontAwesomeIcon> </button>
                                    </div>
                                </div>
                            </form>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card className='shadow p-1 bg-light'>
                        <Card.Img variant="top" className="rounded shadow w-100" src="http://www.uvameridian.com/wp-content/uploads/2019/10/marvanthe-beach-1024x575.jpg" />
                        <Card.Body>
                            <Card.Title style={{ color: "red" }}><b>KHAMMAM- GANAPATIPULE BEACH</b></Card.Title>
                            <Card.Text>
                                <b style={{ fontSize: "15px" }}>Package :</b><em style={{ fontSize: "15px" }}> 3 NIGHTS, 2 DAY-DAILY PACKAGE</em>
                                <br />
                                <b style={{ fontSize: "15px" }}>Service starting :</b><em style={{ fontSize: "15px" }}> KHAMMAM</em>
                                <br />
                                <b style={{ fontSize: "15px" }}>Package Code :</b><em style={{ fontSize: "15px" }}> 5074</em>
                                <br />
                                <b style={{ fontSize: "15px" }}>Rating :</b> <FontAwesomeIcon style={{ color: "orange" }} icon={faStar} size="1x"></FontAwesomeIcon>
                                <FontAwesomeIcon style={{ color: "orange" }} icon={faStar} size="1x"></FontAwesomeIcon>
                                <FontAwesomeIcon style={{ color: "orange" }} icon={faStar} size="1x"></FontAwesomeIcon>
                                <FontAwesomeIcon style={{ color: "orange" }} icon={faStar} size="1x"></FontAwesomeIcon>
                                <FontAwesomeIcon style={{ color: "orange" }} icon={faStarHalfStroke} size="1x"></FontAwesomeIcon>
                                <br />
                                <b style={{ fontSize: "15px" }}>State :</b><em style={{ fontSize: "15px" }}> MAHARASHTRA</em>
                            </Card.Text>
                        </Card.Body>
                        <Card.Body>
                            <form onSubmit={handleSubmit(onFormSubmit)}>
                                <div className='row'>
                                    <div className="col-sm-7 mt-2">
                                        <button type="submit" className="btn btn-warning w-100">Add to Wishlist  <FontAwesomeIcon icon={faHeart} size="1x"></FontAwesomeIcon> </button>
                                    </div>
                                    <div className="col-sm-5 mt-2">
                                        <button type="submit" className="btn btn-success w-100">Book   <FontAwesomeIcon style={{ color: "white" }} icon={faPaperPlane} size="1x"></FontAwesomeIcon> </button>
                                    </div>
                                </div>
                            </form>
                        </Card.Body>
                    </Card>
                </Col>

                <Col>
                    <Card className='p-1 shadow bg-light'>
                        <Card.Img variant="top" className="shadow rounded w-100" src="https://i.ytimg.com/vi/Cq9OKmcXsUM/maxresdefault.jpg" />
                        <Card.Body>
                            <Card.Title style={{ color: "red" }}><b>KHAMMAM- MARAVANTHE BEACH</b></Card.Title>
                            <Card.Text>
                                <b style={{ fontSize: "15px" }}>Package :</b><em style={{ fontSize: "15px" }}> 2 NIGHTS, 2 DAY-DAILY PACKAGE</em>
                                <br />
                                <b style={{ fontSize: "15px" }}>Service starting :</b><em style={{ fontSize: "15px" }}> KHAMMAM</em>
                                <br />
                                <b style={{ fontSize: "15px" }}>Package Code :</b><em style={{ fontSize: "15px" }}> 5077</em>
                                <br />
                                <b style={{ fontSize: "15px" }}>Rating :</b> <FontAwesomeIcon style={{ color: "orange" }} icon={faStar} size="1x"></FontAwesomeIcon>
                                <FontAwesomeIcon style={{ color: "orange" }} icon={faStar} size="1x"></FontAwesomeIcon>
                                <FontAwesomeIcon style={{ color: "orange" }} icon={faStar} size="1x"></FontAwesomeIcon>
                                <FontAwesomeIcon style={{ color: "orange" }} icon={faStarHalfStroke} size="1x"></FontAwesomeIcon>
                                <br />
                                <b style={{ fontSize: "15px" }}>State :</b><em style={{ fontSize: "15px" }}> KARNATAKA</em>
                            </Card.Text>
                        </Card.Body>
                        <Card.Body>
                            <form onSubmit={handleSubmit(onFormSubmit)}>
                                <div className='row'>
                                    <div className="col-sm-7 mt-2">
                                        <button type="submit" className="btn btn-warning w-100">Add to Wishlist  <FontAwesomeIcon icon={faHeart} size="1x"></FontAwesomeIcon> </button>
                                    </div>
                                    <div className="col-sm-5 mt-2">
                                        <button type="submit" className="btn btn-success w-100">Book   <FontAwesomeIcon style={{ color: "white" }} icon={faPaperPlane} size="1x"></FontAwesomeIcon> </button>
                                    </div>
                                </div>
                            </form>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <br />
            <br />
        </div >
    );
}

export default Beaches;
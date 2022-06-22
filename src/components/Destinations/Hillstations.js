import React from 'react';
import { MDBCard, MDBCardTitle, MDBCardText, MDBCardBody, MDBCardImage, MDBRow, MDBCol } from 'mdb-react-ui-kit';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faStarHalfStroke, faPaperPlane, faHeart } from '@fortawesome/free-solid-svg-icons'
import { useForm } from 'react-hook-form'
import { Card, Row, Col } from 'react-bootstrap';

function Hillstations() {
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
                        <Card.Img variant="top" className="rounded w-100 shadow" src="https://c0.wallpaperflare.com/preview/547/439/737/india-kodaikanal-kodai-kodaikanal-lake.jpg" />
                        <Card.Body>
                            <Card.Title style={{ color: "red" }}><b>KHAMMAM- KODAIKANAL</b></Card.Title>
                            <Card.Text>
                                <b style={{ fontSize: "15px" }}>Package :</b><em style={{ fontSize: "15px" }}> 2 NIGHTS, 3 DAY-DAILY PACKAGE</em>
                                <br />
                                <b style={{ fontSize: "15px" }}>Service starting :</b><em style={{ fontSize: "15px" }}> KHAMMAM</em>
                                <br />
                                <b style={{ fontSize: "15px" }}>Package Code :</b><em style={{ fontSize: "15px" }}> 2072</em>
                                <br />
                                <b style={{ fontSize: "15px" }}>Rating :</b> <FontAwesomeIcon style={{ color: "orange" }} icon={faStar} size="1x"></FontAwesomeIcon>
                                <FontAwesomeIcon style={{ color: "orange" }} icon={faStar} size="1x"></FontAwesomeIcon>
                                <FontAwesomeIcon style={{ color: "orange" }} icon={faStar} size="1x"></FontAwesomeIcon>
                                <FontAwesomeIcon style={{ color: "orange" }} icon={faStar} size="1x"></FontAwesomeIcon>
                                <FontAwesomeIcon style={{ color: "orange" }} icon={faStarHalfStroke} size="1x"></FontAwesomeIcon>
                                <br />
                                <b style={{ fontSize: "15px" }}>State :</b><em style={{ fontSize: "15px" }}>TAMIL NADU</em>
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
                        <Card.Img variant="top" className="shadow rounded w-100" src="https://tse3.mm.bing.net/th?id=OIP.tyOMtsjR48wfmUQ0otmiFAHaFA&pid=Api&P=0&w=250&h=169" />
                        <Card.Body>
                            <Card.Title style={{ color: "red" }}><b>KHAMMAM- ATHIRAPALLY</b></Card.Title>
                            <Card.Text>
                                <b style={{ fontSize: "15px" }}>Package :</b><em style={{ fontSize: "15px" }}> 3 NIGHTS, 3 DAY-DAILY PACKAGE</em>
                                <br />
                                <b style={{ fontSize: "15px" }}>Service starting :</b><em style={{ fontSize: "15px" }}> KHAMMAM</em>
                                <br />
                                <b style={{ fontSize: "15px" }}>Package Code :</b><em style={{ fontSize: "15px" }}> 2076</em>
                                <br />
                                <b style={{ fontSize: "15px" }}>Rating :</b> <FontAwesomeIcon style={{ color: "orange" }} icon={faStar} size="1x"></FontAwesomeIcon>
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
                    <Card className='p-1 shadow bg-light'>
                        <Card.Img variant="top" className="shadow w-100 rounded" src="https://image3.mouthshut.com/images/imagesp/925004353s.jpg" />
                        <Card.Body>
                            <Card.Title style={{ color: "red" }}><b>KHAMMAM- OOTY</b></Card.Title>
                            <Card.Text>
                                <b style={{ fontSize: "15px" }}>Package :</b><em style={{ fontSize: "15px" }}> 4 NIGHTS, 3 DAY-DAILY PACKAGE</em>
                                <br />
                                <b style={{ fontSize: "15px" }}>Service starting :</b><em style={{ fontSize: "15px" }}> KHAMMAM</em>
                                <br />
                                <b style={{ fontSize: "15px" }}>Package Code :</b><em style={{ fontSize: "15px" }}> 2073</em>
                                <br />
                                <b style={{ fontSize: "15px" }}>Rating :</b> <FontAwesomeIcon style={{ color: "orange" }} icon={faStar} size="1x"></FontAwesomeIcon>
                                <FontAwesomeIcon style={{ color: "orange" }} icon={faStar} size="1x"></FontAwesomeIcon>
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
                    <Card className="p-1 shadow bg-light">
                        <Card.Img variant="top" className="shadow rounded w-100" src="http://d27k8xmh3cuzik.cloudfront.net/wp-content/uploads/2018/04/Best-things-to-do-in-Coorg-cover.jpg" />
                        <Card.Body>
                            <Card.Title style={{ color: "red" }}><b>KHAMMAM- COORG</b></Card.Title>
                            <Card.Text>
                                <b style={{ fontSize: "15px" }}>Package :</b><em style={{ fontSize: "15px" }}> 1 NIGHT, 2 DAY-DAILY PACKAGE</em>
                                <br />
                                <b style={{ fontSize: "15px" }}>Service starting :</b><em style={{ fontSize: "15px" }}> KHAMMAM</em>
                                <br />
                                <b style={{ fontSize: "15px" }}>Package Code :</b><em style={{ fontSize: "15px" }}> 2075</em>
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
                        <Card.Img variant="top" className="rounded shadow w-100" src="https://4.bp.blogspot.com/-SPekZbwI25U/U9C0vb3AvFI/AAAAAAAAFNo/sCPdcT3wbag/s1600/29MP_ARAKU_VALLEY_372897g.jpg" />
                        <Card.Body>
                            <Card.Title style={{ color: "red" }}><b>KHAMMAM- ARAKU</b></Card.Title>
                            <Card.Text>
                                <b style={{ fontSize: "15px" }}>Package :</b><em style={{ fontSize: "15px" }}> 3 NIGHTS, 2 DAY-DAILY PACKAGE</em>
                                <br />
                                <b style={{ fontSize: "15px" }}>Service starting :</b><em style={{ fontSize: "15px" }}> KHAMMAM</em>
                                <br />
                                <b style={{ fontSize: "15px" }}>Package Code :</b><em style={{ fontSize: "15px" }}> 2074</em>
                                <br />
                                <b style={{ fontSize: "15px" }}>Rating :</b> <FontAwesomeIcon style={{ color: "orange" }} icon={faStar} size="1x"></FontAwesomeIcon>
                                <FontAwesomeIcon style={{ color: "orange" }} icon={faStar} size="1x"></FontAwesomeIcon>
                                <FontAwesomeIcon style={{ color: "orange" }} icon={faStar} size="1x"></FontAwesomeIcon>
                                <FontAwesomeIcon style={{ color: "orange" }} icon={faStar} size="1x"></FontAwesomeIcon>
                                <FontAwesomeIcon style={{ color: "orange" }} icon={faStarHalfStroke} size="1x"></FontAwesomeIcon>
                                <br />
                                <b style={{ fontSize: "15px" }}>State :</b><em style={{ fontSize: "15px" }}> ANDHRA PRADESH</em>
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
                        <Card.Img variant="top" className="shadow rounded w-100" src="https://live.staticflickr.com/65535/48558708151_ac21de557f_b.jpg" />
                        <Card.Body>
                            <Card.Title style={{ color: "red" }}><b>KHAMMAM- HORSLEY HILLS</b></Card.Title>
                            <Card.Text>
                                <b style={{ fontSize: "15px" }}>Package :</b><em style={{ fontSize: "15px" }}> 2 NIGHTS, 2 DAY-DAILY PACKAGE</em>
                                <br />
                                <b style={{ fontSize: "15px" }}>Service starting :</b><em style={{ fontSize: "15px" }}> KHAMMAM</em>
                                <br />
                                <b style={{ fontSize: "15px" }}>Package Code :</b><em style={{ fontSize: "15px" }}> 2077</em>
                                <br />
                                <b style={{ fontSize: "15px" }}>Rating :</b> <FontAwesomeIcon style={{ color: "orange" }} icon={faStar} size="1x"></FontAwesomeIcon>
                                <FontAwesomeIcon style={{ color: "orange" }} icon={faStar} size="1x"></FontAwesomeIcon>
                                <FontAwesomeIcon style={{ color: "orange" }} icon={faStar} size="1x"></FontAwesomeIcon>
                                <FontAwesomeIcon style={{ color: "orange" }} icon={faStarHalfStroke} size="1x"></FontAwesomeIcon>
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
            </Row>
            <br />
            <br />

        </div >
    );
}

export default Hillstations;
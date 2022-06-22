import React from 'react';
import { MDBCard, MDBCardTitle, MDBCardText, MDBCardBody, MDBCardImage, MDBRow, MDBCol } from 'mdb-react-ui-kit';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faPaperPlane, faStar, faStarHalfStroke } from '@fortawesome/free-solid-svg-icons'
import { useForm } from 'react-hook-form'
import { Card, Row, Col } from 'react-bootstrap';

function Divinedestinations() {
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
                            <Card.Img variant="top" className="rounded w-100 shadow" src="https://upload.wikimedia.org/wikipedia/commons/4/4e/Tirumala_090615.jpg" />
                            <Card.Body>
                                <Card.Title style={{ color: "red" }}><b>KHAMMAM- TIRUPATHI</b></Card.Title>
                                <Card.Text>
                                    <b style={{ fontSize: "15px" }}>Package :</b><em style={{ fontSize: "15px" }}> 2 NIGHTS, 1 DAY-DAILY PACKAGE</em>
                                    <br />
                                    <b style={{ fontSize: "15px" }}>Service starting :</b><em style={{ fontSize: "15px" }}> KHAMMAM</em>
                                    <br />
                                    <b style={{ fontSize: "15px" }}>Package Code :</b><em style={{ fontSize: "15px" }}> 1072</em>
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
                            <Card.Img variant="top" className="shadow rounded w-100" src="https://www.sai.org.in/sites/default/files/Madhayanarati%20%282%29_5.jpg" />
                            <Card.Body>
                                <Card.Title style={{ color: "red" }}><b>KHAMMAM- SHIRIDI</b></Card.Title>
                                <Card.Text>
                                <b style={{ fontSize: "15px" }}>Package :</b><em style={{ fontSize: "15px" }}> 2 NIGHTS, 3 DAY-DAILY PACKAGE</em>
                                <br />
                                <b style={{ fontSize: "15px" }}>Service starting :</b><em style={{ fontSize: "15px" }}> KHAMMAM</em>
                                <br />
                                <b style={{ fontSize: "15px" }}>Package Code :</b><em style={{ fontSize: "15px" }}> 1076</em>
                                <br />
                                <b style={{ fontSize: "15px" }}>Rating :</b> <FontAwesomeIcon style={{ color: "orange" }} icon={faStar} size="1x"></FontAwesomeIcon>
                                <FontAwesomeIcon style={{ color: "orange" }} icon={faStar} size="1x"></FontAwesomeIcon>
                                <FontAwesomeIcon style={{ color: "orange" }} icon={faStar} size="1x"></FontAwesomeIcon>
                                <FontAwesomeIcon style={{ color: "orange" }} icon={faStar} size="1x"></FontAwesomeIcon>
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
                            <Card.Img variant="top" className="shadow w-100 rounded" src="https://www.livelaw.in/h-upload/2020/07/12/378119-padmanabhaswamy-temple.jpg" />
                            <Card.Body>
                                <Card.Title style={{ color: "red" }}><b>KHAMMAM- SHREE PADMANABHASWAMY TEMPLE</b></Card.Title>
                                <Card.Text>
                                    <b style={{ fontSize: "15px" }}>Package :</b><em style={{ fontSize: "15px" }}> 3 NIGHTS, 3 DAY-DAILY PACKAGE</em>
                                    <br />
                                    <b style={{ fontSize: "15px" }}>Service starting :</b><em style={{ fontSize: "15px" }}> KHAMMAM</em>
                                    <br />
                                    <b style={{ fontSize: "15px" }}>Package Code :</b><em style={{ fontSize: "15px" }}> 1073</em>
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
                            <Card.Img variant="top" className="shadow rounded w-100" src="https://atmanirvana.com/wp-content/uploads/2020/07/EH7fsabUYAAwE4_.jpg" />
                            <Card.Body>
                                <Card.Title style={{ color: "red" }}><b>KHAMMAM- KOTILINGESHWARA TEMPLE</b></Card.Title>
                                <Card.Text>
                                <b style={{ fontSize: "15px" }}>Package :</b><em style={{ fontSize: "15px" }}> 1 NIGHT, 2 DAY-DAILY PACKAGE</em>
                                <br />
                                <b style={{ fontSize: "15px" }}>Service starting :</b><em style={{ fontSize: "15px" }}> KHAMMAM</em>
                                <br />
                                <b style={{ fontSize: "15px" }}>Package Code :</b><em style={{ fontSize: "15px" }}> 1075</em>
                                <br />
                                <b style={{ fontSize: "15px" }}>Rating :</b> <FontAwesomeIcon style={{ color: "orange" }} icon={faStar} size="1x"></FontAwesomeIcon>
                                <FontAwesomeIcon style={{ color: "orange" }} icon={faStar} size="1x"></FontAwesomeIcon>
                                <FontAwesomeIcon style={{ color: "orange" }} icon={faStar} size="1x"></FontAwesomeIcon>
                                <FontAwesomeIcon style={{ color: "orange" }} icon={faStarHalfStroke} size="1x"></FontAwesomeIcon>
                                <br/>
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
                            <Card.Img variant="top" className="rounded shadow w-100" src="https://miro.medium.com/max/900/1*WAxoJVPLj6HhORuwE-PFxQ.jpeg" />
                            <Card.Body>
                                <Card.Title style={{ color: "red" }}><b>KHAMMAM- BRIHADHESWARA TEMPLE</b></Card.Title>
                                <Card.Text>
                                <b style={{ fontSize: "15px" }}>Package :</b><em style={{ fontSize: "15px" }}> 2 NIGHTS, 2 DAY-DAILY PACKAGE</em>
                                <br />
                                <b style={{ fontSize: "15px" }}>Service starting :</b><em style={{ fontSize: "15px" }}> KHAMMAM</em>
                                <br />
                                <b style={{ fontSize: "15px" }}>Package Code :</b><em style={{ fontSize: "15px" }}> 1074</em>
                                <br />
                                <b style={{ fontSize: "15px" }}>Rating :</b> <FontAwesomeIcon style={{ color: "orange" }} icon={faStar} size="1x"></FontAwesomeIcon>
                                <FontAwesomeIcon style={{ color: "orange" }} icon={faStar} size="1x"></FontAwesomeIcon>
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
                    
                    <Col>
                        <Card className='p-1 shadow bg-light'>
                            <Card.Img variant="top" className="shadow rounded w-100" src="https://www.fabhotels.com/blog/wp-content/uploads/2018/07/Mangueshi-Temple.jpg" />
                            <Card.Body>
                            <Card.Title style={{ color: "red" }}><b>KHAMMAM- MANGESHI TEMPLE</b></Card.Title>
                                <Card.Text>
                                <b style={{ fontSize: "15px" }}>Package :</b><em style={{ fontSize: "15px" }}> 2 NIGHTS, 1 DAY-DAILY PACKAGE</em>
                                <br />
                                <b style={{ fontSize: "15px" }}>Service starting :</b><em style={{ fontSize: "15px" }}> KHAMMAM</em>
                                <br />
                                <b style={{ fontSize: "15px" }}>Package Code :</b><em style={{ fontSize: "15px" }}> 1077</em>
                                <br />
                                <b style={{ fontSize: "15px" }}>Rating :</b> <FontAwesomeIcon style={{ color: "orange" }} icon={faStar} size="1x"></FontAwesomeIcon>
                                <FontAwesomeIcon style={{ color: "orange" }} icon={faStar} size="1x"></FontAwesomeIcon>
                                <FontAwesomeIcon style={{ color: "orange" }} icon={faStar} size="1x"></FontAwesomeIcon>
                                <FontAwesomeIcon style={{ color: "orange" }} icon={faStarHalfStroke} size="1x"></FontAwesomeIcon>
                                <br />
                                <b style={{ fontSize: "15px" }}>State :</b><em style={{ fontSize: "15px" }}> GOA</em>
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
            <br/>
            <br/>

        </div >
    );
}

export default Divinedestinations;
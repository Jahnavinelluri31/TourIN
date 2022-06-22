import React from 'react';
import { MDBCard, MDBCardTitle, MDBCardText, MDBCardBody, MDBCardImage, MDBRow, MDBCol } from 'mdb-react-ui-kit';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faStarHalfStroke, faHeart, faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import { useForm } from 'react-hook-form'
import { Card, Row, Col } from 'react-bootstrap';

function Monuments() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onFormSubmit = (userData) => {
        console.log(userData)
    }
    return (
        <div className='container w-75'>
            <br />
            <Row xs={1} md={2} lg={3} className="g-4">
                <Col>
                    <Card className='p-1 shadow bg-light'>
                        <Card.Img variant="top" className="shadow rounded w-100" src="https://toim.b-cdn.net/pictures/travel_guide/attractions/thmb/mattancherry-palace-kochi-577.jpeg" />
                        <Card.Body>
                            <Card.Title style={{ color: "red" }}><b>KHAMMAM- MATTANCHERRY PALACE</b></Card.Title>
                            <Card.Text>
                                <b style={{ fontSize: "15px" }}>Package :</b><em style={{ fontSize: "15px" }}> 3 NIGHTS, 3 DAY-DAILY PACKAGE</em>
                                <br />
                                <b style={{ fontSize: "15px" }}>Service starting :</b><em style={{ fontSize: "15px" }}> KHAMMAM</em>
                                <br />
                                <b style={{ fontSize: "15px" }}>Package Code :</b><em style={{ fontSize: "15px" }}> 6076</em>
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
                        <Card.Img variant="top" className="shadow w-100 rounded" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3X_rjZ7LR7QZIan8Som2-FcbpOZrXgXy4uw&usqp=CAU" />
                        <Card.Body>
                            <Card.Title style={{ color: "red" }}><b>KHAMMAM- THIRUCHIRAPALLY ROCK FORT</b></Card.Title>
                            <Card.Text>
                                <b style={{ fontSize: "15px" }}>Package :</b><em style={{ fontSize: "15px" }}> 4 NIGHTS, 3 DAY-DAILY PACKAGE</em>
                                <br />
                                <b style={{ fontSize: "15px" }}>Service starting :</b><em style={{ fontSize: "15px" }}> KHAMMAM</em>
                                <br />
                                <b style={{ fontSize: "15px" }}>Package Code :</b><em style={{ fontSize: "15px" }}> 6073</em>
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
                        <Card.Img variant="top" className="shadow rounded w-100" src="https://i0.wp.com/getawayanswers.com/wp-content/uploads/2020/12/AdobeStock_200559473-scaled.jpeg?fit=640%2C427&ssl=1" />
                        <Card.Body>
                            <Card.Title style={{ color: "red" }}><b>KHAMMAM- GATE WAY OF INDIA</b></Card.Title>
                            <Card.Text>
                                <b style={{ fontSize: "15px" }}>Package :</b><em style={{ fontSize: "15px" }}> 1 NIGHT, 2 DAY-DAILY PACKAGE</em>
                                <br />
                                <b style={{ fontSize: "15px" }}>Service starting :</b><em style={{ fontSize: "15px" }}> KHAMMAM</em>
                                <br />
                                <b style={{ fontSize: "15px" }}>Package Code :</b><em style={{ fontSize: "15px" }}> 6075</em>
                                <br />
                                <b style={{ fontSize: "15px" }}>Rating :</b> <FontAwesomeIcon style={{ color: "orange" }} icon={faStar} size="1x"></FontAwesomeIcon>
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
                    <Card className='bg-light shadow p-1'>
                        <Card.Img variant="top" className="rounded w-100 shadow" src="https://media.istockphoto.com/photos/mysore-palace-india-picture-id1004667274" />
                        <Card.Body>
                            <Card.Title style={{ color: "red" }}><b>KHAMMAM- MYSORE PALACE</b></Card.Title>
                            <Card.Text>
                                <b style={{ fontSize: "15px" }}>Package :</b><em style={{ fontSize: "15px" }}> 2 NIGHTS, 3 DAY-DAILY PACKAGE</em>
                                <br />
                                <b style={{ fontSize: "15px" }}>Service starting :</b><em style={{ fontSize: "15px" }}> KHAMMAM</em>
                                <br />
                                <b style={{ fontSize: "15px" }}>Package Code :</b><em style={{ fontSize: "15px" }}> 6072</em>
                                <br />
                                <b style={{ fontSize: "15px" }}>Rating :</b> <FontAwesomeIcon style={{ color: "orange" }} icon={faStar} size="1x"></FontAwesomeIcon>
                                <FontAwesomeIcon style={{ color: "orange" }} icon={faStar} size="1x"></FontAwesomeIcon>
                                <FontAwesomeIcon style={{ color: "orange" }} icon={faStar} size="1x"></FontAwesomeIcon>
                                <FontAwesomeIcon style={{ color: "orange" }} icon={faStar} size="1x"></FontAwesomeIcon>
                                <FontAwesomeIcon style={{ color: "orange" }} icon={faStarHalfStroke} size="1x"></FontAwesomeIcon>
                                <br />
                                <b style={{ fontSize: "15px" }}>State :</b><em style={{ fontSize: "15px" }}>KARNATAKA</em>
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
                        <Card.Img variant="top" className="rounded shadow w-100" src="https://static2.tripoto.com/media/filter/tst/img/1019120/TripDocument/1541420867_shareiq_829_1407770462_286402.jpg" />
                        <Card.Body>
                            <Card.Title style={{ color: "red" }}><b>KHAMMAM- BORRA CAVES</b></Card.Title>
                            <Card.Text>
                                <b style={{ fontSize: "15px" }}>Package :</b><em style={{ fontSize: "15px" }}> 3 NIGHTS, 2 DAY-DAILY PACKAGE</em>
                                <br />
                                <b style={{ fontSize: "15px" }}>Service starting :</b><em style={{ fontSize: "15px" }}> KHAMMAM</em>
                                <br />
                                <b style={{ fontSize: "15px" }}>Package Code :</b><em style={{ fontSize: "15px" }}>6074</em>
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
                        <Card.Img variant="top" className="shadow rounded w-100" src="https://www.trawell.in/admin/images/upload/682559597Thalassery_Fort.jpg" />
                        <Card.Body>
                            <Card.Title style={{ color: "red" }}><b>KHAMMAM- TELLICHERRY FORT</b></Card.Title>
                            <Card.Text>
                                <b style={{ fontSize: "15px" }}>Package :</b><em style={{ fontSize: "15px" }}> 2 NIGHTS, 2 DAY-DAILY PACKAGE</em>
                                <br />
                                <b style={{ fontSize: "15px" }}>Service starting :</b><em style={{ fontSize: "15px" }}> KHAMMAM</em>
                                <br />
                                <b style={{ fontSize: "15px" }}>Package Code :</b><em style={{ fontSize: "15px" }}> 6077</em>
                                <br />
                                <b style={{ fontSize: "15px" }}>Rating :</b> <FontAwesomeIcon style={{ color: "orange" }} icon={faStar} size="1x"></FontAwesomeIcon>
                                <FontAwesomeIcon style={{ color: "orange" }} icon={faStar} size="1x"></FontAwesomeIcon>
                                <FontAwesomeIcon style={{ color: "orange" }} icon={faStar} size="1x"></FontAwesomeIcon>
                                <FontAwesomeIcon style={{ color: "orange" }} icon={faStarHalfStroke} size="1x"></FontAwesomeIcon>
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
            </Row>
            <br />
            <br />
        </div >
    );
}

export default Monuments;
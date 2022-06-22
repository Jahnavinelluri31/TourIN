import React from 'react'
import img1 from './Images/bus1.jpg'
import img2 from './Images/bus2.jpg'
import img3 from './Images/bus3.jpg'
import img4 from './Images/bus4.jpg'
import Carousel  from 'react-bootstrap/Carousel'
function Slider() {
 
    return (
      < div className='' >
        <Carousel>
          <Carousel.Item>
            <img className="img-fluid w-100" src={img1} alt="..." />
          </Carousel.Item >

          <Carousel.Item >
            <img className="img-fluid  w-100" src={img2} alt="..." />
          </Carousel.Item >

          <Carousel.Item>
            <img className="img-fluid w-100" src={img3} alt="..." />
          </Carousel.Item >

          <Carousel.Item >
            <img className="img-fluid  w-100" src={img4} alt="..." />
          </Carousel.Item >
        </Carousel >
      </div >
  )
}

export default Slider;

import React from 'react'
import img1 from './Images/Temple.jpg'
import img2 from './Images/monument.jpg'
import img4 from './Images/boat.jpg'
import img5 from './Images/beach.jpg'
import img6 from './Images/hills.jpg'
import img7 from './Images/gold.jpg'
import Carousel  from 'react-bootstrap/Carousel'
function Slideshow() {
 
    return (
      < div className='' >
        <Carousel>
          <Carousel.Item>
            <img className="img-fluid w-100" src={img2} alt="..." />
          </Carousel.Item >

          <Carousel.Item >
            <img className="img-fluid  w-100" src={img4} alt="..." />
          </Carousel.Item >

          <Carousel.Item>
            <img className="img-fluid w-100" src={img1} alt="..." />
          </Carousel.Item >

          <Carousel.Item >
            <img className="img-fluid  w-100" src={img5} alt="..." />
          </Carousel.Item >

          <Carousel.Item >
            <img className="img-fluid  w-100" src={img6} alt="..." />
          </Carousel.Item >

          <Carousel.Item >
            <img className="img-fluid  w-100" src={img7} alt="..." />
          </Carousel.Item >
        </Carousel >
      </div >
  )
}

export default Slideshow

import React from 'react'
import { MDBCarousel, MDBCarouselItem } from 'mdb-react-ui-kit'
// reactstrap components
import { Container, Row, Col } from 'reactstrap'

// core components

function Images() {
  return (
    <>
      <div className="section-images-fluid m-5 p-0">
        <MDBCarousel showControls showIndicators>
          <MDBCarouselItem
            className="w-100 d-block"
            itemId={1}
            src="https://play-lh.googleusercontent.com/GxIIRBDk67tp_HUtP71zXPDlfSNaL5xcMGiCtWzF0e9eIsgnhjfiqIGu0e07mZvquig=w526-h296-rw"
            alt="..."
          />
          <MDBCarouselItem
            className="w-100 d-block"
            itemId={2}
            src="https://play-lh.googleusercontent.com/GxIIRBDk67tp_HUtP71zXPDlfSNaL5xcMGiCtWzF0e9eIsgnhjfiqIGu0e07mZvquig=w526-h296-rw"
            alt="..."
          />
          <MDBCarouselItem
            className="w-100 d-block"
            itemId={3}
            src="https://play-lh.googleusercontent.com/GxIIRBDk67tp_HUtP71zXPDlfSNaL5xcMGiCtWzF0e9eIsgnhjfiqIGu0e07mZvquig=w526-h296-rw"
            alt="..."
          />
        </MDBCarousel>
      </div>
    </>
  )
}

export default Images

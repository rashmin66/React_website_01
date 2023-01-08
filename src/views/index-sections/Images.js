import React from 'react'
import { MDBCarousel, MDBCarouselItem } from 'mdb-react-ui-kit'
// reactstrap components
import { Container, Row, Col } from 'reactstrap'

// core components

function Images() {
  return (
    <>
      <div className="section-images-fluid m-5 p-0">
        <div class="container">
          <Row>
            <Col>
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
                  src="https://play-lh.googleusercontent.com/6sl3-8OH4cEnWTE8P9IR7zc6BD4hN6Q4lDobCBiBs-yuyVRiYRoCdqvHrrqP-Vj8Qfk=w2560-h1440-rw"
                  alt="..."
                />
                <MDBCarouselItem
                  className="w-100 d-block"
                  itemId={3}
                  src="https://play-lh.googleusercontent.com/4ffKgbJjKciz9XBSDsrl1UUObH-76pCQwzh-yKoh0cHDTCFv4z1--4sYSCIFPABMcg=w526-h296-rw"
                  alt="..."
                />
              </MDBCarousel>
            </Col>
            <Col>
              <p>We are providing top class games</p>
            </Col>
          </Row>
        </div>
      </div>
    </>
  )
}

export default Images

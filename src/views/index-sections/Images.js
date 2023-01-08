import React from 'react'
import { MDBCarousel, MDBCarouselItem } from 'mdb-react-ui-kit'
// reactstrap components
import { Container, Row, Col } from 'reactstrap'

// core components

function Images() {
  return (
    <>
      <div className="section-images-fluid m-5 p-0">
        <Container className="fluid">
          <div className="row">
            <div className="col-sm-12 col-xs-12 col-md-6">
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
            </div>
            <Col className="col-sm-12 col-xs-12 col-md-6">
              <p>
                "Video games are a form of art, and like all art, they have the
                power to inspire and bring people together. They have the
                ability to transport us to new worlds and allow us to experience
                things we never could have otherwise. Whether you're a seasoned
                gamer or just starting out, there's a video game out there for
                you, and I can't wait to see where your gaming journey takes
                you."
              </p>
            </Col>
          </div>
        </Container>
      </div>
    </>
  )
}

export default Images

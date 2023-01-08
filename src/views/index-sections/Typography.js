import React from 'react'

// reactstrap components
import { Container, Row, Col } from 'reactstrap'

// core components

function Typography() {
  return (
    <>
      <div className="section noselect align-items-right">
        <Container>
          <div className="space-50"></div>
          <div id="images float-right">
            <h4>Games</h4>
            <Row>
              <Col sm="2">
                <p className="category">Raised</p>
                <img
                  draggable={false}
                  alt="..."
                  className="rounded img-raised"
                  src={require('assets/img/julie.jpg')}
                ></img>
              </Col>
              <Col sm="2">
                <p className="category">Raised</p>
                <img
                  draggable={false}
                  alt="..."
                  className="rounded img-raised"
                  src={require('assets/img/julie.jpg')}
                ></img>
              </Col>
              <Col sm="2">
                <p className="category">Raised</p>
                <img
                  draggable={false}
                  alt="..."
                  className="rounded img-raised"
                  src={require('assets/img/julie.jpg')}
                ></img>
              </Col>
              <Col sm="2">
                <p className="category">Raised</p>
                <img
                  draggable={false}
                  alt="..."
                  className="rounded img-raised"
                  src={require('assets/img/julie.jpg')}
                ></img>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    </>
  )
}

export default Typography

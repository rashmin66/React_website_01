import React from 'react'

// reactstrap components
import { Container, Row, Col } from 'reactstrap'

// core components

function Typography() {
  return (
    <>
      <div className="section noselect">
        <Container>
          <div id="images">
            <h4 className="font-weight-bold">Our current games</h4>
            <Row className="float-center">
              <Col sm="2">
                {/* <p className="category">Raised</p> */}
                <a
                  href="#"
                  role="button"
                  aria-pressed="true"
                  className="ripple"
                >
                  <img
                    draggable={false}
                    alt="..."
                    className="rounded img-raised"
                    src={require('assets/img/GameIcons/RTR-icon.png')}
                  ></img>
                </a>
                <button type="button" class="btn btn-primary btn-lg">
                  Primary
                </button>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    </>
  )
}

export default Typography

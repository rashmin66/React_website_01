import React from "react";

// reactstrap components
import { Container, Row, Col } from "reactstrap";

// core components

function Typography() {
  return (
    <>
      <div className="section">
        <Container>
          <div className="space-50"></div>
          <div id="images">
            <h4>Images</h4>
            <Row>
              <Col sm="2">
                <p className="category">Raised</p>
                <img
                  alt="..."
                  className="rounded img-raised"
                  src={require("assets/img/julie.jpg")}
                ></img>
              </Col>
              <Col sm="2">
                <p className="category">Raised</p>
                <img
                  alt="..."
                  className="rounded img-raised"
                  src={require("assets/img/julie.jpg")}
                ></img>
              </Col>
              <Col sm="2">
                <p className="category">Raised</p>
                <img
                  alt="..."
                  className="rounded img-raised"
                  src={require("assets/img/julie.jpg")}
                ></img>
              </Col>
              <Col sm="2">
                <p className="category">Raised</p>
                <img
                  alt="..."
                  className="rounded img-raised"
                  src={require("assets/img/julie.jpg")}
                ></img>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    </>
  );
}

export default Typography;

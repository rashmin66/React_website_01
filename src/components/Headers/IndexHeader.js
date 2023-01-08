/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container } from "reactstrap";
// core components

function IndexHeader() {
  let pageHeader = React.createRef();

  React.useEffect(() => {
    if (window.innerWidth > 991) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3;
        pageHeader.current.style.transform =
          "translate3d(0," + windowScrollTop + "px,0)";
      };
      window.addEventListener("scroll", updateScroll);
      return function cleanup() {
        window.removeEventListener("scroll", updateScroll);
      };
    }
  });

  return (

      <div className="page-header" background-color="black">
        <div
          className="page-header-image"
          // style={{
          //   backgroundImage: "url(" + require("assets/img/header.jpg") + ")",
          // }}
          ref={pageHeader}

        ></div>
        {/* <Container>
          <div className="content-center brand">
            
          </div>
          <h6 className="category category-absolute">
          </h6>
        </Container>*/}
      <Container>
         <div class="row mt-5">
        <div class="col-lg-6 order-1 text-lg-start">
          <h1>
            Work that we produce for our clients
          </h1>
          <p>
            Lorem lpsum is simply dummy text of the printing and typesetting industry.
            lorem lpsum has been the industry's standard.
            </p>
          <button type="button" class="btn-primary mb-3">Get more details</button>
        </div>
    
        <div class="col-lg-6 order-2 text-lg-start">
        <img src="https://play-lh.googleusercontent.com/GxIIRBDk67tp_HUtP71zXPDlfSNaL5xcMGiCtWzF0e9eIsgnhjfiqIGu0e07mZvquig=w526-h296-rw" alt="My Image"  />
        </div>
        </div>
      </Container>
      </div>
     
  );
}

export default IndexHeader;

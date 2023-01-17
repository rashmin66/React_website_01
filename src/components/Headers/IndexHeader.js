/*eslint-disable*/
import React from 'react'

// reactstrap components
import { Container } from 'reactstrap'
// core components

function IndexHeader() {
  let pageHeader = React.createRef()

  React.useEffect(() => {
    if (window.innerWidth > 991) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3
        pageHeader.current.style.transform =
          'translate3d(0,' + windowScrollTop + 'px,0)'
      }
      window.addEventListener('scroll', updateScroll)
      return function cleanup() {
        window.removeEventListener('scroll', updateScroll)
      }
    }
  })

  return (
    <div className="page-header">
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
            <h1>Work that we produce for our clients</h1>
            <p>
              Lorem lpsum is simply dummy text of the printing and typesetting
              industry. lorem lpsum has been the industry's standard.
            </p>
            <button type="button" class="btn mb-3">
              Get more details
            </button>
          </div>

          <div class="col-lg-6 order-2 text-lg-start">
            <img
              class="fluid"
              src="https://img.freepik.com/free-vector/vintage-badge-hand-holding-joystick-vector-illustration-round-label-with-gamepad_74855-11224.jpg?w=740&t=st=1673200315~exp=1673200915~hmac=3a9bb4304c60fd7038e8aebfd73086ffd2a4720b14b014a703a5a75cff88eec0"
              alt="My Image"
            />
          </div>
        </div>
      </Container>
    </div>
  )
}

export default IndexHeader

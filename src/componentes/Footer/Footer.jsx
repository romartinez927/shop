import React from 'react'
import "./footer.css"

function Footer() {
  return (
    <div className="footer bg-light py-3">
      <div className="container">
          <div className="row d-flex justify-content-evenly py-5">
            <div className="col-3 my-auto">
              <h6>About Website</h6>
              <p className="p-small">He oppose at thrown desire of no. Announcing impression unaffected day his are unreserved indulgence. Him hard find read are you</p>
            </div>
            <div className="col-3">
              <h6>Links</h6>
              <ul className="list-unstyled li-space-lg p-small">
                <li>Important: <a href="terms.html">Terms & Conditions</a>, <a href="privacy.html">Privacy Policy</a></li>
                <li>Useful: <a href="#">Colorpicker</a>, <a href="#">Icon Library</a>, <a href="#">Illustrations</a></li>
                <li>Menu: <a href="#header">Home</a>, <a href="#details">Details</a>, <a href="#services">Services</a>, <a href="#contact">Contact</a></li>
              </ul>
            </div>
            <div className="col-3 text-center my-auto">
              <span className="fa-stack">
                <a href="#your-link">
                  <i className="fa-brands fa-facebook fs-4 fa-stack-1x"></i>
                </a>
              </span>
              <span className="fa-stack">
                <a href="#your-link">
                  <i className="fab fa-twitter fs-4 fa-stack-1x"></i>
                </a>
              </span>
              <span className="fa-stack">
                <a href="#your-link">
                  <i className="fa-brands fa-whatsapp fs-4 fa-stack-1x"></i>
                </a>
              </span>
              <span className="fa-stack">
                <a href="#your-link">
                  <i className="fab fa-instagram fs-4 fa-stack-1x"></i>
                </a>
              </span>
              <p className="p-small pt-3">We would love to hear from you <a href="mailto:contact@site.com"><strong>contact@site.com</strong></a></p>
            </div>
        </div>
        <div class="copyright bg-gray">
          <div class="container">
            <div class="row">
              <div class="col-lg-12 text-center">
                <p class="p-small">Copyright © <a href="#your-link">Your name</a></p>
              </div>
            </div> 
          </div> 
        </div> 
      </div>
    </div>
  )
}

export default Footer
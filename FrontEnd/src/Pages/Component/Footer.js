import React from "react";
import { Container } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";

function Footer() {
  return (
    <>
      <footer className=" bg-light py-4 shadow-sm">
        <Container>
          <h4 className="text-primary text-center">Footer</h4>
        </Container>
        {/* <div className="footer_padding background-color-white">
          <div>
            <div className="footer_section">
              <div className="footer_logo">
                <a className="footer-brand" href="index.html">
                  <img src="assets/images/logo/logo01.png" />
                </a>
              </div>
              <div className="footer_icon">
                <ul>
                  <li>
                    <a href="#">
                      <i className="fab fa-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-linkedin"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-instagram"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <hr />
            <div className="footer_section footer_section_second">
              <div className="footer_barnd">
                <a href="#">© Learnet LLC </a>
              </div>
              <div className="privacytext">
                <span className="privacy_section">
                  {" "}
                  <Link to="/privacy-policy">Privacy Policy</Link>
                </span>{" "}
                <Link to="/term-and-condtion">T & C</Link>
              </div>
            </div>
          </div>
        </div> */}
      </footer>
    </>
  );
}

export default Footer;

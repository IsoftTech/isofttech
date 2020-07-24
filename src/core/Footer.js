import React from "react";

import { Link, withRouter } from "react-router-dom";

const Footer = () => (
  <div>
    <footer>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-3 col-md-6 col-sm-12">
            <img src="assets/images/fanprotect.svg" alt="fanprotect" />
            <h5>
              <img src="assets/images/buy-sell.svg" alt="buy-sell" />
              Buy and sell with confidence
            </h5>
            <h5>
              <img src="assets/images/service.svg" alt="service" />
              Customer service all the way to your seat
            </h5>
            <h5>
              <img src="assets/images/guarentee.svg" alt="guarentee" />
              Every order is 100% guaranteed
            </h5>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12">
            <h4>Our Company</h4>
            <ul className="footer-links">
              <li className="footer-link">
                <Link to="/about">About us</Link>
              </li>
              <li className="footer-link">
                <Link to="/contact">Contact Us</Link>
              </li>
              <li className="footer-link">
                <a href="#">Partners</a>
              </li>
              <li className="footer-link">
                <a href="#">For Developers</a>;{" "}
              </li>
              <li className="footer-link">
                <a href="#">Affiliates</a>
              </li>
              <li className="footer-link">
                <a href="#">Careers</a>
              </li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12">
            <h4>Have questions?</h4>
            <ul className="footer-links">
              <li className="footer-link">
                <a href="#">StubHub Community</a>
              </li>
              <li className="footer-link">
                <a href="#">Help center</a>
              </li>
              <li className="footer-link">
                <a href="#">Last Minute Services</a>
              </li>
              <li className="footer-link">
                <a href="#">Live by StubHub</a>
              </li>
              <li className="footer-link">
                <a href="#">Cities</a>
              </li>
              <li className="footer-link">
                <a href="#">Gift cards</a>
              </li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12">
            <h4>Live events in over 50 countries</h4>
            <button className="language-selector">
              <span className="languageUS">
                <span>United States |</span>
                <span className="translate">
                  <img src="assets/images/language.svg" alt="language" />
                  <span>English</span>
                </span>
              </span>
            </button>
          </div>
        </div>
      </div>
    </footer>
    <section className="copyright-container">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-6 order-lg-1 order-md-2 copyright">
            <p>
              © 2020 Love1Ticket. All Rights Reserved. Use of this website
              signifies your agreement to our
              <a href="#">User Agreement, Privacy Notice and Cookie Notice</a>.
              You are buying tickets from a third party; Love1Ticket is not the
              ticket seller. Prices are set by sellers and may be above face
              value. <a href="#">User Agreement change notifications</a>
            </p>
          </div>
          <div className="col-lg-6 order-lg-2 order-md-1 social">
            <div className="social-links">
              <a href="https://www.facebook.com/">
                <img src="assets/images/facebook.svg" alt="facebook" />
              </a>
              <a href="https://www.instagram.com/">
                <img src="assets/images/instagram.svg" alt="instagram" />
              </a>
              <a href="https://www.twitter.com/">
                <img src="assets/images/twitter.svg" alt="twitter" />
              </a>
            </div>
            <div className="download">
              <img src="assets/images/appstore.svg" alt="appstore" />
              <img src="assets/images/playstore.svg" alt="playstore" />
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default withRouter(Footer);

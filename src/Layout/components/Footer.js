import React from "react";
import "./style/footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-row">
        <div className="get-in-touch">
          <div className="headers">
            <h4>get in touch</h4>
          </div>
          <p>
            Any questions? Let us know in store at 8th floor, 379 Hudson St, New
            York, NY 10018 or call us on (+1) 96 716 6879
          </p>
          <div className="social-media">
            <ul className="list-unstyled">
              <li>
                <a href="/">
                  <i className="fab fa-facebook-f"></i>
                </a>
              </li>
              <li>
                <a href="/">
                  <i className="fab fa-instagram"></i>
                </a>
              </li>
              <li>
                <a href="/">
                  <i className="fab fa-pinterest-p"></i>
                </a>
              </li>
              <li>
                <a href="/">
                  <i className="fab fa-snapchat-ghost"></i>
                </a>
              </li>
              <li>
                <a href="/">
                  <i className="fab fa-youtube"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-lists">
          <div className="headers">
            <h4>categories</h4>
          </div>
          <ul className="list-unstyled">
            <li>
              <a href="/">men</a>
            </li>
            <li>
              <a href="/">women</a>
            </li>
            <li>
              <a href="/">dresses</a>
            </li>
            <li>
              <a href="/">sunglasses</a>
            </li>
          </ul>
        </div>
        <div className="footer-lists">
          <div className="headers">
            <h4>links</h4>
          </div>
          <ul className="list-unstyled">
            <li>
              <a href="/">search</a>
            </li>
            <li>
              <a href="/">about us</a>
            </li>
            <li>
              <a href="/">contact us</a>
            </li>
            <li>
              <a href="/">returns</a>
            </li>
          </ul>
        </div>
        <div className="footer-lists">
          <div className="headers">
            <h4>help</h4>
          </div>
          <ul className="list-unstyled">
            <li>
              <a href="/">track order</a>
            </li>
            <li>
              <a href="/">returns</a>
            </li>
            <li>
              <a href="/">shipping</a>
            </li>
            <li>
              <a href="/">FAQs</a>
            </li>
          </ul>
        </div>
        <div className="sub">
          <div className="headers">
            <h4>newsletter</h4>
          </div>
          <div>
            <input
              className="sub-input"
              type="text"
              placeholder="email@example.com"
            />
          </div>
          <div>
            <button className="sub-btn">subscribe</button>
          </div>
        </div>
      </div>
      <div className="copyrights text-center">
        <a href="/">
          <img src="img/icon/paypal.png" alt="companies" />
        </a>
        <a href="/">
          <img src="img/icon/visa.png" alt="companies" />
        </a>
        <a href="/">
          <img src="img/icon/mastercard.png" alt="companies" />
        </a>
        <a href="/">
          <img src="img/icon/express.png" alt="companies" />
        </a>
        <a href="/">
          <img src="img/icon/discover.png" alt="companies" />
        </a>
        <div className="copy">
          Copyright © 2017 Colorlib. All rights reserved.
        </div>
      </div>
    </div>
  );
};

export default Footer;

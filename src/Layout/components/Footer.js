import React from "react";
import { Link } from "react-router-dom";
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
                <Link to="/">
                  <i className="fab fa-facebook-f"></i>
                </Link>
              </li>
              <li>
                <Link to="/">
                  <i className="fab fa-instagram"></i>
                </Link>
              </li>
              <li>
                <Link to="/">
                  <i className="fab fa-pinterest-p"></i>
                </Link>
              </li>
              <li>
                <Link to="/">
                  <i className="fab fa-snapchat-ghost"></i>
                </Link>
              </li>
              <li>
                <Link to="/">
                  <i className="fab fa-youtube"></i>
                </Link>
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
              <Link to="/">men</Link>
            </li>
            <li>
              <Link to="/">women</Link>
            </li>
            <li>
              <Link to="/">dresses</Link>
            </li>
            <li>
              <Link to="/">sunglasses</Link>
            </li>
          </ul>
        </div>
        <div className="footer-lists">
          <div className="headers">
            <h4>links</h4>
          </div>
          <ul className="list-unstyled">
            <li>
              <Link to="/">search</Link>
            </li>
            <li>
              <Link to="/">about us</Link>
            </li>
            <li>
              <Link to="/">contact us</Link>
            </li>
            <li>
              <Link to="/">returns</Link>
            </li>
          </ul>
        </div>
        <div className="footer-lists">
          <div className="headers">
            <h4>help</h4>
          </div>
          <ul className="list-unstyled">
            <li>
              <Link to="/">track order</Link>
            </li>
            <li>
              <Link to="/">returns</Link>
            </li>
            <li>
              <Link to="/">shipping</Link>
            </li>
            <li>
              <Link to="/">FAQs</Link>
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
        <Link to="/">
          <img src="img/icon/paypal.png" alt="companies" />
        </Link>
        <Link to="/">
          <img src="img/icon/visa.png" alt="companies" />
        </Link>
        <Link to="/">
          <img src="img/icon/mastercard.png" alt="companies" />
        </Link>
        <Link to="/">
          <img src="img/icon/express.png" alt="companies" />
        </Link>
        <Link to="/">
          <img src="img/icon/discover.png" alt="companies" />
        </Link>
        <div className="copy">
          Copyright © 2017 Colorlib. All rights reserved.
        </div>
      </div>
    </div>
  );
};

export default Footer;

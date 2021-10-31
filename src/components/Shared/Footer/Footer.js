import React from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import "./Footer.css";
const Footer = () => {
  return (
    <div>
      <div class='footer'>
        <div class='container'>
          <div class='row'>
            <div class='col-md-4 col-xs-12'>
              <div class='first'>
                <h4 className=' text-start'>Our More Service</h4>
                <p> Customize tour</p>
                <p> Air ticketing</p>
                <p> Bus ticking</p>
                <p> Visa processing</p>
              </div>
            </div>

            <div class='col-md-4 col-xs-12'>
              <div class='second'>
                <h4> Navigate</h4>
                <ul>
                  <li>
                    <Link as={HashLink} to='/home'>
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link as={HashLink} to='/about'>
                      About
                    </Link>
                  </li>
                  <li>
                    <Link as={HashLink} to='/home#gallery'>
                      Gallery
                    </Link>
                  </li>
                  <li>
                    <Link as={HashLink} to='#review'>
                      Review
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div class='col-md-4 col-xs-12'>
              <div class='third'>
                <h4> Contact</h4>
                <ul>
                  <li>31/1 Banani Dhaka Bangladesh</li>
                  <li></li>

                  <li>
                    <i class='far fa-envelope'></i> tourde@tourde.co.bd
                  </li>
                  <li>
                    <i class='far fa-envelope'></i> tourde@tourde.com
                  </li>

                  <li>
                    <i class='fas fa-map-marker-alt'></i> Dhaka, Bangladesh{" "}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class='container'>
          <div class='row'>
            <div class='col-12'>
              <div class='line'></div>
              <div class='second2'>
                <Link
                  href='https://www.linkedin.com/in/gourab997/'
                  target='_blank'
                >
                  {" "}
                  <i class='fab fa-github fa-2x margin'></i>
                </Link>
                <Link href='https://github.com/Gourab997' target='_blank'>
                  {" "}
                  <i class='fab fa-linkedin fa-2x margin'></i>
                </Link>
                <Link href='' target='_blank'>
                  <i class='fab fa-youtube fa-2x margin'></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

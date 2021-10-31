import React from "react";

import aboutBanner from "../../images/about.svg";
import map from "../../images/map.svg";
import "./About.css";
const About = () => {
  return (
    <div className='container'>
      <img className='m-5 aboutImg' src={aboutBanner} alt='' />
      <h1 className=' text-success '>About us</h1>
      <p className='pe-5'>
        Tour de is a corporate tour operator and travel agency located in
        Bangladesh . We specialize in tours to europe, asia , uk but are always
        expanding and enhancing our wide range of offers, as well as adding new
        and exciting tours of Britain, Italy, Eastern Europe, Mexico and the
        Caribbean. A family-owned business based in Boston, Crystal Travel was
        founded in 2021 by Gourab and since that humble beginning it has grown
        into a trusted resource that has helped tens of thousands of people
        better enjoy their travel.
      </p>

      <div className='mt-5 pt-5'>
        <div class='containers'>
          <div class='d-lg-flex'>
            <div class='d-md-flex align-items-center mb-lg-0 mb-md-5'>
              <div class='col1 me-md-4 mb-md-0 mb-5'>
                <div class='card cards pb-4'>
                  {" "}
                  <span class='fas fa-hotel mt-3'> </span>
                  <p class='h4 pt-4'>Affordable hotels</p>
                  <p class='p1 text-muted'>
                    {" "}
                    A hotel that provides minimum amenities and services for a
                    lower price in the area.{" "}
                  </p>{" "}
                  <span class='fas fa-arrow-up'></span>
                </div>
              </div>
              <div class='col2 me-md-4 mb-md-0 mb-5'>
                <div class='card cards pb-4'>
                  {" "}
                  <span class='fas fa-utensils mt-3'></span>
                  <p class='h4 pt-4'>Food and Drinks</p>
                  <p class='p1 text-muted'>
                    {" "}
                    Providing best food and also provide best traditional food
                    by cooking world best chief.{" "}
                  </p>{" "}
                  <span class='fas fa-arrow-up'></span>
                </div>
              </div>
              <div class='col3 me-md-4 mb-md-0 mb-5'>
                <div class='card cards pb-4'>
                  {" "}
                  <span class='fas fa-bullhorn mt-3'></span>
                  <p class='h4 pt-4'>Safety guide</p>
                  <p class='p1 text-muted'>
                    {" "}
                    We ensure 100% safety and security for travellers . It is
                    our top most priority.{" "}
                  </p>{" "}
                  <span class='fas fa-arrow-up'></span>
                </div>
              </div>
            </div>
            <div class='col4'>
              <div class='content'>
                {" "}
                <span class='h-6'>Services</span>
                <p class=' h2 mb-4'>Tour de Services</p>
                <p class='text-muted mb-4'>
                  Explore the world with us. “Travel is the main thing you
                  purchase that makes you more extravagant”. We, at Tour de,
                  swear by this and put stock in satisfying travel dreams that
                  make you perpetually rich constantly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h1 className=' text-success'>OUR MISSION</h1>
        <p>
          Creating travel memories of a lifetime for customers takes enormous
          different elements, and we completely understand this. With an
          in-depth understanding of our land & more than 10 years experiences
          devoting to design remarkable Asia tours, we always endeavour utmost
          to fulfil our customer's ever-changing needs & wants, and deliver the
          most unforgettable trip filled with the real local experiences.
          Moreover, being Earth's most customer-centric tour operator, we are
          committed to offering competitive value for money travel at the best
          quality in order to go beyond the customer's expectation
        </p>
        <img className='pe-5 py-5 aboutImg' src={map} alt='' srcset='' />
      </div>
    </div>
  );
};

export default About;

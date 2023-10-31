import React from "react";
import about10 from "../img/about/about_10.png";
import { Link } from "react-router-dom";
import herobanner__1 from "../img/herobanner/herobanner__1.png";
import herobanner__2 from "../img/herobanner/herobanner__2.png";
import herobanner__3 from "../img/herobanner/herobanner__3.png";
import herobanner__4 from "../img/herobanner/herobanner__4.png";
import herobanner__5 from "../img/herobanner/herobanner__5.png";

const HeroBanner = () => {
  return (
    <>
      {/* <!-- herobannerarea__section__start --> */}
      <div class="herobannerarea herobannerarea__2">
        <div class="container">
          <div class="row">
            <div
              class="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12"
              data-aos="fade-up"
            >
              <div class="herobannerarea__content__wraper">
                <div class="herobannerarea__title">
                  <div class="herobannerarea__small__title">
                    <span>Education Solution</span>
                  </div>
                  <div class="herobannerarea__title__heading__2 herobannerarea__title__heading__3">
                    <h2>Cloud-based LMS Trusted by 1000+</h2>
                  </div>
                </div>
                <div class="herobannerarea__text herobannerarea__text__2">
                  <p>
                    Lorem Ipsum is simply dummy text of the printing typesetting
                    industry. Lorem Ipsum has been{" "}
                  </p>
                </div>
                <div class="hreobannerarea__button__2">
                  <Link class="default__button" to="#">
                    View Courses
                  </Link>
                  <Link
                    class="default__button hreobannerarea__button__3"
                    to="#"
                  >
                    Explore More
                  </Link>
                </div>
              </div>
            </div>
            <div
              class="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12"
              data-aos="fade-up"
            >
              <div class="aboutarea__img__2" data-tilt>
                <img className="aboutimg__1" src={about10} alt="aboutimg" />
              </div>
            </div>
          </div>
        </div>
        <div class="herobannerarea__icon__2">
          <img
            class="herobanner__common__img herobanner__img__1"
            src={herobanner__1}
            alt="photoo"
          />
          <img
            class="herobanner__common__img herobanner__img__2"
            src={herobanner__2}
            alt="photoo"
          />
          <img
            class="herobanner__common__img herobanner__img__3"
            src={herobanner__3}
            alt="photoo"
          />
          <img
            class="herobanner__common__img herobanner__img__4"
            src={herobanner__4}
            alt="photoo"
          />
          <img
            class="herobanner__common__img herobanner__img__5"
            src={herobanner__5}
            alt="photoo"
          />
        </div>
      </div>
      {/* <!-- herobannerarea__section__end--> */}
    </>
  );
};

export default HeroBanner;

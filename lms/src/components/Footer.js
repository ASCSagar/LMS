import React from 'react';
import { Link } from 'react-router-dom';
import footer1 from '../img/footer/footer__1.png';
import footer2 from '../img/footer/footer__2.png';
import footer3 from '../img/footer/footer__3.png';
import logo2 from '../img/logo/logo_2.png';

const Footer = () => {
  return (
    <div className="footerarea">
      <div className="container">
        <div className="footerarea__newsletter__wraper">
          <div className="row">
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12" data-aos="fade-up">
              <div className="footerarea__text">
                <h3>Still You Need Our <span>Support</span> ?</h3>
                <p>Don’t wait, make a smart & logical quote here. It's pretty easy.</p>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12" data-aos="fade-up">
              <div className="footerarea__newsletter">
                <div className="footerarea__newsletter__input">
                  <form action="#">
                    <input type="text" placeholder="Enter your email here" />
                    <div className="footerarea__newsletter__button">
                      <button type="submit" className="subscribe__btn">Subscribe Now</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="footerarea__wrapper footerarea__wrapper__2">
          <div className="row">
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12" data-aos="fade-up">
              <div className="footerarea__inner footerarea__about__us">
                <div className="footerarea__heading">
                  <h3>About us</h3>
                </div>
                <div className="footerarea__content">
                  <p>Corporate clients and leisure travelers have been relying on Groundlink for dependable, safe, and professional chauffeured car end service in major cities across the world.</p>
                </div>
                <div className="foter__bottom__text">
                  <div className="footer__bottom__icon">
                    <i className="icofont-clock-time"></i>
                  </div>
                  <div className="footer__bottom__content">
                    <h6>Opening Hours</h6>
                    <span>Mon - Sat(8.00 - 6.00)</span>
                    <span>Sunday - Closed</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-2 col-lg-2 col-md-6 col-sm-6" data-aos="fade-up">
              <div className="footerarea__inner">
                <div className="footerarea__heading">
                  <h3>Useful Links</h3>
                </div>
                <div className="footerarea__list">
                  <ul>
                    <li>
                      <Link to="#">About Us</Link>
                    </li>
                    <li>
                      <Link to="#">Teachers</Link>
                    </li>
                    <li>
                      <Link to="#">Partner</Link>
                    </li>
                    <li>
                      <Link to="#">Room-Details</Link>
                    </li>
                    <li>
                      <Link to="#">Gallery</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6" data-aos="fade-up">
              <div className="footerarea__inner footerarea__padding__left">
                <div className="footerarea__heading">
                  <h3>Course</h3>
                </div>
                <div className="footerarea__list">
                  <ul>
                    <li>
                      <Link to="#">Ui Ux Design</Link>
                    </li>
                    <li>
                      <Link to="#">Web Development</Link>
                    </li>
                    <li>
                      <Link to="#">Business Strategy</Link>
                    </li>
                    <li>
                      <Link to="#">Software Development</Link>
                    </li>
                    <li>
                      <Link to="#">Business English</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12" data-aos="fade-up">
              <div className="footerarea__right__wraper footerarea__inner">
                <div className="footerarea__heading">
                  <h3>Recent Post</h3>
                </div>
                <div className="footerarea__right__list">
                  <ul>
                    <li>
                      <Link to="#">
                        <div className="footerarea__right__img">
                          <img src={footer1} alt="footerphoto" />
                        </div>
                        <div className="footerarea__right__content">
                          <span>02 Apr 2023</span>
                          <h6>Best Your Business</h6>
                        </div>
                      </Link>
                    </li>

                    <li>
                      <Link to="#">
                        <div className="footerarea__right__img">
                          <img src={footer2} alt="footerphoto" />
                        </div>
                        <div className="footerarea__right__content">
                          <span>02 Apr 2023</span>
                          <h6>Keep Your Business</h6>
                        </div>
                      </Link>
                    </li>

                    <li>
                      <Link to="#">
                        <div className="footerarea__right__img">
                          <img src={footer3} alt="footerphoto" />
                        </div>
                        <div className="footerarea__right__content">
                          <span>02 Apr 2023</span>
                          <h6>Nice Your Business</h6>
                        </div>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footerarea__copyright__wrapper footerarea__copyright__wrapper__2">
          <div className="row">
            <div className="col-xl-3 col-lg-3">
              <div className="copyright__logo">
                <Link to="https://html.themewin.com/"><img src={logo2} alt="logo" /></Link>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6">
              <div className="footerarea__copyright__content footerarea__copyright__content__2">
                <p>Copyright © <span>2023</span> by edurock. All Rights Reserved.</p>
              </div>
            </div>
            <div className="col-xl-3 col-lg-3">
              <div className="footerarea__icon footerarea__icon__2">
                <ul>
                  <li><Link to="http://facebook.com/"><i className="icofont-facebook"></i></Link></li>
                  <li><Link to="http://twitter.com/"><i className="icofont-twitter"></i></Link></li>
                  <li><Link to="http://vimeo.com/"><i className="icofont-vimeo"></i></Link></li>
                  <li><Link to="http://linkedin.com/"><i className="icofont-linkedin"></i></Link></li>
                  <li><Link to="http://skype.com/"><i className="icofont-skype"></i></Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

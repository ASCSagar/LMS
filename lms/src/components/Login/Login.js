import React from "react";
import Navbar from "../Navbar";
import TopBar from "../Topbar";
import img1 from "../../img/education/hero_shape2.png";
import img2 from "../../img/education/hero_shape3.png";
import img3 from "../../img/education/hero_shape4.png";
import img4 from "../../img/education/hero_shape5.png";
import img5 from "../../img/herobanner/herobanner__1.png";
import img6 from "../../img/herobanner/herobanner__2.png";
import img7 from "../../img/herobanner/herobanner__3.png";
import img8 from "../../img/herobanner/herobanner__5.png";
import DarkNight from "../DarkNight";
import { Link } from "react-router-dom";
import Footer from "../Footer";

const Login = () => {
  return (
    <>
      <DarkNight />
      <TopBar />
      <Navbar />
      <div className="body__wrapper">
        <div className="main_wrapper overflow-hidden">
          <div className="breadcrumbarea">
            <div className="container">
              <div className="row">
                <div className="col-xl-12">
                  <div
                    className="breadcrumb__content__wraper"
                    data-aos="fade-up"
                  >
                    <div className="breadcrumb__title">
                      <h2 className="heading">Log In</h2>
                    </div>
                    <div className="breadcrumb__inner">
                      <ul>
                        <li>
                          <Link to="/">Home</Link>
                        </li>
                        <li>Log In</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="shape__icon__2">
              <img
                className="shape__icon__img shape__icon__img__1"
                src={img5}
                alt="img5"
              />
              <img
                className="shape__icon__img shape__icon__img__2"
                src={img6}
                alt="img6"
              />
              <img
                className="shape__icon__img shape__icon__img__3"
                src={img7}
                alt="img7"
              />
              <img
                className="shape__icon__img shape__icon__img__4"
                src={img8}
                alt="img8"
              />
            </div>
          </div>
          <div className="loginarea sp_top_100 sp_bottom_100">
            <div className="container">
              <div className="row">
                <div
                  className="col-xl-8 col-md-8 offset-md-2"
                  data-aos="fade-up"
                >
                  <ul
                    className="nav tab__button__wrap text-center"
                    id="myTab"
                    role="tablist"
                  >
                    <li className="nav-item" role="presentation">
                      <button
                        className="single__tab__link active"
                        data-bs-toggle="tab"
                        data-bs-target="#projects__one"
                        type="button"
                      >
                        Login
                      </button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button
                        className="single__tab__link"
                        data-bs-toggle="tab"
                        data-bs-target="#projects__two"
                        type="button"
                      >
                        Sign up
                      </button>
                    </li>
                  </ul>
                </div>
                <div
                  className="tab-content tab__content__wrapper"
                  id="myTabContent"
                  data-aos="fade-up"
                >
                  <div
                    className="tab-pane fade active show"
                    id="projects__one"
                    role="tabpanel"
                    aria-labelledby="projects__one"
                  >
                    <div className="col-xl-8 col-md-8 offset-md-2">
                      <div className="loginarea__wraper">
                        <div className="login__heading">
                          <h5 className="login__title">Login</h5>
                          <p className="login__description">
                            Don't have an account yet?{" "}
                            <Link to="/login">Sign up for free</Link>
                          </p>
                        </div>
                        <form action="#">
                          <div className="login__form">
                            <label className="form__label">
                              Username or email
                            </label>
                            <input
                              className="common__login__input"
                              type="text"
                              placeholder="Your username or email"
                            />
                          </div>
                          <div className="login__form">
                            <label className="form__label">Password</label>
                            <input
                              className="common__login__input"
                              type="password"
                              placeholder="Password"
                            />
                          </div>
                          <div className="login__form d-flex justify-content-between flex-wrap gap-2">
                            <div className="form__check">
                              <input id="forgot" type="checkbox" />
                              <label for="forgot">Remember me</label>
                            </div>
                            <div className="text-end login__form__link">
                              <Link to="">Forgot your password?</Link>
                            </div>
                          </div>
                          <div className="login__button">
                            <Link className="default__button">Log In</Link>
                          </div>
                        </form>
                        <div className="login__social__option">
                          <p>or Log-in with</p>
                          <ul className="login__social__btn">
                            <li>
                              <Link className="default__button login__button__1">
                                <i className="icofont-facebook"></i> Gacebook
                              </Link>
                            </li>
                            <li>
                              <Link className="default__button">
                                <i className="icofont-google-plus"></i> Google
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="projects__two"
                    role="tabpanel"
                    aria-labelledby="projects__two"
                  >
                    <div className="col-xl-8 offset-md-2">
                      <div className="loginarea__wraper">
                        <div className="login__heading">
                          <h5 className="login__title">Sing Up</h5>
                          <p className="login__description">
                            Already have an account?{" "}
                            <Link to="/login">Log In</Link>
                          </p>
                        </div>
                        <form action="#">
                          <div className="row">
                            <div className="col-xl-6">
                              <div className="login__form">
                                <label className="form__label">
                                  First Name
                                </label>
                                <input
                                  className="common__login__input"
                                  type="text"
                                  placeholder="First Name"
                                />
                              </div>
                            </div>
                            <div className="col-xl-6">
                              <div className="login__form">
                                <label className="form__label">Last Name</label>
                                <input
                                  className="common__login__input"
                                  type="password"
                                  placeholder="Last Name"
                                />
                              </div>
                            </div>
                            <div className="col-xl-6">
                              <div className="login__form">
                                <label className="form__label">Username</label>
                                <input
                                  className="common__login__input"
                                  type="password"
                                  placeholder="Username"
                                />
                              </div>
                            </div>
                            <div className="col-xl-6">
                              <div className="login__form">
                                <label className="form__label">Email</label>
                                <input
                                  className="common__login__input"
                                  type="password"
                                  placeholder="Your Email"
                                />
                              </div>
                            </div>
                            <div className="col-xl-6">
                              <div className="login__form">
                                <label className="form__label">Password</label>
                                <input
                                  className="common__login__input"
                                  type="password"
                                  placeholder="Password"
                                />
                              </div>
                            </div>
                            <div className="col-xl-6">
                              <div className="login__form">
                                <label className="form__label">
                                  Re-Enter Password
                                </label>
                                <input
                                  className="common__login__input"
                                  type="password"
                                  placeholder="Re-Enter Password"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="login__form d-flex justify-content-between flex-wrap gap-2">
                            <div className="form__check">
                              <input id="accept_pp" type="checkbox" />{" "}
                              <label for="accept_pp">
                                Accept the Terms and Privacy Policy
                              </label>
                            </div>
                          </div>
                          <div className="login__button">
                            <Link className="default__button">Log In</Link>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="login__shape__img educationarea__shape_image">
                <img
                  className="hero__shape hero__shape__1"
                  src={img1}
                  alt="Shape"
                />
                <img
                  className="hero__shape hero__shape__2"
                  src={img2}
                  alt="Shape"
                />
                <img
                  className="hero__shape hero__shape__3"
                  src={img3}
                  alt="Shape"
                />
                <img
                  className="hero__shape hero__shape__4"
                  src={img4}
                  alt="Shape"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Login;

import React from "react";
import Footer from "../../Footer";
import DarkNight from "../../DarkNight";
import TopBar from "../../Topbar";
import Navbar from "../../Navbar";
import DINavBar from "./DINavBar/DINavBar";
import { Link } from "react-router-dom";

const InstructorSettings = () => {
  return (
    <>
      <DarkNight />
      <TopBar />
      <Navbar />
      <div className="body__wrapper">
        <div className="main_wrapper overflow-hidden">
          <div className="theme__shadow__circle"></div>
          <div className="theme__shadow__circle shadow__right"></div>
          <div className="dashboardarea sp_bottom_100">
            <DINavBar />
            <div className="dashboard">
              <div className="container-fluid full__width__padding">
                <div className="row">
                  <div className="col-xl-3 col-lg-3 col-md-12">
                    <div className="dashboard__inner">
                      <div className="dashboard__nav__title">
                        <h6>Michle Obama</h6>
                      </div>
                      <div className="dashboard__nav">
                        <ul>
                          <li>
                            <Link to="/dashboard/instructor-dashboard">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="feather feather-home"
                              >
                                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                                <polyline points="9 22 9 12 15 12 15 22"></polyline>
                              </svg>
                              Dashboard
                            </Link>
                          </li>
                          <li>
                            <Link to="/dashboard/instructor-profile">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="feather feather-user"
                              >
                                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                                <circle cx="12" cy="7" r="4"></circle>
                              </svg>
                              My Profile
                            </Link>
                          </li>
                          <li>
                            <Link to="/dashboard/instructor-message">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="feather feather-book-open"
                              >
                                <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                                <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                              </svg>
                              Message
                            </Link>
                            <span className="dashboard__label">12</span>
                          </li>
                          <li>
                            <Link to="/dashboard/instructor-wishlist">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="feather feather-bookmark"
                              >
                                <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
                              </svg>
                              Wishlist
                            </Link>
                          </li>
                          <li>
                            <Link to="/dashboard/instructor-reviews">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="feather feather-star"
                              >
                                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                              </svg>
                              Reviews
                            </Link>
                          </li>
                          <li>
                            <Link to="/dashboard/instructor-my-quiz">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="feather feather-help-circle"
                              >
                                <circle cx="12" cy="12" r="10"></circle>
                                <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                                <line x1="12" y1="17" x2="12.01" y2="17"></line>
                              </svg>
                              My Quiz Attempts
                            </Link>
                          </li>
                          <li>
                            <Link to="/dashboard/instructor-order-history">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="feather feather-shopping-bag"
                              >
                                <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                                <line x1="3" y1="6" x2="21" y2="6"></line>
                                <path d="M16 10a4 4 0 0 1-8 0"></path>
                              </svg>
                              Order History
                            </Link>
                          </li>
                        </ul>
                      </div>
                      <div className="dashboard__nav__title mt-40">
                        <h6>Instructor</h6>
                      </div>
                      <div className="dashboard__nav">
                        <ul>
                          <li>
                            <Link to="/dashboard/instructor-course">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="feather feather-monitor"
                              >
                                <rect
                                  x="2"
                                  y="3"
                                  width="20"
                                  height="14"
                                  rx="2"
                                  ry="2"
                                ></rect>
                                <line x1="8" y1="21" x2="16" y2="21"></line>
                                <line x1="12" y1="17" x2="12" y2="21"></line>
                              </svg>
                              My Course
                            </Link>
                          </li>
                          <li>
                            <Link to="/dashboard/instructor-announcements">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="feather feather-volume-1"
                              >
                                <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
                                <path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path>
                              </svg>
                              Announcements
                            </Link>
                          </li>
                          <li>
                            <Link to="/dashboard/instructor-quiz-attempts">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="feather feather-message-square"
                              >
                                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                              </svg>
                              Quiz Attempt
                            </Link>
                          </li>
                          <li>
                            <Link to="/dashboard/instructor-assignments">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="feather feather-volume-1"
                              >
                                <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
                                <path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path>
                              </svg>
                              Assignments
                            </Link>
                          </li>
                        </ul>
                      </div>
                      <div className="dashboard__nav__title mt-40">
                        <h6>user</h6>
                      </div>
                      <div className="dashboard__nav">
                        <ul>
                          <li>
                            <Link className="active" to="/dashboard/instructor-settings">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="feather feather-settings"
                              >
                                <circle cx="12" cy="12" r="3"></circle>
                                <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
                              </svg>
                              Settings
                            </Link>
                          </li>
                          <li>
                            <Link to="/">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="feather feather-volume-1"
                              >
                                <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
                                <path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path>
                              </svg>
                              Logout
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-9 col-lg-9 col-md-12">
                    <div className="dashboard__content__wraper">
                      <div className="dashboard__section__title">
                        <h4>My Profile</h4>
                      </div>
                      <div className="row">
                        <div
                          className="col-xl-12 aos-init aos-animate"
                          data-aos="fade-up"
                        >
                          <ul
                            className="nav  about__button__wrap dashboard__button__wrap"
                            id="myTab"
                            role="tablist"
                          >
                            <li className="nav-item" role="presentation">
                              <button
                                className="single__tab__link active"
                                data-bs-toggle="tab"
                                data-bs-target="#projects__one"
                                type="button"
                                aria-selected="true"
                                role="tab"
                              >
                                Profile
                              </button>
                            </li>
                            <li className="nav-item" role="presentation">
                              <button
                                className="single__tab__link"
                                data-bs-toggle="tab"
                                data-bs-target="#projects__two"
                                type="button"
                                aria-selected="false"
                                role="tab"
                                tabindex="-1"
                              >
                                Password
                              </button>
                            </li>
                            <li className="nav-item" role="presentation">
                              <button
                                className="single__tab__link"
                                data-bs-toggle="tab"
                                data-bs-target="#projects__three"
                                type="button"
                                aria-selected="false"
                                role="tab"
                                tabindex="-1"
                              >
                                Social Icon
                              </button>
                            </li>
                          </ul>
                        </div>
                        <div
                          className="tab-content tab__content__wrapper aos-init aos-animate"
                          id="myTabContent"
                          data-aos="fade-up"
                        >
                          <div
                            className="tab-pane fade active show"
                            id="projects__one"
                            role="tabpanel"
                            aria-labelledby="projects__one"
                          >
                            <div className="row">
                              <div className="col-xl-12">
                                <div className="row">
                                  <div className="col-xl-6">
                                    <div className="dashboard__form__wraper">
                                      <div className="dashboard__form__input">
                                        <label for="#">First Name</label>
                                        <input type="text" placeholder="John" />
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-xl-6">
                                    <div className="dashboard__form__wraper">
                                      <div className="dashboard__form__input">
                                        <label for="#">Last Name</label>
                                        <input type="text" placeholder="Due" />
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-xl-6">
                                    <div className="dashboard__form__wraper">
                                      <div className="dashboard__form__input">
                                        <label for="#">User Name</label>
                                        <input
                                          type="text"
                                          placeholder="johndue"
                                        />
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-xl-6">
                                    <div className="dashboard__form__wraper">
                                      <div className="dashboard__form__input">
                                        <label for="#">Phone Number</label>
                                        <input
                                          type="text"
                                          placeholder="+1-202-555-0174"
                                        />
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-xl-6">
                                    <div className="dashboard__form__wraper">
                                      <div className="dashboard__form__input">
                                        <label for="#">Skill/Occupation</label>
                                        <input
                                          type="text"
                                          placeholder="Full Stack Developer"
                                        />
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-xl-6">
                                    <div className="dashboard__form__wraper">
                                      <div className="dashboard__form__input">
                                        <label for="#">
                                          Display Name Publicly As
                                        </label>
                                        <input type="text" placeholder="John" />
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-xl-12">
                                    <div className="dashboard__form__wraper">
                                      <div className="dashboard__form__input">
                                        <label for="#">Bio</label>
                                        <textarea
                                          name=""
                                          id=""
                                          cols="30"
                                          rows="10"
                                        >
                                          Lorem ipsum, dolor sit amet
                                          consectetur adipisicing elit.
                                        </textarea>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-xl-12">
                                    <div className="dashboard__form__button">
                                      <a className="default__button" href=" ">
                                        Update Info
                                      </a>
                                    </div>
                                  </div>
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
                            <div className="row">
                              <div className="col-xl-12">
                                <div className="dashboard__form__wraper">
                                  <div className="dashboard__form__input">
                                    <label for="#">Current Password</label>
                                    <input
                                      type="text"
                                      placeholder="Current password"
                                    />
                                  </div>
                                </div>
                              </div>
                              <div className="col-xl-12">
                                <div className="dashboard__form__wraper">
                                  <div className="dashboard__form__input">
                                    <label for="#">New Password</label>
                                    <input
                                      type="text"
                                      placeholder="New Password"
                                    />
                                  </div>
                                </div>
                              </div>
                              <div className="col-xl-12">
                                <div className="dashboard__form__wraper">
                                  <div className="dashboard__form__input">
                                    <label for="#">Re-Type New Password</label>
                                    <input
                                      type="text"
                                      placeholder="Re-Type New Password"
                                    />
                                  </div>
                                </div>
                              </div>
                              <div className="col-xl-12">
                                <div className="dashboard__form__button">
                                  <a className="default__button" href=" ">
                                    Update Password
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            className="tab-pane fade"
                            id="projects__three"
                            role="tabpanel"
                            aria-labelledby="projects__three"
                          >
                            <div className="row">
                              <div className="col-xl-12">
                                <div className="dashboard__form__wraper">
                                  <div className="dashboard__form__input">
                                    <label for="#">
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="feather feather-facebook"
                                      >
                                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                                      </svg>
                                      Facebook
                                    </label>
                                    <input
                                      type="text"
                                      placeholder="https://facebook.com/"
                                    />
                                  </div>
                                </div>
                              </div>
                              <div className="col-xl-12">
                                <div className="dashboard__form__wraper">
                                  <div className="dashboard__form__input">
                                    <label for="#">
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="feather feather-twitter"
                                      >
                                        <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                                      </svg>
                                      Twitter
                                    </label>
                                    <input
                                      type="text"
                                      placeholder="https://twitter.com/"
                                    />
                                  </div>
                                </div>
                              </div>
                              <div className="col-xl-12">
                                <div className="dashboard__form__wraper">
                                  <div className="dashboard__form__input">
                                    <label for="#">
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="feather feather-linkedin"
                                      >
                                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                                        <rect
                                          x="2"
                                          y="9"
                                          width="4"
                                          height="12"
                                        ></rect>
                                        <circle cx="4" cy="4" r="2"></circle>
                                      </svg>
                                      Linkedin
                                    </label>
                                    <input
                                      type="text"
                                      placeholder="https://linkedin.com/"
                                    />
                                  </div>
                                </div>
                              </div>
                              <div className="col-xl-12">
                                <div className="dashboard__form__wraper">
                                  <div className="dashboard__form__input">
                                    <label for="#">
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="feather feather-layout"
                                      >
                                        <rect
                                          x="3"
                                          y="3"
                                          width="18"
                                          height="18"
                                          rx="2"
                                          ry="2"
                                        ></rect>
                                        <line
                                          x1="3"
                                          y1="9"
                                          x2="21"
                                          y2="9"
                                        ></line>
                                        <line
                                          x1="9"
                                          y1="21"
                                          x2="9"
                                          y2="9"
                                        ></line>
                                      </svg>
                                      Website
                                    </label>
                                    <input
                                      type="text"
                                      placeholder="https://website.com/"
                                    />
                                  </div>
                                </div>
                              </div>
                              <div className="col-xl-12">
                                <div className="dashboard__form__wraper">
                                  <div className="dashboard__form__input">
                                    <label for="#">
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="feather feather-github"
                                      >
                                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                                      </svg>
                                      Github
                                    </label>
                                    <input
                                      type="text"
                                      placeholder="https://github.com/"
                                    />
                                  </div>
                                </div>
                              </div>
                              <div className="col-xl-12">
                                <div className="dashboard__form__button">
                                  <a className="default__button" href=" ">
                                    Update Social
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default InstructorSettings;

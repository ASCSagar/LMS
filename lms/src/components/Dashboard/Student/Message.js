import React from "react";
import { Link } from "react-router-dom";
import DarkNight from "../../DarkNight";
import TopBar from "../../Topbar";
import Navbar from "../../Navbar";
import Footer from "../../Footer";
import DSNavBar from "./DSNavbar.js/DSNavbar";
import teacher1 from "../../../img/teacher/teacher__1.png";
import teacher2 from "../../../img/teacher/teacher__2.png";
import teacher3 from "../../../img/teacher/teacher__3.png";
import teacher4 from "../../../img/teacher/teacher__4.png";
import teacher5 from "../../../img/teacher/teacher__5.png";
import teacher6 from "../../../img/teacher/teacher__6.png";

const Message = () => {
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
            <DSNavBar />
            <div className="dashboard">
              <div className="container-fluid full__width__padding">
                <div className="row">
                  <div className="col-xl-3 col-lg-3 col-md-12">
                    <div className="dashboard__inner sticky-top">
                      <div className="dashboard__nav__title">
                        <h6>Welcome, Dond Tond </h6>
                      </div>
                      <div className="dashboard__nav">
                        <ul>
                          <li>
                            <Link to="/dashboard/student-dashboard">
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
                            <Link to="/dashboard/student-profile">
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
                            <Link
                              className="active"
                              to="/dashboard/student-message"
                            >
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
                            <Link to="/dashboard/student-enrolled-courses">
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
                              Enrolled Courses
                            </Link>
                          </li>
                          <li>
                            <Link to="/dashboard/student-wishlist">
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
                            <Link to="/dashboard/student-reviews">
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
                            <Link to="/dashboard/student-my-quiz-attempts">
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
                            <Link to="/dashboard/student-assignments">
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
                          <li>
                            <Link to="/dashboard/student-settings">
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
                    <div className="dashboard__message__content__main">
                      <div className="dashboard__message__content__main__title dashboard__message__content__main__title__2">
                        <h3>Messages</h3>
                      </div>
                      <div className="dashboard__meessage__wraper">
                        <div className="row">
                          <div className="col-xl-5 col-lg-6 col-md-12 col-12">
                            <div className="dashboard__meessage">
                              <div className="dashboard__meessage__chat">
                                <h3>Chats</h3>
                              </div>
                              <div className="dashboard__meessage__search">
                                <button>
                                  <i className="icofont-search-1"></i>
                                </button>
                                <input type="text" placeholder="Search" />
                              </div>
                              <div className="dashboard__meessage__contact">
                                <ul>
                                  <li>
                                    <div className="dashboard__meessage__contact__wrap">
                                      <div className="dashboard__meessage__chat__img">
                                        <span className="dashboard__meessage__dot online"></span>
                                        <img src={teacher1} alt="" />
                                      </div>
                                      <div className="dashboard__meessage__meta">
                                        <h5>Rex Allen</h5>
                                        <p className="preview">
                                          Hey, How are you?
                                        </p>
                                        <span className="chat__time">
                                          12 min
                                        </span>
                                      </div>
                                    </div>
                                  </li>
                                  <li>
                                    <div className="dashboard__meessage__contact__wrap">
                                      <div className="dashboard__meessage__chat__img">
                                        <span className="dashboard__meessage__dot online"></span>
                                        <img src={teacher2} alt="" />
                                      </div>
                                      <div className="dashboard__meessage__meta">
                                        <h5>Rex Allen</h5>
                                        <p className="preview">
                                          Hey, How are you?
                                        </p>
                                        <span className="chat__time">
                                          4:35pm
                                        </span>
                                      </div>
                                    </div>
                                  </li>
                                  <li>
                                    <div className="dashboard__meessage__contact__wrap">
                                      <div className="dashboard__meessage__chat__img">
                                        <span className="dashboard__meessage__dot online"></span>
                                        <img src={teacher3} alt="" />
                                      </div>
                                      <div className="dashboard__meessage__meta">
                                        <h5>Julia Jhones</h5>
                                        <p className="preview">
                                          Hey, How are you?
                                        </p>
                                        <span className="chat__time">
                                          1:40pm
                                        </span>
                                      </div>
                                    </div>
                                  </li>
                                  <li>
                                    <div className="dashboard__meessage__contact__wrap">
                                      <div className="dashboard__meessage__chat__img">
                                        <span className="dashboard__meessage__dot online"></span>
                                        <img src={teacher4} alt="" />
                                      </div>
                                      <div className="dashboard__meessage__meta">
                                        <h5>Anderson</h5>
                                        <p className="preview">
                                          Hey, How are you?
                                        </p>
                                        <span className="chat__time">
                                          3:20am
                                        </span>
                                      </div>
                                    </div>
                                  </li>
                                  <li>
                                    <div className="dashboard__meessage__contact__wrap">
                                      <div className="dashboard__meessage__chat__img">
                                        <span className="dashboard__meessage__dot online"></span>
                                        <img src={teacher5} alt="" />
                                      </div>
                                      <div className="dashboard__meessage__meta">
                                        <h5>Rex Allen</h5>
                                        <p className="preview">
                                          Hey, How are you?
                                        </p>
                                        <span className="chat__time">
                                          12 min
                                        </span>
                                      </div>
                                    </div>
                                  </li>
                                  <li>
                                    <div className="dashboard__meessage__contact__wrap">
                                      <div className="dashboard__meessage__chat__img">
                                        <span className="dashboard__meessage__dot online"></span>
                                        <img src={teacher6} alt="" />
                                      </div>
                                      <div className="dashboard__meessage__meta">
                                        <h5>Rex Allen</h5>
                                        <p className="preview">
                                          Hey, How are you?
                                        </p>
                                        <span className="chat__time">
                                          12 min
                                        </span>
                                      </div>
                                    </div>
                                  </li>
                                  <li>
                                    <div className="dashboard__meessage__contact__wrap">
                                      <div className="dashboard__meessage__chat__img">
                                        <span className="dashboard__meessage__dot online"></span>
                                        <img src={teacher2} alt="" />
                                      </div>
                                      <div className="dashboard__meessage__meta">
                                        <h5>Rex Allen</h5>
                                        <p className="preview">
                                          Hey, How are you?
                                        </p>
                                        <span className="chat__time">
                                          4:35pm
                                        </span>
                                      </div>
                                    </div>
                                  </li>
                                  <li>
                                    <div className="dashboard__meessage__contact__wrap">
                                      <div className="dashboard__meessage__chat__img">
                                        <span className="dashboard__meessage__dot online"></span>
                                        <img src={teacher1} alt="" />
                                      </div>
                                      <div className="dashboard__meessage__meta">
                                        <h5>Julia Jhones</h5>
                                        <p className="preview">
                                          Hey, How are you?
                                        </p>
                                        <span className="chat__time">
                                          1:40pm
                                        </span>
                                      </div>
                                    </div>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                          <div className="col-xl-7 col-lg-6 col-md-12 col-12">
                            <div className="dashboard__meessage__content__wrap">
                              <div className="dashboard__meessage__profile">
                                <div className="dashboard__meessage__profile__img">
                                  <img src={teacher2} alt="" />
                                </div>
                                <div className="dashboard__meessage__profile__meta">
                                  <h5>Bradshaw</h5>
                                  <p>Stay at home, Stay safe</p>
                                </div>
                                <div className="dashboard__meessage__profile__chat__option">
                                  <Link to="/dashboard/admin-dashboard">
                                    <i className="icofont-phone"></i>
                                  </Link>
                                  <Link to="/dashboard/admin-dashboard">
                                    <i className="icofont-ui-video-chat"></i>
                                  </Link>
                                </div>
                              </div>
                              <div className="dashboard__meessage__sent">
                                <ul>
                                  <li>
                                    <div className="dashboard__meessage__sent__item__img">
                                      <img src={teacher1} alt="" />
                                    </div>

                                    <div className="dashboard__meessage__sent__item__content">
                                      <p>
                                        Lorem ipsum dolor sit amet consectetur
                                        adipisicing sed.
                                      </p>
                                      <span className="time">4:32 PM</span>
                                      <p>Dolor sit amet consectetur</p>
                                      <span className="time">4:30 PM</span>
                                    </div>
                                  </li>
                                  <li className="dashboard__meessage__sent__item">
                                    <div className="dashboard__meessage__sent__item__content">
                                      <p>
                                        Lorem ipsum dolor sit amet consectetur
                                        adipisicing sed.
                                      </p>
                                      <span className="time">4:40 PM</span>
                                      <p>Dolor sit amet consectetur</p>
                                      <span className="time">4:42 PM</span>
                                    </div>
                                    <div className="dashboard__meessage__sent__item__img">
                                      <img src={teacher3} alt="" />
                                    </div>
                                  </li>
                                  <li className="sent">
                                    <div className="dashboard__meessage__sent__item__img">
                                      <img src={teacher4} alt="" />
                                    </div>
                                    <div className="dashboard__meessage__sent__item__content">
                                      <p>
                                        Lorem ipsum dolor sit amet consectetur
                                        adipisicing sed.
                                      </p>

                                      <span className="time">5:01 PM</span>
                                      <p>Dolor sit amet consectetur</p>
                                      <span className="time">5:03 PM</span>
                                    </div>
                                  </li>
                                </ul>
                              </div>
                              <div className="dashboard__meessage__input">
                                <input
                                  type="text"
                                  placeholder="Type something"
                                />
                                <i
                                  className="icofont-attachment attachment"
                                  aria-hidden="true"
                                ></i>
                                <button className="submit">
                                  <i className="icofont-arrow-right"></i>
                                </button>
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

export default Message;

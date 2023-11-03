import React from "react";
import Footer from "../../Footer";
import DarkNight from "../../DarkNight";
import TopBar from "../../Topbar";
import Navbar from "../../Navbar";
import DINavBar from "./DINavBar/DINavBar";
import grid1 from "../../../img/grid/grid_1.png";
import grid1Small from "../../../img/grid/grid_small_1.jpg";
import grid2 from "../../../img/grid/grid_2.png";
import grid2Small from "../../../img/grid/grid_small_2.jpg";
import grid3 from "../../../img/grid/grid_3.png";
import grid3Small from "../../../img/grid/grid_small_3.jpg";
import grid5 from "../../../img/grid/grid_5.png";
import { Link } from "react-router-dom";

const InstructorCourse = () => {
  return (
    <>
      <DarkNight />
      <TopBar />
      <Navbar />
      <div className="body__wrapper">
        <div className="theme__shadow__circle"></div>
        <div className="theme__shadow__circle shadow__right"></div>
        <div className="main_wrapper overflow-hidden">
          <div class="dashboardarea sp_bottom_100">
            <DINavBar />
            <div class="dashboard">
              <div class="container-fluid full__width__padding">
                <div class="row">
                  <div class="col-xl-3 col-lg-3 col-md-12">
                    <div class="dashboard__inner">
                      <div class="dashboard__nav__title">
                        <h6>Michle Obama</h6>
                      </div>
                      <div class="dashboard__nav">
                        <ul>
                          <li>
                            <Link to="/dashboard">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                class="feather feather-home"
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
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                class="feather feather-user"
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
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                class="feather feather-book-open"
                              >
                                <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                                <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                              </svg>
                              Message
                            </Link>
                            <span class="dashboard__label">12</span>
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
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                class="feather feather-bookmark"
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
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                class="feather feather-star"
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
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                class="feather feather-help-circle"
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
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                class="feather feather-shopping-bag"
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
                      <div class="dashboard__nav__title mt-40">
                        <h6>Instructor</h6>
                      </div>
                      <div class="dashboard__nav">
                        <ul>
                          <li>
                            <Link class="active" to="dashboard/instructor-course">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                class="feather feather-monitor"
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
                            <Link to="/dashboard/instrutor-announcments">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                class="feather feather-volume-1"
                              >
                                <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
                                <path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path>
                              </svg>
                              Announcments
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
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                class="feather feather-message-square"
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
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                class="feather feather-volume-1"
                              >
                                <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
                                <path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path>
                              </svg>
                              Assignments
                            </Link>
                          </li>
                        </ul>
                      </div>
                      <div class="dashboard__nav__title mt-40">
                        <h6>user</h6>
                      </div>

                      <div class="dashboard__nav">
                        <ul>
                          <li>
                           <Link to="/dashboard/instructor-settings">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                class="feather feather-settings"
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
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                class="feather feather-volume-1"
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
                  <div class="col-xl-9 col-lg-9 col-md-12">
                    <div class="dashboard__content__wraper">
                      <div class="dashboard__section__title">
                        <h4>Courses</h4>
                      </div>
                      <div class="row">
                        <div
                          class="col-xl-12 aos-init aos-animate"
                          data-aos="fade-up"
                        >
                          <ul
                            class="nav  about__button__wrap dashboard__button__wrap"
                            id="myTab"
                            role="tablist"
                          >
                            <li class="nav-item" role="presentation">
                              <button
                                class="single__tab__link active"
                                data-bs-toggle="tab"
                                data-bs-target="#projects__one"
                                type="button"
                                aria-selected="true"
                                role="tab"
                              >
                                Publish
                              </button>
                            </li>
                            <li class="nav-item" role="presentation">
                              <button
                                class="single__tab__link"
                                data-bs-toggle="tab"
                                data-bs-target="#projects__two"
                                type="button"
                                aria-selected="false"
                                role="tab"
                                tabindex="-1"
                              >
                                Pending
                              </button>
                            </li>
                            <li class="nav-item" role="presentation">
                              <button
                                class="single__tab__link"
                                data-bs-toggle="tab"
                                data-bs-target="#projects__three"
                                type="button"
                                aria-selected="false"
                                role="tab"
                                tabindex="-1"
                              >
                                Draft
                              </button>
                            </li>
                          </ul>
                        </div>

                        <div
                          class="tab-content tab__content__wrapper aos-init aos-animate"
                          id="myTabContent"
                          data-aos="fade-up"
                        >
                          <div
                            class="tab-pane fade active show"
                            id="projects__one"
                            role="tabpanel"
                            aria-labelledby="projects__one"
                          >
                            <div class="row">
                              <div class="col-xl-4 col-lg-6 col-md-6 col-12">
                                <div class="gridarea__wraper">
                                  <div class="gridarea__img">
                                    <img
                                      src={grid2}
                                      alt="grid"
                                    />
                                    <div class="gridarea__small__button">
                                      <div class="grid__badge blue__color">
                                        Mechanical
                                      </div>
                                    </div>
                                    <div class="gridarea__small__icon">
                                      <a href=" ">
                                        <i class="icofont-heart-alt"></i>
                                      </a>
                                    </div>
                                  </div>
                                  <div class="gridarea__content">
                                    <div class="gridarea__list">
                                      <ul>
                                        <li>
                                          <i class="icofont-book-alt"></i> 29
                                          Lesson
                                        </li>
                                        <li>
                                          <i class="icofont-clock-time"></i> 2
                                          hr 10 min
                                        </li>
                                      </ul>
                                    </div>
                                    <div class="gridarea__heading">
                                      <h3>
                                        <a href=" ">
                                          Nidnies course to under stand about
                                          softwere
                                        </a>
                                      </h3>
                                    </div>
                                    <div class="gridarea__price green__color">
                                      $32.00<del>/$67.00</del>
                                      <span>.Free</span>
                                    </div>
                                    <div class="gridarea__bottom">
                                      <a href="instructor-details.html">
                                        <div class="gridarea__small__img">
                                          <img
                                            src={grid2Small}
                                            alt="grid"
                                          />
                                          <div class="gridarea__small__content">
                                            <h6>Rinis Jhon</h6>
                                          </div>
                                        </div>
                                      </a>
                                      <div class="gridarea__star">
                                        <i class="icofont-star"></i>
                                        <i class="icofont-star"></i>
                                        <i class="icofont-star"></i>
                                        <i class="icofont-star"></i>
                                        <i class="icofont-star"></i>
                                        <span>(44)</span>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div class="col-xl-4 col-lg-6 col-md-6 col-12">
                                <div class="gridarea__wraper">
                                  <div class="gridarea__img">
                                    <a href="../course-details.html">
                                      <img
                                        src={grid3}
                                        alt="grid"
                                      />
                                    </a>
                                    <div class="gridarea__small__button">
                                      <div class="grid__badge pink__color">
                                        Development
                                      </div>
                                    </div>
                                    <div class="gridarea__small__icon">
                                      <a href=" ">
                                        <i class="icofont-heart-alt"></i>
                                      </a>
                                    </div>
                                  </div>
                                  <div class="gridarea__content">
                                    <div class="gridarea__list">
                                      <ul>
                                        <li>
                                          <i class="icofont-book-alt"></i> 25
                                          Lesson
                                        </li>
                                        <li>
                                          <i class="icofont-clock-time"></i> 1
                                          hr 40 min
                                        </li>
                                      </ul>
                                    </div>
                                    <div class="gridarea__heading">
                                      <h3>
                                        <a href="../course-details.html">
                                          Minws course to under stand about
                                          solution
                                        </a>
                                      </h3>
                                    </div>
                                    <div class="gridarea__price">
                                      $40.00 <del>/ $67.00</del>
                                      <span>
                                        {" "}
                                        <del class="del__2">Free</del>
                                      </span>
                                    </div>
                                    <div class="gridarea__bottom">
                                      <a href="instructor-details.html">
                                        <div class="gridarea__small__img">
                                          <img
                                            src={grid3Small}
                                            alt="grid"
                                          />
                                          <div class="gridarea__small__content">
                                            <h6>Micle Jhon</h6>
                                          </div>
                                        </div>
                                      </a>
                                      <div class="gridarea__star">
                                        <i class="icofont-star"></i>
                                        <i class="icofont-star"></i>
                                        <i class="icofont-star"></i>
                                        <i class="icofont-star"></i>
                                        <i class="icofont-star"></i>
                                        <span>(44)</span>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div class="col-xl-4 col-lg-6 col-md-6 col-12">
                                <div class="gridarea__wraper">
                                  <div class="gridarea__img">
                                    <a href="../course-details.html">
                                      <img
                                        src={grid5}
                                        alt="grid"
                                      />
                                    </a>
                                    <div class="gridarea__small__button">
                                      <div class="grid__badge">New</div>
                                    </div>
                                    <div class="gridarea__small__icon">
                                      <a href=" ">
                                        <i class="icofont-heart-alt"></i>
                                      </a>
                                    </div>
                                  </div>
                                  <div class="gridarea__content">
                                    <div class="gridarea__list">
                                      <ul>
                                        <li>
                                          <i class="icofont-book-alt"></i> 25
                                          Lesson
                                        </li>
                                        <li>
                                          <i class="icofont-clock-time"></i> 1
                                          hr 40 min
                                        </li>
                                      </ul>
                                    </div>
                                    <div class="gridarea__heading">
                                      <h3>
                                        <a href="../course-details.html">
                                          Minws course to under stand about
                                          solution
                                        </a>
                                      </h3>
                                    </div>
                                    <div class="gridarea__price">
                                      $40.00 <del>/ $67.00</del>
                                      <span>
                                        {" "}
                                        <del class="del__2">Free</del>
                                      </span>
                                    </div>
                                    <div class="gridarea__bottom">
                                      <a href="instructor-details.html">
                                        <div class="gridarea__small__img">
                                          <img
                                            src={grid3Small}
                                            alt="grid"
                                          />
                                          <div class="gridarea__small__content">
                                            <h6>Micle Jhon</h6>
                                          </div>
                                        </div>
                                      </a>

                                      <div class="gridarea__star">
                                        <i class="icofont-star"></i>
                                        <i class="icofont-star"></i>
                                        <i class="icofont-star"></i>
                                        <i class="icofont-star"></i>
                                        <i class="icofont-star"></i>
                                        <span>(44)</span>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div
                            class="tab-pane fade"
                            id="projects__two"
                            role="tabpanel"
                            aria-labelledby="projects__two"
                          >
                            <div class="row">
                              <div class="col-xl-4 col-lg-6 col-md-6 col-12">
                                <div class="gridarea__wraper">
                                  <div class="gridarea__img">
                                    <a href="../course-details.html">
                                      <img
                                        src={grid5}
                                        alt="grid"
                                      />
                                    </a>
                                    <div class="gridarea__small__button">
                                      <div class="grid__badge">
                                        Data &amp; Tech
                                      </div>
                                    </div>
                                    <div class="gridarea__small__icon">
                                      <a href=" ">
                                        <i class="icofont-heart-alt"></i>
                                      </a>
                                    </div>
                                  </div>
                                  <div class="gridarea__content">
                                    <div class="gridarea__list">
                                      <ul>
                                        <li>
                                          <i class="icofont-book-alt"></i> 23
                                          Lesson
                                        </li>
                                        <li>
                                          <i class="icofont-clock-time"></i> 1
                                          hr 30 min
                                        </li>
                                      </ul>
                                    </div>
                                    <div class="gridarea__heading">
                                      <h3>
                                        <a href="../course-details.html">
                                          Foundation course to under stand about
                                          softwere
                                        </a>
                                      </h3>
                                    </div>
                                    <div class="gridarea__price">
                                      $32.00 <del>/ $67.00</del>
                                      <span>
                                        {" "}
                                        <del class="del__2">Free</del>
                                      </span>
                                    </div>
                                    <div class="gridarea__bottom">
                                      <a href="instructor-details.html">
                                        <div class="gridarea__small__img">
                                          <img
                                            src={grid1Small}
                                            alt="grid"
                                          />
                                          <div class="gridarea__small__content">
                                            <h6>Micle Jhon</h6>
                                          </div>
                                        </div>
                                      </a>
                                      <div class="gridarea__star">
                                        <i class="icofont-star"></i>
                                        <i class="icofont-star"></i>
                                        <i class="icofont-star"></i>
                                        <i class="icofont-star"></i>
                                        <i class="icofont-star"></i>
                                        <span>(44)</span>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div class="col-xl-4 col-lg-6 col-md-6 col-12">
                                <div class="gridarea__wraper">
                                  <div class="gridarea__img">
                                    <img
                                      src={grid5}
                                      alt="grid"
                                    />
                                    <div class="gridarea__small__button">
                                      <div class="grid__badge blue__color">
                                        Mechanical
                                      </div>
                                    </div>
                                    <div class="gridarea__small__icon">
                                      <a href=" ">
                                        <i class="icofont-heart-alt"></i>
                                      </a>
                                    </div>
                                  </div>
                                  <div class="gridarea__content">
                                    <div class="gridarea__list">
                                      <ul>
                                        <li>
                                          <i class="icofont-book-alt"></i> 29
                                          Lesson
                                        </li>
                                        <li>
                                          <i class="icofont-clock-time"></i> 2
                                          hr 10 min
                                        </li>
                                      </ul>
                                    </div>
                                    <div class="gridarea__heading">
                                      <h3>
                                        <a href=" ">
                                          Nidnies course to under stand about
                                          softwere
                                        </a>
                                      </h3>
                                    </div>
                                    <div class="gridarea__price green__color">
                                      $32.00<del>/$67.00</del>
                                      <span>.Free</span>
                                    </div>
                                    <div class="gridarea__bottom">
                                      <a href="instructor-details.html">
                                        <div class="gridarea__small__img">
                                          <img
                                            src={grid2Small}
                                            alt="grid"
                                          />
                                          <div class="gridarea__small__content">
                                            <h6>Rinis Jhon</h6>
                                          </div>
                                        </div>
                                      </a>
                                      <div class="gridarea__star">
                                        <i class="icofont-star"></i>
                                        <i class="icofont-star"></i>
                                        <i class="icofont-star"></i>
                                        <i class="icofont-star"></i>
                                        <i class="icofont-star"></i>
                                        <span>(44)</span>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            class="tab-pane fade"
                            id="projects__three"
                            role="tabpanel"
                            aria-labelledby="projects__three"
                          >
                            <div class="row">
                              <div class="col-xl-4 col-lg-6 col-md-6 col-12">
                                <div class="gridarea__wraper">
                                  <div class="gridarea__img">
                                    <a href="../course-details.html">
                                      <img
                                        src={grid1}
                                        alt="grid"
                                      />
                                    </a>
                                    <div class="gridarea__small__button">
                                      <div class="grid__badge">
                                        Data &amp; Tech
                                      </div>
                                    </div>
                                    <div class="gridarea__small__icon">
                                      <a href=" ">
                                        <i class="icofont-heart-alt"></i>
                                      </a>
                                    </div>
                                  </div>
                                  <div class="gridarea__content">
                                    <div class="gridarea__list">
                                      <ul>
                                        <li>
                                          <i class="icofont-book-alt"></i> 23
                                          Lesson
                                        </li>
                                        <li>
                                          <i class="icofont-clock-time"></i> 1
                                          hr 30 min
                                        </li>
                                      </ul>
                                    </div>
                                    <div class="gridarea__heading">
                                      <h3>
                                        <a href="../course-details.html">
                                          Foundation course to under stand about
                                          softwere
                                        </a>
                                      </h3>
                                    </div>
                                    <div class="gridarea__price">
                                      $32.00 <del>/ $67.00</del>
                                      <span>
                                        {" "}
                                        <del class="del__2">Free</del>
                                      </span>
                                    </div>
                                    <div class="gridarea__bottom">
                                      <a href="instructor-details.html">
                                        <div class="gridarea__small__img">
                                          <img
                                            src={grid1Small}
                                            alt="grid"
                                          />
                                          <div class="gridarea__small__content">
                                            <h6>Micle Jhon</h6>
                                          </div>
                                        </div>
                                      </a>
                                      <div class="gridarea__star">
                                        <i class="icofont-star"></i>
                                        <i class="icofont-star"></i>
                                        <i class="icofont-star"></i>
                                        <i class="icofont-star"></i>
                                        <i class="icofont-star"></i>
                                        <span>(44)</span>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div class="col-xl-4 col-lg-6 col-md-6 col-12">
                                <div class="gridarea__wraper">
                                  <div class="gridarea__img">
                                    <img
                                      src={grid2}
                                      alt="grid"
                                    />
                                    <div class="gridarea__small__button">
                                      <div class="grid__badge blue__color">
                                        Mechanical
                                      </div>
                                    </div>
                                    <div class="gridarea__small__icon">
                                      <a href=" ">
                                        <i class="icofont-heart-alt"></i>
                                      </a>
                                    </div>
                                  </div>
                                  <div class="gridarea__content">
                                    <div class="gridarea__list">
                                      <ul>
                                        <li>
                                          <i class="icofont-book-alt"></i> 29
                                          Lesson
                                        </li>
                                        <li>
                                          <i class="icofont-clock-time"></i> 2
                                          hr 10 min
                                        </li>
                                      </ul>
                                    </div>
                                    <div class="gridarea__heading">
                                      <h3>
                                        <a href=" ">
                                          Nidnies course to under stand about
                                          softwere
                                        </a>
                                      </h3>
                                    </div>
                                    <div class="gridarea__price green__color">
                                      $32.00<del>/$67.00</del>
                                      <span>.Free</span>
                                    </div>
                                    <div class="gridarea__bottom">
                                      <a href="instructor-details.html">
                                        <div class="gridarea__small__img">
                                          <img
                                            src={grid2Small}
                                            alt="grid"
                                          />
                                          <div class="gridarea__small__content">
                                            <h6>Rinis Jhon</h6>
                                          </div>
                                        </div>
                                      </a>
                                      <div class="gridarea__star">
                                        <i class="icofont-star"></i>
                                        <i class="icofont-star"></i>
                                        <i class="icofont-star"></i>
                                        <i class="icofont-star"></i>
                                        <i class="icofont-star"></i>
                                        <span>(44)</span>
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
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default InstructorCourse;

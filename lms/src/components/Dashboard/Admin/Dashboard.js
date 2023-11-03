import React from "react";
import DarkNight from "../../DarkNight";
import TopBar from "../../Topbar";
import Navbar from "../../Navbar";
import Footer from "../../Footer";
import counter1 from "../../../img/counter/counter__1.png";
import counter2 from "../../../img/counter/counter__2.png";
import counter3 from "../../../img/counter/counter__3.png";
import counter4 from "../../../img/counter/counter__4.png";
import teacher1 from "../../../img/teacher/teacher__1.png";
import teacher2 from "../../../img/teacher/teacher__2.png";
import teacher3 from "../../../img/teacher/teacher__3.png";
import teacher4 from "../../../img/teacher/teacher__4.png";
import teacher5 from "../../../img/teacher/teacher__5.png";
import grid1 from "../../../img/grid/grid_1.png";
import grid2 from "../../../img/grid/grid_2.png";
import grid3 from "../../../img/grid/grid_3.png";
import grid4 from "../../../img/grid/grid_4.png";
import blog6 from "../../../img/blog/blog_6.png";
import blog7 from "../../../img/blog/blog_7.png";
import blog8 from "../../../img/blog/blog_8.png";
import blog9 from "../../../img/blog/blog_9.png";
import blog4 from "../../../img/blog/blog_4.png";
import profile from "../../../img/dashbord/profile.png";
import lock from "../../../img/dashbord/lock.png";
import success from "../../../img/dashbord/success.png";
import verify from "../../../img/dashbord/verify.png";
import video from "../../../img/dashbord/video.png";
import DANavBar from "./DANavBar/DANavBar";
import { Link } from "react-router-dom";

const AdminDashboard = () => {
  return (
    <>
      <DarkNight />
      <TopBar />
      <Navbar />
      <div className="body__wrapper">
        <div className="main_wrapper overflow-hidden">
          <div class="theme__shadow__circle"></div>
          <div class="theme__shadow__circle shadow__right"></div>
          <div class="dashboardarea sp_bottom_100">
            <DANavBar/>
            <div class="dashboard">
              <div class="container-fluid full__width__padding">
                <div class="row">
                  <div class="col-xl-3 col-lg-3 col-md-12">
                    <div class="dashboard__inner sticky-top">
                      <div class="dashboard__nav__title">
                        <h6>Welcome, Micle Obema</h6>
                      </div>
                      <div class="dashboard__nav">
                        <ul>
                          <li>
                            <Link class="active" to="/dashboard/admin-dashboard">
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
                            <Link to="/dashboard/admin-profile">
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
                            <Link to="/dashboard/admin-message">
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
                            <Link to="/dashboard/admin-message">
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
                              Courses
                            </Link>
                          </li>
                          <li>
                            <Link href="/dashboard/admin-review">
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
                            <Link to="/dashboard/admin-quiz">
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
                              Quiz Attempts
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
                            <Link to="/dashboard/admin-settings">
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
                        <h4>Dashboard</h4>
                      </div>
                      <div class="row">
                        <div class="col-xl-4 col-lg-6 col-md-12 col-12">
                          <div class="dashboard__single__counter">
                            <div class="counterarea__text__wraper">
                              <div class="counter__img">
                                <img src={counter1} alt="counter" />
                              </div>
                              <div class="counter__content__wraper">
                                <div class="counter__number">
                                  <span class="counter">900</span>+
                                </div>
                                <p>Enrolled Courses</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="col-xl-4 col-lg-6 col-md-12 col-12">
                          <div class="dashboard__single__counter">
                            <div class="counterarea__text__wraper">
                              <div class="counter__img">
                                <img src={counter2} alt="counter" />
                              </div>
                              <div class="counter__content__wraper">
                                <div class="counter__number">
                                  <span class="counter">500</span>+
                                </div>
                                <p>Active Courses</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="col-xl-4 col-lg-6 col-md-12 col-12">
                          <div class="dashboard__single__counter">
                            <div class="counterarea__text__wraper">
                              <div class="counter__img">
                                <img src={counter3} alt="counter" />
                              </div>
                              <div class="counter__content__wraper">
                                <div class="counter__number">
                                  <span class="counter">300</span>k
                                </div>
                                <p>Complete Courses</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="col-xl-4 col-lg-6 col-md-12 col-12">
                          <div class="dashboard__single__counter">
                            <div class="counterarea__text__wraper">
                              <div class="counter__img">
                                <img src={counter4} alt="counter" />
                              </div>
                              <div class="counter__content__wraper">
                                <div class="counter__number">
                                  <span class="counter">1500</span>+
                                </div>
                                <p>Total Courses</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="col-xl-4 col-lg-6 col-md-12 col-12">
                          <div class="dashboard__single__counter">
                            <div class="counterarea__text__wraper">
                              <div class="counter__img">
                                <img src={counter3} alt="counter" />
                              </div>
                              <div class="counter__content__wraper">
                                <div class="counter__number">
                                  <span class="counter">30</span>k
                                </div>
                                <p>Total Students</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="col-xl-4 col-lg-6 col-md-12 col-12">
                          <div class="dashboard__single__counter">
                            <div class="counterarea__text__wraper">
                              <div class="counter__img">
                                <img src={counter4} alt="counter" />
                              </div>
                              <div class="counter__content__wraper">
                                <div class="counter__number">
                                  <span class="counter">90,000</span>K+
                                </div>
                                <p>Total Earning</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="dashboard__admin__report__wrap">
                      <div class="dashboard__admin__report dashboard__linechart">
                        <div class="dashboard__admin__report__top">
                          <div class="dashboard__section__title">
                            <h4>Dashboard</h4>
                            <select
                              class="form-select"
                              aria-label="Default select example"
                            >
                              <option selected>HTML</option>
                              <option value="1">CSS</option>
                              <option value="2">Javascript</option>
                              <option value="3">PHP</option>
                              <option value="4">WordPress</option>
                            </select>
                          </div>
                        </div>
                        <canvas id="lineChart"></canvas>
                      </div>
                      <div class="dashboard__admin__report dashboard__piechart">
                        <div class="dashboard__admin__report__top">
                          <div class="dashboard__section__title">
                            <h4>Traffic</h4>
                            <select
                              class="form-select"
                              aria-label="Default select example"
                            >
                              <option selected>Today</option>
                              <option value="1">Weekly</option>
                              <option value="2">Monthly</option>
                              <option value="3">Yearly</option>
                            </select>
                          </div>
                        </div>
                        <canvas id="pieChart"></canvas>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-xl-6 col-lg-12 col-md-12 col-12">
                        <div class="dashboard__content__wraper admin__content__wrapper">
                          <div class="dashboard__section__title">
                            <h4>Popular Instructor</h4>
                            <Link to="/courses">See More...</Link>
                          </div>
                          <div class="dashboard__popular__instructor">
                            <div class="dashboard__popular__instructor__single">
                              <div class="dashboard__popular__instructor__img">
                                <img src={teacher1} alt="" />
                              </div>
                              <div class="dashboard__popular__instructor__content">
                                <h4>
                                  <a href="../instructor-details.html">
                                    Sanki Jho
                                  </a>
                                </h4>
                                <ul>
                                  <li>
                                    <i class="icofont-chat"></i>
                                    25,895 Reviews
                                  </li>
                                  <li>
                                    <i class="icofont-student-alt"></i>
                                    692 Students
                                  </li>
                                  <li>
                                    <i class="icofont-video-alt"></i>
                                    15+ Courses
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div class="dashboard__popular__instructor__single">
                              <div class="dashboard__popular__instructor__img">
                                <img src={teacher2} alt="" />
                              </div>
                              <div class="dashboard__popular__instructor__content">
                                <h4>
                                  <a href="../instructor-details.html">
                                    Nidmjae Mollin
                                  </a>
                                </h4>
                                <ul>
                                  <li>
                                    <i class="icofont-chat"></i>
                                    21,895 Reviews
                                  </li>
                                  <li>
                                    <i class="icofont-student-alt"></i>
                                    95 Students
                                  </li>
                                  <li>
                                    <i class="icofont-video-alt"></i>
                                    10+ Courses
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div class="dashboard__popular__instructor__single">
                              <div class="dashboard__popular__instructor__img">
                                <img src={teacher3} alt="" />
                              </div>
                              <div class="dashboard__popular__instructor__content">
                                <h4>
                                  <a href="../instructor-details.html">
                                    Nidmjae Mollin
                                  </a>
                                </h4>
                                <ul>
                                  <li>
                                    <i class="icofont-chat"></i>
                                    17,895 Reviews
                                  </li>
                                  <li>
                                    <i class="icofont-student-alt"></i>
                                    325 Students
                                  </li>
                                  <li>
                                    <i class="icofont-video-alt"></i>
                                    20+ Courses
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div class="dashboard__popular__instructor__single">
                              <div class="dashboard__popular__instructor__img">
                                <img src={teacher4} alt="" />
                              </div>
                              <div class="dashboard__popular__instructor__content">
                                <h4>
                                  <a href="../instructor-details.html">
                                    Sndi Jac
                                  </a>
                                </h4>
                                <ul>
                                  <li>
                                    <i class="icofont-chat"></i>
                                    17,895 Reviews
                                  </li>
                                  <li>
                                    <i class="icofont-student-alt"></i>
                                    325 Students
                                  </li>
                                  <li>
                                    <i class="icofont-video-alt"></i>
                                    45+ Courses
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div class="dashboard__popular__instructor__single">
                              <div class="dashboard__popular__instructor__img">
                                <img src={teacher5} alt="" />
                              </div>
                              <div class="dashboard__popular__instructor__content">
                                <h4>
                                  <a href="../instructor-details.html">
                                    Sndi Jac
                                  </a>
                                </h4>
                                <ul>
                                  <li>
                                    <i class="icofont-chat"></i>
                                    17,895 Reviews
                                  </li>
                                  <li>
                                    <i class="icofont-student-alt"></i>
                                    325 Students
                                  </li>
                                  <li>
                                    <i class="icofont-video-alt"></i>
                                    45+ Courses
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-xl-6 col-lg-12 col-md-12 col-12">
                        <div class="dashboard__content__wraper admin__content__wrapper">
                          <div class="dashboard__section__title">
                            <h4>Recent Course</h4>
                            <Link to="/courses">See More...</Link>
                          </div>
                          <div class="dashboard__recent__course">
                            <div class="dashboard__recent__course__single">
                              <div class="dashboard__recent__course__img">
                                <a href="../course-details.html">
                                  <img src={grid1} alt="grid" />
                                </a>
                              </div>
                              <div class="dashboard__recent__course__content">
                                <div class="dashboard__recent__course__heading">
                                  <h3>
                                    <a href="../course-details.html">
                                      {" "}
                                      Complete Python Zero to Hero in Python.
                                    </a>
                                  </h3>
                                </div>
                                <div class="dashboard__recent__course__meta">
                                  <ul>
                                    <li>
                                      <i class="icofont-teacher"></i>{" "}
                                      <a href="../instructor-details.html">
                                        Jon Ron
                                      </a>
                                    </li>
                                    <li>
                                      <i class="icofont-book-alt"></i> 9 Lesson
                                    </li>

                                    <li>
                                      <i class="icofont-clock-time"></i> 3 hr 30
                                      min
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                            <div class="dashboard__recent__course__single">
                              <div class="dashboard__recent__course__img">
                                <a href="../course-details.html">
                                  <img src={grid2} alt="grid" />
                                </a>
                              </div>
                              <div class="dashboard__recent__course__content">
                                <div class="dashboard__recent__course__heading">
                                  <h3>
                                    <a href="../course-details.html">
                                      {" "}
                                      Lorem ipsum dolor sit amet consectetur.
                                    </a>
                                  </h3>
                                </div>
                                <div class="dashboard__recent__course__meta">
                                  <ul>
                                    <li>
                                      <i class="icofont-teacher"></i>{" "}
                                      <a href="../instructor-details.html">
                                        Jon Ron
                                      </a>
                                    </li>
                                    <li>
                                      <i class="icofont-book-alt"></i> 9 Lesson
                                    </li>

                                    <li>
                                      <i class="icofont-clock-time"></i>2 hr 30
                                      min
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                            <div class="dashboard__recent__course__single">
                              <div class="dashboard__recent__course__img">
                                <a href="../course-details.html">
                                  <img src={grid3} alt="grid" />
                                </a>
                              </div>
                              <div class="dashboard__recent__course__content">
                                <div class="dashboard__recent__course__heading">
                                  <h3>
                                    <a href="../course-details.html">
                                      Voluptatum eius quo consectetur atque.
                                    </a>
                                  </h3>
                                </div>
                                <div class="dashboard__recent__course__meta">
                                  <ul>
                                    <li>
                                      <i class="icofont-teacher"></i>{" "}
                                      <a href="../instructor-details.html">
                                        Jon Ron
                                      </a>
                                    </li>
                                    <li>
                                      <i class="icofont-book-alt"></i> 5 Lesson
                                    </li>
                                    <li>
                                      <i class="icofont-clock-time"></i> 1 hr 30
                                      min
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                            <div class="dashboard__recent__course__single">
                              <div class="dashboard__recent__course__img">
                                <a href="../course-details.html">
                                  <img src={grid4} alt="grid" />
                                </a>
                              </div>
                              <div class="dashboard__recent__course__content">
                                <div class="dashboard__recent__course__heading">
                                  <h3>
                                    <a href="../course-details.html">
                                      Sapiente recusandae nemo sint hic iste!
                                    </a>
                                  </h3>
                                </div>
                                <div class="dashboard__recent__course__meta">
                                  <ul>
                                    <li>
                                      <i class="icofont-teacher"></i>{" "}
                                      <a href="../instructor-details.html">
                                        Mini Ron
                                      </a>
                                    </li>
                                    <li>
                                      <i class="icofont-book-alt"></i> 7 Lesson
                                    </li>
                                    <li>
                                      <i class="icofont-clock-time"></i> 3 hr 30
                                      min
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-xl-6 col-lg-12 col-md-12 col-12">
                        <div class="dashboard__content__wraper admin__content__wrapper">
                          <div class="dashboard__section__title">
                            <h4>Notice Board</h4>
                            <Link to="/courses">See More...</Link>
                          </div>
                          <div class="dashboard__recent__course dashboard__notice__board">
                            <div class="dashboard__recent__course__single">
                              <div class="dashboard__recent__course__img">
                                <a href="../course-details.html">
                                  <img src={blog6} alt="grid" />
                                </a>
                              </div>
                              <div class="dashboard__recent__course__content">
                                <div class="dashboard__recent__course__heading">
                                  <h3>
                                    <a href="../course-details.html">
                                      {" "}
                                      Lorem ipsum dolor sit amet consectetur
                                      adipisicing elit. Libero velit quos dolore
                                      voluptatem...
                                    </a>
                                  </h3>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="dashboard__recent__course dashboard__notice__board">
                            <div class="dashboard__recent__course__single">
                              <div class="dashboard__recent__course__img">
                                <a href="../course-details.html">
                                  <img src={blog7} alt="grid" />
                                </a>
                              </div>
                              <div class="dashboard__recent__course__content">
                                <div class="dashboard__recent__course__heading">
                                  <h3>
                                    <a href="../course-details.html">
                                      {" "}
                                      Lorem ipsum dolor sit amet consectetur
                                      adipisicing elit. Libero velit quos dolore
                                      aedgeds...
                                    </a>
                                  </h3>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="dashboard__recent__course dashboard__notice__board">
                            <div class="dashboard__recent__course__single">
                              <div class="dashboard__recent__course__img">
                                <a href="../course-details.html">
                                  <img src={blog8} alt="grid" />
                                </a>
                              </div>
                              <div class="dashboard__recent__course__content">
                                <div class="dashboard__recent__course__heading">
                                  <h3>
                                    <a href="../course-details.html">
                                      {" "}
                                      Lorem ipsum dolor sit amet consectetur
                                      adipisicing elit. Libero velit quos dolore
                                      wdedged...
                                    </a>
                                  </h3>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="dashboard__recent__course dashboard__notice__board">
                            <div class="dashboard__recent__course__single">
                              <div class="dashboard__recent__course__img">
                                <a href="../course-details.html">
                                  <img src={blog9} alt="grid" />
                                </a>
                              </div>
                              <div class="dashboard__recent__course__content">
                                <div class="dashboard__recent__course__heading">
                                  <h3>
                                    <a href="../course-details.html">
                                      {" "}
                                      Lorem ipsum dolor sit amet consectetur
                                      adipisicing elit. Libero velit quos dolore
                                      nidelsd...
                                    </a>
                                  </h3>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="dashboard__recent__course dashboard__notice__board">
                            <div class="dashboard__recent__course__single">
                              <div class="dashboard__recent__course__img">
                                <a href="../course-details.html">
                                  <img src={blog4} alt="grid" />
                                </a>
                              </div>
                              <div class="dashboard__recent__course__content">
                                <div class="dashboard__recent__course__heading">
                                  <h3>
                                    <a href="../course-details.html">
                                      {" "}
                                      Lorem ipsum dolor sit amet consectetur
                                      adipisicing elit. Libero velit quos dolore
                                      midnied...
                                    </a>
                                  </h3>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-xl-6 col-lg-12 col-md-12 col-12">
                        <div class="dashboard__content__wraper admin__content__wrapper">
                          <div class="dashboard__section__title">
                            <h4>Notifications</h4>
                            <Link to="/courses">See More...</Link>
                          </div>
                          <div class="dashboard__popular__instructor dashboard__notificatoin__wrap">
                            <div class="dashboard__popular__instructor__single">
                              <div class="dashboard__popular__instructor__img">
                                <img src={profile} alt="" />
                              </div>
                              <div class="dashboard__popular__instructor__content">
                                <h4>
                                  <a href=" ">
                                    latest resume has been updated!
                                  </a>
                                </h4>
                                <span>1 Hour Ago</span>
                              </div>
                            </div>
                            <div class="dashboard__popular__instructor__single">
                              <div class="dashboard__popular__instructor__img">
                                <img src={lock} alt="" />
                              </div>
                              <div class="dashboard__popular__instructor__content">
                                <h4>
                                  <a href=" ">
                                    Password has been changed 3 times
                                  </a>
                                </h4>
                                <span>2 Hour Ago</span>
                              </div>
                            </div>
                            <div class="dashboard__popular__instructor__single">
                              <div class="dashboard__popular__instructor__img">
                                <img src={verify} alt="" />
                              </div>
                              <div class="dashboard__popular__instructor__content">
                                <h4>
                                  <a href=" ">
                                    Account has been created successfully
                                  </a>
                                </h4>
                                <span>50 Min Ago</span>
                              </div>
                            </div>
                            <div class="dashboard__popular__instructor__single">
                              <div class="dashboard__popular__instructor__img">
                                <img src={success} alt="" />
                              </div>
                              <div class="dashboard__popular__instructor__content">
                                <h4>
                                  <a href=" ">
                                    Successfully applied for a job Developer
                                  </a>
                                </h4>
                                <span>30 Min Ago</span>
                              </div>
                            </div>
                            <div class="dashboard__popular__instructor__single">
                              <div class="dashboard__popular__instructor__img">
                                <img src={video} alt="" />
                              </div>
                              <div class="dashboard__popular__instructor__content">
                                <h4>
                                  <a href=" ">
                                    Multi vendor course updated successfully
                                  </a>
                                </h4>
                                <span>3 hours Ago</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="dashboard__content__wraper">
                      <div class="dashboard__section__title">
                        <h4>Total Feedbacks</h4>
                        <Link to="/courses">See More...</Link>
                      </div>
                      <div class="row">
                        <div class="col-xl-12">
                          <div class="dashboard__table table-responsive">
                            <table>
                              <thead>
                                <tr>
                                  <th>Course Name</th>
                                  <th>Enrolled</th>
                                  <th>Rating</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <th>
                                    <a href=" ">Javascript</a>
                                  </th>
                                  <td>1100</td>
                                  <td>
                                    <div class="dashboard__table__star">
                                      <i class="icofont-star"></i>
                                      <i class="icofont-star"></i>
                                      <i class="icofont-star"></i>
                                      <i class="icofont-star"></i>
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
                                    </div>
                                  </td>
                                </tr>
                                <tr class="dashboard__table__row">
                                  <th>
                                    <a href=" ">PHP</a>
                                  </th>
                                  <td>700</td>
                                  <td>
                                    <div class="dashboard__table__star">
                                      <i class="icofont-star"></i>
                                      <i class="icofont-star"></i>
                                      <i class="icofont-star"></i>
                                      <i class="icofont-star"></i>
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
                                    </div>
                                  </td>
                                </tr>
                                <tr>
                                  <th>
                                    <a href=" ">HTML</a>
                                  </th>
                                  <td>1350</td>
                                  <td>
                                    <div class="dashboard__table__star">
                                      <i class="icofont-star"></i>
                                      <i class="icofont-star"></i>
                                      <i class="icofont-star"></i>
                                      <i class="icofont-star"></i>
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
                                    </div>
                                  </td>
                                </tr>
                                <tr class="dashboard__table__row">
                                  <th>
                                    <a href=" ">Graphic</a>
                                  </th>
                                  <td>1266</td>
                                  <td>
                                    <div class="dashboard__table__star">
                                      <i class="icofont-star"></i>
                                      <i class="icofont-star"></i>
                                      <i class="icofont-star"></i>
                                      <i class="icofont-star"></i>
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
                                    </div>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
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

export default AdminDashboard;

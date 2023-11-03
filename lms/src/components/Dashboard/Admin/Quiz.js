import React from "react";
import DarkNight from "../../DarkNight";
import TopBar from "../../Topbar";
import Navbar from "../../Navbar";
import Footer from "../../Footer";
import DANavBar from "./DANavBar/DANavBar";
import { Link } from "react-router-dom";

const AdminQuiz = () => {
  return (
    <>
      <DarkNight />
      <TopBar />
      <Navbar />
      <div className="body__wrapper">
        <div className="main_wrapper overflow-hidden">
          <div class="theme__shadow__circle"></div>
          <div class="theme__shadow__circle shadow__right"></div>
          <div className="dashboardarea sp_bottom_100">
            <DANavBar/>
            <div className="dashboard">
              <div className="container-fluid full__width__padding">
                <div className="row">
                  <div className="col-xl-3 col-lg-3 col-md-12">
                    <div className="dashboard__inner sticky-top">
                      <div className="dashboard__nav__title">
                        <h6>Welcome, Micle Obema</h6>
                      </div>
                      <div className="dashboard__nav">
                        <ul>
                          <li>
                            <Link to="/dashboard/admin-dashboard">
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
                                className="feather feather-home"
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
                                className="feather feather-user"
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
                                className="feather feather-book-open"
                              >
                                <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                                <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                              </svg>
                              Message
                            </Link>
                            <span className="dashboard__label">12</span>
                            <span className="dashboard__label">12</span>
                          </li>
                          <li>
                            <Link to="/dashboard/admin-courses">
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
                                className="feather feather-bookmark"
                              >
                                <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
                              </svg>
                              Courses
                            </Link>
                          </li>
                          <li>
                            <Link to="/dashboard/admin-review">
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
                                className="feather feather-star"
                              >
                                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                              </svg>
                              Reviews
                            </Link>
                          </li>
                          <li>
                            <Link
                              className="active"
                              to="/dashboard/admin-quiz"
                            >
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
                                className="feather feather-help-circle"
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
                      <div className="dashboard__nav__title mt-40">
                        <h6>user</h6>
                      </div>
                      <div className="dashboard__nav">
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
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
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
                        <h4>My Quiz Attempts</h4>
                      </div>
                      <div className="row">
                        <div className="col-xl-6 col-lg-4 col-md-4 col-12">
                          <div className="dashboard__select__heading">
                            <span>Courses</span>
                          </div>
                          <div className="dashboard__selector">
                            <select
                              className="form-select"
                              aria-label="Default select example"
                            >
                              <option selected>All</option>
                              <option value="1">Web Design</option>
                              <option value="2">Graphic</option>
                              <option value="3">English</option>
                              <option value="4">Spoken English</option>
                              <option value="5">Art Painting</option>
                              <option value="6">App Development</option>
                              <option value="7">Web Application</option>
                              <option value="7">Php Development</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                          <div className="dashboard__select__heading">
                            <span>SHORT BY</span>
                          </div>
                          <div className="dashboard__selector">
                            <select
                              className="form-select"
                              aria-label="Default select example"
                            >
                              <option selected>Default</option>
                              <option value="1">Trending</option>
                              <option value="2">Price: low to high</option>
                              <option value="3">Price: low to low</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                          <div className="dashboard__select__heading">
                            <span>SHORT BY OFFER</span>
                          </div>
                          <div className="dashboard__selector">
                            <select
                              className="form-select"
                              aria-label="Default select example"
                            >
                              <option selected>Free</option>
                              <option value="1">paid</option>
                              <option value="2">premimum</option>
                            </select>
                          </div>
                        </div>
                      </div>
                      <hr className="mt-40" />
                      <div className="row">
                        <div className="col-xl-12">
                          <div className="dashboard__table table-responsive">
                            <table>
                              <thead>
                                <tr>
                                  <th>Quiz</th>
                                  <th>Qus</th>
                                  <th>TM</th>
                                  <th>CA</th>
                                  <th>Status</th>
                                  <th></th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <th>
                                    <p>December 26, 2023</p>
                                    <span>Write a on yourself using the 5</span>
                                    <p>
                                      Student: <a href=" ">Mice Jerry</a>
                                    </p>
                                  </th>
                                  <td>
                                    <p>4</p>
                                  </td>
                                  <td>
                                    <p>8</p>
                                  </td>
                                  <td>
                                    <p>4</p>
                                  </td>
                                  <td>
                                    <span className="dashboard__td dashboard__td--running">
                                      Running
                                    </span>
                                  </td>
                                  <td>
                                    <div className="dashboard__button__group">
                                      <a
                                        className="dashboard__small__btn__2"
                                        href=" "
                                      >
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
                                          className="feather feather-edit"
                                        >
                                          <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                                          <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                                        </svg>{" "}
                                        Edit
                                      </a>
                                      <a
                                        className="dashboard__small__btn__2 dashboard__small__btn__3"
                                        href=" "
                                      >
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
                                          className="feather feather-trash-2"
                                        >
                                          <polyline points="3 6 5 6 21 6"></polyline>
                                          <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                                          <line
                                            x1="10"
                                            y1="11"
                                            x2="10"
                                            y2="17"
                                          ></line>
                                          <line
                                            x1="14"
                                            y1="11"
                                            x2="14"
                                            y2="17"
                                          ></line>
                                        </svg>{" "}
                                        Delete
                                      </a>
                                    </div>
                                  </td>
                                </tr>
                                <tr className="dashboard__table__row">
                                  <th>
                                    <p>December 26, 2023</p>
                                    <span>Write a on yourself using the 5</span>
                                    <p>
                                      Student: <a href=" ">Mice Jerry</a>
                                    </p>
                                  </th>
                                  <td>
                                    <p>4</p>
                                  </td>
                                  <td>
                                    <p>8</p>
                                  </td>
                                  <td>
                                    <p>4</p>
                                  </td>
                                  <td>
                                    <span className="dashboard__td dashboard__td--over">
                                      Time Over
                                    </span>
                                  </td>
                                  <td>
                                    <div className="dashboard__button__group">
                                      <a
                                        className="dashboard__small__btn__2"
                                        href=" "
                                      >
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
                                          className="feather feather-edit"
                                        >
                                          <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                                          <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                                        </svg>{" "}
                                        Edit
                                      </a>
                                      <a
                                        className="dashboard__small__btn__2  dashboard__small__btn__3"
                                        href=" "
                                      >
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
                                          className="feather feather-trash-2"
                                        >
                                          <polyline points="3 6 5 6 21 6"></polyline>
                                          <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                                          <line
                                            x1="10"
                                            y1="11"
                                            x2="10"
                                            y2="17"
                                          ></line>
                                          <line
                                            x1="14"
                                            y1="11"
                                            x2="14"
                                            y2="17"
                                          ></line>
                                        </svg>{" "}
                                        Delete
                                      </a>
                                    </div>
                                  </td>
                                </tr>
                                <tr>
                                  <th>
                                    <p>December 26, 2023</p>
                                    <span>Write a on yourself using the 5</span>
                                    <p>
                                      Student: <a href=" ">Mice Jerry</a>
                                    </p>
                                  </th>
                                  <td>
                                    <p>4</p>
                                  </td>
                                  <td>
                                    <p>8</p>
                                  </td>
                                  <td>
                                    <p>4</p>
                                  </td>
                                  <td>
                                    <span className="dashboard__td dashboard__td--comming">
                                      Coming
                                    </span>
                                  </td>
                                  <td>
                                    <div className="dashboard__button__group">
                                      <a
                                        className="dashboard__small__btn__2"
                                        href=" "
                                      >
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
                                          className="feather feather-edit"
                                        >
                                          <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                                          <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                                        </svg>{" "}
                                        Edit
                                      </a>
                                      <a
                                        className="dashboard__small__btn__2  dashboard__small__btn__3"
                                        href=" "
                                      >
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
                                          className="feather feather-trash-2"
                                        >
                                          <polyline points="3 6 5 6 21 6"></polyline>
                                          <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                                          <line
                                            x1="10"
                                            y1="11"
                                            x2="10"
                                            y2="17"
                                          ></line>
                                          <line
                                            x1="14"
                                            y1="11"
                                            x2="14"
                                            y2="17"
                                          ></line>
                                        </svg>{" "}
                                        Delete
                                      </a>
                                    </div>
                                  </td>
                                </tr>
                                <tr className="dashboard__table__row">
                                  <th>
                                    <p>December 26, 2023</p>
                                    <span>Write a on yourself using the 5</span>
                                    <p>
                                      Student: <a href=" ">Mice Jerry</a>
                                    </p>
                                  </th>
                                  <td>
                                    <p>4</p>
                                  </td>
                                  <td>
                                    <p>8</p>
                                  </td>
                                  <td>
                                    <p>4</p>
                                  </td>
                                  <td>
                                    <span className="dashboard__td dashboard__td--cancel">
                                      Cancel
                                    </span>
                                  </td>
                                  <td>
                                    <div className="dashboard__button__group">
                                      <a
                                        className="dashboard__small__btn__2"
                                        href=" "
                                      >
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
                                          className="feather feather-edit"
                                        >
                                          <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                                          <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                                        </svg>{" "}
                                        Edit
                                      </a>
                                      <a
                                        className="dashboard__small__btn__2  dashboard__small__btn__3"
                                        href=" "
                                      >
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
                                          className="feather feather-trash-2"
                                        >
                                          <polyline points="3 6 5 6 21 6"></polyline>
                                          <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                                          <line
                                            x1="10"
                                            y1="11"
                                            x2="10"
                                            y2="17"
                                          ></line>
                                          <line
                                            x1="14"
                                            y1="11"
                                            x2="14"
                                            y2="17"
                                          ></line>
                                        </svg>{" "}
                                        Delete
                                      </a>
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

export default AdminQuiz;

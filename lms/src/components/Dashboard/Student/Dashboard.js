import React from 'react'
import { Link } from 'react-router-dom'
import DarkNight from "../../DarkNight";
import TopBar from "../../Topbar";
import Navbar from "../../Navbar";
import Footer from "../../Footer";
import DSNavBar from './DSNavbar.js/DSNavbar'
import counter1 from '../../../img/counter/counter__1.png';
import counter2 from '../../../img/counter/counter__2.png';
import counter3 from '../../../img/counter/counter__3.png';

const Dashboard = () => {
  return (
    <>
    <DarkNight />
      <TopBar />
      <Navbar />
      <div className="body__wrapper">
      <div className="main_wrapper overflow-hidden">
        <div>
            <div className="theme__shadow__circle"></div>
            <div className="theme__shadow__circle shadow__right"></div>
        </div>

        <div className="dashboardarea sp_bottom_100">
            <DSNavBar/>
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
                                            <Link className="active" to="../Student/Dashboard.js">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-home"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
                                                Dashboard</Link>
                                        </li>
                                        <li>
                                            <Link to="../Student/Profile.js">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-user"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                                                My Profile</Link>
                                        </li>
                                        <li>
                                            <Link to="../Student/Message.js">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-book-open"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg>
                                                Message</Link><span className="dashboard__label">12</span>
                                        </li>
                                        <li>
                                            <Link to="../Student/Ecourses.js">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-bookmark"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path></svg>
                                                Enrolled Courses</Link>
                                        </li>
                                        <li>
                                            <Link to="../Student/Wishlist.js">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-bookmark"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path></svg>
                                                Wishlist</Link>
                                        </li>
                                        <li>
                                            <Link to="../Student/Review.js">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-star"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                                                Reviews</Link>
                                        </li>
                                        <li>
                                            <Link to="../Student/Quiz.js">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-help-circle"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>
                                                My Quiz Attempts</Link>
                                        </li>
                                        <li>
                                            <Link to="../Student/Assignments.js">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-volume-1"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path></svg>
                                                Assignments</Link>
                                        </li>
                                        <li>
                                            <Link to="../Student/Settings.js">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-settings"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>
                                               Settings</Link>
                                        </li>
                                        <li>
                                            <Link to="#">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-volume-1"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path></svg>
                                                Logout</Link>
                                        </li>
                                    </ul>
                                </div>

                            </div>
                        </div>
                        <div className="col-xl-9 col-lg-9 col-md-12">
                            <div className="dashboard__content__wraper">
                                <div className="dashboard__section__title">
                                    <h4>Summery</h4>
                                </div>
                                <div className="row">
                                    <div className="col-xl-4 col-lg-6 col-md-12 col-12">
                                        <div className="dashboard__single__counter">
                                            <div className="counterarea__text__wraper">
                                                <div className="counter__img">
                                                    <img src={counter1} alt="counter"/>
                                                </div>
                                                <div className="counter__content__wraper">
                                                    <div className="counter__number">
                                                        <span className="counter">27</span>+
                    
                                                    </div>
                                                    <p>Enrolled Courses</p>
                
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-4 col-lg-6 col-md-12 col-12">
                                        <div className="dashboard__single__counter">
                                            <div className="counterarea__text__wraper">
                                                <div className="counter__img">
                                                    <img src={counter2} alt="counter"/>
                                                </div>
                                                <div className="counter__content__wraper">
                                                    <div className="counter__number">
                                                        <span className="counter">08</span>+
                    
                                                    </div>
                                                    <p>Active Courses</p>
                    
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-4 col-lg-6 col-md-12 col-12">
                                        <div className="dashboard__single__counter">
                                            <div className="counterarea__text__wraper">
                                                <div className="counter__img">
                                                    <img src={counter3} alt="counter"/>
                                                </div>
                                                <div className="counter__content__wraper">
                                                    <div className="counter__number">
                                                        <span className="counter">12</span>
                    
                                                    </div>
                                                    <p>Complete Courses</p>
                    
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="dashboard__content__wraper">
                                <div className="dashboard__section__title">
                                    <h4>Feedbacks</h4>
                                    <Link to="../course.html">See More...</Link>
                                </div>
                                <div className="row">
                                <div className="col-xl-12">
                                    <div className="dashboard__table table-responsive">
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
                                                    <th><Link to="#">Javascript</Link></th>
                                                    <td>1100</td>
                                                    <td>
                                                        <div className="dashboard__table__star">
                                                            <i className="icofont-star"></i>
                                                            <i className="icofont-star"></i>
                                                            <i className="icofont-star"></i>
                                                            <i className="icofont-star"></i>
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-star"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr className="dashboard__table__row">
                                                    <th><Link to="#">PHP</Link></th>
                                                    <td>700</td>
                                                    <td>
                                                        <div className="dashboard__table__star">
                                                            <i className="icofont-star"></i>
                                                            <i className="icofont-star"></i>
                                                            <i className="icofont-star"></i>
                                                            <i className="icofont-star"></i>
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-star"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th><Link to="#">HTML</Link></th>
                                                    <td>1350</td>
                                                    <td>
                                                        <div className="dashboard__table__star">
                                                            <i className="icofont-star"></i>
                                                            <i className="icofont-star"></i>
                                                            <i className="icofont-star"></i>
                                                            <i className="icofont-star"></i>
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-star"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr className="dashboard__table__row">
                                                    <th><Link to="#">Graphic</Link></th>
                                                    <td>1266</td>
                                                    <td>
                                                        <div className="dashboard__table__star">
                                                            <i className="icofont-star"></i>
                                                            <i className="icofont-star"></i>
                                                            <i className="icofont-star"></i>
                                                            <i className="icofont-star"></i>
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-star"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
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
  )
}

export default Dashboard
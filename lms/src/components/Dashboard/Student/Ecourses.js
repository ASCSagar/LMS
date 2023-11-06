import React from 'react'
import { Link } from 'react-router-dom'
import DarkNight from "../../DarkNight";
import TopBar from "../../Topbar";
import Navbar from "../../Navbar";
import Footer from "../../Footer";
import DSNavBar from './DSNavbar.js/DSNavbar'
import grid1 from '../../../img/grid/grid_1.png';
import grid2 from '../../../img/grid/grid_2.png';
import grid3 from '../../../img/grid/grid_3.png';
import grid8 from '../../../img/grid/grid_8.png';
import grids1 from '../../../img/grid/grid_small_1.jpg';
import grids2 from '../../../img/grid/grid_small_2.jpg';
import grids3 from '../../../img/grid/grid_small_3.jpg';

const Ecourses = () => {
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
                                            <Link to="../Student/Dashboard">
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
                                            <Link className="active" to="../Student/Ecourses.js">
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
                                    <h4>My Profile</h4>
                                </div>
                                <div className="row">
                                    <div className="col-xl-12 aos-init aos-animate" data-aos="fade-up">
                                        <ul className="nav  about__button__wrap dashboard__button__wrap" id="myTab" role="tablist">
                                            <li className="nav-item" role="presentation">
                                                <button className="single__tab__link active" data-bs-toggle="tab" data-bs-target="#projects__one" type="button" aria-selected="true" role="tab">Enrolled Courses</button>
                                            </li>
                                            <li className="nav-item" role="presentation">
                                                <button className="single__tab__link" data-bs-toggle="tab" data-bs-target="#projects__two" type="button" aria-selected="false" role="tab" tabindex="-1">Active Courses</button>
                                            </li>
                                            <li className="nav-item" role="presentation">
                                                <button className="single__tab__link" data-bs-toggle="tab" data-bs-target="#projects__three" type="button" aria-selected="false" role="tab" tabindex="-1">Completed Courses</button>
                                            </li>
                                     
                
                
                                        </ul>
                                    </div>


                                    <div className="tab-content tab__content__wrapper aos-init aos-animate" id="myTabContent" data-aos="fade-up">

                                        <div className="tab-pane fade active show" id="projects__one" role="tabpanel" aria-labelledby="projects__one">
                                            <div className="row">
                                           
                                                <div className="col-xl-4 col-lg-6 col-md-6 col-12">
                                                    <div className="gridarea__wraper">
                                                        <div className="gridarea__img">
                                                            <Link to="../course-details.html"><img src={grid1} alt="grid"/></Link>
                                                            <div className="gridarea__small__button">
                                                                <div className="grid__badge">Data &amp; Tech</div>
                                                            </div>
                                                            <div className="gridarea__small__icon">
                                                                <Link to="#"><i className="icofont-heart-alt"></i></Link>
                                                            </div>
                            
                                                        </div>
                                                        <div className="gridarea__content">
                                                            <div className="gridarea__list">
                                                                <ul>
                                                                    <li>
                                                                        <i className="icofont-book-alt"></i> 23 Lesson
                                                                    </li>
                                                                    <li>
                                                                        <i className="icofont-clock-time"></i> 1 hr 30 min
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                            <div className="gridarea__heading">
                                                                <h3><Link to="../course-details.html">Foundation course to under stand
                                                                    about softwere</Link></h3>
                                                            </div>
                                                            <div className="gridarea__price">
                                                                $32.00 <del>/ $67.00</del>
                                                                <span> <del className="del__2">Free</del></span>
                            
                                                            </div>
                                                            <div className="gridarea__bottom">
                            
                                                                <Link to="instructor-details.html">
                                                                    <div className="gridarea__small__img">
                                                                        <img src={grids1} alt="grid"/>
                                                                        <div className="gridarea__small__content">
                                                                            <h6>Micle Jhon</h6>
                                                                        </div>
                                                                    </div>
                                                                </Link>
                            
                                                                <div className="gridarea__star">
                                                                    <i className="icofont-star"></i>
                                                                    <i className="icofont-star"></i>
                                                                    <i className="icofont-star"></i>
                                                                    <i className="icofont-star"></i>
                                                                    <i className="icofont-star"></i>
                                                                    <span>(44)</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="grid__course__status populerarea__button">
                                                            <div className="progress">
                                                                <div className="progress-bar" role="progressbar" aria-valuenow="100"
                                                                aria-valuemin="0" aria-valuemax="100" style={{width:"100%"}}>
                                                                  100% Complete
                                                                </div>
                                                              </div>
                                                              
                                                            <Link className="default__button" to="#">Download Certificate</Link>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="col-xl-4 col-lg-6 col-md-6 col-12">
                                                    <div className="gridarea__wraper">
                                                        <div className="gridarea__img">
                                                            <img src={grid2} alt="grid"/>
                                                            <div className="gridarea__small__button">
                                                                <div className="grid__badge blue__color">Mechanical</div>
                                                            </div>
                                                            <div className="gridarea__small__icon">
                                                                <Link to="#"><i className="icofont-heart-alt"></i></Link>
                                                            </div>
                            
                                                        </div>
                                                        <div className="gridarea__content">
                                                            <div className="gridarea__list">
                                                                <ul>
                                                                    <li>
                                                                        <i className="icofont-book-alt"></i> 29 Lesson
                                                                    </li>
                                                                    <li>
                                                                        <i className="icofont-clock-time"></i> 2 hr 10 min
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                            <div className="gridarea__heading">
                                                                <h3><Link to="#">Nidnies course to under stand
                                                                    about softwere</Link></h3>
                                                            </div>
                                                            <div className="gridarea__price green__color">
                                                                $32.00<del>/$67.00</del>
                                                                <span>.Free</span>
                            
                                                            </div>
                                                            <div className="gridarea__bottom">
                                                                <Link to="instructor-details.html">
                                                                    <div className="gridarea__small__img">
                                                                        <img src={grids2} alt="grid"/>
                                                                        <div className="gridarea__small__content">
                                                                            <h6>Rinis Jhon</h6>
                                                                        </div>
                                                                    </div>
                                                                </Link>
                                                                <div className="gridarea__star">
                                                                    <i className="icofont-star"></i>
                                                                    <i className="icofont-star"></i>
                                                                    <i className="icofont-star"></i>
                                                                    <i className="icofont-star"></i>
                                                                    <i className="icofont-star"></i>
                                                                    <span>(44)</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="grid__course__status populerarea__button">
                                                            <div className="progress">
                                                                <div className="progress-bar" role="progressbar" aria-valuenow="100"
                                                                aria-valuemin="0" aria-valuemax="100" style={{width:"100%"}}>
                                                                  100% Complete
                                                                </div>
                                                              </div>
                                                              
                                                            <Link className="default__button" to="#">Download Certificate</Link>
                                                        </div>
                                                    </div>
                                                </div>

                                                
                                                <div className="col-xl-4 col-lg-6 col-md-6 col-12">
                                                    <div className="gridarea__wraper">
                                                        <div className="gridarea__img">
                                                            <img src={grid3} alt="grid"/>
                                                            <div className="gridarea__small__button">
                                                                <div className="grid__badge blue__color">Mechanical</div>
                                                            </div>
                                                            <div className="gridarea__small__icon">
                                                                <Link to="#"><i className="icofont-heart-alt"></i></Link>
                                                            </div>
                            
                                                        </div>
                                                        <div className="gridarea__content">
                                                            <div className="gridarea__list">
                                                                <ul>
                                                                    <li>
                                                                        <i className="icofont-book-alt"></i> 29 Lesson
                                                                    </li>
                                                                    <li>
                                                                        <i className="icofont-clock-time"></i> 2 hr 10 min
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                            <div className="gridarea__heading">
                                                                <h3><Link to="#">Nidnies course to under stand
                                                                    about softwere</Link></h3>
                                                            </div>
                                                            <div className="gridarea__price green__color">
                                                                $32.00<del>/$67.00</del>
                                                                <span>.Free</span>
                            
                                                            </div>
                                                            <div className="gridarea__bottom">
                                                                <Link to="instructor-details.html">
                                                                    <div className="gridarea__small__img">
                                                                        <img src={grids2} alt="grid"/>
                                                                        <div className="gridarea__small__content">
                                                                            <h6>Rinis Jhon</h6>
                                                                        </div>
                                                                    </div>
                                                                </Link>
                                                                <div className="gridarea__star">
                                                                    <i className="icofont-star"></i>
                                                                    <i className="icofont-star"></i>
                                                                    <i className="icofont-star"></i>
                                                                    <i className="icofont-star"></i>
                                                                    <i className="icofont-star"></i>
                                                                    <span>(44)</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="grid__course__status populerarea__button">
                                                            <div className="progress">
                                                                <div className="progress-bar" role="progressbar" aria-valuenow="100"
                                                                aria-valuemin="0" aria-valuemax="100" style={{width:"100%"}}>
                                                                  100% Complete
                                                                </div>
                                                              </div>
                                                              
                                                            <Link className="default__button" to="#">Download Certificate</Link>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="col-xl-4 col-lg-6 col-md-6 col-12">
                                                    <div className="gridarea__wraper">
                                                        <div className="gridarea__img">
                                                            <Link to="../course-details.html"><img src={grid1} alt="grid"/></Link>
                                                            <div className="gridarea__small__button">
                                                                <div className="grid__badge">Data &amp; Tech</div>
                                                            </div>
                                                            <div className="gridarea__small__icon">
                                                                <Link to="#"><i className="icofont-heart-alt"></i></Link>
                                                            </div>
                            
                                                        </div>
                                                        <div className="gridarea__content">
                                                            <div className="gridarea__list">
                                                                <ul>
                                                                    <li>
                                                                        <i className="icofont-book-alt"></i> 23 Lesson
                                                                    </li>
                                                                    <li>
                                                                        <i className="icofont-clock-time"></i> 1 hr 30 min
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                            <div className="gridarea__heading">
                                                                <h3><Link to="../course-details.html">Foundation course to under stand
                                                                    about softwere</Link></h3>
                                                            </div>
                                                            <div className="gridarea__price">
                                                                $32.00 <del>/ $67.00</del>
                                                                <span> <del className="del__2">Free</del></span>
                            
                                                            </div>
                                                            <div className="gridarea__bottom">
                            
                                                                <Link to="instructor-details.html">
                                                                    <div className="gridarea__small__img">
                                                                        <img src={grids1} alt="grid"/>
                                                                        <div className="gridarea__small__content">
                                                                            <h6>Micle Jhon</h6>
                                                                        </div>
                                                                    </div>
                                                                </Link>
                            
                                                                <div className="gridarea__star">
                                                                    <i className="icofont-star"></i>
                                                                    <i className="icofont-star"></i>
                                                                    <i className="icofont-star"></i>
                                                                    <i className="icofont-star"></i>
                                                                    <i className="icofont-star"></i>
                                                                    <span>(44)</span>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="grid__course__status populerarea__button">
                                                            <div className="progress">
                                                                <div className="progress-bar" role="progressbar" aria-valuenow="80"
                                                                aria-valuemin="0" aria-valuemax="100" style={{width:"80%"}}>
                                                                  80% Complete
                                                                </div>
                                                              </div>
                                                        </div>

                                                    </div>
                                                </div>

                                                <div className="col-xl-4 col-lg-6 col-md-6 col-12">
                                                    <div className="gridarea__wraper">
                                                        <div className="gridarea__img">
                                                            <img src={grid2} alt="grid"/>
                                                            <div className="gridarea__small__button">
                                                                <div className="grid__badge blue__color">Mechanical</div>
                                                            </div>
                                                            <div className="gridarea__small__icon">
                                                                <Link to="#"><i className="icofont-heart-alt"></i></Link>
                                                            </div>
                            
                                                        </div>
                                                        <div className="gridarea__content">
                                                            <div className="gridarea__list">
                                                                <ul>
                                                                    <li>
                                                                        <i className="icofont-book-alt"></i> 29 Lesson
                                                                    </li>
                                                                    <li>
                                                                        <i className="icofont-clock-time"></i> 2 hr 10 min
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                            <div className="gridarea__heading">
                                                                <h3><Link to="#">Nidnies course to under stand
                                                                    about softwere</Link></h3>
                                                            </div>
                                                            <div className="gridarea__price green__color">
                                                                $32.00<del>/$67.00</del>
                                                                <span>.Free</span>
                            
                                                            </div>
                                                            <div className="gridarea__bottom">
                                                                <Link to="instructor-details.html">
                                                                    <div className="gridarea__small__img">
                                                                        <img src={grids2} alt="grid"/>
                                                                        <div className="gridarea__small__content">
                                                                            <h6>Rinis Jhon</h6>
                                                                        </div>
                                                                    </div>
                                                                </Link>
                                                                <div className="gridarea__star">
                                                                    <i className="icofont-star"></i>
                                                                    <i className="icofont-star"></i>
                                                                    <i className="icofont-star"></i>
                                                                    <i className="icofont-star"></i>
                                                                    <i className="icofont-star"></i>
                                                                    <span>(44)</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="grid__course__status populerarea__button">
                                                            <div className="progress">
                                                                <div className="progress-bar" role="progressbar" aria-valuenow="70"
                                                                aria-valuemin="0" aria-valuemax="100" style={{width:"70%"}}>
                                                                  70% Complete
                                                                </div>
                                                              </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                
                                                <div className="col-xl-4 col-lg-6 col-md-6 col-12">
                                                    <div className="gridarea__wraper">
                                                        <div className="gridarea__img">
                                                            <Link to="../course-details.html"><img src={grid8} alt="grid"/></Link>
                                                            <div className="gridarea__small__button">
                                                                <div className="grid__badge pink__color">Development</div>
                                                            </div>
                                                            <div className="gridarea__small__icon">
                                                                <Link to="#"><i className="icofont-heart-alt"></i></Link>
                                                            </div>
                            
                                                        </div>
                                                        <div className="gridarea__content">
                                                            <div className="gridarea__list">
                                                                <ul>
                                                                    <li>
                                                                        <i className="icofont-book-alt"></i> 25 Lesson
                                                                    </li>
                                                                    <li>
                                                                        <i className="icofont-clock-time"></i> 1 hr 40 min
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                            <div className="gridarea__heading">
                                                                <h3><Link to="../course-details.html">Minws course to under stand
                                                                    about solution</Link></h3>
                                                            </div>
                                                            <div className="gridarea__price">
                                                                $40.00 <del>/ $67.00</del>
                                                                <span> <del className="del__2">Free</del></span>
                            
                                                            </div>
                                                            <div className="gridarea__bottom">
                            
                                                                <Link to="instructor-details.html">
                                                                    <div className="gridarea__small__img">
                                                                        <img src={grids3} alt="grid"/>
                                                                        <div className="gridarea__small__content">
                                                                            <h6>Micle Jhon</h6>
                                                                        </div>
                                                                    </div>
                                                                </Link>
                            
                                                                <div className="gridarea__star">
                                                                    <i className="icofont-star"></i>
                                                                    <i className="icofont-star"></i>
                                                                    <i className="icofont-star"></i>
                                                                    <i className="icofont-star"></i>
                                                                    <i className="icofont-star"></i>
                                                                    <span>(44)</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                
                                        <div className="tab-pane fade" id="projects__two" role="tabpanel" aria-labelledby="projects__two">
                
                                            <div className="row">
                                                <div className="col-xl-4 col-lg-6 col-md-6 col-12">
                                                    <div className="gridarea__wraper">
                                                        <div className="gridarea__img">
                                                            <Link to="../course-details.html"><img src={grid1} alt="grid"/></Link>
                                                            <div className="gridarea__small__button">
                                                                <div className="grid__badge">Data &amp; Tech</div>
                                                            </div>
                                                            <div className="gridarea__small__icon">
                                                                <Link to="#"><i className="icofont-heart-alt"></i></Link>
                                                            </div>
                            
                                                        </div>
                                                        <div className="gridarea__content">
                                                            <div className="gridarea__list">
                                                                <ul>
                                                                    <li>
                                                                        <i className="icofont-book-alt"></i> 23 Lesson
                                                                    </li>
                                                                    <li>
                                                                        <i className="icofont-clock-time"></i> 1 hr 30 min
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                            <div className="gridarea__heading">
                                                                <h3><Link to="../course-details.html">Foundation course to under stand
                                                                    about softwere</Link></h3>
                                                            </div>
                                                            <div className="gridarea__price">
                                                                $32.00 <del>/ $67.00</del>
                                                                <span> <del className="del__2">Free</del></span>
                            
                                                            </div>
                                                            <div className="gridarea__bottom">
                            
                                                                <Link to="instructor-details.html">
                                                                    <div className="gridarea__small__img">
                                                                        <img src={grids1} alt="grid"/>
                                                                        <div className="gridarea__small__content">
                                                                            <h6>Micle Jhon</h6>
                                                                        </div>
                                                                    </div>
                                                                </Link>
                            
                                                                <div className="gridarea__star">
                                                                    <i className="icofont-star"></i>
                                                                    <i className="icofont-star"></i>
                                                                    <i className="icofont-star"></i>
                                                                    <i className="icofont-star"></i>
                                                                    <i className="icofont-star"></i>
                                                                    <span>(44)</span>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="grid__course__status populerarea__button">
                                                            <div className="progress">
                                                                <div className="progress-bar" role="progressbar" aria-valuenow="80"
                                                                aria-valuemin="0" aria-valuemax="100" style={{width:"80%"}}>
                                                                  80% Complete
                                                                </div>
                                                              </div>
                                                        </div>

                                                    </div>
                                                </div>
                                                <div className="col-xl-4 col-lg-6 col-md-6 col-12">
                                                    <div className="gridarea__wraper">
                                                        <div className="gridarea__img">
                                                            <img src={grid2} alt="grid"/>
                                                            <div className="gridarea__small__button">
                                                                <div className="grid__badge blue__color">Mechanical</div>
                                                            </div>
                                                            <div className="gridarea__small__icon">
                                                                <Link to="#"><i className="icofont-heart-alt"></i></Link>
                                                            </div>
                            
                                                        </div>
                                                        <div className="gridarea__content">
                                                            <div className="gridarea__list">
                                                                <ul>
                                                                    <li>
                                                                        <i className="icofont-book-alt"></i> 29 Lesson
                                                                    </li>
                                                                    <li>
                                                                        <i className="icofont-clock-time"></i> 2 hr 10 min
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                            <div className="gridarea__heading">
                                                                <h3><Link to="#">Nidnies course to under stand
                                                                    about softwere</Link></h3>
                                                            </div>
                                                            <div className="gridarea__price green__color">
                                                                $32.00<del>/$67.00</del>
                                                                <span>.Free</span>
                            
                                                            </div>
                                                            <div className="gridarea__bottom">
                                                                <Link to="instructor-details.html">
                                                                    <div className="gridarea__small__img">
                                                                        <img src={grids2} alt="grid"/>
                                                                        <div className="gridarea__small__content">
                                                                            <h6>Rinis Jhon</h6>
                                                                        </div>
                                                                    </div>
                                                                </Link>
                                                                <div className="gridarea__star">
                                                                    <i className="icofont-star"></i>
                                                                    <i className="icofont-star"></i>
                                                                    <i className="icofont-star"></i>
                                                                    <i className="icofont-star"></i>
                                                                    <i className="icofont-star"></i>
                                                                    <span>(44)</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="grid__course__status populerarea__button">
                                                            <div className="progress">
                                                                <div className="progress-bar" role="progressbar" aria-valuenow="70"
                                                                aria-valuemin="0" aria-valuemax="100" style={{width:"70%"}}>
                                                                  70% Complete
                                                                </div>
                                                              </div>
                                                        </div>
                                                    </div>
                                                </div>
                                              
                                            </div>
                
                                        </div>
                
                                        <div className="tab-pane fade" id="projects__three" role="tabpanel" aria-labelledby="projects__three">
                                            <div className="row">
                                                <div className="col-xl-4 col-lg-6 col-md-6 col-12">
                                                    <div className="gridarea__wraper">
                                                        <div className="gridarea__img">
                                                            <Link to="../course-details.html"><img src={grid1} alt="grid"/></Link>
                                                            <div className="gridarea__small__button">
                                                                <div className="grid__badge">Data &amp; Tech</div>
                                                            </div>
                                                            <div className="gridarea__small__icon">
                                                                <Link to="#"><i className="icofont-heart-alt"></i></Link>
                                                            </div>
                            
                                                        </div>
                                                        <div className="gridarea__content">
                                                            <div className="gridarea__list">
                                                                <ul>
                                                                    <li>
                                                                        <i className="icofont-book-alt"></i> 23 Lesson
                                                                    </li>
                                                                    <li>
                                                                        <i className="icofont-clock-time"></i> 1 hr 30 min
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                            <div className="gridarea__heading">
                                                                <h3><Link to="../course-details.html">Foundation course to under stand
                                                                    about softwere</Link></h3>
                                                            </div>
                                                            <div className="gridarea__price">
                                                                $32.00 <del>/ $67.00</del>
                                                                <span> <del className="del__2">Free</del></span>
                            
                                                            </div>
                                                            <div className="gridarea__bottom">
                            
                                                                <Link to="instructor-details.html">
                                                                    <div className="gridarea__small__img">
                                                                        <img src={grids1} alt="grid"/>
                                                                        <div className="gridarea__small__content">
                                                                            <h6>Micle Jhon</h6>
                                                                        </div>
                                                                    </div>
                                                                </Link>
                            
                                                                <div className="gridarea__star">
                                                                    <i className="icofont-star"></i>
                                                                    <i className="icofont-star"></i>
                                                                    <i className="icofont-star"></i>
                                                                    <i className="icofont-star"></i>
                                                                    <i className="icofont-star"></i>
                                                                    <span>(44)</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="grid__course__status populerarea__button">
                                                            <div className="progress">
                                                                <div className="progress-bar" role="progressbar" aria-valuenow="100"
                                                                aria-valuemin="0" aria-valuemax="100" style={{width:"100%"}}>
                                                                  100% Complete
                                                                </div>
                                                              </div>
                                                              
                                                            <Link className="default__button" to="#">Download Certificate</Link>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-xl-4 col-lg-6 col-md-6 col-12">
                                                    <div className="gridarea__wraper">
                                                        <div className="gridarea__img">
                                                            <img src={grid2} alt="grid"/>
                                                            <div className="gridarea__small__button">
                                                                <div className="grid__badge blue__color">Mechanical</div>
                                                            </div>
                                                            <div className="gridarea__small__icon">
                                                                <Link to="#"><i className="icofont-heart-alt"></i></Link>
                                                            </div>
                            
                                                        </div>
                                                        <div className="gridarea__content">
                                                            <div className="gridarea__list">
                                                                <ul>
                                                                    <li>
                                                                        <i className="icofont-book-alt"></i> 29 Lesson
                                                                    </li>
                                                                    <li>
                                                                        <i className="icofont-clock-time"></i> 2 hr 10 min
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                            <div className="gridarea__heading">
                                                                <h3><Link to="#">Nidnies course to under stand
                                                                    about softwere</Link></h3>
                                                            </div>
                                                            <div className="gridarea__price green__color">
                                                                $32.00<del>/$67.00</del>
                                                                <span>.Free</span>
                            
                                                            </div>
                                                            <div className="gridarea__bottom">
                                                                <Link to="instructor-details.html">
                                                                    <div className="gridarea__small__img">
                                                                        <img src={grids2} alt="grid"/>
                                                                        <div className="gridarea__small__content">
                                                                            <h6>Rinis Jhon</h6>
                                                                        </div>
                                                                    </div>
                                                                </Link>
                                                                <div className="gridarea__star">
                                                                    <i className="icofont-star"></i>
                                                                    <i className="icofont-star"></i>
                                                                    <i className="icofont-star"></i>
                                                                    <i className="icofont-star"></i>
                                                                    <i className="icofont-star"></i>
                                                                    <span>(44)</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="grid__course__status populerarea__button">
                                                            <div className="progress">
                                                                <div className="progress-bar" role="progressbar" aria-valuenow="100"
                                                                aria-valuemin="0" aria-valuemax="100" style={{width:"100%"}}>
                                                                  100% Complete
                                                                </div>
                                                              </div>
                                                              
                                                            <Link className="default__button" to="#">Download Certificate</Link>
                                                        </div>
                                                    </div>
                                                </div>

                                                
                                                <div className="col-xl-4 col-lg-6 col-md-6 col-12">
                                                    <div className="gridarea__wraper">
                                                        <div className="gridarea__img">
                                                            <img src={grid3} alt="grid"/>
                                                            <div className="gridarea__small__button">
                                                                <div className="grid__badge blue__color">Mechanical</div>
                                                            </div>
                                                            <div className="gridarea__small__icon">
                                                                <Link to="#"><i className="icofont-heart-alt"></i></Link>
                                                            </div>
                            
                                                        </div>
                                                        <div className="gridarea__content">
                                                            <div className="gridarea__list">
                                                                <ul>
                                                                    <li>
                                                                        <i className="icofont-book-alt"></i> 29 Lesson
                                                                    </li>
                                                                    <li>
                                                                        <i className="icofont-clock-time"></i> 2 hr 10 min
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                            <div className="gridarea__heading">
                                                                <h3><Link to="#">Nidnies course to under stand
                                                                    about softwere</Link></h3>
                                                            </div>
                                                            <div className="gridarea__price green__color">
                                                                $32.00<del>/$67.00</del>
                                                                <span>.Free</span>
                            
                                                            </div>
                                                            <div className="gridarea__bottom">
                                                                <Link to="instructor-details.html">
                                                                    <div className="gridarea__small__img">
                                                                        <img src={grids2} alt="grid"/>
                                                                        <div className="gridarea__small__content">
                                                                            <h6>Rinis Jhon</h6>
                                                                        </div>
                                                                    </div>
                                                                </Link>
                                                                <div className="gridarea__star">
                                                                    <i className="icofont-star"></i>
                                                                    <i className="icofont-star"></i>
                                                                    <i className="icofont-star"></i>
                                                                    <i className="icofont-star"></i>
                                                                    <i className="icofont-star"></i>
                                                                    <span>(44)</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="grid__course__status populerarea__button">
                                                            <div className="progress">
                                                                <div className="progress-bar" role="progressbar" aria-valuenow="100"
                                                                aria-valuemin="0" aria-valuemax="100" style={{width:"100%"}}>
                                                                  100% Complete
                                                                </div>
                                                              </div>
                                                              
                                                            <Link className="default__button" to="#">Download Certificate</Link>
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
  )
}

export default Ecourses
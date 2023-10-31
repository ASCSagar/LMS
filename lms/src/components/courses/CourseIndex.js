import React from 'react'
import { Link } from 'react-router-dom'

const CourseIndex = () => {
  return (
    <>
      <li class="mega__menu position-static">
                        <Link
                          class="headerarea__has__dropdown"
                          to="course.html"
                        >
                          Courses<i class="icofont-rounded-down"></i>{" "}
                        </Link>
                        <div class="headerarea__submenu mega__menu__wrapper">
                          <div class="row">
                            <div class="col-3 mega__menu__single__wrap">
                              <h4 class="mega__menu__title">
                                <Link to="#">Get Started 1 </Link>
                              </h4>
                              <ul class="mega__menu__item">
                                <li>
                                  <Link to="course.html">
                                    Grid{" "}
                                    <span class="mega__menu__label">
                                      All Courses
                                    </span>
                                  </Link>
                                </li>
                                <li>
                                  <Link to="course-dark.html">
                                    Course Grid (Dark)
                                  </Link>
                                </li>
                                <li>
                                  <Link to="course-grid.html">Course Grid</Link>
                                </li>
                                <li>
                                  <Link to="course-grid-dark.html">
                                    Course Grid (Dark)
                                  </Link>
                                </li>
                                <li>
                                  <Link to="course-list.html">Course List</Link>
                                </li>
                                <li>
                                  <Link to="course-list-dark.html">
                                    Course List (Dark)
                                  </Link>
                                </li>
                              </ul>
                            </div>
                            <div class="col-3 mega__menu__single__wrap">
                              <h4 class="mega__menu__title">
                                <Link to="#">Get Started 2 </Link>
                              </h4>
                              <ul class="mega__menu__item">
                                <li>
                                  <Link to="course-details.html">
                                    Course Details
                                  </Link>
                                </li>
                                <li>
                                  <Link to="course-details-dark.html">
                                    Course Details (Dark)
                                  </Link>
                                </li>
                                <li>
                                  <Link to="course-details-2.html">
                                    Course Details 2
                                  </Link>
                                </li>
                                <li>
                                  <Link to="course-details-2-dark.html">
                                    Details 2 (Dark)
                                  </Link>
                                </li>
                                <li>
                                  <Link to="course-details-3.html">
                                    Course Details 3
                                  </Link>
                                </li>
                                <li>
                                  <Link to="course-details-3.html">
                                    Details 3 (Dark)
                                  </Link>
                                </li>
                              </ul>
                            </div>
                            <div class="col-3 mega__menu__single__wrap">
                              <h4 class="mega__menu__title">
                                <Link to="#">Get Started 3</Link>
                              </h4>
                              <ul class="mega__menu__item">
                                <li>
                                  <Link to="dashboard/become-an-instructor.html">
                                    Become An Instructor
                                  </Link>
                                </li>
                                <li>
                                  <Link to="dashboard/create-course.html">
                                    Create Course{" "}
                                    <span class="mega__menu__label">
                                      Career
                                    </span>
                                  </Link>
                                </li>
                                <li>
                                  <Link to="instructor.html">Instructor</Link>
                                </li>
                                <li>
                                  <Link to="instructor-dark.html">
                                    Instructor (Dark)
                                  </Link>
                                </li>
                                <li>
                                  <Link to="instructor-details.html">
                                    Instructor Details
                                  </Link>
                                </li>
                                <li>
                                  <Link to="lesson.html">
                                    Course Lesson
                                    <span class="mega__menu__label new">
                                      New
                                    </span>
                                  </Link>
                                </li>
                              </ul>
                            </div>

                            <div class="col-3 mega__menu__single__wrap">
                              <div class="mega__menu__img">
                                <Link to="#">
                                  <img
                                    src="img/mega/mega_menu_1.png"
                                    alt="Mega Menu"
                                  />
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
    </>
  )
}

export default CourseIndex

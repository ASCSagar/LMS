import React from 'react'
import { Link } from 'react-router-dom'

const DemoIndex = () => {
  return (
    <>
      <li class="mega__menu position-static">
                        <Link class="headerarea__has__dropdown" to="index.html">
                          Demos<i class="icofont-rounded-down"></i>
                        </Link>
                        <div class="headerarea__submenu mega__menu__wrapper mega__menu__grid__5">
                          <ul
                            class="nav  tab__button__wrap"
                            id="myTab2"
                            role="tablist"
                          >
                            <li class="nav-item" role="presentation">
                              <button
                                class="single__tab__link active"
                                data-bs-toggle="tab"
                                data-bs-target="#projects__light"
                                type="button"
                              >
                                Light
                              </button>
                            </li>
                            <li class="nav-item" role="presentation">
                              <button
                                class="single__tab__link"
                                data-bs-toggle="tab"
                                data-bs-target="#projects__dark"
                                type="button"
                              >
                                Dark
                              </button>
                            </li>
                          </ul>

                          <div
                            class="tab-content tab__content__wrapper"
                            id="myTabContent2"
                          >
                            <div
                              class="tab-pane fade active show"
                              id="projects__light"
                              role="tabpanel"
                              aria-labelledby="projects__light"
                            >
                              <div class="row">
                                <div class="col-3 mega__menu__single__wrap">
                                  <div class="mega__menu__thumb">
                                    <Link to="index.html">
                                      <img
                                        src="img/mega/home-1.png"
                                        alt="Mega Menu"
                                      />
                                      <span class="mega__menu__thumb__title">
                                        Home (Default)
                                      </span>
                                    </Link>
                                  </div>
                                </div>

                                <div class="col-3 mega__menu__single__wrap">
                                  <div class="mega__menu__thumb">
                                    <Link to="home-2.html">
                                      <img
                                        src="img/mega/home-2.png"
                                        alt="Mega Menu"
                                      />
                                      <span class="mega__menu__thumb__title">
                                        Home (Elegant)
                                      </span>
                                    </Link>
                                  </div>
                                </div>

                                <div class="col-3 mega__menu__single__wrap">
                                  <div class="mega__menu__thumb">
                                    <Link to="home-3.html">
                                      <img
                                        src="img/mega/home-3.png"
                                        alt="Mega Menu"
                                      />
                                      <span class="mega__menu__thumb__title">
                                        Home (Classic)
                                      </span>
                                    </Link>
                                  </div>
                                </div>

                                <div class="col-3 mega__menu__single__wrap">
                                  <div class="mega__menu__thumb">
                                    <Link to="home-4.html">
                                      <img
                                        src="img/mega/home-4.png"
                                        alt="Mega Menu"
                                      />
                                      <span class="mega__menu__thumb__title">
                                        Home (Classic LMS)
                                      </span>
                                    </Link>
                                  </div>
                                </div>

                                <div class="col-3 mega__menu__single__wrap">
                                  <div class="mega__menu__thumb">
                                    <Link to="home-5.html">
                                      <img
                                        src="img/mega/home-5.png"
                                        alt="Mega Menu"
                                      />
                                      <span class="mega__menu__thumb__title">
                                        Home (Online Course)
                                      </span>
                                    </Link>
                                  </div>
                                </div>

                                <div class="col-3 mega__menu__single__wrap">
                                  <div class="mega__menu__thumb">
                                    <Link to="home-6.html">
                                      <img
                                        src="img/mega/home-6.png"
                                        alt="Mega Menu"
                                      />
                                      <span class="mega__menu__thumb__title">
                                        Home (Marketplace)
                                      </span>
                                    </Link>
                                    <span class="mega__menu__thumb__label">
                                      New
                                    </span>
                                  </div>
                                </div>

                                <div class="col-3 mega__menu__single__wrap">
                                  <div class="mega__menu__thumb">
                                    <Link to="home-7.html">
                                      <img
                                        src="img/mega/home-7.png"
                                        alt="Mega Menu"
                                      />
                                      <span class="mega__menu__thumb__title">
                                        Home (University)
                                      </span>
                                    </Link>
                                    <span class="mega__menu__thumb__label">
                                      New
                                    </span>
                                  </div>
                                </div>

                                <div class="col-3 mega__menu__single__wrap">
                                  <div class="mega__menu__thumb">
                                    <Link to="home-8.html">
                                      <img
                                        src="img/mega/home-8.png"
                                        alt="Mega Menu"
                                      />
                                      <span class="mega__menu__thumb__title">
                                        Home (eCommerce)
                                      </span>
                                    </Link>
                                    <span class="mega__menu__thumb__label">
                                      New
                                    </span>
                                  </div>
                                </div>

                                <div class="col-3 mega__menu__single__wrap">
                                  <div class="mega__menu__thumb">
                                    <Link to="home-9.html">
                                      <img
                                        src="img/mega/home-9.png"
                                        alt="Mega Menu"
                                      />
                                      <span class="mega__menu__thumb__title">
                                        Home (Kindergarten)
                                      </span>
                                    </Link>
                                    <span class="mega__menu__thumb__label">
                                      New
                                    </span>
                                  </div>
                                </div>

                                <div class="col-3 mega__menu__single__wrap">
                                  <div class="mega__menu__thumb">
                                    <Link to="home-10.html">
                                      <img
                                        src="img/mega/home-10.png"
                                        alt="Mega Menu"
                                      />
                                      <span class="mega__menu__thumb__title">
                                        Home (Machine Learning)
                                      </span>
                                    </Link>
                                    <span class="mega__menu__thumb__label">
                                      New
                                    </span>
                                  </div>
                                </div>

                                <div class="col-3 mega__menu__single__wrap">
                                  <div class="mega__menu__thumb">
                                    <Link to="home-11.html">
                                      <img
                                        src="img/mega/home-11.png"
                                        alt="Mega Menu"
                                      />
                                      <span class="mega__menu__thumb__title">
                                        Home (Single Course)
                                      </span>
                                    </Link>
                                    <span class="mega__menu__thumb__label">
                                      New
                                    </span>
                                  </div>
                                </div>

                                <div class="col-3 mega__menu__single__wrap">
                                  <div class="mega__menu__thumb">
                                    <Link to="#">
                                      <img
                                        src="img/mega/coming.png"
                                        alt="Mega Menu 1"
                                      />
                                      <span class="mega__menu__thumb__title">
                                        Layout Coming Soon 1
                                      </span>
                                    </Link>
                                  </div>
                                </div>

                                <div class="col-3 mega__menu__single__wrap">
                                  <div class="mega__menu__thumb">
                                    <Link to="#">
                                      <img
                                        src="img/mega/coming.png"
                                        alt="Mega Menu 2"
                                      />
                                      <span class="mega__menu__thumb__title">
                                        Layout Coming Soon 2
                                      </span>
                                    </Link>
                                  </div>
                                </div>

                                <div class="col-3 mega__menu__single__wrap">
                                  <div class="mega__menu__thumb">
                                    <Link to="#">
                                      <img
                                        src="img/mega/coming.png"
                                        alt="Mega Menu 3"
                                      />
                                      <span class="mega__menu__thumb__title">
                                        Layout Coming Soon 3
                                      </span>
                                    </Link>
                                  </div>
                                </div>

                                <div class="col-3 mega__menu__single__wrap">
                                  <div class="mega__menu__thumb">
                                    <Link to="#">
                                      <img
                                        src="img/mega/coming.png"
                                        alt="Mega Menu 4"
                                      />
                                      <span class="mega__menu__thumb__title">
                                        Layout Coming Soon 4
                                      </span>
                                    </Link>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div
                              class="tab-pane fade"
                              id="projects__dark"
                              role="tabpanel"
                              aria-labelledby="projects__dark"
                            >
                              <div class="row">
                                <div class="col-3 mega__menu__single__wrap">
                                  <div class="mega__menu__thumb">
                                    <Link to="index-dark.html">
                                      <img
                                        src="img/mega/home-1-dark.png"
                                        alt="Mega Menu"
                                      />
                                      <span class="mega__menu__thumb__title">
                                        Home (Default)
                                      </span>
                                    </Link>
                                  </div>
                                </div>

                                <div class="col-3 mega__menu__single__wrap">
                                  <div class="mega__menu__thumb">
                                    <Link to="home-2-dark.html">
                                      <img
                                        src="img/mega/home-2-dark.png"
                                        alt="Mega Menu"
                                      />
                                      <span class="mega__menu__thumb__title">
                                        Home (Elegant)
                                      </span>
                                    </Link>
                                  </div>
                                </div>

                                <div class="col-3 mega__menu__single__wrap">
                                  <div class="mega__menu__thumb">
                                    <Link to="home-3-dark.html">
                                      <img
                                        src="img/mega/home-3-dark.png"
                                        alt="Mega Menu"
                                      />
                                      <span class="mega__menu__thumb__title">
                                        Home (Classic)
                                      </span>
                                    </Link>
                                  </div>
                                </div>

                                <div class="col-3 mega__menu__single__wrap">
                                  <div class="mega__menu__thumb">
                                    <Link to="home-4-dark.html">
                                      <img
                                        src="img/mega/home-4-dark.png"
                                        alt="Mega Menu"
                                      />
                                      <span class="mega__menu__thumb__title">
                                        Home (Classic LMS)
                                      </span>
                                    </Link>
                                  </div>
                                </div>

                                <div class="col-3 mega__menu__single__wrap">
                                  <div class="mega__menu__thumb">
                                    <Link to="home-5-dark.html">
                                      <img
                                        src="img/mega/home-5-dark.png"
                                        alt="Mega Menu"
                                      />
                                      <span class="mega__menu__thumb__title">
                                        Home (Online Course)
                                      </span>
                                    </Link>
                                  </div>
                                </div>

                                <div class="col-3 mega__menu__single__wrap">
                                  <div class="mega__menu__thumb">
                                    <Link to="home-6-dark.html">
                                      <img
                                        src="img/mega/home-6-dark.png"
                                        alt="Mega Menu"
                                      />
                                      <span class="mega__menu__thumb__title">
                                        Home (Marketplace)
                                      </span>
                                    </Link>
                                    <span class="mega__menu__thumb__label">
                                      New
                                    </span>
                                  </div>
                                </div>

                                <div class="col-3 mega__menu__single__wrap">
                                  <div class="mega__menu__thumb">
                                    <Link to="home-7-dark.html">
                                      <img
                                        src="img/mega/home-7-dark.png"
                                        alt="Mega Menu"
                                      />
                                      <span class="mega__menu__thumb__title">
                                        Home (University)
                                      </span>
                                    </Link>
                                    <span class="mega__menu__thumb__label">
                                      New
                                    </span>
                                  </div>
                                </div>

                                <div class="col-3 mega__menu__single__wrap">
                                  <div class="mega__menu__thumb">
                                    <Link to="home-8-dark.html">
                                      <img
                                        src="img/mega/home-8-dark.png"
                                        alt="Mega Menu"
                                      />
                                      <span class="mega__menu__thumb__title">
                                        Home (eCommerce)
                                      </span>
                                    </Link>
                                    <span class="mega__menu__thumb__label">
                                      New
                                    </span>
                                  </div>
                                </div>

                                <div class="col-3 mega__menu__single__wrap">
                                  <div class="mega__menu__thumb">
                                    <Link to="home-9-dark.html">
                                      <img
                                        src="img/mega/home-9-dark.png"
                                        alt="Mega Menu"
                                      />
                                      <span class="mega__menu__thumb__title">
                                        Home (Kindergarten)
                                      </span>
                                    </Link>
                                    <span class="mega__menu__thumb__label">
                                      New
                                    </span>
                                  </div>
                                </div>

                                <div class="col-3 mega__menu__single__wrap">
                                  <div class="mega__menu__thumb">
                                    <Link to="home-10-dark.html">
                                      <img
                                        src="img/mega/home-10-dark.png"
                                        alt="Mega Menu"
                                      />
                                      <span class="mega__menu__thumb__title">
                                        Home (Machine Learning)
                                      </span>
                                    </Link>
                                    <span class="mega__menu__thumb__label">
                                      New
                                    </span>
                                  </div>
                                </div>

                                <div class="col-3 mega__menu__single__wrap">
                                  <div class="mega__menu__thumb">
                                    <Link to="home-11-dark.html">
                                      <img
                                        src="img/mega/home-11-dark.png"
                                        alt="Mega Menu"
                                      />
                                      <span class="mega__menu__thumb__title">
                                        Home (Single Course)
                                      </span>
                                    </Link>
                                    <span class="mega__menu__thumb__label">
                                      New
                                    </span>
                                  </div>
                                </div>

                                <div class="col-3 mega__menu__single__wrap">
                                  <div class="mega__menu__thumb">
                                    <Link to="#">
                                      <img
                                        src="img/mega/coming-dark.png"
                                        alt="Mega Menu 1"
                                      />
                                      <span class="mega__menu__thumb__title">
                                        Layout Coming Soon 1
                                      </span>
                                    </Link>
                                  </div>
                                </div>

                                <div class="col-3 mega__menu__single__wrap">
                                  <div class="mega__menu__thumb">
                                    <Link to="#">
                                      <img
                                        src="img/mega/coming-dark.png"
                                        alt="Mega Menu 2"
                                      />
                                      <span class="mega__menu__thumb__title">
                                        Layout Coming Soon 2
                                      </span>
                                    </Link>
                                  </div>
                                </div>

                                <div class="col-3 mega__menu__single__wrap">
                                  <div class="mega__menu__thumb">
                                    <Link to="#">
                                      <img
                                        src="img/mega/coming-dark.png"
                                        alt="Mega Menu 3"
                                      />
                                      <span class="mega__menu__thumb__title">
                                        Layout Coming Soon 3
                                      </span>
                                    </Link>
                                  </div>
                                </div>

                                <div class="col-3 mega__menu__single__wrap">
                                  <div class="mega__menu__thumb">
                                    <Link to="#">
                                      <img
                                        src="img/mega/coming-dark.png"
                                        alt="Mega Menu 4"
                                      />
                                      <span class="mega__menu__thumb__title">
                                        Layout Coming Soon 4
                                      </span>
                                    </Link>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
    </>
  )
}

export default DemoIndex

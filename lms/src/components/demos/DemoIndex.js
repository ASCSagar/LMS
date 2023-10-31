import React from "react";
import { Link } from "react-router-dom";
import megahome1 from "../../img/mega/home-1.png";
import dmegahome1 from "../../img/mega/home-1-dark.png";
import megahome2 from "../../img/mega/home-2.png";
import dmegahome2 from "../../img/mega/home-2-dark.png";
import megahome3 from "../../img/mega/home-3.png";
import dmegahome3 from "../../img/mega/home-3-dark.png";
import megahome4 from "../../img/mega/home-4.png";
import dmegahome4 from "../../img/mega/home-4-dark.png";
import megahome5 from "../../img/mega/home-5.png";
import dmegahome5 from "../../img/mega/home-5-dark.png";
import megahome6 from "../../img/mega/home-6.png";
import dmegahome6 from "../../img/mega/home-6-dark.png";
import megahome7 from "../../img/mega/home-7.png";
import dmegahome7 from "../../img/mega/home-7-dark.png";
import megahome8 from "../../img/mega/home-8.png";
import dmegahome8 from "../../img/mega/home-8-dark.png";
import megahome9 from "../../img/mega/home-9.png";
import dmegahome9 from "../../img/mega/home-9-dark.png";
import megahome10 from "../../img/mega/home-10.png";
import dmegahome10 from "../../img/mega/home-10-dark.png";
import megahome11 from "../../img/mega/home-11.png";
import dmegahome11 from "../../img/mega/home-11-dark.png";
import coming1 from "../../img/mega/coming.png";
import coming2 from "../../img/mega/coming.png";
import coming3 from "../../img/mega/coming.png";
import coming4 from "../../img/mega/coming.png";
import dcoming1 from "../../img/mega/coming-dark.png";
import dcoming2 from "../../img/mega/coming-dark.png";
import dcoming3 from "../../img/mega/coming-dark.png";
import dcoming4 from "../../img/mega/coming-dark.png";

const DemoIndex = () => {
  return (
    <>
      <li class="mega__menu position-static">
        <Link class="headerarea__has__dropdown" to="index.html">
          Demos<i class="icofont-rounded-down"></i>
        </Link>
        <div class="headerarea__submenu mega__menu__wrapper mega__menu__grid__5">
          <ul class="nav  tab__button__wrap" id="myTab2" role="tablist">
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
          <div class="tab-content tab__content__wrapper" id="myTabContent2">
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
                      <img src={megahome1} alt="Mega Menu" />
                      <span class="mega__menu__thumb__title">
                        Home (Default)
                      </span>
                    </Link>
                  </div>
                </div>
                <div class="col-3 mega__menu__single__wrap">
                  <div class="mega__menu__thumb">
                    <Link to="home-2.html">
                      <img src={megahome2} alt="Mega Menu" />
                      <span class="mega__menu__thumb__title">
                        Home (Elegant)
                      </span>
                    </Link>
                  </div>
                </div>
                <div class="col-3 mega__menu__single__wrap">
                  <div class="mega__menu__thumb">
                    <Link to="home-3.html">
                      <img src={megahome3} alt="Mega Menu" />
                      <span class="mega__menu__thumb__title">
                        Home (Classic)
                      </span>
                    </Link>
                  </div>
                </div>
                <div class="col-3 mega__menu__single__wrap">
                  <div class="mega__menu__thumb">
                    <Link to="home-4.html">
                      <img src={megahome4} alt="Mega Menu" />
                      <span class="mega__menu__thumb__title">
                        Home (Classic LMS)
                      </span>
                    </Link>
                  </div>
                </div>
                <div class="col-3 mega__menu__single__wrap">
                  <div class="mega__menu__thumb">
                    <Link to="home-5.html">
                      <img src={megahome5} alt="Mega Menu" />
                      <span class="mega__menu__thumb__title">
                        Home (Online Course)
                      </span>
                    </Link>
                  </div>
                </div>
                <div class="col-3 mega__menu__single__wrap">
                  <div class="mega__menu__thumb">
                    <Link to="home-6.html">
                      <img src={megahome6} alt="Mega Menu" />
                      <span class="mega__menu__thumb__title">
                        Home (Marketplace)
                      </span>
                    </Link>
                    <span class="mega__menu__thumb__label">New</span>
                  </div>
                </div>
                <div class="col-3 mega__menu__single__wrap">
                  <div class="mega__menu__thumb">
                    <Link to="home-7.html">
                      <img src={megahome7} alt="Mega Menu" />
                      <span class="mega__menu__thumb__title">
                        Home (University)
                      </span>
                    </Link>
                    <span class="mega__menu__thumb__label">New</span>
                  </div>
                </div>
                <div class="col-3 mega__menu__single__wrap">
                  <div class="mega__menu__thumb">
                    <Link to="home-8.html">
                      <img src={megahome8} alt="Mega Menu" />
                      <span class="mega__menu__thumb__title">
                        Home (eCommerce)
                      </span>
                    </Link>
                    <span class="mega__menu__thumb__label">New</span>
                  </div>
                </div>
                <div class="col-3 mega__menu__single__wrap">
                  <div class="mega__menu__thumb">
                    <Link to="home-9.html">
                      <img src={megahome9} alt="Mega Menu" />
                      <span class="mega__menu__thumb__title">
                        Home (Kindergarten)
                      </span>
                    </Link>
                    <span class="mega__menu__thumb__label">New</span>
                  </div>
                </div>
                <div class="col-3 mega__menu__single__wrap">
                  <div class="mega__menu__thumb">
                    <Link to="home-10.html">
                      <img src={megahome10} alt="Mega Menu" />
                      <span class="mega__menu__thumb__title">
                        Home (Machine Learning)
                      </span>
                    </Link>
                    <span class="mega__menu__thumb__label">New</span>
                  </div>
                </div>
                <div class="col-3 mega__menu__single__wrap">
                  <div class="mega__menu__thumb">
                    <Link to="home-11.html">
                      <img src={megahome11} alt="Mega Menu" />
                      <span class="mega__menu__thumb__title">
                        Home (Single Course)
                      </span>
                    </Link>
                    <span class="mega__menu__thumb__label">New</span>
                  </div>
                </div>
                <div class="col-3 mega__menu__single__wrap">
                  <div class="mega__menu__thumb">
                    <Link to="#">
                      <img src={coming1} alt="Mega Menu 1" />
                      <span class="mega__menu__thumb__title">
                        Layout Coming Soon 1
                      </span>
                    </Link>
                  </div>
                </div>
                <div class="col-3 mega__menu__single__wrap">
                  <div class="mega__menu__thumb">
                    <Link to="#">
                      <img src={coming2} alt="Mega Menu 2" />
                      <span class="mega__menu__thumb__title">
                        Layout Coming Soon 2
                      </span>
                    </Link>
                  </div>
                </div>
                <div class="col-3 mega__menu__single__wrap">
                  <div class="mega__menu__thumb">
                    <Link to="#">
                      <img src={coming3} alt="Mega Menu 3" />
                      <span class="mega__menu__thumb__title">
                        Layout Coming Soon 3
                      </span>
                    </Link>
                  </div>
                </div>
                <div class="col-3 mega__menu__single__wrap">
                  <div class="mega__menu__thumb">
                    <Link to="#">
                      <img src={coming4} alt="Mega Menu 4" />
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
                      <img src={dmegahome1} alt="Mega Menu" />
                      <span class="mega__menu__thumb__title">
                        Home (Default)
                      </span>
                    </Link>
                  </div>
                </div>
                <div class="col-3 mega__menu__single__wrap">
                  <div class="mega__menu__thumb">
                    <Link to="home-2-dark.html">
                      <img src={dmegahome2} alt="Mega Menu" />
                      <span class="mega__menu__thumb__title">
                        Home (Elegant)
                      </span>
                    </Link>
                  </div>
                </div>
                <div class="col-3 mega__menu__single__wrap">
                  <div class="mega__menu__thumb">
                    <Link to="home-3-dark.html">
                      <img src={dmegahome3} alt="Mega Menu" />
                      <span class="mega__menu__thumb__title">
                        Home (Classic)
                      </span>
                    </Link>
                  </div>
                </div>
                <div class="col-3 mega__menu__single__wrap">
                  <div class="mega__menu__thumb">
                    <Link to="home-4-dark.html">
                      <img src={dmegahome4} alt="Mega Menu" />
                      <span class="mega__menu__thumb__title">
                        Home (Classic LMS)
                      </span>
                    </Link>
                  </div>
                </div>
                <div class="col-3 mega__menu__single__wrap">
                  <div class="mega__menu__thumb">
                    <Link to="home-5-dark.html">
                      <img src={dmegahome5} alt="Mega Menu" />
                      <span class="mega__menu__thumb__title">
                        Home (Online Course)
                      </span>
                    </Link>
                  </div>
                </div>
                <div class="col-3 mega__menu__single__wrap">
                  <div class="mega__menu__thumb">
                    <Link to="home-6-dark.html">
                      <img src={dmegahome6} alt="Mega Menu" />
                      <span class="mega__menu__thumb__title">
                        Home (Marketplace)
                      </span>
                    </Link>
                    <span class="mega__menu__thumb__label">New</span>
                  </div>
                </div>
                <div class="col-3 mega__menu__single__wrap">
                  <div class="mega__menu__thumb">
                    <Link to="home-7-dark.html">
                      <img src={dmegahome7} alt="Mega Menu" />
                      <span class="mega__menu__thumb__title">
                        Home (University)
                      </span>
                    </Link>
                    <span class="mega__menu__thumb__label">New</span>
                  </div>
                </div>
                <div class="col-3 mega__menu__single__wrap">
                  <div class="mega__menu__thumb">
                    <Link to="home-8-dark.html">
                      <img src={dmegahome8} alt="Mega Menu" />
                      <span class="mega__menu__thumb__title">
                        Home (eCommerce)
                      </span>
                    </Link>
                    <span class="mega__menu__thumb__label">New</span>
                  </div>
                </div>
                <div class="col-3 mega__menu__single__wrap">
                  <div class="mega__menu__thumb">
                    <Link to="home-9-dark.html">
                      <img src={dmegahome9} alt="Mega Menu" />
                      <span class="mega__menu__thumb__title">
                        Home (Kindergarten)
                      </span>
                    </Link>
                    <span class="mega__menu__thumb__label">New</span>
                  </div>
                </div>
                <div class="col-3 mega__menu__single__wrap">
                  <div class="mega__menu__thumb">
                    <Link to="home-10-dark.html">
                      <img src={dmegahome10} alt="Mega Menu" />
                      <span class="mega__menu__thumb__title">
                        Home (Machine Learning)
                      </span>
                    </Link>
                    <span class="mega__menu__thumb__label">New</span>
                  </div>
                </div>
                <div class="col-3 mega__menu__single__wrap">
                  <div class="mega__menu__thumb">
                    <Link to="home-11-dark.html">
                      <img src={dmegahome11} alt="Mega Menu" />
                      <span class="mega__menu__thumb__title">
                        Home (Single Course)
                      </span>
                    </Link>
                    <span class="mega__menu__thumb__label">New</span>
                  </div>
                </div>
                <div class="col-3 mega__menu__single__wrap">
                  <div class="mega__menu__thumb">
                    <Link to="#">
                      <img src={dcoming1} alt="Mega Menu 1" />
                      <span class="mega__menu__thumb__title">
                        Layout Coming Soon 1
                      </span>
                    </Link>
                  </div>
                </div>
                <div class="col-3 mega__menu__single__wrap">
                  <div class="mega__menu__thumb">
                    <Link to="#">
                      <img src={dcoming2} alt="Mega Menu 2" />
                      <span class="mega__menu__thumb__title">
                        Layout Coming Soon 2
                      </span>
                    </Link>
                  </div>
                </div>
                <div class="col-3 mega__menu__single__wrap">
                  <div class="mega__menu__thumb">
                    <Link to="#">
                      <img src={dcoming3} alt="Mega Menu 3" />
                      <span class="mega__menu__thumb__title">
                        Layout Coming Soon 3
                      </span>
                    </Link>
                  </div>
                </div>
                <div class="col-3 mega__menu__single__wrap">
                  <div class="mega__menu__thumb">
                    <Link to="#">
                      <img src={dcoming4} alt="Mega Menu 4" />
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
  );
};

export default DemoIndex;

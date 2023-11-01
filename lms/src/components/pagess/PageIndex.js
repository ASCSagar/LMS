import React from "react";
import { Link } from "react-router-dom";
import mega_2 from '../../img/mega/mega_menu_2.png';

const PageIndex = () => {
  return (
    <>
      <li class="mega__menu position-static">
        <Link class="headerarea__has__dropdown" to="about.html">
          Pages<i class="icofont-rounded-down"></i>
        </Link>
        <div class="headerarea__submenu mega__menu__wrapper">
          <div class="row">
            <div class="col-3 mega__menu__single__wrap">
              <h4 class="mega__menu__title">
                <Link to="#">Get Started 1 </Link>
              </h4>
              <ul class="mega__menu__item">
                <li>
                  <Link to="about.html">
                    About <span class="mega__menu__label">Sale Everything</span>
                  </Link>
                </li>
                <li>
                  <Link to="about-dark.html">
                    About (Dark)
                    <span class="mega__menu__label new">New</span>
                  </Link>
                </li>
                <li>
                  <Link to="blog.html">Blog</Link>
                </li>
                <li>
                  <Link to="blog-dark.html">Blog (Dark)</Link>
                </li>
                <li>
                  <Link to="blog-details.html">Blog Details</Link>
                </li>
                <li>
                  <Link to="blog-details-dark.html">Blog Details (Dark)</Link>
                </li>
              </ul>
            </div>
            <div class="col-3 mega__menu__single__wrap">
              <h4 class="mega__menu__title">
                <Link to="#">Get Started 2 </Link>
              </h4>
              <ul class="mega__menu__item">
                <li>
                  <Link to="error.html">Error 404</Link>
                </li>
                <li>
                  <Link to="error-dark.html">Error (Dark)</Link>
                </li>
                <li>
                  <Link to="event-details.html">Event Details</Link>
                </li>
                <li>
                  <Link to="zoom/zoom-meetings.html">
                    Zoom
                    <span class="mega__menu__label">Online Call</span>
                  </Link>
                </li>
                <li>
                  <Link to="zoom/zoom-meetings-dark.html">
                    Zoom Meeting (Dark)
                  </Link>
                </li>
                <li>
                  <Link to="zoom/zoom-meeting-details.html">
                    Zoom Meeting Details
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
                  <Link to="zoom/zoom-meeting-details-dark.html">
                    Meeting Details (Dark)
                  </Link>
                </li>
                <li>
                  <Link to="login.html">Login</Link>
                </li>
                <li>
                  <Link to="login-dark.html">Login (Dark)</Link>
                </li>
                <li>
                  <Link to="#">Maintenance</Link>
                </li>
                <li>
                  <Link to="#">Maintenance (Dark)</Link>
                </li>
                <li>
                  <Link to="#">Terms & Condition</Link>
                </li>
              </ul>
            </div>
            <div class="col-3 mega__menu__single__wrap">
              <h4 class="mega__menu__title">
                <Link to="#">Get Started 4</Link>
              </h4>
              <ul class="mega__menu__item">
                <li>
                  <Link to="#">Terms & Condition (Dark)</Link>
                </li>
                <li>
                  <Link to="#">Privacy Policy</Link>
                </li>
                <li>
                  <Link to="#">Privacy Policy (Dark)</Link>
                </li>
                <li>
                  <Link to="#">Success Stories</Link>
                </li>
                <li>
                  <Link to="#">Success Stories (Dark)</Link>
                </li>
                <li>
                  <Link to="#">Work Policy</Link>
                </li>
              </ul>
            </div>
            <div class="col-12 mega__menu__single__wrap sp_top_30">
              <div class="mega__menu__img">
                <Link to="#">
                  <img src={mega_2} alt="Mega Menu" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </li>
    </>
  );
};

export default PageIndex;

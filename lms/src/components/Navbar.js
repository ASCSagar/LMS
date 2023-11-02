import React from "react";
import { Link } from "react-router-dom";
import companyLogo from "../img/logo/logo_1.png";
import DashboardIndex from "./Dashboard/Index";

const Navbar = () => {
  return (
    <>
      <header>
        <div className="headerarea headerarea__3 header__sticky header__area">
          <div className="container desktop__menu__wrapper">
            <div className="row">
              <div className="col-xl-2 col-lg-2 col-md-6">
                <div className="headerarea__left">
                  <div className="headerarea__left__logo">
                    <Link to="/">
                      <img src={companyLogo} alt="logo" />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-xl-7 col-lg-7 main_menu_wrap">
                <div className="headerarea__main__menu">
                  <nav>
                    <ul>
                      <li className="mega__menu position-static">
                        <Link
                          className="headerarea__has__dropdown"
                          to="/courses"
                        >
                          Courses
                        </Link>
                      </li>
                      <DashboardIndex />
                    </ul>
                  </nav>
                </div>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-6">
                <div className="headerarea__right">
                  <div className="headerarea__login">
                    <Link to="/login">
                      <i className="icofont-user-alt-5"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;

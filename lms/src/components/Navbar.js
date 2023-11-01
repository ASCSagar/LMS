import React from "react";
import { Link } from "react-router-dom";
import companyLogo from "../img/logo/logo_1.png";
import cart1 from "../img/grid/cart1.jpg";
import cart2 from "../img/grid/cart2.jpg";
import cart3 from "../img/grid/cart3.jpg";
import DemoIndex from "./demos/DemoIndex";
import PageIndex from "./pagess/PageIndex";
import CourseIndex from "./courses/CourseIndex";
import DashboardIndex from "./dashboard/DashboardIndex";
import EcommerceIndex from "./eCommerce/EcommerceIndex";
import CartIndex from "./cart/CartIndex";
import LoginIndex from "./login/LoginIndex";

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
                    <Link to="index.html">
                      <img src={companyLogo} alt="logo" />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-xl-7 col-lg-7 main_menu_wrap">
                <div className="headerarea__main__menu">
                  <nav>
                    <ul>
                      <DemoIndex />
                      <PageIndex />
                      <CourseIndex />
                      <DashboardIndex />
                      <EcommerceIndex />
                    </ul>
                  </nav>
                </div>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-6">
                <div className="headerarea__right">
                  <CartIndex />
                  <LoginIndex />
                  <div className="headerarea__button">
                    <Link to="#">Get Start</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container-fluid mob_menu_wrapper">
            <div className="row align-items-center">
              <div className="col-6">
                <div className="mobile-logo">
                  <Link className="logo__dark" to="#">
                    <img src="img/logo/logo_1.png" alt="logo" />
                  </Link>
                </div>
              </div>
              <div className="col-6">
                <div className="header-right-wrap">
                  <div className="headerarea__right">
                    <div className="header__cart">
                      <Link to="#">
                        {" "}
                        <i className="icofont-cart-alt"></i>
                      </Link>
                      <div className="header__right__dropdown__wrapper">
                        <div className="header__right__dropdown__inner">
                          <div className="single__header__right__dropdown">
                            <div className="header__right__dropdown__img">
                              <Link to="#">
                                <img src={cart1} alt="photoo" />
                              </Link>
                            </div>
                            <div className="header__right__dropdown__content">
                              <Link to="shop-product.html">Web Directory</Link>
                              <p>
                                1 x <span className="price">$ 80.00</span>
                              </p>
                            </div>
                            <div className="header__right__dropdown__close">
                              <Link to="#">
                                <i className="icofont-close-line"></i>
                              </Link>
                            </div>
                          </div>
                          <div className="single__header__right__dropdown">
                            <div className="header__right__dropdown__img">
                              <Link to="#">
                                <img src={cart2} alt="photoo" />
                              </Link>
                            </div>
                            <div className="header__right__dropdown__content">
                              <Link to="shop-product.html">Design Minois</Link>
                              <p>
                                1 x <span className="price">$ 60.00</span>
                              </p>
                            </div>
                            <div className="header__right__dropdown__close">
                              <Link to="#">
                                <i className="icofont-close-line"></i>
                              </Link>
                            </div>
                          </div>
                          <div className="single__header__right__dropdown">
                            <div className="header__right__dropdown__img">
                              <Link to="#">
                                <img src={cart3} alt="photoo" />
                              </Link>
                            </div>
                            <div className="header__right__dropdown__content">
                              <Link to="shop-product.html">Crash Course</Link>
                              <p>
                                1 x <span className="price">$ 70.00</span>
                              </p>
                            </div>
                            <div className="header__right__dropdown__close">
                              <Link to="#">
                                <i className="icofont-close-line"></i>
                              </Link>
                            </div>
                          </div>
                        </div>
                        <p className="dropdown__price">
                          Total: <span>$1,100.00</span>
                        </p>
                        <div className="header__right__dropdown__button">
                          <Link to="#" className="white__color">
                            VIEW CART
                          </Link>
                          <Link to="#" className="blue__color">
                            CHECKOUT
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mobile-off-canvas">
                    <Link className="mobile-aside-button" to="#">
                      <i className="icofont-navigation-menu"></i>
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

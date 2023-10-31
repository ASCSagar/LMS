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
        <div class="headerarea headerarea__3 header__sticky header__area">
          <div class="container desktop__menu__wrapper">
            <div class="row">
              <div class="col-xl-2 col-lg-2 col-md-6">
                <div class="headerarea__left">
                  <div class="headerarea__left__logo">
                    <Link to="index.html">
                      <img src={companyLogo} alt="logo" />
                    </Link>
                  </div>
                </div>
              </div>
              <div class="col-xl-7 col-lg-7 main_menu_wrap">
                <div class="headerarea__main__menu">
                  <nav>
                    <ul>
                        <DemoIndex/>
                        <PageIndex/>
                        <CourseIndex/>
                        <DashboardIndex/>
                        <EcommerceIndex/>
                    </ul>
                  </nav>
                </div>
              </div>
              <div class="col-xl-3 col-lg-3 col-md-6">
                <div class="headerarea__right">
                  <CartIndex/>
                  <LoginIndex/>
                  <div class="headerarea__button">
                    <Link to="#">Get Start</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="container-fluid mob_menu_wrapper">
            <div class="row align-items-center">
              <div class="col-6">
                <div class="mobile-logo">
                  <Link class="logo__dark" to="#">
                    <img src="img/logo/logo_1.png" alt="logo" />
                  </Link>
                </div>
              </div>
              <div class="col-6">
                <div class="header-right-wrap">
                  <div class="headerarea__right">
                    <div class="header__cart">
                      <Link to="#">
                        {" "}
                        <i class="icofont-cart-alt"></i>
                      </Link>
                      <div class="header__right__dropdown__wrapper">
                        <div class="header__right__dropdown__inner">
                          <div class="single__header__right__dropdown">
                            <div class="header__right__dropdown__img">
                              <Link to="#">
                                <img src={cart1} alt="photoo" />
                              </Link>
                            </div>
                            <div class="header__right__dropdown__content">
                              <Link to="shop-product.html">Web Directory</Link>
                              <p>
                                1 x <span class="price">$ 80.00</span>
                              </p>
                            </div>
                            <div class="header__right__dropdown__close">
                              <Link to="#">
                                <i class="icofont-close-line"></i>
                              </Link>
                            </div>
                          </div>

                          <div class="single__header__right__dropdown">
                            <div class="header__right__dropdown__img">
                              <Link to="#">
                                <img src={cart2} alt="photoo" />
                              </Link>
                            </div>
                            <div class="header__right__dropdown__content">
                              <Link to="shop-product.html">Design Minois</Link>
                              <p>
                                1 x <span class="price">$ 60.00</span>
                              </p>
                            </div>
                            <div class="header__right__dropdown__close">
                              <Link to="#">
                                <i class="icofont-close-line"></i>
                              </Link>
                            </div>
                          </div>

                          <div class="single__header__right__dropdown">
                            <div class="header__right__dropdown__img">
                              <Link to="#">
                                <img src={cart3} alt="photoo" />
                              </Link>
                            </div>
                            <div class="header__right__dropdown__content">
                              <Link to="shop-product.html">Crash Course</Link>
                              <p>
                                1 x <span class="price">$ 70.00</span>
                              </p>
                            </div>
                            <div class="header__right__dropdown__close">
                              <Link to="#">
                                <i class="icofont-close-line"></i>
                              </Link>
                            </div>
                          </div>
                        </div>

                        <p class="dropdown__price">
                          Total: <span>$1,100.00</span>
                        </p>
                        <div class="header__right__dropdown__button">
                          <Link to="#" class="white__color">
                            VIEW CART
                          </Link>
                          <Link to="#" class="blue__color">
                            CHECKOUT
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="mobile-off-canvas">
                    <Link class="mobile-aside-button" to="#">
                      <i class="icofont-navigation-menu"></i>
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

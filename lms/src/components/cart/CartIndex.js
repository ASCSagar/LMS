import React from "react";
import { Link } from "react-router-dom";
import cart1 from "../../img/grid/cart1.jpg";
import cart2 from "../../img/grid/cart2.jpg";
import cart3 from "../../img/grid/cart3.jpg";

const CartIndex = () => {
  return (
    <>
      <div className="header__cart">
        <Link to="#">
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
            <Link to="ecommerce/cart.html" className="white__color">
              View Cart
            </Link>
            <Link to="ecommerce/checkout.html" className="blue__color">
              Checkout
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartIndex;

import React from 'react'
import { Link } from 'react-router-dom'

const CartIndex = () => {
  return (
    <>
      <div class="header__cart">
                    <Link to="#">
                      <i class="icofont-cart-alt"></i>
                    </Link>
                    <div class="header__right__dropdown__wrapper">
                      <div class="header__right__dropdown__inner">
                        <div class="single__header__right__dropdown">
                          <div class="header__right__dropdown__img">
                            <Link to="#">
                              <img src="img/grid/cart1.jpg" alt="photoo" />
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
                              <img src="img/grid/cart2.jpg" alt="photoo" />
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
                              <img src="img/grid/cart3.jpg" alt="photoo" />
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
                        <Link to="ecommerce/cart.html" class="white__color">
                          View Cart
                        </Link>
                        <Link to="ecommerce/checkout.html" class="blue__color">
                          Checkout
                        </Link>
                      </div>
                    </div>
                  </div>

    </>
  )
}

export default CartIndex

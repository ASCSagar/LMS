import React from 'react'
import { Link } from 'react-router-dom'

const EcommerceIndex = () => {
  return (
    <>
       <li>
                        <Link
                          class="headerarea__has__dropdown"
                          to="ecommerce/shop.html"
                        >
                          eCommerce
                          <i className="icofont-rounded-down" />
                        </Link>
                        <ul class="headerarea__submenu">
                          <li>
                            <Link to="ecommerce/shop.html">
                              Shop
                              <span class="mega__menu__label">
                                Online Store
                              </span>
                            </Link>
                          </li>
                          <li>
                            <Link to="ecommerce/product-details.html">
                              Product Details
                            </Link>
                          </li>
                          <li>
                            <Link to="ecommerce/cart.html">Cart</Link>
                          </li>
                          <li>
                            <Link to="ecommerce/checkout.html">Checkout</Link>
                          </li>
                          <li>
                            <Link to="ecommerce/wishlist.html">Wishlist</Link>
                          </li>
                        </ul>
                      </li>
    </>
  )
}

export default EcommerceIndex

import PropTypes from "prop-types";
import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import MetaTags from "react-meta-tags";
import { connect } from "react-redux";
import { BreadcrumbsItem } from "react-breadcrumbs-dynamic";
import { getDiscountPrice } from "../../helpers/product";
import LayoutOne from "../../layouts/LayoutOne";
import Breadcrumb from "../../wrappers/breadcrumb/Breadcrumb";

const Checkout = ({ location, cartItems, currency }) => {
  const { pathname } = location;
  let cartTotalPrice = 0;

  console.log(cartItems)

  return (
    <Fragment>
      <MetaTags>
        <title>NordicWay | Checkout</title>
        <meta
          name="description"
          content="Checkout page of flone react minimalist eCommerce template."
        />
      </MetaTags>
      <BreadcrumbsItem to={process.env.PUBLIC_URL + "/temp" + "/"}>Главная</BreadcrumbsItem>
      <BreadcrumbsItem to={process.env.PUBLIC_URL + "/temp" + pathname}>
        Оформление заказа
      </BreadcrumbsItem>
      <LayoutOne headerTop="visible">
        {/* breadcrumb */}
        <Breadcrumb />
        <div className="checkout-area pt-95 pb-100">
          <div className="container">
            {cartItems && cartItems.length >= 1 ? (
              <div className="row">
                <div className="col-lg-7">
                  <div className="billing-info-wrap">
                    <h3>Данные покупателя</h3>
                    <div className="row">
                      <div className="col-lg-6 col-md-6">
                        <div className="billing-info mb-20">
                          <label>Имя</label>
                          <input type="text" />
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6">
                        <div className="billing-info mb-20">
                          <label>Фамилия</label>
                          <input type="text" />
                        </div>
                      </div>
                      {/*<div className="col-lg-12">*/}
                      {/*  <div className="billing-info mb-20">*/}
                      {/*    <label>Company Name</label>*/}
                      {/*    <input type="text" />*/}
                      {/*  </div>*/}
                      {/*</div>*/}
                      <div className="col-lg-12">
                        <div className="billing-info mb-20">
                          <label>Город</label>
                          <input type="text" />
                        </div>
                        {/*<div className="billing-select mb-20">*/}
                        {/*  <label>Город</label>*/}
                        {/*  /!*<select>*!/*/}
                        {/*  /!*  <option>Select a country</option>*!/*/}
                        {/*  /!*  <option>Azerbaijan</option>*!/*/}
                        {/*  /!*  <option>Bahamas</option>*!/*/}
                        {/*  /!*  <option>Bahrain</option>*!/*/}
                        {/*  /!*  <option>Bangladesh</option>*!/*/}
                        {/*  /!*  <option>Barbados</option>*!/*/}
                        {/*  /!*</select>*!/*/}
                        {/*</div>*/}
                      </div>
                      <div className="col-lg-12">
                        <div className="billing-info mb-20">
                          <label>Адрес</label>
                          <input
                            className="mb-10"
                            placeholder="Улица, дом, квартира"
                            type="text"
                          />
                          <input
                            placeholder="Подъезд, этаж, домофон"
                            type="text"
                          />
                        </div>
                      </div>
                      {/*<div className="col-lg-12">*/}
                      {/*  <div className="billing-info mb-20">*/}
                      {/*    <label>Town / City</label>*/}
                      {/*    <input type="text" />*/}
                      {/*  </div>*/}
                      {/*</div>*/}
                      {/*<div className="col-lg-6 col-md-6">*/}
                      {/*  <div className="billing-info mb-20">*/}
                      {/*    <label>State / County</label>*/}
                      {/*    <input type="text" />*/}
                      {/*  </div>*/}
                      {/*</div>*/}
                      {/*<div className="col-lg-6 col-md-6">*/}
                      {/*  <div className="billing-info mb-20">*/}
                      {/*    <label>Postcode / ZIP</label>*/}
                      {/*    <input type="text" />*/}
                      {/*  </div>*/}
                      {/*</div>*/}
                      <div className="col-lg-6 col-md-6">
                        <div className="billing-info mb-20">
                          <label>Телефон</label>
                          <input type="text" />
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6">
                        <div className="billing-info mb-20">
                          <label>Email</label>
                          <input type="text" />
                        </div>
                      </div>
                    </div>

                    <div className="additional-info-wrap">
                      <h4>Дополнительная информация</h4>
                      <div className="additional-info">
                        <label>Примечания к заказу</label>
                        <textarea
                          placeholder="Здесь вы можете написать особые пожелания к заказу."
                          name="message"
                          defaultValue={""}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-5">
                  <div className="your-order-area">
                    <h3>Ваш заказ</h3>
                    <div className="your-order-wrap gray-bg-4">
                      <div className="your-order-product-info">
                        <div className="your-order-top">
                          <ul>
                            <li>Товар</li>
                            <li>Стоимость</li>
                          </ul>
                        </div>
                        <div className="your-order-middle">
                          <ul>
                            {cartItems.map((cartItem, key) => {
                              const discountedPrice = getDiscountPrice(
                                cartItem.price,
                                cartItem.discount
                              );
                              const finalProductPrice = (
                                cartItem.price * currency.currencyRate
                              ).toFixed(2);
                              const finalDiscountedPrice = (
                                discountedPrice * currency.currencyRate
                              ).toFixed(2);

                              discountedPrice != null
                                ? (cartTotalPrice +=
                                    finalDiscountedPrice * cartItem.quantity)
                                : (cartTotalPrice +=
                                    finalProductPrice * cartItem.quantity);
                              return (
                                <li key={key}>
                                  <span className="order-middle-left">
                                    {`${cartItem.name} (${cartItem.selectedProductSize}) X ${cartItem.quantity}`}
                                  </span>{" "}
                                  <span className="order-price">
                                    {discountedPrice !== null
                                      ? '₽' +
                                        (
                                          finalDiscountedPrice *
                                          cartItem.quantity
                                        ).toFixed(2)
                                      : '₽' +
                                        (
                                          finalProductPrice * cartItem.quantity
                                        ).toFixed(2)}
                                  </span>
                                </li>
                              );
                            })}
                          </ul>
                        </div>
                        {/*<div className="your-order-bottom">*/}
                        {/*  <ul>*/}
                        {/*    <li className="your-order-shipping">Shipping</li>*/}
                        {/*    <li>Free shipping</li>*/}
                        {/*  </ul>*/}
                        {/*</div>*/}
                        <div className="your-order-total">
                          <ul>
                            <li className="order-total">Итого</li>
                            <li>
                              {'₽' +
                                cartTotalPrice.toFixed(2)}
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="payment-method"></div>
                    </div>
                    <div className="place-order mt-25">
                      <button className="btn-hover">Разместить заказ</button>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="row">
                <div className="col-lg-12">
                  <div className="item-empty-area text-center">
                    <div className="item-empty-area__icon mb-30">
                      <i className="pe-7s-cash"></i>
                    </div>
                    <div className="item-empty-area__text">
                      Нечего оформлять <br />{" "}
                      <Link to={process.env.PUBLIC_URL + "/temp" + "/shop"}>
                        В магазин
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </LayoutOne>
    </Fragment>
  );
};

Checkout.propTypes = {
  cartItems: PropTypes.array,
  currency: PropTypes.object,
  location: PropTypes.object
};

const mapStateToProps = state => {
  return {
    cartItems: state.cartData,
    currency: state.currencyData
  };
};

export default connect(mapStateToProps)(Checkout);

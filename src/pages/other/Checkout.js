import PropTypes from "prop-types";
import React, {Fragment, useEffect, useState} from "react";
import { Link } from "react-router-dom";
import MetaTags from "react-meta-tags";
import { connect } from "react-redux";
import { BreadcrumbsItem } from "react-breadcrumbs-dynamic";
import { getDiscountPrice } from "../../helpers/product";
import LayoutOne from "../../layouts/LayoutOne";
import Breadcrumb from "../../wrappers/breadcrumb/Breadcrumb";
import {setOrder, setOrderData} from "../../redux/actions/goodsActions";
import Cookies from "js-cookie";

const Checkout = ({ location, cartItems, order_data, setOrderData, setOrder }) => {
  const { pathname } = location;
  // let cartTotalPrice = 0;

  const [cartItemsText, setCartItemsText] = useState('')
  const [cartTotalPrice, setCartTotalPrice] = useState(0)

  console.log(Cookies.get('csrftoken'))

  const get_cart_text = () => {
    return cartItems?.map(
      item => {
        setCartItemsText(cartItemsText => `${cartItemsText}\t-${item.name} (${item.selectedProductSize}) x ${item.quantity} - ₽${Number(item.price)*item.quantity}\n`)
        setCartTotalPrice(cartTotalPrice => cartTotalPrice + Number(item.price)*item.quantity)
      }
    )
  }

  useEffect(() => {
    if(cartItems) {
      get_cart_text()
    }
  }, [cartItems])

  useEffect(() => {
    if(cartItemsText || cartTotalPrice) {
      setOrderData('orders', `\n${cartItemsText} \n\tИтого: ₽${cartTotalPrice}\n`)
    }
  }, [cartItemsText, cartTotalPrice])

  console.log(cartItems)
  console.log(order_data)
  console.log('\n' + cartItemsText + '\n\tИтого: ₽' + cartTotalPrice + '\n')

  const setCartData = (e) => {
    console.log(e.target.name)
    console.log(e.target.value)
    setOrderData(e.target.name, e.target.value)
  }

  return (
    <Fragment>
      <MetaTags>
        <title>NordicWay | Checkout</title>
        <meta
          name="description"
          content="Checkout page"
        />
      </MetaTags>
      <BreadcrumbsItem to={process.env.PUBLIC_URL + "/temp" + "/"}>Главная</BreadcrumbsItem>
      <BreadcrumbsItem to={process.env.PUBLIC_URL + "/temp" + pathname}>
        Оформление заказа
      </BreadcrumbsItem>
      <LayoutOne headerTop="visible">
        <Breadcrumb />
        <div className="checkout-area pt-95 pb-100">
          <div className="container">
            {cartItems && cartItems.length >= 1 ? (
              <div className="row">
                <div className="col-lg-7">
                  <div className="billing-info-wrap">
                    <h3>Данные покупателя</h3>
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="billing-info mb-20">
                          <label>Фамилия Имя Отчество*</label>
                          <input type="text" name='name' onChange={e => setCartData(e)} value={order_data?.name}/>
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
                          <label>Город*</label>
                          <input type="text" name='city' onChange={e => setCartData(e)} value={order_data?.city}/>
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
                            placeholder="Улица, дом, квартира*"
                            type="text" name='address1' onChange={e => setCartData(e)} value={order_data?.address1}/>
                          <input
                            placeholder="Подъезд, этаж, домофон"
                            type="text" name='address2' onChange={e => setCartData(e)} value={order_data?.address2}
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
                          <label>Телефон*</label>
                          <input type="text" name='phone' onChange={e => setCartData(e)} value={order_data?.phone}/>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6">
                        <div className="billing-info mb-20">
                          <label>Email*</label>
                          <input type="text" name='email' onChange={e => setCartData(e)} value={order_data?.email}/>
                        </div>
                      </div>
                    </div>

                    <div className="additional-info-wrap">
                      <h4>Дополнительная информация</h4>
                      <div className="additional-info">
                        <label>Примечания к заказу</label>
                        <textarea
                          onChange={e => setCartData(e)}
                          value={order_data?.extra}
                          placeholder="Здесь вы можете написать особые пожелания к заказу."
                          name="extra"
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
                              return (
                                <li key={key}>
                                  <span className="order-middle-left">
                                    {`${cartItem.name} (${cartItem.selectedProductSize}) X ${cartItem.quantity}`}
                                  </span>{" "}
                                  <span className="order-price">
                                    {'₽' +
                                      (
                                        cartItem.price * cartItem.quantity
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
                    {!(order_data?.name && order_data?.address1 && order_data?.phone && order_data?.email) && (
                      <div className="place-order mt-25 text-center">
                        <p>Для размещения заказа, заполните все необходимые поля</p>
                      </div>
                    )}
                    <div className="place-order mt-25">
                      <button
                        disabled={!(order_data?.name && order_data?.address1 && order_data?.phone && order_data?.email)}
                        className="btn-hover"
                        onClick={() => setOrder(order_data)}
                      >Разместить заказ</button>
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
    order_data: state.goods.order_data,
    cartItems: state.cartData,
    currency: state.currencyData
  };
};

export default connect(mapStateToProps, {setOrderData, setOrder})(Checkout);

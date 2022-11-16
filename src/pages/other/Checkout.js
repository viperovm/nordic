import PropTypes from "prop-types";
import React, {Fragment, useEffect, useState} from "react";
import {Link, useHistory} from "react-router-dom";
import MetaTags from "react-meta-tags";
import {connect} from "react-redux";
import {BreadcrumbsItem} from "react-breadcrumbs-dynamic";
import {getDiscountPrice} from "../../helpers/product";
import LayoutOne from "../../layouts/LayoutOne";
import Breadcrumb from "../../wrappers/breadcrumb/Breadcrumb";
import {resetStatus, setOrder, setOrderData} from "../../redux/actions/goodsActions";
import Cookies from "js-cookie";
import {getProperPrice} from "../../helpers/price";

const Checkout = ({
                    location,
                    cartItems,
                    order_data,
                    setOrderData,
                    setOrder,
                    order_success,
                    error,
                    resetStatus,
                  }) => {
  const {pathname} = location;
  // let cartTotalPrice = 0;

  const history = useHistory()

  useEffect(() => {
    if (order_success) {
      history.push(`/success`)
    }
  })

  const [cartItemsText, setCartItemsText] = useState('')
  const [cartTotalPrice, setCartTotalPrice] = useState(0)
  const [disabled, setDisabled] = useState(false)
  const [shipping, setShipping] = useState('1')
  const [shippingCost, setShippingCost] = useState(500)

  useEffect(() => {
    if (shipping === '1') {
      setShippingCost(500)
    } else {
      setShippingCost(0)
    }
  }, [shipping])

  const get_cart_text = () => {
    return cartItems?.map(
      item => {
        setCartItemsText(cartItemsText => `${cartItemsText ? cartItemsText : ''}\t-${item.name} (${item.selectedProductSize}) x ${item.quantity} - ₽${Number(item.new_price ? item.new_price : item.price) * item.quantity}\n`)
        setCartTotalPrice(cartTotalPrice => cartTotalPrice + Number(item.new_price ? item.new_price : item.price) * item.quantity)
      }
    )
  }

  useEffect(() => {
    if (cartItems) {
      get_cart_text()
    }
  }, [cartItems])

  useEffect(() => {
    if (cartItemsText || cartTotalPrice || shippingCost) {
      setOrderData('orders', `\n${cartItemsText} \n\tИтого: ₽${cartTotalPrice + shippingCost}\n`)
    }
  }, [cartItemsText, cartTotalPrice, shippingCost])

  useEffect(() => {
    if (shipping) {
      setOrderData('shipping', `${shipping === '1' ? `Доставка` : `Самовывоз`}`)
    }
  }, [shipping])

  const setCartData = (e) => {
    setOrderData(e.target.name, e.target.value)
  }

  return (
    <Fragment>
      <MetaTags>
        <title>NordicWay | Оформление заказа</title>
        <meta
          name="description"
          content="Checkout page"
        />
      </MetaTags>
      <BreadcrumbsItem to={process.env.PUBLIC_URL + "/"}>Главная</BreadcrumbsItem>
      <BreadcrumbsItem to={process.env.PUBLIC_URL + pathname}>
        Оформление заказа
      </BreadcrumbsItem>
      <LayoutOne headerTop="visible">
        <Breadcrumb/>
        {error && (
          <>
            <div className="modal-wrapper">
              <div className="modal-card">
                <div className="modal-header">
                  <h2>Ошибка!</h2>
                </div>
                <div className="modal-body">
                  <p>Во время оформления заказа произошла ошибка. Повторите попытку позже.</p>
                </div>
                <div className="modal-footer">
                  <div className="your-order-area">
                    <div className="place-order mt-25">
                      <button
                        className="btn-hover"
                        onClick={() => {
                          resetStatus()
                        }}
                      >Закрыть
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
        <div className="checkout-area pt-95 pb-100">
          <div className="container">
            {cartItems && cartItems.length >= 1 ? (
              <div className="row">
                <div className="col-lg-7">
                  <div className="billing-info-wrap">
                    <h3>Способ получения товара</h3>
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="billing-select mb-20">
                          <label>Выберите способ получения*</label>
                          <select onChange={e => setShipping(e.target.value)}>
                            <option value="1">Доставка</option>
                            <option value="2">Самовывоз</option>
                          </select>
                        </div>
                        <div className="billing-select mb-20">
                          {shipping === '1'
                            ?
                            <div>
                              <p>По москве доставка производится курьером. В регионы - почтовыми компаниями.</p>
                              <p>Стоимость: {getProperPrice(500)}</p>
                            </div>
                            :
                            <div>
                              <p>Самовывоз производится по адресу: Москва, Кожевническая, 14<br/>
                              (необходимо за 12 Часов уведомить по телефону +7 (499) 130-02-75 о своём визите)</p>
                              <p>Стоимость: {getProperPrice(0)}</p>
                            </div>}
                        </div>
                      </div>
                    </div>
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
                                    {getProperPrice(cartItem.new_price ? cartItem.new_price : cartItem.price * cartItem.quantity)}
                                  </span>
                                </li>
                              );
                            })}
                          </ul>
                        </div>
                        <div className="your-order-bottom">
                          <ul>
                            <li className="your-order-shipping">Доставка</li>
                            <li>{getProperPrice(shippingCost)}</li>
                          </ul>
                        </div>
                        <div className="your-order-total">
                          <ul>
                            <li className="order-total">Итого</li>
                            <li>
                              {getProperPrice(cartTotalPrice + shippingCost)}
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
                        disabled={(!(order_data?.name && order_data?.address1 && order_data?.phone && order_data?.email)) || disabled}
                        className="btn-hover"
                        onClick={() => {
                          setDisabled(true)
                          setOrder(order_data)
                        }}
                      >Разместить заказ
                      </button>
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
                      Нечего оформлять <br/>{" "}
                      <Link to={process.env.PUBLIC_URL + "/shop"}>
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
    order_success: state.goods.order_success,
    error: state.goods.error,
    cartItems: state.cartData,
    currency: state.currencyData
  };
};

export default connect(mapStateToProps, {setOrderData, setOrder, resetStatus})(Checkout);

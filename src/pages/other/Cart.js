import PropTypes from "prop-types";
import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import { useToasts } from "react-toast-notifications";
import MetaTags from "react-meta-tags";
import { BreadcrumbsItem } from "react-breadcrumbs-dynamic";
import { connect } from "react-redux";
import { getDiscountPrice } from "../../helpers/product";
import {
  addToCart,
  decreaseQuantity,
  deleteFromCart,
  // cartItemStock,
  deleteAllFromCart
} from "../../redux/actions/cartActions";
import LayoutOne from "../../layouts/LayoutOne";
import Breadcrumb from "../../wrappers/breadcrumb/Breadcrumb";
import {getProperPrice} from "../../helpers/price";

const Cart = ({
  location,
  cartItems,
  currency,
  decreaseQuantity,
  addToCart,
  deleteFromCart,
  deleteAllFromCart
}) => {
  const [quantityCount] = useState(1);
  const { addToast } = useToasts();
  const { pathname } = location;
  let cartTotalPrice = 0;

  console.log(parseFloat(cartTotalPrice.toFixed(2)).toLocaleString('ru-RU'))

  return (
    <Fragment>
      <MetaTags>
        <title>NordicWay | Корзина</title>
        <meta
          name="description"
          content="Cart page of NordicWay."
        />
      </MetaTags>

      <BreadcrumbsItem to={process.env.PUBLIC_URL + "/"}>Главная</BreadcrumbsItem>
      <BreadcrumbsItem to={process.env.PUBLIC_URL + pathname}>
        Корзина
      </BreadcrumbsItem>

      <LayoutOne headerTop="visible">
        {/* breadcrumb */}
        <Breadcrumb />
        <div className="cart-main-area pt-90 pb-100">
          <div className="container">
            {cartItems && cartItems.length >= 1 ? (
              <Fragment>
                <h3 className="cart-page-title">Ваш товар</h3>
                <div className="row">
                  <div className="col-12">
                    <div className="table-content table-responsive cart-table-content">
                      <table>
                        <thead>
                          <tr>
                            <th>Изображение</th>
                            <th>Наименование</th>
                            <th>Цена</th>
                            <th>Кол-во</th>
                            <th>Стоимость</th>
                            <th>Действие</th>
                          </tr>
                        </thead>
                        <tbody>
                          {cartItems.map((cartItem, key) => {
                            const discountedPrice = cartItem.new_price
                            // const discountedPrice = getDiscountPrice(
                            //   cartItem.price,
                            //   cartItem.discount
                            // );
                            const finalProductPrice = (
                              cartItem.price * currency.currencyRate
                            );
                            const finalDiscountedPrice = (
                              discountedPrice * currency.currencyRate
                            );

                            discountedPrice > 0
                              ? (cartTotalPrice +=
                                  finalDiscountedPrice * cartItem.quantity)
                              : (cartTotalPrice +=
                                  finalProductPrice * cartItem.quantity);
                            return (
                              <tr key={key}>
                                <td className="product-thumbnail">
                                  {cartItem?.goods_gallery?.length > 0 && <Link
                                    to={
                                      process.env.PUBLIC_URL +
                                      "/product/" +
                                      cartItem.id
                                    }
                                  >
                                    <img
                                      className="img-fluid"
                                      src={
                                        cartItem?.goods_gallery[0].image
                                      }
                                      alt=""
                                    />
                                  </Link>}
                                </td>

                                <td className="product-name">
                                  <Link
                                    to={
                                      process.env.PUBLIC_URL +
                                      "/product/" +
                                      cartItem.id
                                    }
                                  >
                                    {cartItem.name}
                                  </Link>
                                  {cartItem.selectedProductSize &&
                                    <div className="cart-item-variation">
                                      <span>
                                        Размер: {cartItem.selectedProductSize}
                                      </span>
                                    </div>}
                                </td>

                                <td className="product-price-cart">
                                  {discountedPrice > 0 ? (
                                    <Fragment>
                                      <span className="amount old">
                                        {getProperPrice(finalProductPrice)}
                                      </span>
                                      <span className="amount">
                                        {getProperPrice(finalDiscountedPrice)}
                                      </span>
                                    </Fragment>
                                  ) : (
                                    <span className="amount">
                                      {getProperPrice(finalProductPrice)}
                                    </span>
                                  )}
                                </td>

                                <td className="product-quantity">
                                  <div className="cart-plus-minus">
                                    <button
                                      className="dec qtybutton"
                                      onClick={() =>
                                        decreaseQuantity(cartItem, addToast)
                                      }
                                    >
                                      -
                                    </button>
                                    <input
                                      className="cart-plus-minus-box"
                                      type="text"
                                      value={cartItem.quantity}
                                      readOnly
                                    />
                                    <button
                                      className="inc qtybutton"
                                      onClick={() =>
                                        addToCart(
                                          cartItem,
                                          addToast,
                                          quantityCount
                                        )
                                      }
                                      // disabled={
                                      //   cartItem !== undefined &&
                                      //   cartItem.quantity &&
                                      //   cartItem.quantity >=
                                      //     cartItemStock(
                                      //       cartItem,
                                      //       cartItem.selectedProductColor,
                                      //       cartItem.selectedProductSize
                                      //     )
                                      // }
                                    >
                                      +
                                    </button>
                                  </div>
                                </td>
                                <td className="product-subtotal">
                                  {discountedPrice > 0
                                    ? getProperPrice(finalDiscountedPrice * cartItem.quantity)
                                    : getProperPrice(finalProductPrice * cartItem.quantity)
                                  }
                                </td>

                                <td className="product-remove">
                                  <button
                                    onClick={() =>
                                      deleteFromCart(cartItem, addToast)
                                    }
                                  >
                                    <i className="fa fa-times"></i>
                                  </button>
                                </td>
                              </tr>
                            );
                          })}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-12">
                    <div className="cart-shiping-update-wrapper">
                      <div className="cart-shiping-update">
                        <Link
                          to={process.env.PUBLIC_URL + "/shop"}
                        >
                          Продолжить покупки
                        </Link>
                      </div>
                      <div className="cart-clear">
                        <button onClick={() => deleteAllFromCart(addToast)}>
                          Очистить корзину
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="row">
                  {/*<div className="col-lg-8 col-md-6">*/}
                  {/*  <div className="cart-tax">*/}
                  {/*    <div className="title-wrap">*/}
                  {/*      <h4 className="cart-bottom-title section-bg-gray">*/}
                  {/*        Estimate Shipping And Tax*/}
                  {/*      </h4>*/}
                  {/*    </div>*/}
                  {/*    <div className="tax-wrapper">*/}
                  {/*      <p>*/}
                  {/*        Enter your destination to get a shipping estimate.*/}
                  {/*      </p>*/}
                  {/*      <div className="tax-select-wrapper">*/}
                  {/*        <div className="tax-select">*/}
                  {/*          <label>* Country</label>*/}
                  {/*          <select className="email s-email s-wid">*/}
                  {/*            <option>Bangladesh</option>*/}
                  {/*            <option>Albania</option>*/}
                  {/*            <option>Åland Islands</option>*/}
                  {/*            <option>Afghanistan</option>*/}
                  {/*            <option>Belgium</option>*/}
                  {/*          </select>*/}
                  {/*        </div>*/}
                  {/*        <div className="tax-select">*/}
                  {/*          <label>* Region / State</label>*/}
                  {/*          <select className="email s-email s-wid">*/}
                  {/*            <option>Bangladesh</option>*/}
                  {/*            <option>Albania</option>*/}
                  {/*            <option>Åland Islands</option>*/}
                  {/*            <option>Afghanistan</option>*/}
                  {/*            <option>Belgium</option>*/}
                  {/*          </select>*/}
                  {/*        </div>*/}
                  {/*        <div className="tax-select">*/}
                  {/*          <label>* Zip/Postal Code</label>*/}
                  {/*          <input type="text" />*/}
                  {/*        </div>*/}
                  {/*        <button className="cart-btn-2" type="submit">*/}
                  {/*          Get A Quote*/}
                  {/*        </button>*/}
                  {/*      </div>*/}
                  {/*    </div>*/}
                  {/*  </div>*/}
                  {/*</div>*/}

                  {/*<div className="col-lg-4 col-md-6">*/}
                  {/*  <div className="discount-code-wrapper">*/}
                  {/*    <div className="title-wrap">*/}
                  {/*      <h4 className="cart-bottom-title section-bg-gray">*/}
                  {/*        Use Coupon Code*/}
                  {/*      </h4>*/}
                  {/*    </div>*/}
                  {/*    <div className="discount-code">*/}
                  {/*      <p>Enter your coupon code if you have one.</p>*/}
                  {/*      <form>*/}
                  {/*        <input type="text" required name="name" />*/}
                  {/*        <button className="cart-btn-2" type="submit">*/}
                  {/*          Apply Coupon*/}
                  {/*        </button>*/}
                  {/*      </form>*/}
                  {/*    </div>*/}
                  {/*  </div>*/}
                  {/*</div>*/}

                  <div className="col-lg-4 col-md-12">
                    <div className="grand-totall">
                      <div className="title-wrap">
                        <h4 className="cart-bottom-title section-bg-gary-cart">
                          Итоговая стоимость
                        </h4>
                      </div>
                      <h5>
                        {/*Total products{" "}*/}
                        {/*<span>*/}
                        {/*  {'₽' + cartTotalPrice.toFixed(2)}*/}
                        {/*</span>*/}
                      </h5>

                      <h4 className="grand-totall-title">
                        Итого{" "}
                        <span>
                          {getProperPrice(cartTotalPrice)}
                        </span>
                      </h4>
                      <Link to={process.env.PUBLIC_URL + "/checkout"}>
                        Оформить
                      </Link>
                    </div>
                  </div>
                </div>
              </Fragment>
            ) : (
              <div className="row">
                <div className="col-lg-12">
                  <div className="item-empty-area text-center">
                    <div className="item-empty-area__icon mb-30">
                      <i className="pe-7s-cart"></i>
                    </div>
                    <div className="item-empty-area__text">
                      Корзина пуста <br />{" "}
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

Cart.propTypes = {
  addToCart: PropTypes.func,
  cartItems: PropTypes.array,
  currency: PropTypes.object,
  decreaseQuantity: PropTypes.func,
  location: PropTypes.object,
  deleteAllFromCart: PropTypes.func,
  deleteFromCart: PropTypes.func
};

const mapStateToProps = state => {
  return {
    cartItems: state.cartData,
    currency: state.currencyData
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addToCart: (item, addToast, quantityCount) => {
      dispatch(addToCart(item, addToast, quantityCount));
    },
    decreaseQuantity: (item, addToast) => {
      dispatch(decreaseQuantity(item, addToast));
    },
    deleteFromCart: (item, addToast) => {
      dispatch(deleteFromCart(item, addToast));
    },
    deleteAllFromCart: addToast => {
      dispatch(deleteAllFromCart(addToast));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);

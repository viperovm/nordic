import PropTypes from "prop-types";
import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { useToasts } from "react-toast-notifications";
import { getDiscountPrice } from "../../../helpers/product";
import {getProperPrice} from "../../../helpers/price";

const MenuCart = ({ cartData, currency, deleteFromCart }) => {

  console.log(cartData)

  let cartTotalPrice = 0;
  const { addToast } = useToasts();
  return (
    <div className="shopping-cart-content">
      {cartData && cartData.length > 0 ? (
        <Fragment>
          <ul>
            {cartData.map((single, key) => {
              const discountedPrice = single.new_price;
              // const discountedPrice = getDiscountPrice(
              //   single.price,
              //   single.discount
              // );
              const finalProductPrice = (
                single.price * currency.currencyRate
              );
              const finalDiscountedPrice = (
                discountedPrice * currency.currencyRate
              );

              discountedPrice > 0
                ? (cartTotalPrice += finalDiscountedPrice * single.quantity)
                : (cartTotalPrice += finalProductPrice * single.quantity);

              return (
                <li className="single-shopping-cart" key={key}>
                  {single?.goods_gallery?.length > 0 && <div className="shopping-cart-img">
                    <Link to={process.env.PUBLIC_URL + "/product/" + single.id}>
                      <img
                        alt=""
                        src={single?.goods_gallery[0].image}
                        className="img-fluid"
                      />
                    </Link>
                  </div>}
                  <div className="shopping-cart-title">
                    <h4>
                      <Link
                        to={process.env.PUBLIC_URL + "/product/" + single.id}
                      >
                        {" "}
                        {single.name}{" "}
                      </Link>
                    </h4>
                    <h6>Кол-во: {single.quantity}</h6>
                    <span>
                      {finalDiscountedPrice > 0
                        ? getProperPrice(finalDiscountedPrice)
                        : getProperPrice(finalProductPrice)}
                    </span>
                    {single.selectedProductSize &&
                      <div className="cart-item-variation">
                        <span>Размер: {single.selectedProductSize}</span>
                      </div>}
                  </div>
                  <div className="shopping-cart-delete">
                    <button onClick={() => deleteFromCart(single, addToast)}>
                      <i className="fa fa-times-circle" />
                    </button>
                  </div>
                </li>
              );
            })}
          </ul>
          <div className="shopping-cart-total">
            <h4>
              Итого :{" "}
              <span className="shop-total">
                {getProperPrice(cartTotalPrice)}
              </span>
            </h4>
          </div>
          <div className="shopping-cart-btn btn-hover text-center">
            <Link className="default-btn" to={process.env.PUBLIC_URL + "/cart"}>
              Посмотреть корзину
            </Link>
            <Link
              className="default-btn"
              to={process.env.PUBLIC_URL + "/checkout"}
            >
              Оформить
            </Link>
          </div>
        </Fragment>
      ) : (
        <p className="text-center">Корзина пуста</p>
      )}
    </div>
  );
};

MenuCart.propTypes = {
  cartData: PropTypes.array,
  currency: PropTypes.object,
  deleteFromCart: PropTypes.func
};

export default MenuCart;

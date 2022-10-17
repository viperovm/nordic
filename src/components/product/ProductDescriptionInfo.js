import PropTypes from "prop-types";
import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getProductCartQuantity } from "../../helpers/product";
import { addToCart } from "../../redux/actions/cartActions";
import { addToWishlist } from "../../redux/actions/wishlistActions";
import { addToCompare } from "../../redux/actions/compareActions";
import Rating from "./sub-components/ProductRating";

const ProductDescriptionInfo = ({
  product,
  discountedPrice,
  currency,
  finalDiscountedPrice,
  finalProductPrice,
  cartItems,
  wishlistItem,
  compareItem,
  addToast,
  addToCart,
  addToWishlist,
  addToCompare
}) => {
  const [selectedProductSize, setSelectedProductSize] = useState(
    product?.size?.length ? product?.size[0].size : ""
  );

  const [quantityCount, setQuantityCount] = useState(1);

  const productCartQty = getProductCartQuantity(
    cartItems,
    product,
    null,
    selectedProductSize,
  );

  return (
    <div className="product-details-content ml-70">
      <h2>{product?.name}</h2>
      <div className="product-details-price">
        <span>₽{product?.price} </span>
      </div>

      <div className="pro-details-size-color">
        <div className="pro-details-size">
          <span>Размер</span>
          <div className="pro-details-size-content">
            {product?.size?.map((singleSize, key) => {
                      return (
                        <label
                          className={`pro-details-size-content--single`}
                          key={key}
                        >
                          <input
                            type="radio"
                            value={singleSize?.size}
                            checked={
                              singleSize?.size === selectedProductSize
                                ? "checked"
                                : ""
                            }
                            onChange={() => {
                              setSelectedProductSize(singleSize?.size);
                              setQuantityCount(1);
                            }}
                          />
                          <span className="size-name">{singleSize?.size}</span>
                        </label>
                      );
                    })
              }
          </div>
        </div>
      </div>
      <div className="pro-details-quality">
        <div className="cart-plus-minus">
          <button
            onClick={() =>
              setQuantityCount(quantityCount > 1 ? quantityCount - 1 : 1)
            }
            className="dec qtybutton"
          >
            -
          </button>
          <input
            className="cart-plus-minus-box"
            type="text"
            value={quantityCount}
            readOnly
          />
          <button
            onClick={() =>
              setQuantityCount(quantityCount + 1)
            }
            className="inc qtybutton"
          >
            +
          </button>
        </div>
        <div className="pro-details-cart btn-hover">
          <button
            disabled={!selectedProductSize}
            onClick={() =>
              addToCart(
                product,
                addToast,
                quantityCount,
                null,
                selectedProductSize
              )
            }
            // disabled={productCartQty >= productStock}
          >
            {" "}
            В корзину{" "}
          </button>
        </div>
      </div>
      {product?.category ? (
        <div className="pro-details-meta">
          <span>Категория :</span>
          <ul>
            <li>
              {product?.category?.name}
              {/*<Link to={process.env.PUBLIC_URL + "/shop"}>*/}
              {/*  */}
              {/*</Link>*/}
            </li>
          </ul>
        </div>
      ) : (
        ""
      )}

      {/*<div className="pro-details-social">*/}
      {/*  <ul>*/}
      {/*    <li>*/}
      {/*      <a href="//facebook.com">*/}
      {/*        <i className="fa fa-facebook" />*/}
      {/*      </a>*/}
      {/*    </li>*/}
      {/*    <li>*/}
      {/*      <a href="//dribbble.com">*/}
      {/*        <i className="fa fa-dribbble" />*/}
      {/*      </a>*/}
      {/*    </li>*/}
      {/*    <li>*/}
      {/*      <a href="//pinterest.com">*/}
      {/*        <i className="fa fa-pinterest-p" />*/}
      {/*      </a>*/}
      {/*    </li>*/}
      {/*    <li>*/}
      {/*      <a href="//twitter.com">*/}
      {/*        <i className="fa fa-twitter" />*/}
      {/*      </a>*/}
      {/*    </li>*/}
      {/*    <li>*/}
      {/*      <a href="//linkedin.com">*/}
      {/*        <i className="fa fa-linkedin" />*/}
      {/*      </a>*/}
      {/*    </li>*/}
      {/*  </ul>*/}
      {/*</div>*/}
    </div>
  );
};

ProductDescriptionInfo.propTypes = {
  addToCart: PropTypes.func,
  addToCompare: PropTypes.func,
  addToWishlist: PropTypes.func,
  addToast: PropTypes.func,
  cartItems: PropTypes.array,
  compareItem: PropTypes.array,
  currency: PropTypes.object,
  discountedPrice: PropTypes.number,
  finalDiscountedPrice: PropTypes.number,
  finalProductPrice: PropTypes.number,
  product: PropTypes.object,
  wishlistItem: PropTypes.object
};

const mapDispatchToProps = dispatch => {
  return {
    addToCart: (
      item,
      addToast,
      quantityCount,
      selectedProductColor,
      selectedProductSize
    ) => {
      dispatch(
        addToCart(
          item,
          addToast,
          quantityCount,
          selectedProductColor,
          selectedProductSize
        )
      );
    },
    addToWishlist: (item, addToast) => {
      dispatch(addToWishlist(item, addToast));
    },
    addToCompare: (item, addToast) => {
      dispatch(addToCompare(item, addToast));
    }
  };
};

export default connect(null, mapDispatchToProps)(ProductDescriptionInfo);

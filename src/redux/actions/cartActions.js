import * as t from '../types'

//add to cart
export const addToCart = (
  item,
  addToast,
  quantityCount,
  selectedProductColor,
  selectedProductSize
) => {
  return dispatch => {
    if (addToast) {
      addToast("Добавлено в корзину", { appearance: "success", autoDismiss: true });
    }
    dispatch({
      type: t.ADD_TO_CART,
      payload: {
        ...item,
        quantity: quantityCount,
        selectedProductColor: selectedProductColor
          ? selectedProductColor
          : item.selectedProductColor
          ? item.selectedProductColor
          : null,
        selectedProductSize: selectedProductSize
          ? selectedProductSize
          : item.selectedProductSize
          ? item.selectedProductSize
          : null
      }
    });
  };
};
//decrease from cart
export const decreaseQuantity = (item, addToast) => {
  return dispatch => {
    if (addToast) {
      addToast("Удалено из корзины", {
        appearance: "warning",
        autoDismiss: true
      });
    }
    dispatch({ type: t.DECREASE_QUANTITY, payload: item });
  };
};
//delete from cart
export const deleteFromCart = (item, addToast) => {
  return dispatch => {
    if (addToast) {
      addToast("Удалено из корзины", { appearance: "error", autoDismiss: true });
    }
    dispatch({ type: t.DELETE_FROM_CART, payload: item });
  };
};
//delete all from cart
export const deleteAllFromCart = addToast => {
  return dispatch => {
    if (addToast) {
      addToast("Удалено из корзины", {
        appearance: "error",
        autoDismiss: true
      });
    }
    dispatch({ type: t.DELETE_ALL_FROM_CART });
  };
};

// get stock of cart item
// export const cartItemStock = (item, color, size) => {
//   if (item.stock) {
//     return item.stock;
//   } else {
//     return item.variation
//       .filter(single => single.color === color)[0]
//       .size.filter(single => single.name === size)[0].stock;
//   }
// };

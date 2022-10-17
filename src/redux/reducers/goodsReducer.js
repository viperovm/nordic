import * as t from '../types'

const initialState = {
  all_goods: [],
  all_categories: [],
  one_goods: {},
  order_data: {},
};

export default function(state= initialState, action) {
  const {type, payload} = action;

  switch(type) {
    case t.SET_ORDER_DATA:
      return {
        ...state,
        order_data: {...state.order_data, [payload.key]: payload.data}
      }

    case t.DELETE_ALL_FROM_CART:
      return {
        ...state,
        order_data: {}
      }

    case t.GET_ALL_GOODS_SUCCESS:
      return {
        ...state,
        all_goods: payload
      }
    case t.GET_ALL_GOODS_FAIL:
      return {
        ...state,
        all_goods: []
      }
    case t.GET_ONE_GOODS_SUCCESS:
      return {
        ...state,
        one_goods: payload
      }
    case t.GET_ONE_GOODS_FAIL:
      return {
        ...state,
        one_goods: {}
      }

    case t.GET_ALL_CATEGORIES_SUCCESS:
      return {
        ...state,
        all_categories: payload
      }
    case t.GET_ALL_CATEGORIES_FAIL:
      return {
        ...state,
        all_categories: []
      }
    default:
      return state
  }
}
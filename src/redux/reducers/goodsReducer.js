import * as t from '../types'

const initialState = {
  all_goods: [],
  all_categories: [],
  one_goods: {},
};

export default function(state= initialState, action) {
  const {type, payload} = action;

  switch(type) {
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
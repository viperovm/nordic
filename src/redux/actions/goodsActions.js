import axios from "axios";

import * as t from '../types'

export const getAllGoods = () => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }
  };

  try {
    const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/goods/`, config);

    console.log(res)

    dispatch({
      type: t.GET_ALL_GOODS_SUCCESS,
      payload: res.data
    })
  } catch (err) {
    dispatch({
      type: t.GET_ALL_GOODS_FAIL
    })
  }
}

export const getOneGoods = (id) => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }
  };

  if(id) {
    try {
      const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/goods/${id}/`, config);

      dispatch({
        type: t.GET_ONE_GOODS_SUCCESS,
        payload: res.data
      })
    } catch (err) {
      dispatch({
        type: t.GET_ONE_GOODS_FAIL
      })
    }
  } else {
    dispatch({
      type: t.GET_ONE_GOODS_SUCCESS,
      payload: null
    })
  }
}

export const getAllCategories = () => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }
  };

  try {
    const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/categories/`, config);

    console.log(res)

    dispatch({
      type: t.GET_ALL_CATEGORIES_SUCCESS,
      payload: res.data
    })
  } catch (err) {
    dispatch({
      type: t.GET_ALL_CATEGORIES_FAIL
    })
  }
}
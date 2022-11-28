import axios from "axios";

import * as t from '../types'

import Cookies from 'js-cookie';

export const getAllGoods = () => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }
  };

  try {
    const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/goods/`, config);

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

export const setOrder = (data) => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'X-CSRFToken': Cookies.get('csrftoken')
    }
  };

  const body = JSON.stringify(data)

  try {
    await axios.post(`${process.env.REACT_APP_API_URL}/api/orders/`, body, config);


    dispatch({
      type: t.SET_ORDER_SUCCESS,
    })
  } catch (err) {
    dispatch({
      type: t.SET_ORDER_FAIL,
    })
  }
}

export const setOrderData = (key, data) => dispatch => {

  const pl = {key: key, data: data}

  dispatch({
    type: t.SET_ORDER_DATA,
    payload: pl
  })
}

export const resetStatus = () => dispatch => {

  dispatch({
    type: t.RESET_STATUS,
  })
}

export const getBanner = () => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }
  };

  try {
    const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/banner/`, config);

    console.log(res)
    console.log(res.data)

    dispatch({
      type: t.GET_BANNER_SUCCESS,
      payload: res.data
    })
  } catch (err) {
    dispatch({
      type: t.GET_BANNER_FAIL
    })
  }
}


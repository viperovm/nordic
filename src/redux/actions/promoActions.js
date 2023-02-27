import axios from "axios";

export const GET_PROMO_SUCCESS = "GET_PROMO_SUCCESS";
export const GET_PROMO_FAIL = "GET_PROMO_FAIL";

export const get_promo = (code) => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    params: {
      'promo': code
    }
  };
  try {
    const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/promo/`, config);
    const data = {
      promo: res.data,
    }
    dispatch({
      type: GET_PROMO_SUCCESS,
      payload: data
    })
  } catch (err) {
    dispatch({
      type: GET_PROMO_FAIL
    })
  }
}

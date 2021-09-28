// import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';

const BEACH_FAIL = 'BEACH FAIL';
const BEACH_SUCCESS = 'BEACH SUCCESS';
const BEACH_LOADING = 'BEACH LOADING';

const getBeach = (beachid) => async (dispatch) => {
  try {
    dispatch({ type: BEACH_LOADING });
    /* eslint-disable */
    const url = 'https://calbeach.herokuapp.com/beaches/' + beachid;
    const result = await axios.get(url);
    dispatch({
      type: BEACH_SUCCESS,
      payload: result.data,
    });
  } catch (err) {
    console.log(err);
  }
};
export {
  BEACH_FAIL, BEACH_SUCCESS, BEACH_LOADING, getBeach,
};

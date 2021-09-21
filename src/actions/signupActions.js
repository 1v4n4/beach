import axios from 'axios';
import { setUser } from '../localStorage';

const SIGNUP_LOADING = 'SIGNUP LOADING';
const SIGNUP_FAIL = 'SIGNUP FAIL';
const SIGNUP_SUCCESS = 'SIGNUP SUCCESS';

const getSignup = (name, email, password, passwordConfirmation) => async (dispatch) => {
  try {
    dispatch({
      type: SIGNUP_LOADING,
    });
    const data = {
      user: {
        name, email, password, passwordConfirmation,
      },
    };
    const url = 'https://obscure-ravine-72601.herokuapp.com/registrations';

    const result = await axios.post(url, data,
      {
        withCredentials: true,
      });
    dispatch({
      type: SIGNUP_SUCCESS,
      payload: result.data,
    });
    setUser(result.data.user);
  } catch (error) {
    dispatch({
      type: SIGNUP_FAIL,
    });
  }
};

export {
  SIGNUP_LOADING, SIGNUP_FAIL, SIGNUP_SUCCESS, getSignup,

};

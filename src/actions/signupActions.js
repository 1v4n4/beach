import axios from 'axios';
import { setUser } from '../localStorage';
import { msgs } from '../helper';

const SIGNUP_LOADING = 'SIGNUP LOADING';
const SIGNUP_FAIL = 'SIGNUP FAIL';
const SIGNUP_SUCCESS = 'SIGNUP SUCCESS';

const getSignup = (name, email, password, passwordConfirmation, history) => async (dispatch) => {
  try {
    dispatch({
      type: SIGNUP_LOADING,
    });
    const data = {
      user: {
        name, email, password, passwordConfirmation,
      },
    };
    const url = 'https://calbeach.herokuapp.com/registrations';

    const result = await axios.post(url, data);
    if (result.data.message) {
      msgs(result.data.message);
    } else {
      setUser(result.data.user);
      history.push('/beach');
      dispatch({
        type: SIGNUP_SUCCESS,
        payload: result.data,
      });
    }
  } catch (error) {
    msgs('Something went wrong. Please try again');
    dispatch({
      type: SIGNUP_FAIL,
    });
  }
};

export {
  SIGNUP_LOADING, SIGNUP_FAIL, SIGNUP_SUCCESS, getSignup,

};

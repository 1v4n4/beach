import axios from 'axios';
import { setUser } from '../localStorage';
import { msgs } from '../helper';

const LOGIN_LOADING = 'LOGIN LOADING';
const LOGIN_FAIL = 'LOGIN FAIL';
const LOGIN_SUCCESS = 'LOGIN SUCCESS';

const getLogin = (email, password) => async (dispatch) => {
  try {
    dispatch({
      type: LOGIN_LOADING,
    });
    const data = { user: { email, password } };
    const url = 'https://calbeach.herokuapp.com/sessions';

    const result = await axios.post(url, data, {
      withCredentials: false,
    });
    console.log('res', result);
    if (result.data.status === 401) {
      msgs('Wrong username of password. Please try again');
    } else {
      setUser(result.data.user);
      console.log(result.data);
      dispatch({
        type: LOGIN_SUCCESS,
        payload: result.data,
      });
    }
  } catch (error) {
    dispatch({
      type: LOGIN_FAIL,
    });
  }
};

export {
  LOGIN_LOADING, LOGIN_FAIL, LOGIN_SUCCESS, getLogin,

};

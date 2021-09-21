import axios from 'axios';
// import { useHistory } from 'react-router-dom';
import { setUser } from '../localStorage';

const LOGIN_LOADING = 'LOGIN LOADING';
const LOGIN_FAIL = 'LOGIN FAIL';
const LOGIN_SUCCESS = 'LOGIN SUCCESS';

const getLogin = (email, password) => async (dispatch) => {
  try {
    dispatch({
      type: LOGIN_LOADING,
    });
    const data = { user: { email, password } };
    const url = 'https://obscure-ravine-72601.herokuapp.com/sessions';

    const result = await axios.post(url, data,
      {
        withCredentials: true,
      });
    setUser(result.data.user);
    dispatch({
      type: LOGIN_SUCCESS,
      payload: result.data,
    });
  } catch (error) {
    dispatch({
      type: LOGIN_FAIL,
    });
  }
};

export {
  LOGIN_LOADING, LOGIN_FAIL, LOGIN_SUCCESS, getLogin,

};

import { LOGIN_LOADING, LOGIN_FAIL, LOGIN_SUCCESS } from '../actions/loginActions';
import { SIGNUP_LOADING, SIGNUP_FAIL, SIGNUP_SUCCESS } from '../actions/signupActions';
import { USER_PRESENT } from '../actions/userActions';
import { USER_LOGEDOUT } from '../actions/logOutActions';

const initialState = {
  loading: false,
  data: {},
  errorMSG: '',
  logged: false,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_PRESENT:
      return {
        ...state, loading: false, data: action.payload, errorMSG: '', logged: true,
      };
    case LOGIN_LOADING:
      return {
        ...state, loading: true, errorMSG: '', logged: false,
      };
    case LOGIN_FAIL:
      return {
        ...state, loading: false, data: [], errorMSG: 'Yikes! Unable to get data', logged: false,
      };
    case LOGIN_SUCCESS:
      return {
        ...state, loading: false, data: action.payload, errorMSG: '', logged: true,
      };
    case SIGNUP_LOADING:
      return {
        ...state, loading: true, errorMSG: '', logged: false,
      };
    case SIGNUP_FAIL:
      return {
        ...state, loading: false, data: [], errorMSG: 'Yikes! Something went wrong', logged: false,
      };
    case SIGNUP_SUCCESS:
      return {
        ...state, loading: false, data: action.payload, errorMSG: '', logged: true,
      };
    case USER_LOGEDOUT:
      return {
        ...state, loading: false, data: [], errorMSG: '', logged: false,
      };
    default:
      return state;
  }
};

export default userReducer;

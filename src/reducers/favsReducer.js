import {
  FAVS_SUCCESS, FAVS_FAIL, FAV_CREATE_SUCCESS, FAV_CREATE_FAIL, FAV_DELETE_SUCCESS, FAV_DELETE_FAIL,
} from '../actions/favsActions';

const initialState = {
  data: {},
  errorMSG: '',
};

const favsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FAVS_FAIL:
      return {
        ...state, data: [], errorMSG: 'Yikes! Unable to get data',
      };
    case FAVS_SUCCESS:
      return {
        ...state, data: action.payload, errorMSG: '',
      };
    case FAV_CREATE_SUCCESS:
      return {
        ...state, data: [...state.data, action.payload], errorMSG: '',
      };
    case FAV_CREATE_FAIL:
      return {
        ...state, errorMSG: 'Yikes! Something went wrong',
      };
    case FAV_DELETE_SUCCESS:
      return {
        ...state, data: state.data.filter((item) => item !== action.payload), errorMSG: '',
      };
    case FAV_DELETE_FAIL:
      return {
        ...state, errorMSG: 'Yikes! Something went wrong',
      };
    default:
      return state;
  }
};

export default favsReducer;

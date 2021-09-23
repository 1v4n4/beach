import { BEACH_FAIL, BEACH_SUCCESS, BEACH_LOADING } from '../actions/beachActions';

const initialState = {
  loading: false,
  data: {},
  errorMSG: '',
};

const beachReducer = (state = initialState, action) => {
  switch (action.type) {
    case BEACH_LOADING:
      return {
        ...state, loading: true, data: [], errorMSG: '',
      };
    case BEACH_FAIL:
      return {
        ...state, loading: false, data: [], errorMSG: 'Yikes! Unable to get data',
      };
    case BEACH_SUCCESS:
      return {
        ...state, loading: false,
        data: action.payload, errorMSG: '',
      };
    default:
      return state;
  }
};

export default beachReducer;

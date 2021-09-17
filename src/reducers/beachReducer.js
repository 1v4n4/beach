import { BEACH_FAIL, BEACH_SUCCESS } from '../actions/beachActions';

const initialState = {
  data: {},
  errorMSG: '',
};

const beachReducer = (state = initialState, action) => {
  switch (action.type) {
    case BEACH_FAIL:
      return {
        ...state, data: [], errorMSG: 'Yikes! Unable to get data',
      };
    case BEACH_SUCCESS:
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
};

export default beachReducer;

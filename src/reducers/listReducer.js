import { LIST_LOADING, LIST_FAIL, LIST_SUCCESS } from '../actions/listActions';

const initialState = {
  loading: false,
  data: null,
  errorMSG: '',
};

const listReducer = (state = initialState, action) => {
  switch (action.type) {
    case LIST_LOADING:
      return { ...state, loading: true, errorMSG: '' };
    case LIST_FAIL:
      return {
        ...state, loading: false, data: [], errorMSG: 'Yikes! Unable to get data',
      };
    case LIST_SUCCESS:
      return {
        ...state, loading: false, data: action.payload, errorMSG: '',
      };
    default:
      return state;
  }
};

export default listReducer;

import { combineReducers } from 'redux';
import listReducer from './listReducer';
import beachReducer from './beachReducer';

const reducer = combineReducers({
  list: listReducer,
  beach: beachReducer,
});

export default reducer;

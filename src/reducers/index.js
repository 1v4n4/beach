import { combineReducers } from 'redux';
import listReducer from './listReducer';
import beachReducer from './beachReducer';
import userReducer from './userReducer';

const reducer = combineReducers({
  list: listReducer,
  beach: beachReducer,
  user: userReducer,
});

export default reducer;

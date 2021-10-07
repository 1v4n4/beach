import { combineReducers } from 'redux';
import listReducer from './listReducer';
import beachReducer from './beachReducer';
import userReducer from './userReducer';
import favsReducer from './favsReducer';

const reducer = combineReducers({
  list: listReducer,
  beach: beachReducer,
  user: userReducer,
  favs: favsReducer,
});

export default reducer;

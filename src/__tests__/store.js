import { createStore, combineReducers } from 'redux';
import listReducer from '../reducers/listReducer';
import beachReducer from '../reducers/beachReducer';
import favsReducer from '../reducers/favsReducer';
import userReducer from '../reducers/userReducer';

const createTestStore = () => {
  const store = createStore(
    combineReducers({
      favs: favsReducer,
      beach: beachReducer,
      user: userReducer,
      list: listReducer,
    }),
  );
  return store;
};

it('should set the state object', () => {
  const store = createTestStore();
  expect(store).toBeInstanceOf(Object);
});

export default createTestStore;

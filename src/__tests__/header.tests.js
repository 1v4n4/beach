import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import Header from '../components/Header';
import createTestStore from './store';

describe('Header component', () => {
  let store;
  beforeEach(() => {
    store = createTestStore();
  });

  test('should match with snapshot', () => {
    const jsx = (
      <Provider store={store}>
        <BrowserRouter>
          <Header />
        </BrowserRouter>
      </Provider>
    );
    const tree = (() => renderer.create(jsx).toJSON());
    expect(tree).toMatchSnapshot();
  });
});

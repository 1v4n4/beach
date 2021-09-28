import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import Beach from '../components/Beach';
import createTestStore from './store';

describe('Beach details page', () => {
  let store;
  beforeEach(() => {
    store = createTestStore();
  });

  test('should match with snapshot', () => {
    const jsx = (
      <Provider store={store}>
        <BrowserRouter>
          <Beach />
        </BrowserRouter>
      </Provider>
    );
    const tree = (() => renderer.create(jsx).toJSON());
    expect(tree).toMatchSnapshot();
  });
});

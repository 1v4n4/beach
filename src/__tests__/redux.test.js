import userReducer from '../reducers/userReducer';
import beachReducer from '../reducers/beachReducer';
import { checkUser } from '../actions/userActions';
import { getLogin } from '../actions/loginActions';
import { logoutUser } from '../actions/logOutActions';
import { getBeach } from '../actions/beachActions';
import favsReducer from '../reducers/favsReducer';
import { getFavs } from '../actions/favsActions';
import { getList } from '../actions/listActions';
import listReducer from '../reducers/listReducer';

describe('userReducer', () => {
  it('returns the initial state', () => {
    expect(userReducer(undefined, {})).toEqual({
      loading: false,
      data: {},
      errorMSG: '',
      logged: false,
    });
  });

  it('returns the initial state', () => {
    const object = (userReducer(undefined, {}));
    expect(object.data).not.toBe(Object);
  });
});

describe('userReducer, checkUser', () => {
  it('updates the list of users', () => {
    expect(userReducer({}, checkUser(['Results']))).toBeInstanceOf(Object);
  });

  it('updates the list of users', () => {
    const object = userReducer({}, checkUser(['Results']));
    expect(object.data).not.toBe(null);
  });
});

describe('userReducer, getLogin', () => {
  it('updates the list of users', () => {
    expect(userReducer({}, getLogin(['Results']))).toBeInstanceOf(Object);
  });

  it('updates the list of users', () => {
    const object = userReducer({}, getLogin(['Results']));
    expect(object.data).not.toBe(null);
  });
});

describe('userReducer, logoutUser', () => {
  it('updates the list of users', () => {
    expect(userReducer({}, logoutUser(['Results']))).toBeInstanceOf(Object);
  });

  it('updates the list of users', () => {
    const object = userReducer({}, logoutUser(['Results']));
    expect(object.data).not.toBe(null);
  });
});

describe('beachReducer', () => {
  it('returns the initial state', () => {
    expect(beachReducer(undefined, {})).toEqual({
      loading: false,
      data: {},
      errorMSG: '',
    });
  });

  it('returns the initial state', () => {
    const object = beachReducer(undefined, {});
    expect(object.data).not.toBe(Object);
  });
});

describe('beachReducer, getBeach', () => {
  it('shows the beach details', () => {
    expect(beachReducer({}, getBeach(['Results']))).toBeInstanceOf(Object);
  });

  it('shows the beach details, negative outcome', () => {
    const object = beachReducer({}, getBeach(['Results']));
    expect(object.data).not.toBe(null);
  });
});

describe('favsReducer', () => {
  it('returns the initial state', () => {
    expect(favsReducer(undefined, {})).toEqual({
      data: {},
      errorMSG: '',
    });
  });

  it('returns the initial state, negative outcome', () => {
    const object = (favsReducer(undefined, {}));
    expect(object.data).not.toBe(Object);
  });
});

describe('favsReducer, getFavs', () => {
  it('gets a list of favourites', () => {
    expect(favsReducer({}, getFavs(['Result']))).toBeInstanceOf(Object);
  });

  it('gets a list of favourites, negative outcome', () => {
    const object = favsReducer({}, getFavs(['Result']));
    expect(object.data).not.toBe(null);
  });
});

describe('listReducer', () => {
  it('returns the initial state', () => {
    expect(listReducer(undefined, {})).toEqual({
      loading: false,
      data: null,
      errorMSG: '',
    });
  });

  it('returns the initial state, negative outcome', () => {
    const object = listReducer(undefined, {});
    expect(object.data).not.toBe(Object);
  });
});

describe('listReducer, getList', () => {
  it('updates list of beaches', () => {
    expect(listReducer({}, getList(['Results']))).toBeInstanceOf(Object);
  });

  it('updates the list of beaches, negative outcome', () => {
    const object = listReducer({}, getList(['Result']));
    expect(object.data).not.toBe(null);
  });
});

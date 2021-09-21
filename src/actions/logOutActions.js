import { setUser } from '../localStorage';

const USER_LOGEDOUT = 'USER_LOGEDOUT';

const logoutUser = () => (dispatch) => {
  setUser(null);
  dispatch({
    type: USER_LOGEDOUT,
  });
};
export { USER_LOGEDOUT, logoutUser };

const USER_PRESENT = 'USER_PRESENT';

const checkUser = (result) => (dispatch) => {
  dispatch({
    type: USER_PRESENT,
    payload: result,
  });
};

export { USER_PRESENT, checkUser };

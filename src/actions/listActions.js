import axios from 'axios';

const LIST_LOADING = 'LIST LOADING';
const LIST_FAIL = 'LIST FAIL';
const LIST_SUCCESS = 'LIST SUCCESS';

const getList = () => async (dispatch) => {
  try {
    dispatch({
      type: LIST_LOADING,
    });
    const result = await axios.get('https://calbeach.herokuapp.com/beaches');
    dispatch({
      type: LIST_SUCCESS,
      payload: result.data,
    });
  } catch (error) {
    dispatch({
      type: LIST_FAIL,
    });
  }
};

export {
  LIST_LOADING, LIST_FAIL, LIST_SUCCESS, getList,

};

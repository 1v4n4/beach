import axios from 'axios';

const LIST_LOADING = 'LIST LOADING';
const LIST_FAIL = 'LIST FAIL';
const LIST_SUCCESS = 'LIST SUCCESS';

const getList = () => async (dispatch) => {
  try {
    dispatch({
      type: LIST_LOADING,
    });
    const result = await axios.get('https://obscure-ravine-72601.herokuapp.com/beaches');
    console.log('beach list', result);
    dispatch({
      type: LIST_SUCCESS,
      payload: result.beaches,
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

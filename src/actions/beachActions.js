// import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';

const BEACH_FAIL = 'BEACH FAIL';
const BEACH_SUCCESS = 'BEACH SUCCESS';

const getBeach = (id) => async (dispatch) => {
  const data = { beach_id: id };
  const url = 'https://obscure-ravine-72601.herokuapp.com/favs';
  try {
    const result = await axios.get(url, data);
    // const dispatch = useDispatch();
    //  const list = useSelector((state) => state.list.data);
    // const beach = list.filter((beach) => beach.id === id);
    console.log('beach', result);
    dispatch({
      type: BEACH_SUCCESS,
      payload: result.data,
    });
  } catch (err) {
    console.log(err);
  }
};

export {
  BEACH_FAIL, BEACH_SUCCESS, getBeach,
};

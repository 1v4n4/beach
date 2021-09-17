import { useSelector, useDispatch } from 'react-redux';

const BEACH_FAIL = 'BEACH FAIL';
const BEACH_SUCCESS = 'BEACH SUCCESS';

const getBeach = (id) => {
  const dispatch = useDispatch();
  const list = useSelector((state) => state.list.data);
  const beach = list.filter((beach) => beach.id === id);
  if (beach) {
    dispatch({
      type: BEACH_SUCCESS,
      payload: beach,
    });
  } else {
    dispatch({
      type: BEACH_FAIL,
    });
  }
};

export {
  BEACH_FAIL, BEACH_SUCCESS, getBeach,
};

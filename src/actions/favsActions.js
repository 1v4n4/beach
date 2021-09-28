import axios from 'axios';

const FAV_CREATE_SUCCESS = 'FAV CREATE SUCCESS';
const FAV_CREATE_FAIL = 'FAV CREATE FAIL';
const FAVS_SUCCESS = 'FAVS SUCCESS';
const FAVS_FAIL = 'FAVS FAIL';
const FAV_DELETE_SUCCESS = 'FAVS DELETE SUCCESS';
const FAV_DELETE_FAIL = 'FAVS DELETE FAIL';

const url = 'https://calbeach.herokuapp.com/favs/';

const postFav = (userid, beachid) => async (dispatch) => {
  try {
    const data = { user_id: userid, beach_id: beachid };
    const result = await axios.post(url, data);
    dispatch({ type: FAV_CREATE_SUCCESS, payload: result.data.fav });
  } catch (err) {
    dispatch({ type: FAV_CREATE_FAIL });
  }
};

const deleteFav = (id, userid, beachid) => async (dispatch) => {
  try {
    const data = { id, user_id: userid, beach_id: beachid };
    const url = `https://calbeach.herokuapp.com/favs/${id}`;
    // eslint-disable-next-line
    const result = await axios.delete(url);
    dispatch({ type: FAV_DELETE_SUCCESS, payload: data });
  } catch (err) {
    dispatch({ type: FAV_DELETE_FAIL });
  }
};

const getFavs = (userid) => async (dispatch) => {
  try {
    const result = await axios.get(url);
    const favs = result.data.filter((fav) => fav.user_id === userid);
    dispatch({ type: FAVS_SUCCESS, payload: favs });
  } catch (err) {
    dispatch({ type: FAVS_FAIL });
  }
};

export {
  postFav, getFavs, deleteFav, FAV_DELETE_SUCCESS, FAV_DELETE_FAIL, FAVS_SUCCESS,
  FAVS_FAIL, FAV_CREATE_SUCCESS, FAV_CREATE_FAIL,
};

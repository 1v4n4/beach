import axios from 'axios';
// import { useSelector } from 'react-redux';

const FAV_CREATE_SUCCESS = 'FAV CREATE SUCCESS';
const FAV_CREATE_FAIL = 'FAV CREATE FAIL';
const FAVS_SUCCESS = 'FAVS SUCCESS';
const FAVS_FAIL = 'FAVS FAIL';
const FAV_DELETE_SUCCESS = 'FAVS DELETE SUCCESS';
const FAV_DELETE_FAIL = 'FAVS DELETE FAIL';

const url = 'https://obscure-ravine-72601.herokuapp.com/favs/';

const postFav = (userid, beachid) => async (dispatch) => {
  try {
    console.log(beachid);
    console.log('in fav create', userid, beachid);
    const data = { user_id: userid, beach_id: beachid };
    console.log('data', data);
    const result = await axios.post(url, data);
    console.log('fav', result);
    dispatch({ type: FAV_CREATE_SUCCESS, payload: result.data.fav });
  } catch (err) {
    console.error(err);
    dispatch({ type: FAV_CREATE_FAIL });
  }
};

const deleteFav = (id, userid, beachid) => async (dispatch) => {
  try {
    console.log(id, userid, beachid);
    /* eslint-disable */
    const data = {id: id, user_id: userid, beach_id:beachid};
    console.log('dataa', data);
    const url = 'https://obscure-ravine-72601.herokuapp.com/favs/' + id;
    const result = await axios.delete(url);
    console.log('deletefav', result);
    dispatch({ type: FAV_DELETE_SUCCESS, payload: data });
  } catch (err) {
    console.error(err);
    dispatch({ type: FAV_DELETE_FAIL });
  }
};

const getFavs = (userid) => async (dispatch) => {
  try {
    const data = { user_id: userid };
    const result = await axios.get(url, data);
    console.log('favs', result.data);
    dispatch({ type: FAVS_SUCCESS, payload: result.data });
  } catch (err) {
    console.error(err);
    dispatch({ type: FAVS_FAIL });
  }
};

export {
  postFav, getFavs, deleteFav, FAV_DELETE_SUCCESS, FAV_DELETE_FAIL, FAVS_SUCCESS,
  FAVS_FAIL, FAV_CREATE_SUCCESS, FAV_CREATE_FAIL,
};

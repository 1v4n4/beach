import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import postFav from '../api';
import { checkUser } from '../actions/userActions';

const Beach = () => {
  const user = useSelector((state) => state.user);
  const location = useLocation();
  const dispatch = useDispatch();
  const { beachid } = location.state;
  const userid = user.data.id;

  const handleClick = () => {
    const url = 'https://obscure-ravine-72601.herokuapp.com/favs';
    const data = { user_id: userid, beach_id: beachid };
    const fav = postFav(url, data);
    console.log('fav', fav);
    if (fav.id) {
      dispatch(checkUser);
    }
  };

  return (
    <div>
      <p>Beach</p>
      <button type="button" onClick={handleClick}>Fav</button>
    </div>
  );
};

export default Beach;

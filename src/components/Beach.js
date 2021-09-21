import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { postFav } from '../helper';

import { getBeach } from '../actions/beachActions';
import { getUser } from '../localStorage';
import { checkUser } from '../actions/userActions';

const Beach = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const { beachid } = location.state;
  const logged = useSelector((state) => state.user.logged);

  const FetchBeach = () => {
    dispatch(getBeach());
  };

  useEffect(() => {
    FetchBeach();
  }, []);
  const FetchUser = () => {
    const result = getUser() || {};
    if (result.id) {
      dispatch(checkUser(result));
    }
  };

  useEffect(() => {
    FetchUser();
  }, []);

  const user = useSelector((state) => state.user);
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
      { logged
      && <button type="button" onClick={handleClick}>Fav</button>}
    </div>
  );
};

export default Beach;

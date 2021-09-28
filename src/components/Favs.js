import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import MkFav from './MkFav';
import DelFav from './DelFav';
import { getFavs } from '../actions/favsActions';
import { getUser } from '../localStorage';
import { setFavState } from '../helper';

const Favs = ({ beachid }) => {
  const dispatch = useDispatch();
  const user = getUser();
  const userid = user.id;

  const FetchFavs = () => {
    dispatch(getFavs(userid));
  };

  useEffect(() => {
    FetchFavs();
  }, []);

  const favs = useSelector((state) => state.favs).data;
  const favState = setFavState(favs, userid, beachid);

  const array = favs
    .filter((fav) => fav.user_id === userid && fav.beach_id === beachid);

  const { id } = array[0] || 0;

  return (
    <div>
      { !favState && <MkFav beachid={beachid} /> }
      { favState && <DelFav id={id} userid={userid} beachid={beachid} /> }
    </div>
  );
};

Favs.propTypes = {
  beachid: PropTypes.number.isRequired,
};

export default Favs;

import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import MkFav from './MkFav';
import DelFav from './DelFav';
import { setFavState } from '../helper';

const Favs = ({ beachid }) => {
  const user = useSelector((state) => state.user);
  const favs = useSelector((state) => state.favs).data;
  console.log('infavs', favs);
  const userid = user.data.id;

  const favState = setFavState(favs, userid, beachid);
  console.log('favState', favState);

  const array = favs
    .filter((fav) => fav.user_id === userid && fav.beach_id === beachid, 10);
  console.log('array', array);

  const { id } = array[0] || 0;
  console.log('infavs', id, userid, beachid);

  return (
    <div>
      { !favState && <MkFav userid={userid} beachid={beachid} /> }
      { favState && <DelFav id={id} userid={userid} beachid={beachid} /> }
    </div>
  );
};

Favs.propTypes = {
  beachid: PropTypes.number.isRequired,
};

export default Favs;

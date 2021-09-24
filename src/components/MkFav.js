import React from 'react';
import { useDispatch } from 'react-redux';
import { PropTypes } from 'prop-types';
import { postFav, getFavs } from '../actions/favsActions';

const MkFav = ({ userid, beachid }) => {
  console.log('in mk', userid, beachid);

  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(postFav(userid, beachid));
    dispatch(getFavs(userid));
  };
  return (
    <button type="button" onClick={handleClick}>Fav</button>
  );
};

MkFav.propTypes = {
  userid: PropTypes.number.isRequired,
  beachid: PropTypes.number.isRequired,
};

export default MkFav;

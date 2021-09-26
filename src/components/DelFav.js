import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { AiFillStar } from 'react-icons/ai';
import { deleteFav, getFavs } from '../actions/favsActions';

const DelFav = ({ id, userid, beachid }) => {
  const dispatch = useDispatch();
  console.log('in del', id, userid, beachid);
  const handleClick = () => {
    dispatch(deleteFav(id, userid, beachid));
    getFavs();
  };
  return (
    <button type="button" className="fav-btn bg-transparent" onClick={handleClick}>
      <AiFillStar />
      <span className="text-light">a</span>
    </button>
  );
};

export default DelFav;

DelFav.propTypes = {
  id: PropTypes.number.isRequired,
  userid: PropTypes.number.isRequired,
  beachid: PropTypes.number.isRequired,
};

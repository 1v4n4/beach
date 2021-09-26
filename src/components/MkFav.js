import React from 'react';
import { useDispatch } from 'react-redux';
import { PropTypes } from 'prop-types';
import { AiOutlineStar } from 'react-icons/ai';
import { postFav } from '../actions/favsActions';
import { toggleFav } from '../helper';

const MkFav = ({ userid, beachid }) => {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(postFav(userid, beachid));
    toggleFav();
  };
  return (
    <button type="button" className="fav-btn bg-transparent" onClick={handleClick}>
      <AiOutlineStar />
      <span className="text-light">a</span>
    </button>
  );
};

MkFav.propTypes = {
  userid: PropTypes.number.isRequired,
  beachid: PropTypes.number.isRequired,
};

export default MkFav;

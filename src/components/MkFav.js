import React from 'react';
import { useDispatch } from 'react-redux';
import { PropTypes } from 'prop-types';
import { AiOutlineStar } from 'react-icons/ai';
import { postFav } from '../actions/favsActions';
import { toggleFav } from '../helper';
import { getUser } from '../localStorage';

const MkFav = ({ beachid }) => {
  const user = getUser();
  const userid = user.id;
  const dispatch = useDispatch();
  const handleClick = () => {
    console.log('eeeeej');
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
  beachid: PropTypes.number.isRequired,
};

export default MkFav;

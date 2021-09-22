import React from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { postFav, deleteFav } from '../actions/favsActions';

const Favs = ({ beachid }) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const favs = useSelector((state) => state.favs);
  const userid = user.data.id;

  const handleClick = () => {
    const array = favs.data
      .filter((fav) => fav.user_id === userid && fav.beach_id === parseInt(beachid, 10));
    console.log(typeof (beachid));
    console.log('ooo', array);
    if (!array.length) {
      dispatch(postFav(userid, beachid));
    } else {
      const { id } = favs.data.filter((fav) => fav.user_id === 1 && fav.beach_id === 1)[0];
      dispatch(deleteFav(id, userid, beachid));
    }
  };
  return (
    <div>
      <button type="button" onClick={handleClick}>Fav</button>
    </div>
  );
};

Favs.propTypes = {
  beachid: PropTypes.string.isRequired,
};

export default Favs;

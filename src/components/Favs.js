import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
// import { postFav, deleteFav } from '../actions/favsActions';
import MkFav from './MkFav';
import DelFav from './DelFav';

const Favs = ({ beachid }) => {
  // const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const favs = useSelector((state) => state.favs).data;
  console.log('infavs', favs);
  const userid = user.data.id;

  const array = favs
    .filter((fav) => fav.user_id === userid && fav.beach_id === parseInt(beachid, 10));
  console.log('array', array);

  const { id } = array[0] || 0;
  console.log('infavs', id, userid, beachid);

  // const handleClick = () => {
  //   const array = favs.data
  //     .filter((fav) => fav.user_id === userid && fav.beach_id === parseInt(beachid, 10));
  //   console.log(typeof (beachid));
  //   console.log('ooo', array);
  //   if (!array.length) {
  //     dispatch(postFav(userid, beachid));
  //   } else {
  //     const { id } = array[0];
  //     dispatch(deleteFav(id, userid, beachid));
  //   }
  // };

  return (
    <div>
      { !array.length && <MkFav userid={userid} beachid={beachid} /> }
      { array.length && <DelFav id={id} userid={userid} beachid={beachid} /> }
    </div>
  );
};

Favs.propTypes = {
  beachid: PropTypes.number.isRequired,
};

export default Favs;

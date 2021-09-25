import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { getBeach } from '../actions/beachActions';
import Favs from './Favs';

const Beach = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const { beachid } = location.state;
  console.log('bb', typeof (beachid));
  /* eslint-disable */
  const b = parseInt(beachid);
  console.log('b', typeof(b));
  const logged = useSelector((state) => state.user.logged);

  const FetchBeach = () => {
    dispatch(getBeach(b));
  };

  useEffect(() => {
    FetchBeach();
  }, []);

  return (
    <div>
      <p>{b}</p>
      { logged
      && <Favs beachid={b} />}
    </div>
  );
};

export default Beach;

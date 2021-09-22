import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { getBeach } from '../actions/beachActions';
import Favs from './Favs';

const Beach = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const { beachid } = location.state;
  const logged = useSelector((state) => state.user.logged);

  const FetchBeach = () => {
    dispatch(getBeach(beachid));
  };

  useEffect(() => {
    FetchBeach();
  }, []);

  return (
    <div>
      <p>{beachid}</p>
      { logged
      && <Favs beachid={beachid} />}
    </div>
  );
};

export default Beach;

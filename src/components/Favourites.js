import React from 'react';
import { useSelector } from 'react-redux';

const Favourites = () => {
  const favourites = useSelector((state) => state.favs).data;
  console.log('inurites', favourites);
  return (
    <div className="favourites-div">
      <h1>Your favourite places</h1>
    </div>
  );
};

export default Favourites;

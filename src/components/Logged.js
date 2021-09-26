import React from 'react';
import { getUser } from '../localStorage';

const Logged = () => {
  const user = getUser();

  return (
    <h2 className="nav-link bg-light text-center loged">
      Loged in as:
      {' '}
      {user.name}
    </h2>
  );
};

export default Logged;

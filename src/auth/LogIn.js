import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { getLogin } from '../actions/loginActions';
import { getUser } from '../localStorage';
import { getFavs } from '../actions/favsActions';
import { getList } from '../actions/listActions';

const LogIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const history = useHistory();

  const handleSubmit = (event) => {
    dispatch(getLogin(email, password, history));
    if (getUser()) {
      setTimeout(() => {
        const user = getUser();
        const userid = user.id;
        dispatch(getFavs(userid));
        dispatch(getList());
      }, 1000);
    }
    event.preventDefault();
  };

  return (
    <div>
      <div id="forAlert" className="text-center text-danger fs-5 mt-3" />
      <form className="d-flex flex-column mt-5">
        <input
          className="mx-auto my-3 ps-2"
          type="email"
          value={email}
          name="log-in-mail"
          placeholder="Enter email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="mx-auto mb-3 ps-2"
          type="password"
          value={password}
          name="log-in-mail"
          placeholder="Enter password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <button type="submit" className="mx-auto btn-secondary sub-btn" onClick={handleSubmit}>Log in </button>
      </form>
    </div>
  );
};

export default LogIn;

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { getLogin } from '../actions/loginActions';

const LogIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const history = useHistory();

  const handleSubmit = (event) => {
    console.log('onsubmit');
    console.log(email, password);
    dispatch(getLogin(email, password));
    history.push('/');
    event.preventDefault();
  };

  return (
    <div>
      <form className="login-form">
        <p>{email}</p>
        <input
          type="email"
          value={email}
          name="log-in-mail"
          placeholder="Enter email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <p>{password}</p>
        <input
          type="password"
          value={password}
          name="log-in-mail"
          placeholder="Enter password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" onClick={handleSubmit}> Submit </button>
      </form>
    </div>
  );
};

export default LogIn;

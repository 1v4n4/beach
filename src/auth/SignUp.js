import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { getSignup } from '../actions/signupActions';
import { msgs } from '../helper';

const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');

  const dispatch = useDispatch();
  const history = useHistory();

  const handleClick = (event) => {
    if (name === '' || email === '' || password === '' || passwordConfirmation === '') {
      console.log('empty');
      msgs('All data must be filled in. Please try again');
    } else
    if (password !== passwordConfirmation) {
      msgs('Passwords do not match. Please try again');
    } else {
      console.log(name, email, password, passwordConfirmation);
      dispatch(getSignup(name, email, password, passwordConfirmation));
      history.push('/');
      event.preventDefault();
    }
  };
  return (
    <div>
      <div id="forAlert" className="alert" />
      <div />
      <form className="d-flex flex-column mt-5">

        <input
          className="mx-auto mb-3 ps-2"
          type="text"
          value={name}
          name="sign-up-name"
          placeholder="Enter name"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          className="mx-auto mb-3 ps-2"
          type="email"
          value={email}
          name="sign-up-mail"
          placeholder="Enter email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="mx-auto mb-3 ps-2"
          type="password"
          value={password}
          name="sign-up-mail"
          placeholder="Enter password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          className="mx-auto mb-3 ps-2"
          type="password"
          value={passwordConfirmation}
          name="sign-up-mail"
          placeholder="Confirm password"
          onChange={(e) => setPasswordConfirmation(e.target.value)}
        />
        <button type="button" className="mx-auto btn-secondary sub-btn" onClick={handleClick}> Submit </button>

      </form>
    </div>
  );
};

export default SignUp;

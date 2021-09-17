import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

const initialValues = {
  name: '',
  email: '',
  password: '',
  password_confirmation: '',
};

const SignUp = () => {
  const [values, setValues] = useState(initialValues);
  const user = useSelector((state) => state.user);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {

  };

  return (
    <div>
      <p>{user}</p>
      <form className="sign-up-form">
        <input
          type="text"
          value={values.name}
          name="sign-up-name"
          placeholder="Enter email"
          onChange={handleChange}
        />
        <input
          type="text"
          value={values.email}
          name="sign-up-mail"
          placeholder="Enter email"
          onChange={handleChange}
        />
        <input
          type="text"
          value={values.password}
          name="sign-up-mail"
          placeholder="Enter email"
          onChange={handleChange}
        />
        <input
          type="text"
          value={values.password_confirmation}
          name="sign-up-mail"
          placeholder="Enter email"
          onChange={handleChange}
        />
        <button type="submit" onSubmit={() => handleSubmit()}> Submit </button>

      </form>
    </div>
  );
};

export default SignUp;

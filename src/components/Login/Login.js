import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { fetchUsersAC } from '../../Redux/actionCreators/authAC';

function Login() {
  const dispatch = useDispatch();
  const history = useHistory();
  const [inputs, setInputs] = useState({ email: '', password: '' });
  const { email, password } = inputs;

  const handleChange = ({ target: { name, value } }) => {
    setInputs({ ...inputs, [name]: value });
  };

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   fetch('https://jsonplaceholder.typicode.com/users/1')
  //     .then((res) => res.json())
  //     .then((serverData) => {
  //       if (serverData) {
  //         dispatch(authSucsessAC(serverData));
  //         return history.push('/dashboard');
  //       }
  //       return null;
  //     });
  // };
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(fetchUsersAC({ password, email }));
    history.push('/dashboard');
  };

  return (
    <form onSubmit={handleSubmit}>
    <label>
        Email:
        <input name='email' type='email' required onChange={handleChange} value={ email }/>
    </label>
    <label>
        Password:
        <input name='password' type='password' required onChange={handleChange} value={ password } />
    </label>
    <button type="submit">SignIn</button>
</form>
  );
}

export default Login;

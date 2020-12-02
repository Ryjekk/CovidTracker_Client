import React, { useContext, useState } from 'react';
import './Login.css';
import { appContext } from '../../App';
import { Redirect } from 'react-router';
const remote = require('../../Remote/remote');

const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const { setUser, loggedIn, setLoggedIn } = useContext(appContext);
  const submitHandler = e => {
    e.preventDefault();
    remote.login({ email, password }, data => {
      setUser(data);
      console.log(data);
      localStorage.setItem('InfectionInspectionUser', JSON.stringify(data));
      setLoggedIn(true);
    });
  };

  if (loggedIn) {
    return <Redirect to='/reader' />;
  }

  return (
    <div className='login'>
      <div>
        <h1 className='heading_login'>Welcome</h1>
        <p className='paragraph_login'>Log in to <span className='novid'>Novid</span> here.</p>
      </div>
      <form onSubmit={submitHandler}>
        <div className='box_input'>
          <input
            className='inputs_main'
            type='email'
            placeholder='Email'
            required
            onChange={e => setEmail(e.target.value)}
          />
          <input
            className='inputs_main'
            type='password'
            placeholder='Password'
            required
            onChange={e => setPassword(e.target.value)}
          />
          <a href='/retrievepassword'>Forgot password?</a>
          <button type='submit' className='primary_btn_black'>
            Log in
          </button>
        </div>
      </form>
      <p className='registerNow_text'>
        Don't have an account? <a href='/register'>Register Now</a>
      </p>
    </div>
  );
};

export default Login;

//which props does this one need? It needs an eventlistener that listens for changes
//it needs an onclick function which submits for check

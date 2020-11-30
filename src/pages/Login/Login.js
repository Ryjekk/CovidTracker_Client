import React, { useContext, useState } from 'react';
import './Login.css';
import { appContext } from '../../App';
import { BrowserRouter } from 'react-router-dom';
import { Redirect } from 'react-router';
const remote = require('../../Remote/remote');

const Login = props => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const { setUser } = useContext(appContext);
  const [redirect, setRedirect] = useState(false);
  const submitHandler = e => {
    e.preventDefault();
    console.log(email, password, '------------');
    //logic that redirects depending on loginSuccess
    remote.login({ email, password }, data => {
      setUser(data);
      setRedirect(true);
    });
  };

  if (redirect) {
    return <Redirect to='/profile' />;
  }

  return (
    <div className='login'>
      <div>
        <h1 className='heading_login'>Welcome</h1>
        <p className='paragraph_login'>Sign in to our app here.</p>
      </div>
      <form onSubmit={submitHandler}>
        <input
          type='email'
          placeholder='email'
          required
          onChange={e => setEmail(e.target.value)}
        />
        <br />
        <input
          type='password'
          placeholder='password'
          required
          onChange={e => setPassword(e.target.value)}
        />
        <br />
        <a href='/retrievepassword'>Forgot password?</a>
        <br />
        <button type='submit'>Log in</button>
      </form>
      <p>
        Don't have an account? <a href='/register'>Register Now</a>
      </p>
    </div>
  );
};

export default Login;

//which props does this one need? It needs an eventlistener that listens for changes
//it needs an onclick function which submits for check

import React, { useContext } from 'react';
import './Login.css';
import { appContext } from '../../App';

const Login = props => {
  let email;
  let password;
  const { setInfo } = useContext(appContext);
  const setUser = () => {
    //axios.post
    //setInfo(the info returned from axios.post)
  };
  return (
    <div className='login'>
      <h1>Welcome</h1>
      <p>sign in to our app here.</p>
      <form onSubmit={props.handleSubmit}>
        <input type='email' placeholder='email' required />
        <br />
        <input type='password' placeholder='password' required />
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

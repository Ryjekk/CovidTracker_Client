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
      <div>
        <h1 className='heading_login'>Welcome</h1>
        <p className='paragraph_login'>Sign in to our app here.</p>
      </div>
      <form onSubmit={props.handleSubmit}>
        <div className='box_input'>
          <input type='email' placeholder='email' className="inputs_main" required />
          <input type='password' placeholder='password' className='inputs_main' required />
          <a href='/retrievepassword' className='forgot_password'>Forgot password?</a>
        </div>
        <button type='submit' className='primary_btn_black'>Log in</button>
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

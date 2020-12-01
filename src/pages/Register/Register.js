import './Register.css';
import React, { useState, useContext } from 'react';
import { Redirect } from 'react-router';
import { appContext } from '../../App';
const remote = require('../../remote/remote');

const Register = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [companyId, setCompanyId] = useState('');
  const [floor, setFloor] = useState('');
  const [role, setRole] = useState('basic');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [formSent, setFormSent] = useState(false);

  const { setLoggedIn } = useContext(appContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== repeatPassword) {
      return alert('Passwors does not match');
    }
    remote.register(
      { firstName, lastName, email, password, companyId, floor, role },
      (res) => {
        console.log(res);
        setLoggedIn(false);
        setFormSent(true);
        setPassword('');
        setRepeatPassword('');
        setRole('');
        setFloor('');
        setCompanyId('');
        setEmail('');
        setFirstName('');
        setLastName('');
        setRepeatPassword('');
      }
    );
  };

  if (formSent) {
    return <Redirect to="/login" />;
  }

  return (
    <div className="register">
      <div>
        <h1 className="heading_login"> Register </h1>
        <p className="paragraph_login">Sign up for our app here</p>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="box_input">
          <input
            id="first_name"
            type="text"
            placeholder="First name *"
            className="inputs_main"
            required
            onChange={(e) => {
              setFirstName(e.target.value);
            }}
            value={firstName}
          />
          <input
            id="last_name"
            type="text"
            placeholder="Last name *"
            className="inputs_main"
            required
            onChange={(e) => {
              setLastName(e.target.value);
            }}
            value={lastName}
          />
          <input
            type="email"
            id="email"
            placeholder="Email *"
            className="inputs_main"
            required
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            value={email}
          />
          <input
            id="password"
            type="password"
            placeholder="Password *"
            className="inputs_main"
            required
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            value={password}
          />
          <input
            id="repeat_password"
            type="password"
            placeholder="Repeat Password *"
            className="inputs_main"
            required
            onChange={(e) => {
              setRepeatPassword(e.target.value);
            }}
            value={repeatPassword}
          />
          <input
            id="companyId"
            type="text"
            placeholder="Comapny Id *"
            className="inputs_main"
            required
            onChange={(e) => {
              setCompanyId(e.target.value);
            }}
            value={companyId}
          />
          <input
            id="floor"
            type="text"
            placeholder="Floor *"
            className="inputs_main"
            required
            onChange={(e) => {
              setFloor(e.target.value);
            }}
            value={floor}
          />
        </div>
        <button type="submit" className="primary_btn_black">
          Submit
        </button>
      </form>
      <p className="registerNow_text">
        Have an account? <a href="/login">LogIn here</a>
      </p>
    </div>
  );
};

export default Register;

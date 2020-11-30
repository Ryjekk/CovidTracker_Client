import './Register.css';
import React, { useState } from 'react';
const remote = require('../../Remote/remote');

const Register = () => {
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [companyId, setCompanyId] = useState();
  const [floor, setFloor] = useState();
  const [role, setRole] = useState('basic');
  const [repeatPassword, setRepeatPassword] = useState();

  const handleSubmit = e => {
    e.preventDefault();
    if (password !== repeatPassword) {
      return alert('Passwors does not match');
    }
    remote.register(
      { firstName, lastName, email, password, companyId, floor, role },
      res => {
        console.log(res);
        setPassword('');
        setRepeatPassword('');
        setRole('');
        setFloor('');
        setCompanyId('');
        setEmail('');
        setFirstName('');
        setLastName('');
      }
    );
  };

  return (
    <div className='register'>
      <h1> Register </h1>
      <p>Sign up for our app here</p>
      <form onSubmit={handleSubmit}>
        <label htmlFor='first_name'>Enter first name here:</label>
        <br />
        <input
          id='first_name'
          type='text'
          required
          onChange={e => {
            setFirstName(e.target.value);
          }}
          value={firstName}
        />
        <br />
        <br />
        <label htmlFor='last_name'>Enter last name here:</label>
        <br />
        <input
          id='last_name'
          type='text'
          required
          onChange={e => setLastName(e.target.value)}
          value={lastName}
        />
        <br />
        <br />
        <label htmlFor='email'>Enter email here:</label>
        <br />
        <input
          type='email'
          id='email'
          required
          onChange={e => {
            setEmail(e.target.value);
          }}
          value={email}
        />
        <br />
        <br />
        <label htmlFor='password'>Enter password here:</label>
        <br />
        <input
          id='password'
          type='password'
          required
          onChange={e => {
            setPassword(e.target.value);
          }}
          value={password}
        />
        <br />
        <br />
        <label htmlFor='repeat_password'>Repeat password here:</label>
        <br />
        <input
          id='repeat_password'
          type='password'
          required
          onChange={e => {
            setRepeatPassword(e.target.value);
          }}
          value={repeatPassword}
        />
        <br />
        <br />
        <label htmlFor='floor'>Floor</label>
        <br />
        <input
          type='text'
          id='floor'
          onChange={e => setFloor(e.target.value)}
          value={floor}
        />
        <br />
        <br />
        <label htmlFor='companyId'>Enter your company id here:</label>
        <br />
        <input
          id='companyId'
          type='text'
          required
          onChange={e => {
            setCompanyId(e.target.value);
          }}
          value={companyId}
        />
        <br />
        <br />
        <label htmlFor='companyId'>Enter your role here:</label>
        <br />
        <input
          id='role'
          type='text'
          required
          onChange={e => {
            setRole(e.target.value);
          }}
          value={role}
        />
        <br />
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
};

export default Register;

import React, { useState, useContext, createContext } from 'react';
import './Dashboard.css';
import { appContext } from '../../App';
const remote = require('../../Remote/remote');
const axios = require('axios');
const serverUrl = 'http://localhost:8080/api/';
const qs = require('querystring');

const Dashboard = () => {
  const { users } = useContext(appContext);
  const [notified, setNotified] = useState(false);
  const registerPositiveTest = () => {
    axios
      .put(
        `${serverUrl}/users/positivetest`,
        qs.stringify({
          _id: users._id,
        })
      )
      .then(() => {
        setNotified(true);
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <div className='dashboard'>
      <h1> Dashboard </h1>
      <button onClick={registerPositiveTest} className='primary_btn_black'>
        Register Positive Covid test
      </button>
      {notified && (
        <p>People you have been in contact with are now being warned!</p>
      )}
      <p>
        List of rooms visited today with the opportunity to delete and to view
        other days. (Arrow back to yesterday)
      </p>
    </div>
  );
};

export default Dashboard;

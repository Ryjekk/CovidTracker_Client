import React, { useState, useContext, createContext } from 'react';
import './Dashboard.css';
import Header from "../../Components/Header/Header";
import { appContext } from '../../App';
const remote = require('../../remote/remote');
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
     <>
      <Header/>
      <div className='dashboard'>
        <h1> Dashboard </h1>
        <button onClick={registerPositiveTest} className='primary_btn_black'>
          Register Positive Covid test
        </button>
        {notified && (
          <p>People you have been in contact with are now being warned!</p>
        )}
        <div className='room-container'>
          <h1>These are the rooms you have visited:</h1>
          {users.visits.map(visit => {
            return (
              <div>
                <h1>Some name</h1>
                <p>RoomId: {visit._id}</p>
                <p>Date:{visit.date}</p>
                <p>Time: {visit.time}</p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Dashboard;

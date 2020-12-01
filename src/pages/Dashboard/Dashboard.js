import React, { useState, useContext, createContext } from 'react';
import './Dashboard.css';
import Header from '../../Components/Header/Header';
import { appContext } from '../../App';
import Calendar from 'react-calendar';
import ReactModal from 'react-modal';
import { callbackify } from 'util';

const axios = require('axios');
const serverUrl = 'http://localhost:8080/api/';
const qs = require('querystring');

const Dashboard = () => {
  const { users, rooms } = useContext(appContext);
  const [notified, setNotified] = useState(false);
  const [calendarDate, setCaldarDate] = useState(new Date());
  const [calendarShown, setCalendarShown] = useState(false);
  const modalStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',

      transform: 'translate(-50%, -50%)',
    },
  };

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

  const visitListMaker = (date, users) => {
    const roomsToBeDisplayed = users.visits.filter(visit => {
      return (
        visit.date ===
        `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`
      );
    });
    if (
      new Date().toString() === date.toString() &&
      roomsToBeDisplayed.length === 0
    ) {
      return <h1>You have not entered any visited rooms today.</h1>;
    }
    if (roomsToBeDisplayed.length === 0) {
      return (
        <h1>
          You did not visit any roooms on the date: {date.getDate() + 1}/
          {date.getMonth() + 1}/{date.getFullYear()}
        </h1>
      );
    }
    const roomsWithNames = findNames(roomsToBeDisplayed);
    return roomsWithNames.map((visits, index) => makeJSXRooms(visits, index));
  };

  const makeJSXRooms = (visit, index) => {
    return (
      <div key={index}>
        <h1>{visit.name}</h1>
        <p>RoomId: {visit._id}</p>
        <p>Date:{visit.date}</p>
        <p>Time: {visit.time}</p>
      </div>
    );
  };

  const findNames = roomList => {
    const roomsWithNames = roomList.map(room => {
      room.name = rooms.filter(compRoom => {
        return room._id === compRoom._id;
      })[0].name;
      return room;
    });
    return roomsWithNames;
  };

  return (
    <div className='dashboard'>
      <Header />
      <h1> Dashboard </h1>
      <button onClick={registerPositiveTest} className='primary_btn_black'>
        Register Positive Covid test
      </button>
      {notified && (
        <p>People you have been in contact with are now being warned!</p>
      )}

      <ReactModal isOpen={calendarShown} style={modalStyles}>
        <Calendar
          onChange={date => {
            setCaldarDate(date);
            setCalendarShown(false);
          }}
          value={calendarDate}
        />
        <button
          className='primary_btn_black'
          onClick={() => setCalendarShown(false)}
        >
          Click to hide calendar
        </button>
      </ReactModal>
      <div className='room-container'>
        <h1>Visited Rooms</h1>
        <p>Date: {calendarDate.toDateString()}</p>
        {visitListMaker(calendarDate, users)}
        <button
          onClick={() => setCalendarShown(true)}
          className='primary_btn_black'
        >
          Change date
        </button>
      </div>
    </div>
  );
};

export default Dashboard;

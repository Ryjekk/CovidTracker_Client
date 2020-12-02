import React, { useState, useContext, createContext, useEffect } from 'react';
import './Dashboard.css';
import Header from '../../Components/Header/Header';
import { appContext } from '../../App';
import Calendar from 'react-calendar';
import ReactModal from 'react-modal';
import Banner from '../../Components/Banner';
const remote = require('../../Remote/remote');
const axios = require('axios');
const serverUrl = 'http://localhost:8080/api/';
const qs = require('querystring');

const Dashboard = () => {
  const { users, setUser } = useContext(appContext);
  const [rooms, setRooms] = useState([]);
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

  useEffect(() => {
    remote.getAllRooms(setRooms);
  }, []);

  const registerPositiveTest = () => {
    axios
      .put(
        `${serverUrl}/users/positivetest`,
        qs.stringify({
          _id: users._id,
        })
      )
      .then(res => {
        setUser(res.data);
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
          You did not visit any roooms on the date: {date.getDate()}/
          {date.getMonth() + 1}/{date.getFullYear()}
        </h1>
      );
    }
    const roomsWithNames = findNames(roomsToBeDisplayed);
    return roomsWithNames.map((visits, index) => makeJSXRooms(visits, index));
  };

  const deleteRoom = e => {
    console.log(e.target.value);
    remote.deleteRoom([e.target.value], users, setUser);
  };

  const makeJSXRooms = (visit, index) => {
    const dateArr = visit.date.split('/');
    const date = `${dateArr[0]}/${parseInt(dateArr[1]) + 1}/${dateArr[2]}`;

    return (
      <div key={index} className='card_dashboard'>
        <h2 className='card_dashboard_heading'>{visit.name}</h2>
        <p>Floor: {visit.floor}</p>
        <p>Room ID: {visit.roomId}</p>
        <div className='card_dashboard_timeBox'>
          <p className='card_dashboard_date'>
            Visited:
            <strong className='card_dashboard_strong'>{date}</strong>
          </p>
          <p className='card_dashboard_time'>
            at:
            <strong className='card_dashboard_strong'>{visit.time}</strong>
          </p>
        </div>
        <button
          className='primary_btn_white_small'
          value={visit._id}
          onClick={deleteRoom}
        >
          Delete Room
        </button>
      </div>
    );
  };

  const findNames = roomList => {
    const roomsWithNames = roomList.map(room => {
      const roomDbEntry = rooms.filter(compRoom => {
        return room._id === compRoom._id;
      })[0];
      room.name = roomDbEntry.name;
      room.floor = roomDbEntry.floor;
      room.roomId = roomDbEntry.roomId;
      return room;
    });
    return roomsWithNames;
  };

  if (rooms.length === 0) {
    return <h1>Loading rooms..</h1>;
  }

  return (
    <>
      <Banner />
      <Header />
      <div className='dashboard'>
        <h3 className='heading_medium remove_margin_bottom'>
          {' '}
          Welcome In Your Dashboard{' '}
        </h3>
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
          <div className='textBox_dashboard'>
            <div className='heading_small margin_room_text'>Visited Rooms</div>
            <p className='date_dashboard'>
              Date: {calendarDate.toDateString()}
            </p>
          </div>
          <div className='wrapper_card_dashboard'>
            {visitListMaker(calendarDate, users)}
          </div>
          <div className='btn_wrapper_center'>
            <button
              onClick={() => setCalendarShown(true)}
              className='primary_btn_black btn_medium'
            >
              Change date
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;

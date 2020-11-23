import React, { useState } from 'react';
import './Main.css';
import RoomSelect from '../RoomSelect/RoomSelect';

const testRooms = [
  { roomId: 1001, roomName: 'Technium', checked: false },
  { roomId: 2, roomName: 'BongoRoom', checked: false },
  { roomId: 3, roomName: 'Kitchen', checked: true },
];

const Main = (props) => {
  const [rooms, setRooms] = useState(testRooms);
  const [filter, setFilter] = useState('');

  const filterCheck = (room) => {
    const patternString = '.*' + filter + '.*';
    const pattern = new RegExp(patternString, 'gi');
    if (pattern.test(room.roomId) || pattern.test(room.roomName)) {
      return true;
    }
    return false;
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log('About to fetch!');
    const payload = {};
    payload.personId = 3;
    payload.rooms = rooms
      .filter((room) => room.checked)
      .map((room) => {
        return {
          roomId: room.roomId,
          time: '14:45',
        };
      });
    console.log({ payload });
    const requestOptions = {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    };
    fetch('http://localhost:8080/api/employeeModel', requestOptions)
      .then((res) => res.json())
      .then((json) => console.log(json));
  };

  return (
    <div className="main">
      <form onSubmit={submitHandler}>
        <label>
          {'Search: '}
          <input
            type="text"
            name="name"
            onChange={(e) => setFilter(e.target.value)}
          />
        </label>
        {rooms
          .filter((el) => filterCheck(el))
          .map((room) => {
            return (
              <RoomSelect
                rooms={rooms}
                setRooms={setRooms}
                room={room}
              ></RoomSelect>
            );
          })}
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default Main;

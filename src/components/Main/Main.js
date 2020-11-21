import React, { useState } from 'react';
import './Main.css';
import RoomSelect from '../RoomSelect/RoomSelect';

const testRooms = [
  { roomID: 1001, roomName: 'Technium', checked: false },
  { roomID: 2, roomName: 'BongoRoom', checked: false },
  { roomID: 3, roomName: 'Kitchen', checked: true },
];

const Main = (props) => {
  const [rooms, setRooms] = useState(testRooms);
  const [filter, setFilter] = useState('');

  const filterCheck = (room) => {
    const patternString = '.*' + filter + '.*';
    const pattern = new RegExp(patternString, 'gi');
    if (pattern.test(room.roomID) || pattern.test(room.roomName)) {
      return true;
    }
    return false;
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(rooms);
    console.log(e);
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

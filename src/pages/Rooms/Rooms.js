import React, { useContext } from 'react';
import { appContext } from '../../App';
import './Rooms.css';
import { getAllRooms, getCheckedRooms, submitHandler } from './helpers';

const Rooms = () => {
  const { rooms, setRooms, filter, setFilter } = useContext(appContext);

  return (
    <div className="rooms">
      <h1> Rooms </h1>
      <form onSubmit={(e) => submitHandler(e, rooms)}>
        <label>
          {'Search: '}
          <input
            type="text"
            name="name"
            onChange={(e) => setFilter(e.target.value)}
          />
        </label>
        <h3> All Rooms:</h3>
        <div className="search-room-list">
          {getAllRooms(rooms, setRooms, filter, false)}
        </div>
        <h3> Selected Rooms:</h3>
        <div className="selected-rooms">
          {getCheckedRooms(rooms, setRooms, filter, true)}
        </div>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default Rooms;

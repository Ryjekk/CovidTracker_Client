import React, { useContext } from 'react';
import { appContext } from '../../App';
import './Rooms.css';
import { getAllRooms, getCheckedRooms, submitHandler } from './helpers';

const Rooms = () => {
  const { rooms, setRooms, filter, setFilter, users } = useContext(appContext);
  return (
    <div className="rooms">
      <div className="option_box">
        <form onSubmit={(e) => submitHandler(e, rooms, users)}>
          <label className="search_rooms">
            <p className="paragraph">Search:</p>
            <input
              className="input_field"
              type="text"
              onChange={(e) => setFilter(e.target.value)}
            />
          </label>
          <div className="heading_small">All Rooms</div>
          {getAllRooms(rooms, setRooms, filter)}
          <div className="primary_btn_black">
            <input
              type="submit"
              value={`Submit ${
                rooms.filter((room) => room.checked).length
              } rooms`}
            ></input>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Rooms;

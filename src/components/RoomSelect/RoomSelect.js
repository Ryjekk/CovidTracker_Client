import React from 'react';
import './RoomSelect.css';

const RoomSelect = (props) => {
  const { setRooms, rooms } = props;
  const { roomID, roomName, checked } = props.room;

  const checkHandler = () => {
    const newArr = rooms.map((room) => {
      if (room.roomID === roomID) {
        return {
          roomID: room.roomID,
          roomName: room.roomName,
          checked: !room.checked,
        };
      } else {
        return room;
      }
    });
    setRooms(newArr);
  };

  return (
    <div
      onClick={checkHandler}
      chosen={checked.toString()}
      className="room-select"
    >
      <label className="checkbox-label-id">{roomID} </label>
      <label className="checkbox-label-name">{roomName}</label>
      <input
        className="room-checkbox"
        id={roomID + '-select'}
        onChange={checkHandler}
        type="checkbox"
        checked={checked}
      ></input>
    </div>
  );
};

export default RoomSelect;

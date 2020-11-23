import React from 'react';
import './RoomSelect.css';

const RoomSelect = (props) => {
  const { setRooms, rooms } = props;
  const { roomId, roomName, checked } = props.room;

  const checkHandler = () => {
    const newArr = rooms.map((room) => {
      if (room.roomId === roomId) {
        return {
          roomId: room.roomId,
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
      <label className="checkbox-label-id">{roomId} </label>
      <label className="checkbox-label-name">{roomName}</label>
      <input
        className="room-checkbox"
        id={roomId + '-select'}
        onChange={checkHandler}
        type="checkbox"
        checked={checked}
      ></input>
    </div>
  );
};

export default RoomSelect;

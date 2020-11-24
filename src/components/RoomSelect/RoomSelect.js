import React from 'react';
import './RoomSelect.css';

const RoomSelect = (props) => {
  const { setRooms, rooms } = props;
  const { id, name, checked } = props.room;

  const checkHandler = () => {
    const newArr = rooms.map((room) => {
      if (room.id === id) {
        return {
          id: room.id,
          name: room.name,
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
      <label className="checkbox-label-id">{id} </label>
      <label className="checkbox-label-name">{name}</label>
      <input
        className="room-checkbox"
        id={id + '-select'}
        onChange={checkHandler}
        type="checkbox"
        checked={checked}
      ></input>
    </div>
  );
};

export default RoomSelect;

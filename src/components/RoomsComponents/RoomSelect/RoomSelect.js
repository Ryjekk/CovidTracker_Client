import React, { useContext } from 'react';
import { appContext } from '../../../App';
import './RoomSelect.css';
import addCircleDark from '../../../Assets/Icons/add_circle_24px_outlined.svg';
import removeCircleDark from '../../../Assets/Icons/remove_circle_24px_outlined.svg';
import addCircleLight from '../../../Assets/Icons/add_circle_outline_24px_outlined.svg';
import removeCircleLight from '../../../Assets/Icons/remove_circle_outline_24px_outlined.svg';

const RoomSelect = (props) => {
  const { setRooms, rooms } = useContext(appContext);
  const { roomId, name, checked, floor } = props.room;

  const checkHandler = () => {
    const newArr = rooms.map((room) => {
      if (room.roomId === roomId) {
        return {
          roomId: room.roomId,
          name: room.name,
          checked: !room.checked,
          floor: room.floor,
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
      <div className="paragraph">{roomId} </div>
      <div className="paragraph">{name} </div>
      <div className="paragraph">Floor: {floor} </div>
      <div className="status_symbol">
        <img className="add_circle" alt="add" src={addCircleLight}></img>
        <img
          className="remove_circle"
          alt="remove"
          src={removeCircleLight}
        ></img>
      </div>
    </div>
  );
};

export default RoomSelect;

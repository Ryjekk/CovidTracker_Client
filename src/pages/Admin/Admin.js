import React, { useContext, useState } from 'react';
import Modal from 'react-modal';
import { appContext } from '../../App';
import './Admin.css';
import { createMatchingRooms, submitHandler, filterCheck } from './helpers';
import AdminSelect from './AdminSelect/AdminSelect';
Modal.setAppElement('#root');

const Admin = () => {
  const { rooms, setRooms, filter, setFilter, users } = useContext(appContext);
  const [showModal, setShowModal] = useState(false);
  const [newRoomId, setNewRoomId] = useState('');
  const [newRoomName, setNewRoomName] = useState('');
  const [newRoomFloor, setNewRoomFloor] = useState('');
  const [matchingRooms, setMatchingRooms] = useState(
    createMatchingRooms(rooms)
  );
  console.log(newRoomId);

  const newRoomSubmitHandler = (e) => {
    e.preventDefault();
    const newRoom = [
      {
        roomId: newRoomId,
        name: newRoomName,
        floor: newRoomFloor,
      },
    ];
    console.log('Send POST to /rooms with body:');
    console.log(JSON.stringify(newRoom));
  };
  return (
    <div className="admin">
      <h1>ADMIN</h1>
      <div className="primary_btn_white" onClick={() => setShowModal(true)}>
        Add Room
      </div>
      <Modal isOpen={showModal} onRequestClose={() => setShowModal(false)}>
        <div className="heading_medium">Add new room</div>
        <form onSubmit={(e) => newRoomSubmitHandler(e)}>
          <label>
            Room Id:
            <input
              onChange={(e) => setNewRoomId(e.target.value)}
              type="text"
              name="roomId"
            />
          </label>
          <label>
            Room Name:
            <input
              onChange={(e) => setNewRoomName(e.target.value)}
              type="text"
              name="name"
            />
          </label>
          <label>
            Floor:
            <input
              onChange={(e) => setNewRoomFloor(e.target.value)}
              type="text"
              name="floor"
            />
          </label>
          <button className="primary_btn_white" type="submit" value="Submit">
            Submit
          </button>
        </form>
        <button
          className="primary_btn_white"
          onClick={() => setShowModal(false)}
        >
          Close
        </button>
      </Modal>
      <div className="option_box">
        <form onSubmit={(e) => submitHandler(e, matchingRooms, users)}>
          <label className="search_rooms">
            <p className="paragraph">Search:</p>
            <input
              className="input_field"
              type="text"
              onChange={(e) => setFilter(e.target.value)}
            />
            <button>Use QR-Code</button>
          </label>
          <div className="heading_small">All Rooms</div>
          {matchingRooms.map((room) => {
            if (filterCheck(room, filter)) {
              return (
                <div key={room.roomId} className="option">
                  <AdminSelect
                    key={room._id}
                    matchingRooms={matchingRooms}
                    setMatchingRooms={setMatchingRooms}
                    room={room}
                    rooms={rooms}
                    setRooms={setRooms}
                  ></AdminSelect>
                </div>
              );
            }
          })}
          <div className="primary_btn_black">
            <input
              type="submit"
              value={`Submit ${
                matchingRooms.filter((room) => room.edited === 'true').length
              } ${
                matchingRooms.filter((room) => room.edited === 'true')
                  .length === 1
                  ? 'change'
                  : 'changes'
              }`}
            ></input>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Admin;

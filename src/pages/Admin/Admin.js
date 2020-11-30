import React, { useContext, useState } from 'react';
import Modal from 'react-modal';
import { appContext } from '../../App';
import NewRoomModal from './NewRoomModal/NewRoomModal';
import './Admin.css';
import { createMatchingRooms, submitHandler, filterCheck } from './helpers';
import AdminSelect from './AdminSelect/AdminSelect';
Modal.setAppElement('#root');

const Admin = () => {
  const { rooms, setRooms, filter, setFilter, users } = useContext(appContext);
  const [showModal, setShowModal] = useState(false);
  const [matchingRooms, setMatchingRooms] = useState(
    createMatchingRooms(rooms)
  );
  return (
    <div className="admin">
      <NewRoomModal
        showModal={showModal}
        setShowModal={setShowModal}
        setFilter={setFilter}
        rooms={rooms}
        setRooms={setRooms}
        users={users}
      ></NewRoomModal>
      <h1>ADMIN</h1>
      <button className="primary_btn_white" onClick={() => setShowModal(true)}>
        Add Room
      </button>
      <div className="option_box">
        <form
          onSubmit={(e) => submitHandler(e, matchingRooms, users, setFilter)}
        >
          <label className="search_rooms">
            <p className="paragraph">Search:</p>
            <input
              className="input_field"
              type="text"
              onChange={(e) => setFilter(e.target.value)}
              value={filter}
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
                    users={users}
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

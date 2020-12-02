import React, { useContext, useState, useEffect } from 'react';
import Modal from 'react-modal';
import { appContext } from '../../App';
import NewRoomModal from './NewRoomModal/NewRoomModal';
import './Admin.css';
import { createMatchingRooms, submitHandler, filterCheck } from './helpers';
import AdminSelect from './AdminSelect/AdminSelect';
import Header from '../../Components/Header/Header';
import Banner from "../../Components/Banner";
Modal.setAppElement('#root');

const Admin = () => {
  const { rooms, setRooms, filter, setFilter, users } = useContext(appContext);
  const [showModal, setShowModal] = useState(false);
  const [matchingRooms, setMatchingRooms] = useState(
    createMatchingRooms(rooms)
  );

  useEffect(() => {
    setMatchingRooms(rooms);
  }, [rooms]);

  return (
    <>
    <Banner/>
    <Header/>
    <div className="admin">
      <NewRoomModal
        showModal={showModal}
        setShowModal={setShowModal}
        setFilter={setFilter}
        rooms={rooms}
        setRooms={setRooms}
        users={users}
        />
      <h1 className='heading_medium remove_margin_bottom'>Welcome to Admin page</h1>
      <button className="primary_btn_white btn_margin_bottom" onClick={() => setShowModal(true)}>
        Add Room
      </button>
      <div className="option_box">
        <form
          onSubmit={(e) =>
            submitHandler(e, matchingRooms, users, setFilter, setRooms)
          }
        >
        <input
          className='inputs_main'
          placeholder='Search Room'
          type="text"
          onChange={(e) => setFilter(e.target.value)}
          value={filter}
        />
          <div className="heading_small margin_admin_text">All Rooms</div>
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
                  />
                </div>
              );
            }
          })}
          <div className="btn_wrapper_center">
            <input
            className="primary_btn_black btn_medium"
            type="submit"
            value={`Submit ${
                matchingRooms.filter((room) => room.edited === 'true').length
            } ${
              matchingRooms.filter((room) => room.edited === 'true')
                .length === 1
                ? 'change'
                : 'changes'
            }`}
            />
          </div>
        </form>
      </div>
    </div>
    </>
  );
};

export default Admin;

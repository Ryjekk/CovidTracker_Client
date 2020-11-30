import React, { useState } from 'react';
import Modal from 'react-modal';
import './NewRoomModal.css';
import { newRoomSubmitHandler } from '../helpers';
Modal.setAppElement('#root');

const NewRoomModal = (props) => {
  const { showModal, setShowModal, setFilter, rooms, setRooms, users } = props;
  const [newRoomId, setNewRoomId] = useState('');
  const [newRoomName, setNewRoomName] = useState('');
  const [newRoomFloor, setNewRoomFloor] = useState('');

  return (
    <div className="new_room_modal">
      <Modal isOpen={showModal} onRequestClose={() => setShowModal(false)}>
        <div className="heading_medium">Add new room</div>
        <form
          onSubmit={(e) =>
            newRoomSubmitHandler(
              e,
              newRoomId,
              newRoomName,
              newRoomFloor,
              setFilter,
              setShowModal,
              setRooms,
              rooms,
              users
            )
          }
        >
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
    </div>
  );
};

export default NewRoomModal;

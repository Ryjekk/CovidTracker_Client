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
    <Modal isOpen={showModal} onRequestClose={() => setShowModal(false)}>
      <div className="wrapper_new_room">
        <h1 className="heading_medium">Add new room</h1>
        <div className='option_holder'>
          <form
              className="option_form"
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
            <input
              onChange={(e) => setNewRoomId(e.target.value)}
              type="text"
              name="roomId"
              className="inputs_main"
              placeholder="Room ID"
            />
            <input
              onChange={(e) => setNewRoomName(e.target.value)}
              type="text"
              name="name"
              className="inputs_main"
              placeholder="Room Name"
            />
            <input
              onChange={(e) => setNewRoomFloor(e.target.value)}
              type="text"
              name="floor"
              className="inputs_main"
              placeholder="Floor"
            />
            <div className='btn_box '>
              <button
                  className="primary_btn_white btn_small"
                  type="submit"
                  value="Submit"
              >
                Submit
              </button>
              <button
                  className="primary_btn_black btn_small"
                  onClick={() => setShowModal(false)}
              >
                Close
              </button>
            </div>
          </form>
        </div>
        <div className="btn_wrapper_center"></div>
      </div>
    </Modal>
  );
};

export default NewRoomModal;

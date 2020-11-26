import React, { useState } from 'react';
import Modal from 'react-modal';
import './AdminSelect.css';
import DeleteModal from '../../../Components/AdminComponents/DeleteModal/DeleteModal';
import pencil from '../../../Assets/Icons/mode_24px_outlined.svg';
import cross from '../../../Assets/Icons/clear_24px_outlined.svg';
import check from '../../../Assets/Icons/check_24px_outlined.svg';
import {
  editClickHandler,
  confirmClickHandler,
  deleteRoomHandler,
} from '../helpers';

Modal.setAppElement('#root');
const AdminSelect = (props) => {
  const { setMatchingRooms, matchingRooms, room, rooms, setRooms } = props;
  const { _id, roomId, name, floor, contentEditable } = room;
  const [thisId, setThisId] = useState(roomId);
  const [thisName, setThisName] = useState(name);
  const [thisFloor, setThisFloor] = useState(floor);
  const [showModal, setShowModal] = useState(false);
  return (
    <div className="admin-select" id={_id}>
      <div
        onInput={(e) => setThisId(e.target.innerText)}
        className="paragraph"
        contentEditable={contentEditable}
      >
        {roomId}
      </div>
      <div
        onInput={(e) => setThisName(e.target.innerText)}
        className="paragraph"
        contentEditable={contentEditable}
      >
        {name}
      </div>
      <div className="paragraph">Floor:</div>
      <div
        onInput={(e) => setThisFloor(e.target.innerText)}
        className="paragraph"
        contentEditable={contentEditable}
      >
        {floor}
      </div>
      <div className="status_symbol">
        <img
          onClick={(e) =>
            editClickHandler(roomId, matchingRooms, setMatchingRooms)
          }
          className="edit_pencil"
          alt="edit"
          editable={contentEditable === 'true' ? 'true' : 'false'}
          src={pencil}
        ></img>
        <img
          onClick={(e) =>
            confirmClickHandler(
              _id,
              roomId,
              thisId,
              thisName,
              thisFloor,
              rooms,
              matchingRooms,
              setMatchingRooms
            )
          }
          className="check"
          alt="check"
          editable={contentEditable === 'true' ? 'true' : 'false'}
          src={check}
        ></img>
        <img
          className="remove_cross"
          onClick={() => setShowModal(true)}
          alt="remove"
          editable={contentEditable === 'true' ? 'true' : 'false'}
          src={cross}
        ></img>
        <Modal isOpen={showModal}>
          <div className="heading_small">
            Are you sure you want to delete this room?
          </div>
          <div className="paragraph">This action is not reversable</div>
          <div
            className="primary_btn_white"
            onClick={() =>
              deleteRoomHandler(
                _id,
                rooms,
                setRooms,
                matchingRooms,
                setMatchingRooms
              )
            }
          >
            Yes, delete room
          </div>
          <div
            className="primary_btn_white"
            onClick={() => setShowModal(false)}
          >
            {' '}
            Close{' '}
          </div>
        </Modal>
      </div>
    </div>
  );
};

export default AdminSelect;

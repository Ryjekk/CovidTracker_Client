import React, { useState, useRef } from 'react';
import Modal from 'react-modal';
import ReactToPrint from 'react-to-print';
import './AdminSelect.css';
import pencil from '../../../Assets/Icons/mode_24px_outlined.svg';
import cross from '../../../Assets/Icons/clear_24px_outlined.svg';
import check from '../../../Assets/Icons/check_24px_outlined.svg';
import print from '../../../Assets/Icons/print_24px_outlined.svg';
import {
  editClickHandler,
  confirmClickHandler,
  deleteRoomHandler,
} from '../helpers';

import ComponentToPrint from '../ComponentToPrint/ComponentToPrint';

Modal.setAppElement('#root');
const AdminSelect = (props) => {
  const {
    setMatchingRooms,
    matchingRooms,
    room,
    rooms,
    setRooms,
    users,
  } = props;
  const { _id, roomId, name, floor, contentEditable } = room;
  const [thisId, setThisId] = useState(roomId);
  const [thisName, setThisName] = useState(name);
  const [thisFloor, setThisFloor] = useState(floor);
  const [showModal, setShowModal] = useState(false);
  const componentRef = useRef();

  return (
    <div className="option_main admin-select" id={_id}>
      <div
        suppressContentEditableWarning={true}
        onInput={(e) => setThisId(e.target.innerText)}
        className="paragraph"
        contentEditable={contentEditable}
      >
        <strong>ID:</strong>{roomId}
      </div>
      <div>
        <div
            suppressContentEditableWarning={true}
            onInput={(e) => setThisName(e.target.innerText)}
            className="paragraph"
            contentEditable={contentEditable}
        >
          {name}
        </div>
        <div
            suppressContentEditableWarning={true}
            onInput={(e) => setThisFloor(e.target.innerText)}
            className="paragraph floor"
            contentEditable={contentEditable}
        >
          Floor: {floor}
        </div>
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
        />
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
        />
        <img
          className="remove_cross"
          onClick={() => setShowModal(true)}
          alt="remove"
          editable={contentEditable === 'true' ? 'true' : 'false'}
          src={cross}
        />
        <div>
          <ReactToPrint
            trigger={() => (
              <img className="printer_img" src={print} alt="print"></img>
            )}
            content={() => componentRef.current}
          />
          <div className="qr_admin">
            <ComponentToPrint
              _id={_id}
              roomId={roomId}
              name={name}
              floor={floor}
              ref={componentRef}
            />
          </div>
        </div>
        <Modal isOpen={showModal} onRequestClose={() => setShowModal(false)}>
          <div className="heading_small">
            Are you sure you want to delete this room?
          </div>
          <div className="paragraph">This action is not reversable</div>
          <div
            className="primary_btn_white"
            onClick={() =>
              deleteRoomHandler(_id, rooms, users, setShowModal, setRooms)
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

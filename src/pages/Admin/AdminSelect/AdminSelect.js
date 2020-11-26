import React, { useState } from 'react';
import './AdminSelect.css';
import pencil from '../../../Assets/Icons/mode_24px_outlined.svg';
import cross from '../../../Assets/Icons/clear_24px_outlined.svg';
import check from '../../../Assets/Icons/check_24px_outlined.svg';
import { editClickHandler, confirmClickHandler } from '../helpers';
const AdminSelect = (props) => {
  const { setMatchingRooms, matchingRooms, room, rooms } = props;
  const { _id, roomId, name, floor, contentEditable } = room;
  const [thisId, setThisId] = useState(roomId);
  const [thisName, setThisName] = useState(name);
  const [thisFloor, setThisFloor] = useState(floor);
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
          alt="remove"
          editable={contentEditable === 'true' ? 'true' : 'false'}
          src={cross}
        ></img>
      </div>
    </div>
  );
};

export default AdminSelect;

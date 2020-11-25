import React, { useContext, useState } from 'react';
import { appContext } from '../../../App';
import './AdminSelect.css';
import pencil from '../../../Assets/Icons/mode_24px_outlined.svg';
import cross from '../../../Assets/Icons/clear_24px_outlined.svg';
import check from '../../../Assets/Icons/check_24px_outlined.svg';
import { editClickHandler } from '../helpers';
const AdminSelect = (props) => {
  const { setMatchingRooms, matchingRooms, room } = props;
  const { id, name, floor, contenteditable, edited } = room;
  const [thisId, setThisId] = useState(id);
  console.log({ thisId });
  return (
    <div
      // onClick={checkHandler}
      className="admin-select"
      id={id}
    >
      <div
        onInput={(e) => setThisId(e.target.innerText)}
        className="paragraph"
        contenteditable={contenteditable}
      >
        {thisId}{' '}
      </div>
      <div className="paragraph" contenteditable={contenteditable}>
        {name}{' '}
      </div>
      <div className="paragraph">Floor:</div>
      <div className="paragraph" contenteditable={contenteditable}>
        {' '}
        {floor}{' '}
      </div>
      <div className="status_symbol">
        <img
          onClick={(e) => editClickHandler(id, matchingRooms, setMatchingRooms)}
          className="edit_pencil"
          alt="edit"
          editable={contenteditable === 'true' ? 'true' : 'false'}
          src={pencil}
        ></img>
        <img
          onClick={(e) => editClickHandler(id, matchingRooms, setMatchingRooms)}
          className="check"
          alt="check"
          editable={contenteditable === 'true' ? 'true' : 'false'}
          src={check}
        ></img>
        <img className="remove_cross" alt="remove" src={cross}></img>
      </div>
    </div>
  );
};

export default AdminSelect;

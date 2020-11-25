import React, { useContext, useState, useEffect } from 'react';
import { appContext } from '../../App';
import './Admin.css';
import {
  getAllRooms,
  createMatchingRooms,
  getCheckedRooms,
  submitHandler,
  filterCheck,
} from './helpers';
import TestComponent from './TestComponent/TestComponent';
import AdminSelect from './AdminSelect/AdminSelect';

const Admin = () => {
  const { rooms, setRooms, filter, setFilter, users } = useContext(appContext);
  const [matchingRooms, setMatchingRooms] = useState(
    createMatchingRooms(rooms)
  );

  console.log(matchingRooms);

  return (
    <div className="admin">
      <h1>ADMIN</h1>
      <div className="option_box">
        <form onSubmit={(e) => submitHandler(e, rooms, matchingRooms, users)}>
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
                <div key={room.id} className="option">
                  <AdminSelect
                    key={room.id}
                    matchingRooms={matchingRooms}
                    setMatchingRooms={setMatchingRooms}
                    room={room}
                  ></AdminSelect>
                </div>
              );
            }
          })}
          {/* {getAllRooms(matchingRooms, setMatchingRooms, filter)} */}
          <div className="primary_btn_black">
            <input
              type="submit"
              value={`Submit ${
                rooms.filter((room) => room.checked).length
              } rooms`}
            ></input>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Admin;
// export const getAllRooms = (matchingRooms, setMatchingRooms, filter) => {
//   const allRooms = matchingRooms
//     .filter((el) => filterCheck(el, filter))
//     .map((room) => {
//       return (
//         <div key={room.id} className="option">
//           <AdminSelect
//             key={room.id}
//             matchingRooms={matchingRooms}
//             setMatchingRooms={setMatchingRooms}
//             room={room}
//           ></AdminSelect>
//         </div>
//       );
//     });
//   return allRooms;
// };

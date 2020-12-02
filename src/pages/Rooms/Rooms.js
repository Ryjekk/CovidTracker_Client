import React, { useContext } from 'react';
import { appContext } from '../../App';
import './Rooms.css';
import { getRooms, submitHandler } from './helpers';
import Header from '../../components/Header/Header';
import Banner from "../../components/Banner";

const Rooms = () => {
  const { rooms, setRooms, filter, setFilter, users, setUser } = useContext(
    appContext
  );
  return (
    <>
      <Banner/>
      <Header/>
      <div className='rooms'>
        <div>
          <h3 className='heading_medium remove_margin_bottom'>Submit Room</h3>
        </div>
        <p className='registerNow_text'>
          Use <a href='/reader'>QR-Code</a> or
        </p>
          <form
            onSubmit={e =>
              submitHandler(e, rooms, setRooms, users, setFilter, setUser)
            }
          >
            <input
              className='inputs_main'
              type='text'
              placeholder='Search Room'
              onChange={e => setFilter(e.target.value)}
              value={filter}
            />
            <div className='heading_small margin_room_text'>Previous Rooms</div>
            {getRooms(rooms, setRooms, filter)}
            <div className="btn_wrapper_center">
              <input
              type='submit'
              className="primary_btn_black btn_medium"
              value={`Submit ${
                  rooms.filter(room => room.checked).length
              } rooms`}
              />
            </div>
           </form>
        </div>
    </>
  );
};

export default Rooms;

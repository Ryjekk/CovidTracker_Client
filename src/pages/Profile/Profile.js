import React, { useContext, useState } from 'react';
import './Profile.css';
import { appContext } from '../../App';
import ReactModal from 'react-modal';

const Profile = () => {
  const { users, rooms } = useContext(appContext);
  const [modalOpen, setModal] = useState(false);
  return (
    <section className='profile'>
      <h1> Welcome {users.firstName} </h1>
      <article>
        <div>
          <p>
            Name: {users.firstName} {users.lastName}
          </p>
          <button className='primary_btn_black'>Click to edit name</button>
        </div>
        <div>
          <p>Email: {users.email}</p>
          <button className='primary_btn_black'>Click to edit email</button>
        </div>
        <div>
          <ReactModal isOpen={false}>
            <p>Hi, im modal</p>
          </ReactModal>
          <p>Rooms</p>
          {rooms
            .filter(room => room.checked)
            .map(visitedRoom => (
              <p key={visitedRoom.name}>
                Name: {visitedRoom.name}, floor: {visitedRoom.floor}
                <br />
                <button>Remove</button>
              </p>
            ))}
          <button className='primary_btn_black'>Click to edit rooms</button>
        </div>
      </article>
      <article>
        {users.inRisk ? (
          <h1>
            You have recently been in contact with an infected. Go quarantine
          </h1>
        ) : (
          <h1>You have no recent corona contacts!</h1>
        )}
      </article>
    </section>
  );
};

export default Profile;

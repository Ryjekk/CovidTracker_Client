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
          <p>Click to edit</p>
        </div>
        <div>
          <p>Email: {users.email}</p>
          <p>Click to edit</p>
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
          <p>Click to edit</p>
        </div>
      </article>
      <a href='/'>Click here to change details</a>
    </section>
  );
};

export default Profile;

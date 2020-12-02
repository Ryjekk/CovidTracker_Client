import React, { useContext, useState } from 'react';
import './Profile.css';
import { appContext } from '../../App';
import ReactModal from 'react-modal';
import Header from '../../Components/Header/Header';

const Profile = () => {
  const { users, rooms, setUser } = useContext(appContext);
  const [nameModalOpen, setNameModalOpen] = useState(false);
  const [emailModalOpen, setEmailModalOpen] = useState(false);
  const [emailInput, setEmailInput] = useState('');
  const [nameInput, setnameInput] = useState('');
  const modalStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      transform: 'translate(-50%, -50%)',
    },
  };

  return (
    <>
      <Header />
      <section className='profile'>
        <h1> Welcome {users.firstName} </h1>
        <article>
          <div>
            <p>
              Name: {users.firstName} {users.lastName}
            </p>
            <button
              className='primary_btn_black'
              onClick={() => {
                setNameModalOpen(true);
              }}
            >
              Edit name
            </button>
          </div>
          <div>
            <p>Email: {users.email}</p>
            <button
              className='primary_btn_black'
              onClick={() => {
                setEmailModalOpen(true);
              }}
            >
              Edit email
            </button>
          </div>

          <ReactModal
            isOpen={nameModalOpen}
            style={modalStyles}
            onRequestClose={() => setNameModalOpen(false)}
          >
            <input
              type='text'
              placeholder='Type updated name here'
              onChange={e => {
                setnameInput(e.target.value);
              }}
              value={nameInput}
            />
            <button
              onClick={() => {
                setNameModalOpen(false);
                setnameInput('');
              }}
            >
              Submit
            </button>
            <button
              onClick={() => {
                setNameModalOpen(false);
                setnameInput('');
              }}
            >
              Back to profile
            </button>
          </ReactModal>

          <ReactModal
            isOpen={emailModalOpen}
            style={modalStyles}
            onRequestClose={() => setEmailModalOpen(false)}
          >
            <input
              type='text'
              placeholder='Type updated email here'
              onChange={e => setEmailInput(e.target.value)}
              value={emailInput}
            />
            <button
              onClick={() => {
                setEmailModalOpen(false);
                setEmailInput('');
              }}
            >
              Submit
            </button>
            <button
              onClick={() => {
                setEmailModalOpen(false);
                setEmailInput('');
              }}
            >
              Back to profile
            </button>
          </ReactModal>
        </article>
        <article>
          {users.inRisk ? (
            <div>
              <h1>
                You have recently been in contact with an infected. Go
                quarantine.
              </h1>
              <p>The date of contact was: {users.dateOfContact}</p>
            </div>
          ) : (
            <h1>You have no recent corona contacts!</h1>
          )}
        </article>
      </section>
    </>
  );
};

export default Profile;

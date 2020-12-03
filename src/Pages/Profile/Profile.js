import React, { useContext, useState } from 'react';
import './Profile.css';
import { appContext } from '../../App';
import ReactModal from 'react-modal';
import Header from '../../Components/Header/Header';
import Banner from '../../Components/Banner';

const Profile = () => {
  const { users } = useContext(appContext);
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
      <Banner />
      <Header />
      <section className='profile'>
        <h3 class='heading_medium'>
          {' '}
          Welcome
          <span className='novid'> {users.firstName}</span>
        </h3>
        <div className='box_profile'>
          <div className='inputs_main profile_text_box'>
            <strong className='card_dashboard_strong'>Name</strong>:{' '}
            {users.firstName} {users.lastName}
          </div>
          <button
            className='primary_btn_black remove_margin_top'
            onClick={() => {
              setNameModalOpen(true);
            }}
          >
            Edit name
          </button>
        </div>
        <div className='box_profile'>
          <div className='inputs_main profile_text_box'>
            <strong className='card_dashboard_strong'>Email:</strong>{' '}
            {users.email}
          </div>
          <button
            className='primary_btn_black remove_margin_top'
            onClick={() => {
              setEmailModalOpen(true);
            }}
          >
            Edit email
          </button>
        </div>

        <div className='box_profile'>
          <div className='inputs_main profile_text_box'>
            <strong className='card_dashboard_strong'>Password:</strong> *******
          </div>
          <button
            className='primary_btn_black remove_margin_top'
            onClick={() => {
              setEmailModalOpen(true);
            }}
          >
            Edit password
          </button>
        </div>

        <ReactModal
          isOpen={nameModalOpen}
          style={modalStyles}
          onRequestClose={() => setNameModalOpen(false)}
        >
          <div className='modal_box'>
            <h1 className='heading_medium'>Update your name</h1>
            <input
              type='text'
              placeholder='Type updated name here'
              onChange={e => {
                setnameInput(e.target.value);
              }}
              value={nameInput}
              className='inputs_main'
            />
            <div className='btn_box'>
              <button
                className='primary_btn_white btn_small'
                onClick={() => {
                  setNameModalOpen(false);
                  setnameInput('');
                }}
              >
                Submit
              </button>
              <button
                className='primary_btn_black btn_small'
                onClick={() => {
                  setNameModalOpen(false);
                  setnameInput('');
                }}
              >
                Back to profile
              </button>
            </div>
          </div>
        </ReactModal>

        <ReactModal
          isOpen={emailModalOpen}
          style={modalStyles}
          onRequestClose={() => setEmailModalOpen(false)}
        >
          <div className='modal_box'>
            <h1 className='heading_medium'>Update email</h1>
            <input
              type='text'
              placeholder='Type updated email here'
              onChange={e => setEmailInput(e.target.value)}
              value={emailInput}
              className='inputs_main'
            />
            <div className='btn_box'>
              <button
                className='primary_btn_white btn_small'
                onClick={() => {
                  setEmailModalOpen(false);
                  setEmailInput('');
                }}
              >
                Submit
              </button>
              <button
                className='primary_btn_black btn_small'
                onClick={() => {
                  setEmailModalOpen(false);
                  setEmailInput('');
                }}
              >
                Back to profile
              </button>
            </div>
          </div>
        </ReactModal>

        <article>
          {users.inRisk ? (
            <div className='wrapper_inRisk'>
              <h1 className='text_inRisk heading_medium'>
                You have recently been in contact with someone who tested
                positive for COVID-19.
                <br />
                Go quarantine.
              </h1>
              <p>
                The date of contact was:{' '}
                <strong className='card_dashboard_strong'>
                  {users.dateOfContact}
                </strong>
              </p>
            </div>
          ) : (
            <h1 className='text_safe'>You have no recent corona contacts!</h1>
          )}
        </article>
      </section>
    </>
  );
};

export default Profile;

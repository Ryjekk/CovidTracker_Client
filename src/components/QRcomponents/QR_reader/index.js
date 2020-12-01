import React, { useState, useContext } from 'react';
import QrReader from 'react-qr-reader';
import { appContext } from '../../../App.js';
import { addRoomToUser } from './remote';
import { Redirect } from 'react-router-dom';
const QR_reader = () => {
  const [scanResult, setScanResult] = useState('');
  const [scanError, setScanError] = useState('');
  const [redirect, setRedirect] = useState(false);

  const { users } = useContext(appContext);

  const handleScan = async (data) => {
    if (data) {
      const date = new Date();
      const dateString = `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`;
      const time = `${date.getHours()}:${date.getMinutes()}`;
      const responseBody = {
        _id: users._id,
        rooms: [{ _id: data, date: dateString, time: time }],
      };
      const responseCode = await addRoomToUser(responseBody, users);
      if (responseCode === 200) {
        console.log('Success');
        setRedirect(true);
      }
    }
  };

  const handleError = (err) => {
    console.error(err);
    setScanError(err.message);
  };

  return (
    <div>
      {redirect ? <Redirect to="/dashboard"></Redirect> : null}
      <QrReader
        delay={300}
        onError={handleError}
        onScan={handleScan}
        style={{ width: '100%' }}
      />
      <p>{scanResult || scanError}</p>
    </div>
  );
};

export default QR_reader;

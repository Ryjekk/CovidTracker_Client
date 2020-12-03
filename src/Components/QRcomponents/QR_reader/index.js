import React, { useState, useContext } from 'react';
import QrReader from 'react-qr-reader';
import { appContext } from '../../../App.js';
import { addRoomToUser } from './remote';
import { Redirect } from 'react-router-dom';
const QR_reader = () => {
  //eslint-disable-next-line
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
    <div className="wrapper_qr">
      {redirect ? <Redirect to="/dashboard"></Redirect> : null}
      <div className="text_qr">
        <h3 className="heading_medium">QR reader</h3>
        <p>Scan the QR by one of the rooms at your company!</p>
      </div>
      <QrReader
        delay={300}
        onError={handleError}
        onScan={handleScan}
        style={{ width: '100%' }}
      />
      <p className="heading_medium">{scanResult || scanError}</p>
    </div>
  );
};

export default QR_reader;

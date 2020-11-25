import React, { useContext, useState, useEffect } from 'react';
import { appContext } from '../../../App';
import './TestComponent.css';
import {
  getAllRooms,
  createMatchingRooms,
  getCheckedRooms,
  submitHandler,
} from '../helpers';

const TestComponent = (props) => {
  const { rooms, setRooms, filter, setFilter, users } = useContext(appContext);
  const { matchingRooms, setMatchingRooms } = props;
  console.log(matchingRooms);

  return (
    <div className="test_component">
      <h1 onClick={() => setMatchingRooms(['yallala', 'yollolo'])}>
        TestComponent
      </h1>
    </div>
  );
};

export default TestComponent;

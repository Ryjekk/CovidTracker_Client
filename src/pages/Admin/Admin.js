import React from 'react';
import './Admin.css';

const admin = () => {
  return (
    <div className="admin">
      <h1> Admin </h1>
      <p className="search-list">
        Searchable list of all rooms (possibly reuse component from Rooms). With
        delete and edit button. (To edit id and name)
      </p>
      <div className="add-room">
        <button>Add room</button>
        <p>button extends form to add a new room?</p>
      </div>
    </div>
  );
};

export default admin;

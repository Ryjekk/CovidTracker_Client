import React from 'react';
import './XDevNav.css';
import { Link } from 'react-router-dom';
const XDevNav = () => {
  return (
    <div className="x-dev-nav">
      DEV-NAVBAR
      <ul className="link-list">
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/admin">
          <li>Admin</li>
        </Link>
        <Link to="/business">
          <li>Business</li>
        </Link>
        <Link to="/dashboard">
          <li>Dashboard</li>
        </Link>
        <Link to="/login">
          <li>Login</li>
        </Link>
        <Link to="/privacy">
          <li>Privacy</li>
        </Link>
        <Link to="/profile">
          <li>Profile</li>
        </Link>
        <Link to="/register">
          <li>Register</li>
        </Link>
        <Link to="/rooms">
          <li>Rooms</li>
        </Link>
      </ul>
    </div>
  );
};

export default XDevNav;

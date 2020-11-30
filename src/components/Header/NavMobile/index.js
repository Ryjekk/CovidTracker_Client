import React from 'react';
import './style.css'
import {Link} from "react-router-dom";

const NavMobile = () => {
  return (
      <div id="menuArea">
        <input className='checkbox_input' type="checkbox" id="menuToggle"/>

        <label htmlFor="menuToggle" className="menuOpen">
          <div className="open"></div>
        </label>

        <div className="menu menuEffects">
          <label htmlFor="menuToggle"/>
          <div className="menuContent">
            <Link to='/' className='link_navDesktop'>
              <p className="paragraph_small">Home</p>
            </Link>
            <Link to='/dashboard' className='link_navDesktop'>
              <p className="paragraph_small">dashboard</p>
            </Link>
            <Link to='/rooms' className='link_navDesktop'>
              <p className="paragraph_small">Rooms</p>
            </Link>
            <Link to='/privacy' className='link_navDesktop'>
              <p className="paragraph_small">Privacy</p>
            </Link>
            <Link to='/business' className='link_navDesktop'>
              <p className="paragraph_small">Business</p>
            </Link>
            <Link to='/profile' className='link_navDesktop'>
              <p className="paragraph_small">Profile</p>
            </Link>
            <Link to='/admin' className='link_navDesktop'>
              <p className="paragraph_small">Admin</p>
            </Link>
            <Link to='/creator' className='link_navDesktop'>
              <p className="paragraph_small">QR creator</p>
            </Link>
            <Link to='/reader' className='link_navDesktop'>
              <p className="paragraph_small">QR reader</p>
            </Link>
          </div>
        </div>
      </div>
  );
};

export default NavMobile;

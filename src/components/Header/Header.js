import React from 'react';
import logo from "../../Assets/logo.png";
import {Link} from "react-router-dom";
import './style.css'

const Header = () => {
  return (
      <div id="menuArea">
        <input className='checkbox_input' type="checkbox" id="menuToggle"/>
        <img src={logo} className='logo_img' alt='logo'/>
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
              <p className="paragraph_small">Dashboard</p>
            </Link>
            <Link to='/rooms' className='link_navDesktop'>
              <p className="paragraph_small">Rooms</p>
            </Link>
            <Link to='/profile' className='link_navDesktop'>
              <p className="paragraph_small">Profile</p>
            </Link>
            <Link to='/admin' className='link_navDesktop'>
              <p className="paragraph_small">Admin Panel</p>
            </Link>
            <Link to='/creator' className='link_navDesktop'>
              <p className="paragraph_small">QR Creator</p>
            </Link>
            <Link to='/reader' className='link_navDesktop'>
              <p className="paragraph_small">QR Reader</p>
            </Link>
            <Link to='/business' className='link_navDesktop'>
              <p className="paragraph_small">Business</p>
            </Link>
            <Link to='/privacy' className='link_navDesktop'>
              <p className="paragraph_small">Privacy and Policy</p>
            </Link>
          </div>
        </div>
      </div>
  );
};

export default Header;

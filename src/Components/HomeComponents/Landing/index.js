import React from 'react';
import '../style.css'
import vid from '../../../Assets/home/vid.mp4'
import { Link } from 'react-router-dom';

const Landing = () => {
  return (
      <div className="welcome_home">
        <div className="landing_text">
          <h1 className="heading_large">Welcome to Novid</h1>
          <p className='paragraph'>Use our special application to track COVID-19 risk in your company</p>
          <div className="wrapper_btn">
            <Link to="/login">
              <div className="primary_btn_black margin_right">
                LOGIN
              </div>
            </Link>
            <Link to='/registerAdmin'>
              <div className="primary_btn_black">
                REGISTER
              </div>
            </Link>
          </div>
        </div>
        <video className='videoTag' autoPlay loop muted>
          <source src={vid} type='video/mp4' />
        </video>
      </div>
  );
};

export default Landing;

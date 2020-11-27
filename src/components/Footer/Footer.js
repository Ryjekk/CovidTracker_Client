import React from 'react';
import './Footer.css';
import {Link} from "react-router-dom";

const Footer = () => {
  return (
    <div className="wrapper_footer">
      <div className="box_footer">
        <h3 className='heading_medium'>We are at</h3>
        <p className='paragraph'>Lokastigur 10</p>
        <p className='paragraph'>101 Oslo</p>
        <p className='paragraph'>Norway</p>
      </div>
      <div className="box_footer">
        <h3 className='heading_medium'>Contact</h3>
        <p className='paragraph'>+123 123 1234</p>
        <p className='paragraph'>+789 789 7890</p>
        <p className='paragraph'>xxx@xxx.com</p>
      </div>
      <div className="box_footer">
        <h3 className='heading_medium'>More about us</h3>
        <p className='paragraph'>ICON</p>
        <p className='paragraph'>ICON</p>
        <p className='paragraph'>ICON</p>
      </div>
      <div className="box_footer">
        <h3 className='heading_medium'>We care about your data</h3>
        <Link to='/privacy'>
          <p className='paragraph'>Privacy & Cookie Policy</p>
        </Link>
        <p className='paragraph'>Terms of service</p>
      </div>
    </div>
  );
};

export default Footer;

import React from 'react';
import './style.css'
import {Link} from "react-router-dom";

const NotFound = () => {
  return (
      <div className="wrapper_not">
        <span className='for_for'>404</span>
        <br/>
        Looks Like You Are Lost ?
        <div className="primary_btn_black">
          <Link to='/'>Home </Link>
        </div>
      </div>
  );
};

export default NotFound;

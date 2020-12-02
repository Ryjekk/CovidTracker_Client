import React, {useContext} from 'react';
import {appContext} from "../../App";
import './style.css'

const Banner = () => {
  const { users } = useContext(appContext);
  return (
    <>
      {users.inRisk ?
        (
          <div className='wrapper_banner_positive'>
             You have recently been in contact with an infected
           </div>
        ) : ''
      }
    </>
  );
};

export default Banner;

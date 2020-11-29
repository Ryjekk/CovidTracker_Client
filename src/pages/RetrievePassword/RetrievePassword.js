import React from 'react';

export default function RetrievePassword() {
  return (
    <div className='login'>
      <h1>Retrieve password</h1>
      <div className='box_input'>
        <input type='email' id='email' placeholder='Place your email here' className='inputs_main' />
      </div>
      <button type='submit' className='primary_btn_black'>Retrieve password</button>
    </div>
  );
}

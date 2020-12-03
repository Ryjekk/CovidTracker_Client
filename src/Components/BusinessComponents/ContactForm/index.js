import React from 'react';
import '../style.css';

const ContactForm = () => {
  return (
      <div className="form_business">
        <div className='wrapper_map'>
          <iframe width="100%" height="100%" frameBorder="0" title="map" marginHeight="0" marginWidth="0" scrolling="no" src="https://maps.google.com/maps?q=oslo&t=&z=13&ie=UTF8&iwloc=&output=embed" ></iframe>
        </div>
        <div className='wrapper_form'>
          <div className="form_text">
            <h5 className="heading_medium">
              Slide to in our DM's
            </h5>
            <p>
              Contact us to get access to <span className='novid'>Novid</span> platform and find the solution to save your business.
              <br/>
              Book a meeting now.
            </p>
          </div>
          <form className="form">
            <label className='label'></label>
            <input className='business_inputs' placeholder="Name*" required/>

            <label className='label'></label>
            <input className='business_inputs' placeholder='Email*' required/>

            <label className='label'></label>
            <textarea className='business_inputs' placeholder='Message*' required/>
            <input type="submit" value="Submit" className="business_button"/>
          </form>
        </div>
      </div>
  );
};

export default ContactForm;

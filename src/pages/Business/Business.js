import React from 'react';
import './Business.css';
import Welcome from '../../components/BusinessComponents/Welcome';
import About from '../../components/BusinessComponents/About';
import Companies from '../../components/BusinessComponents/Companies';
import ContactForm from '../../components/BusinessComponents/ContactForm';
import Header from '../../components/Header/Header';

const Business = () => {
  return (
    <>
      <Header />
      <div className='wrapper_business'>
        <Welcome />
        <About />
        <Companies />
        <ContactForm />
      </div>
    </>
  );
};

export default Business;

import React from 'react';
import './Business.css';
import Welcome from "../../Components/BusinessComponents/Welcome";
import About from "../../Components/BusinessComponents/About";
import Companies from "../../Components/BusinessComponents/Companies";

const Business = () => {
  return (
    <div className="wrapper_business">
      <Welcome/>
      <About/>
      <Companies/>
      <h1>HERE WILL BE CONTACT FORM</h1>
    </div>
  );
};

export default Business;

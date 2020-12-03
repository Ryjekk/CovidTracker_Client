import React from 'react';
import '../style.css';
import step1 from '../../../Assets/home/step1.jpg';
import step2 from '../../../Assets/home/step2.jpeg';
import step3 from '../../../Assets/home/step3.jpeg';

const Instruction = () => {
  return (
    //TODO WE CAN LOOP THROUGH TO DO LESS CODE - API WITH TEXT
    <div className="wrapper_instruction">
      <div className="step_instruction">
        <img className="step_img" alt="step1" src={step1} />
        <h4 className="heading_small">Sign In</h4>
        <p className="paragraph">
          First, create your <span className="novid">Novid</span> profile to get
          started tracking your amazing paths in your company!
        </p>
      </div>
      <div className="step_instruction">
        <img className="step_img" alt="step2" src={step2} />
        <h4 className="heading_small">Scan or add Visited rooms</h4>
        <p className="paragraph">
          Simply scan or add the rooms you visit, and we will take care of
          saving your paths.
        </p>
      </div>
      <div className="step_instruction">
        <img className="step_img" alt="step3" src={step3} />
        <h4 className="heading_small">Get informed</h4>
        <p className="paragraph">
          Just like that! The company will inform you if you have been exposed
          to a COVID-19 contact. We will also provide you with all necessary
          information
        </p>
      </div>
    </div>
  );
};

export default Instruction;

import React from 'react';
import './Home.css';
import Landing from "../../Components/HomeComponents/Landing";
import Story from "../../Components/HomeComponents/Story";
import Instruction from "../../Components/HomeComponents/Instruction";

const Home = () => {
  return (
    <div className="wrapper_home">
      <Landing/>
      <Story/>
      <Instruction/>
    </div>
  );
};

export default Home;

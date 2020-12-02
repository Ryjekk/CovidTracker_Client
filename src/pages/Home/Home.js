import React from 'react';
import './Home.css';
import Landing from "../../components/HomeComponents/Landing";
import Story from "../../components/HomeComponents/Story";
import Instruction from "../../components/HomeComponents/Instruction";

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

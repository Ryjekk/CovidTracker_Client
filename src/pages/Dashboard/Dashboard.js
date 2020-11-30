import React from 'react';
import './Dashboard.css';
import Header from "../../Components/Header/Header";

const Dashboard = () => {
  return (
      <>
        <Header/>
        <div className="dashboard">
          <h1> Dashboard </h1>
          <p>
            List of rooms visited today with the opportunity to delete and to view
            other days. (Arrow back to yesterday)
          </p>
        </div>
      </>
  );
};

export default Dashboard;

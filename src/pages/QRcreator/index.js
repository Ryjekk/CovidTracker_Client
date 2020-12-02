import React from 'react';
import QR_creator from '../../Components/QRcomponents/QR_creator';
import Header from '../../Components/Header/Header';
import './style.css';
import Banner from "../../Components/Banner";

const QRcreator = () => {
  return (
    <>
      <Banner/>
      <Header />
      <QR_creator />
    </>
  );
};

export default QRcreator;

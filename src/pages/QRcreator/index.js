import React from 'react';
import QR_creator from '../../components/QRcomponents/QR_creator';
import Header from '../../components/Header/Header';
import './style.css';
import Banner from "../../components/Banner";

const QRcreator = () => {
  return (
    <>
      <Banner/>
      <Header />
      {/*eslint-disable-next-line*/}
      <QR_creator />
    </>
  );
};

export default QRcreator;

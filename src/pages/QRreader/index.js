import React from 'react';
import QR_reader from "../../Components/QRcomponents/QR_reader";
import Header from "../../Components/Header/Header";
import Banner from "../../Components/Banner";

const QRreader = () => {
  return (
    <>
      <Banner/>
      <Header/>
      {/*eslint-disable-next-line*/}
      <QR_reader/>
    </>
  )
};

export default QRreader;

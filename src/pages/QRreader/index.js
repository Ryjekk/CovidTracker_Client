import React from 'react';
import QR_reader from "../../components/QRcomponents/QR_reader";
import Header from "../../components/Header/Header";
import Banner from "../../components/Banner";

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

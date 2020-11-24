import React, {useState} from 'react';
import QR_form from "../QR_form";
var QRCode = require('qrcode.react');

const QR_creator = () => {
  const [dataQR, setDataQR] = useState({});
  const getValues = data => setDataQR(data)


  console.log(dataQR)
  return (
    <div style={{margin: '100px'}}>
      <QR_form getValues={getValues}/>
      <QRCode
          value={dataQR.valueQR || 'test'}
          size={dataQR.sizeQR}
          level={dataQR.hashQR}
          fgColor={dataQR.fgQR}
          bgColor={dataQR.bgQR}
      />
    </div>
  );
};

export default QR_creator;

// https://blog.qrstuff.com/2011/12/14/qr-code-error-correction#:~:text=The%20lower%20the%20error%20correction,ruggedness%20for%20general%20marketing%20use.


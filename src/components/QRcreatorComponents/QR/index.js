import React, {useState} from 'react';
import QRform from "../QRform";
var QRCode = require('qrcode.react');

const QR = () => {
  const [dataQR, setDataQR] = useState({});
  const getValues = data => setDataQR(data)


  console.log(dataQR)
  return (
    <div style={{margin: '100px'}}>
      <QRform getValues={getValues}/>
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

export default QR;

// https://blog.qrstuff.com/2011/12/14/qr-code-error-correction#:~:text=The%20lower%20the%20error%20correction,ruggedness%20for%20general%20marketing%20use.


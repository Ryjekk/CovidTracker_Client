import React, {useState} from 'react';
import QR_form from "../QR_form";
import './style.css'
const QRCode = require('qrcode.react');


const QR_creator = () => {
  const [dataQR, setDataQR] = useState({});
  const getValues = data => setDataQR(data)

  // TODO delete
  console.log(dataQR)

  return (
    <div className='wrapper_qr'>
      <div className='text_qr'>
        <h3 className='heading_medium'>QR creator</h3>
        <p>This is a Qr creator, it will help you to mark all interiors in your company</p>
        <div>
          Explanation:
            <ul>
              <li>
                Value - should be name of the room
                <br/>
                [please provide value in format: floor': "1", "name": "kitchen"]
              </li>
              <li>
                Error Level - should be set on L or M
              </li>
              <li>
                Size of QR - size of image in pixels
              </li>
            </ul>
        </div>
      </div>
      <QR_form getValues={getValues}/>
      <QRCode
          value={dataQR.valueQR || 'test'}
          size={dataQR.sizeQR}
          level={dataQR.hashQR}
      />
    </div>
  );
};

export default QR_creator;

// https://blog.qrstuff.com/2011/12/14/qr-code-error-correction#:~:text=The%20lower%20the%20error%20correction,ruggedness%20for%20general%20marketing%20use.


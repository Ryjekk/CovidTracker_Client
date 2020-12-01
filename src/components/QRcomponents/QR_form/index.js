import React, {useState} from 'react';

const QR_form = props => {
  const {getValues} = props
  const [valueQR, setValueQR] = useState('test');
  const [hashQR, setHashQR] = useState('L');
  const [sizeQR, setSizeQR] = useState(128);

  const selectedValues = {
    valueQR,
    hashQR,
    sizeQR
  };

  const passQRvalue = () => getValues(selectedValues);

  return (
    <div>
      {/*value*/}
      <div>
        <label>
          Value:
          <textarea className='inputs_qr' onChange={e => setValueQR(e.target.value)} placeholder={valueQR}/>
        </label>
      </div>
      {/*hashed*/}
      <div>
        <label>
          Error Level:
          <select className='inputs_qr' onChange={e => setHashQR(e.target.value)}>
            <option value="L">L</option>
            <option value="M">M</option>
            <option value="Q">Q</option>
            <option value="H">H</option>
          </select>
        </label>
      </div>
      {/*size*/}
      <div>
        <label>
          Size of QR in pixels:
          <input type="number" className='inputs_qr' onChange={e => setSizeQR(parseInt(e.target.value))} placeholder={sizeQR}/>
        </label>
      </div>
      {/*btn*/}
      <div
        className='primary_btn_black qr_btn'
        onClick={() => passQRvalue()}>
          SET IT UP
      </div>
    </div>
  );
};

export default QR_form;

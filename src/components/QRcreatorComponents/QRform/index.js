import React, {useState} from 'react';

const QRform = props => {
  const {getValues} = props
  const [valueQR, setValueQR] = useState('test');
  const [hashQR, setHashQR] = useState('L');
  const [sizeQR, setSizeQR] = useState(128);
  const [bgQR, setBgQR] = useState('#272727');
  const [fgQR, setFgQR] = useState('#F3F3F3');

  const selectedValues = {
    valueQR,
    hashQR,
    sizeQR,
    bgQR,
    fgQR
  };

  const passQRvalue = () => getValues(selectedValues);

  return (
    <div>
      {/*value*/}
      <div>
        <label>
          Value:
          <textarea onChange={e => setValueQR(e.target.value)} placeholder={valueQR}/>
        </label>
      </div>
      {/*hashed*/}
      <div>
        <label>
          Error Level:
          <select onChange={e => setHashQR(e.target.value)}>
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
          <input type="number" onChange={e => setSizeQR(parseInt(e.target.value))} placeholder={sizeQR}/>
        </label>
      </div>
      {/*bg*/}
      <div>
        <label>
          Background Color:
          <input type="color" onChange={e => setBgQR(e.target.value)}/>
        </label>
      </div>
      {/*fg*/}
      <div>
        <label>
          Foreground Color:
          <input type="color" onChange={e => setFgQR(e.target.value)}/>
        </label>
      </div>
      {/*btn*/}
      <div
        style={{
          border: '1px solid black',
          cursor: 'pointer',
          display: 'inline-block',
          padding: '10px',
          margin: '20px'}}
        onClick={() => passQRvalue()}>
          SET IT UP
      </div>
    </div>
  );
};

export default QRform;

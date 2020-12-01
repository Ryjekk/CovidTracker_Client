import React, {useState} from 'react';
import QrReader from 'react-qr-reader'

const QR_reader = () => {
  const [scanResult, setScanResult] = useState('')
  const [scanError, setScanError] = useState('')

  const handleScan = data => {
    // TODO delete
    console.log(data)
    if (data) {
      setScanResult(data)
    }
  }
  const handleError = err => {
    console.error(err)
    setScanError(err.message)
  }

  return (
    <div className='wrapper_qr'>
      <div className='text_qr'>
        <h3 className='heading_medium'>QR reader</h3>
        <p>This is a Qr reader, it will allows you to scan QR code inside your company</p>
      </div>
      <QrReader
          delay={300}
          onError={handleError}
          onScan={handleScan}
          style={{ width: '100%' }}
      />
      <p className="heading_medium">{scanResult || scanError}</p>
    </div>
  );
};

export default QR_reader;
